<script setup>
import BaseInput from '@/components/base/fields/input/BaseInput.vue';
import BaseRadio from '@/components/base/fields/checkbox-radio/BaseRadio.vue';
import { useVuelidate } from '@vuelidate/core';
import { vMaska } from 'maska/vue';
import { required, email, minLength, maxLength } from '@/validations/orderForm.js';
import { computed, reactive, ref, watch, defineExpose } from 'vue';

const vMaskaDirective = vMaska;

const emit = defineEmits(['submit']);

const requiredPhone = (value) => {
  if (!value) return false;
  const phoneRegex = /^\+38 \(0\d{2}\) \d{2}-\d{2}-\d{3}$/;
  return phoneRegex.test(value) || 'Введіть коректний номер телефону';
};

const form = reactive({
  name: '',
  email: '',
  phone: '',
  addressCity: '',
  addressStreet: '',
  addressHouse: '',
  contactType: 'phone',
  paymentType: 'online',
  pending: false,
});

const customValidators = {
  ukrainianName: {
    validator: (value) => {
      if (!value) return true;
      const ukrainianNameRegex = /^[А-ЯІЇЄҐа-яіїєґ'\s\-]{2,}$/;
      return ukrainianNameRegex.test(value);
    },
    message: "Введіть коректне ім'я українською мовою",
  },
  ukrainianCity: {
    validator: (value) => {
      if (!value) return true;
      const ukrainianCityRegex = /^[А-ЯІЇЄҐа-яіїєґ'\s\-]{2,}$/;
      return ukrainianCityRegex.test(value);
    },
    message: 'Введіть назву міста українською мовою',
  },
  ukrainianStreet: {
    validator: (value) => {
      if (!value) return true;
      const ukrainianStreetRegex = /^[А-ЯІЇЄҐа-яіїєґ0-9'\s\-\.\/]{2,}$/;
      return ukrainianStreetRegex.test(value);
    },
    message: 'Введіть назву вулиці українською мовою',
  },
  houseNumber: {
    validator: (value) => {
      if (!value) return true;
      const houseRegex = /^[0-9]+[А-ЯІЇЄҐа-яіїєґ]?(\s*\/\s*[0-9]+)?$/;
      return houseRegex.test(value);
    },
    message: 'Введіть коректний номер будинку (наприклад: 15, 15А, 15/2)',
  },
};

const rules = computed(() => ({
  name: {
    required,
    minLength: minLength(2),
    maxLength: maxLength(50),
    ukrainianName: customValidators.ukrainianName.validator,
  },
  email: {
    required,
    email,
    maxLength: maxLength(100),
  },
  phone: {
    required,
    requiredPhone,
  },
  addressCity: {
    required,
    minLength: minLength(2),
    maxLength: maxLength(30),
    ukrainianCity: customValidators.ukrainianCity.validator,
  },
  addressStreet: {
    required,
    minLength: minLength(2),
    maxLength: maxLength(100),
    ukrainianStreet: customValidators.ukrainianStreet.validator,
  },
  addressHouse: {
    required,
    maxLength: maxLength(10),
    houseNumber: customValidators.houseNumber.validator,
  },
  contactType: {
    required,
  },
  paymentType: {
    required,
  },
}));

const v = useVuelidate(rules, form);

const isFormTouched = ref(false);

const successTimeouts = reactive({});

const successShown = reactive({});

watch(
  form,
  () => {
    if (isFormTouched.value) {
      v.value.$touch();
    }
  },
  { deep: true },
);

const getError = (prop) => {
  const field = v.value[prop];
  if (!field.$dirty) return '';
  const error = field.$errors[0];
  if (!error) return '';
  if (error.$validator in customValidators) {
    return customValidators[error.$validator].message;
  }
  return error.$message || '';
};

const getFieldValidationClass = (prop) => {
  const field = v.value[prop];
  if (!field.$dirty) return '';

  if (field.$invalid) {
    successShown[prop] = false;
    if (successTimeouts[prop]) {
      clearTimeout(successTimeouts[prop]);
      delete successTimeouts[prop];
    }
    return 'error';
  }

  if (!successShown[prop]) {
    successShown[prop] = true;

    if (!successTimeouts[prop]) {
      successTimeouts[prop] = setTimeout(() => {
        delete successTimeouts[prop];
        field.$reset();
      }, 1000);
    }
    return 'success';
  }

  return '';
};

const submitForm = async () => {
  isFormTouched.value = true;
  v.value.$touch();

  if (form.pending) return;

  if (await v.value.$validate()) {
    form.pending = true;

    const payload = {
      personalData: {
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        phone: form.phone.trim(),
      },
      deliveryAddress: {
        city: form.addressCity.trim(),
        street: form.addressStreet.trim(),
        house: form.addressHouse.trim(),
      },
      contactPreference: form.contactType,
      paymentType: form.paymentType,
      submittedAt: new Date().toISOString(),
    };

    emit('submit', payload);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log('Заказ успешно отправлен');
      resetForm();
    } catch (error) {
      console.error('Ошибка при отправке:', error);
      form.pending = false;
    }
  }
};

const resetForm = () => {
  Object.keys(form).forEach((key) => {
    if (key === 'contactType') {
      form[key] = 'phone';
    } else if (key === 'paymentType') {
      form[key] = 'online';
    } else if (typeof form[key] === 'boolean') {
      form[key] = false;
    } else {
      form[key] = '';
    }
  });

  v.value.$reset();
  isFormTouched.value = false;

  Object.keys(successTimeouts).forEach((key) => {
    clearTimeout(successTimeouts[key]);
    delete successTimeouts[key];
  });

  Object.keys(successShown).forEach((key) => {
    delete successShown[key];
  });
};

const setPaymentType = (value) => {
  form.paymentType = value;
};

const hasErrors = computed(() => v.value.$invalid);
const errorsCount = computed(() => v.value.$errors.length);
const completedFieldsCount = computed(() => {
  const requiredFields = [
    'name',
    'email',
    'phone',
    'addressCity',
    'addressStreet',
    'addressHouse',
    'paymentType',
  ];
  return requiredFields.filter((field) => form[field] && !v.value[field].$invalid).length;
});
const totalRequiredFields = 7;
const formProgress = computed(() =>
  Math.round((completedFieldsCount.value / totalRequiredFields) * 100),
);

const clearField = (fieldName) => {
  form[fieldName] = '';
  v.value[fieldName].$reset();
  if (successTimeouts[fieldName]) {
    clearTimeout(successTimeouts[fieldName]);
    delete successTimeouts[fieldName];
  }
  successShown[fieldName] = false;
};

defineExpose({
  submitForm,
  pending: computed(() => form.pending),
  hasErrors,
  formProgress,
  paymentType: computed(() => form.paymentType),
  setPaymentType,
});
</script>

<template>
  <form class="order__form" @submit.prevent="submitForm">
    <div class="order__form-grid">
      <div class="title-4 order__form-title">Персональні дані</div>

      <BaseInput
        v-model.trim="form.name"
        :error="getError('name')"
        :class="getFieldValidationClass('name')"
        id="full-name"
        label="Ваше прізвище та ім'я *"
        additional-class="col-span-full"
        autocomplete="name"
      />

      <BaseInput
        v-model.trim="form.email"
        :error="getError('email')"
        :class="getFieldValidationClass('email')"
        id="email"
        label="Адреса електронної пошти *"
        placeholder="example@email.com"
        type="email"
        autocomplete="email"
      />

      <BaseInput
        v-model="form.phone"
        :error="getError('phone')"
        :class="getFieldValidationClass('phone')"
        v-maska-directive="'+38 (0##) ##-##-###'"
        id="phone"
        label="Ваш номер телефону *"
        placeholder="+38 (063) 66-66-666"
        type="tel"
        autocomplete="tel"
      />

      <div class="title-4 order__form-title">Адреса доставки</div>

      <BaseInput
        v-model.trim="form.addressCity"
        :error="getError('addressCity')"
        :class="getFieldValidationClass('addressCity')"
        id="city"
        label="Місто *"
        additional-class="col-span-full"
        autocomplete="address-level2"
      />

      <div class="order__form-grid-second col-span-full">
        <BaseInput
          v-model.trim="form.addressStreet"
          :error="getError('addressStreet')"
          :class="getFieldValidationClass('addressStreet')"
          id="street"
          label="Вулиця"
          additional-class="col-span-2"
          autocomplete="address-line1"
        />

        <BaseInput
          v-model.trim="form.addressHouse"
          :error="getError('addressHouse')"
          :class="getFieldValidationClass('addressHouse')"
          id="house"
          label="Будинок *"
        />

        <BaseInput id="entrance" label="Під'їзд" type="number" min="1" max="999" />

        <BaseInput id="floor" label="Поверх" type="number" min="1" max="999" />

        <BaseInput id="apartment" label="Квартира" />
      </div>

      <div class="title-4 order__form-title">Як контактувати?</div>
      <div class="order__form-checkboxes col-span-full">
        <BaseRadio
          v-model="form.contactType"
          :checked="form.contactType === 'phone'"
          name="contact-type"
          value="phone"
          >Зателефонувати</BaseRadio
        >
        <BaseRadio
          v-model="form.contactType"
          :checked="form.contactType === 'viber'"
          name="contact-type"
          value="viber"
          >Viber</BaseRadio
        >
        <BaseRadio
          v-model="form.contactType"
          :checked="form.contactType === 'telegram'"
          name="contact-type"
          value="telegram"
          >Telegram</BaseRadio
        >
      </div>
      <div v-if="getError('contactType')" class="error-message col-span-full">
        {{ getError('contactType') }}
      </div>
    </div>
  </form>
</template>

<style scoped>
/*:deep(.error) {
  border-color: #dc3545 !important;
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}

:deep(.success) {
  border-color: #28a745 !important;
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
}*/
</style>
