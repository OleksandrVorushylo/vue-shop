<script setup>
import { ref, reactive, computed, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useNotification } from '@/composables/useNotification.js';
import { confirmPasswordReset, verifyPasswordResetCode } from 'firebase/auth';
import { auth } from '@/firebase';
import { useVuelidate } from '@vuelidate/core';
import { required, minLength, maxLength, sameAs } from '@/validations/registerForm.js';
import BaseInput from '@/components/base/fields/input/BaseInput.vue';
import BaseButton from '@/components/base/buttons/button/BaseButton.vue';
import ButtonsWrapper from '@/components/base/buttons/ButtonsWrapper.vue';
import router from '@/router/index.js';

const { successNotification, errorNotification } = useNotification();
const route = useRoute();

const form = reactive({
  password: '',
  confirmPassword: '',
});

const customValidators = {
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
const isSubmitting = ref(false);
const isValidCode = ref(false);
const isCheckingCode = ref(true);
const userEmail = ref('');
const oobCode = ref('');

const successTimeouts = reactive({});
const successShown = reactive({});

// Перевірка коду з URL при завантаженні
onMounted(async () => {
  oobCode.value = route.query.oobCode;

  if (!oobCode.value) {
    errorNotification('Невалідне посилання для відновлення пароля.');
    setTimeout(() => {
      router.push('/auth-forgot');
    }, 2000);
    return;
  }

  try {
    // Верифікуємо код відновлення пароля
    const email = await verifyPasswordResetCode(auth, oobCode.value);
    userEmail.value = email;
    isValidCode.value = true;
  } catch (err) {
    console.error('verify code error', err);

    if (err.code === 'auth/expired-action-code') {
      errorNotification('Посилання для відновлення пароля застаріле. Запитайте нове.');
    } else if (err.code === 'auth/invalid-action-code') {
      errorNotification('Невалідне або вже використане посилання.');
    } else {
      errorNotification('Помилка перевірки посилання.');
    }

    setTimeout(() => {
      router.push('/auth-forgot');
    }, 3000);
  } finally {
    isCheckingCode.value = false;
  }
});

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

const handleSubmit = async (e) => {
  e.preventDefault();
  isFormTouched.value = true;
  v.value.$touch();

  if (await v.value.$validate()) {
    isSubmitting.value = true;

    try {
      await confirmPasswordReset(auth, oobCode.value, form.password);

      successNotification(
        'Пароль успішно змінено! Тепер ви можете увійти з новим паролем.',
        'Успішно',
        3000,
      );

      setTimeout(() => {
        router.push('/auth');
      }, 2000);
    } catch (err) {
      console.error('password reset error', err);

      if (err.code === 'auth/expired-action-code') {
        errorNotification('Посилання застаріло. Запитайте нове.');
      } else if (err.code === 'auth/invalid-action-code') {
        errorNotification('Невалідне посилання.');
      } else if (err.code === 'auth/weak-password') {
        errorNotification('Пароль занадто слабкий.');
      } else {
        errorNotification('Помилка зміни пароля. Спробуйте ще раз.');
      }
    } finally {
      isSubmitting.value = false;
    }
  }
};
</script>

<template>
  <section class="authorization">
    <div class="cont">
      <div class="authorization-wrap">
        <div class="authorization-nav">
          <h1 class="authorization__title large-title-4">Створення нового пароля</h1>
        </div>
        <div class="authorization-content">
          <!-- Завантаження перевірки коду -->
          <div v-if="isCheckingCode" class="authorization-content__text">
            Перевірка посилання...
          </div>

          <!-- Форма зміни пароля -->
          <form v-else-if="isValidCode" class="authorization-content__form" @submit="handleSubmit">
            <div class="authorization-content__form-title">
              Створіть новий пароль для <strong>{{ userEmail }}</strong>
            </div>

            <BaseInput
              v-model="form.password"
              :error="getError('password')"
              :class="getFieldValidationClass('password')"
              id="reset-password"
              label="Новий пароль *"
              placeholder="********"
              type="password"
              autocomplete="new-password"
              variant="password"
            />

            <BaseInput
              v-model="form.confirmPassword"
              :error="getError('confirmPassword')"
              :class="getFieldValidationClass('confirmPassword')"
              id="reset-confirm-password"
              label="Повторіть новий пароль *"
              placeholder="********"
              type="password"
              autocomplete="new-password"
              variant="password"
            />

            <ButtonsWrapper additional-class="authorization-content__buttons">
              <BaseButton type="submit" :disabled="isSubmitting">
                {{ isSubmitting ? 'Збереження...' : 'Змінити пароль' }}
              </BaseButton>
            </ButtonsWrapper>
          </form>

          <div v-else class="authorization-content__text">
            Невалідне або застаріле посилання. Перенаправлення...
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
