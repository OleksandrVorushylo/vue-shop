<script setup>
import { ref, reactive, computed, watch } from 'vue';
import { useNotification } from '@/composables/useNotification.js';
import { useAuthStore } from '@/stores/auth.store';
import { useVuelidate } from '@vuelidate/core';
import { vMaska } from 'maska/vue';
import BaseInput from '@/components/base/fields/input/BaseInput.vue';
import BaseButton from '@/components/base/buttons/button/BaseButton.vue';
import router from '@/router/index.js';
import { email, maxLength, minLength, required, sameAs } from '@/validations/registerForm.js';
const { successNotification, errorNotification } = useNotification();

const vMaskaDirective = vMaska;

const props = defineProps({
  isActive: Boolean,
});

const authStore = useAuthStore();

const requiredPhone = (value) => {
  if (!value) return false;
  const phoneRegex = /^\+38 \(0\d{2}\) \d{2}-\d{2}-\d{3}$/;
  return phoneRegex.test(value) || 'Введіть коректний номер телефону';
};

const form = reactive({
  fullName: '',
  phone: '',
  email: '',
  password: '',
  confirmPassword: '',
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
  strongPassword: {
    validator: (value) => {
      if (!value) return true;
      const strongPasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,}$/;
      return strongPasswordRegex.test(value);
    },
    message: 'Пароль повинен містити мінімум 6 символів, букви та цифри',
  },
};

const rules = computed(() => ({
  fullName: {
    required,
    minLength: minLength(2),
    maxLength: maxLength(50),
    ukrainianName: customValidators.ukrainianName.validator,
  },
  phone: {
    required,
    requiredPhone,
  },
  email: {
    required,
    email,
    maxLength: maxLength(100),
  },
  password: {
    required,
    minLength: minLength(6),
    maxLength: maxLength(50),
    strongPassword: customValidators.strongPassword.validator,
  },
  confirmPassword: {
    required,
    sameAs: sameAs(form.password),
  },
}));

const v = useVuelidate(rules, form);

const isFormTouched = ref(false);
const errorMsg = ref('');
const successMsg = ref('');

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

const handleRegister = async (e) => {
  e.preventDefault();
  isFormTouched.value = true;
  v.value.$touch();

  errorMsg.value = '';
  successMsg.value = '';

  if (await v.value.$validate()) {
    try {
      await authStore.register({
        fullName: form.fullName.trim(),
        phone: form.phone.trim(),
        email: form.email.trim().toLowerCase(),
        password: form.password,
      });

      successMsg.value = 'Реєстрація успішна! Перевірте свою пошту для підтвердження.';
      await router.push('/auth-confirm');

      setTimeout(() => {
        resetForm();
      }, 2000);
    } catch (err) {
      // Firebase коди помилок
      if (err.code === 'auth/email-already-in-use') {
        errorMsg.value = 'Ця електронна адреса вже використовується.';
        errorNotification('Ця електронна адреса вже використовується.');
      } else if (err.code === 'auth/invalid-email') {
        errorMsg.value = 'Некоректна електронна адреса.';
        errorNotification('Некоректна електронна адреса.');
      } else if (err.code === 'auth/weak-password') {
        errorMsg.value = 'Пароль повинен містити щонайменше 6 символів.';
        errorNotification('Пароль повинен містити щонайменше 6 символів.');
      } else {
        errorMsg.value = 'Помилка реєстрації. Спробуйте ще раз.';
        errorNotification('Помилка реєстрації. Спробуйте ще раз.');
      }
    }
  }
};

const handleGoogle = async () => {
  errorMsg.value = '';
  successMsg.value = '';
  try {
    await authStore.loginWithGoogle();
    successMsg.value = 'Ви успішно увійшли через Google!';
    successNotification('Ви успішно увійшли через Google!');
    await router.push('/profile');
  } catch (err) {
    errorMsg.value = 'Помилка авторизації через Google.';
    errorNotification('Помилка авторизації через Google.');
  }
};

const resetForm = () => {
  Object.keys(form).forEach((key) => {
    form[key] = '';
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
</script>

<template>
  <form
    class="authorization-form"
    :class="{ active: props.isActive }"
    id="form_register"
    @submit="handleRegister"
  >
    <BaseInput
      v-model.trim="form.fullName"
      :error="getError('fullName')"
      :class="getFieldValidationClass('fullName')"
      id="register-full-name"
      label="Ваше прізвище та ім'я *"
      autocomplete="name"
    />

    <BaseInput
      v-model="form.phone"
      :error="getError('phone')"
      :class="getFieldValidationClass('phone')"
      v-maska-directive="'+38 (0##) ##-##-###'"
      id="register-phone"
      label="Телефон *"
      placeholder="+38 (063) 66-66-666"
      type="tel"
      autocomplete="tel"
    />

    <BaseInput
      v-model.trim="form.email"
      :error="getError('email')"
      :class="getFieldValidationClass('email')"
      id="register-email"
      label="Адреса електронної пошти *"
      placeholder="example@email.com"
      type="email"
      autocomplete="email"
    />

    <BaseInput
      v-model="form.password"
      :error="getError('password')"
      :class="getFieldValidationClass('password')"
      id="register-password"
      label="Пароль *"
      placeholder="********"
      type="password"
      autocomplete="new-password"
      variant="password"
    />

    <BaseInput
      v-model="form.confirmPassword"
      :error="getError('confirmPassword')"
      :class="getFieldValidationClass('confirmPassword')"
      id="register-confirm-password"
      label="Повторіть пароль *"
      placeholder="********"
      type="password"
      autocomplete="new-password"
      variant="password"
    />

    <p class="authorization-form__personal-data">
      Натискаючи на кнопку ви автоматично даєте згоду на обробку
      <a href="#" target="_blank">персональних данних</a>
    </p>

    <BaseButton
      type="submit"
      :disabled="authStore.loading"
      additional-class="authorization-form__submit"
    >
      {{ authStore.loading ? 'Реєстрація...' : 'Зареєструватися' }}
    </BaseButton>

    <div class="authorization-form__or">Або увійдіть через</div>

    <BaseButton
      variant="second"
      additional-class="authorization-form__google"
      @click.prevent="handleGoogle"
      :disabled="authStore.loading"
    >
      Вхід через Google
      <i class="icon-google"></i>
    </BaseButton>
  </form>
</template>
