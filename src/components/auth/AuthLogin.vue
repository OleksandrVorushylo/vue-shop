<script setup>
import { ref, reactive, computed, watch } from 'vue';
import { useNotification } from '@/composables/useNotification.js';
import { useAuthStore } from '@/stores/auth.store';
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength, maxLength } from '@/validations/loginForm.js';
import BaseInput from '@/components/base/fields/input/BaseInput.vue';
import BaseButton from '@/components/base/buttons/button/BaseButton.vue';
import router from '@/router/index.js';
const { successNotification, errorNotification } = useNotification();

const props = defineProps({
  isActive: Boolean,
});

const authStore = useAuthStore();

const form = reactive({
  email: '',
  password: '',
});

const rules = computed(() => ({
  email: {
    required,
    email,
    maxLength: maxLength(100),
  },
  password: {
    required,
    minLength: minLength(6),
    maxLength: maxLength(50),
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

const handleLogin = async (e) => {
  e.preventDefault();
  isFormTouched.value = true;
  v.value.$touch();

  errorMsg.value = '';
  successMsg.value = '';

  if (await v.value.$validate()) {
    try {
      await authStore.login({
        email: form.email.trim().toLowerCase(),
        password: form.password,
      });

      successMsg.value = 'Ви успішно увійшли!';
      successNotification('Ви успішно увійшли!', 'Вітаємо', 1200);
      setTimeout(() => {
        router.push('/profile');
      }, 0);
    } catch (err) {
      console.error('login error', err);
      if (err.code === 'auth/invalid-credential' || err.code === 'auth/user-not-found') {
        errorNotification('Неправильна електронна адреса або пароль.');
      } else if (err.code === 'auth/invalid-email') {
        errorNotification('Некоректна електронна адреса.');
      } else if (err.code === 'auth/too-many-requests') {
        errorNotification('Забагато спроб входу. Спробуйте пізніше.');
      } else {
        errorNotification('Помилка входу. Спробуйте ще раз.');
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
    successNotification('Ви успішно увійшли!', 'Вітаємо', 1200);
    await router.push('/profile');
  } catch (err) {
    console.error('google login error', err);
    errorMsg.value = 'Помилка авторизації через Google.';
    errorNotification('Помилка авторизації через Google.');
  }
};

const handleForgotPassword = async () => {
  if (!form.email) {
    errorMsg.value = 'Введіть електронну адресу, щоб відновити пароль.';
    return;
  }

  v.value.email.$touch();
  if (v.value.email.$invalid) {
    errorMsg.value = 'Введіть коректну електронну адресу для відновлення пароля.';
    return;
  }

  errorMsg.value = '';
  successMsg.value = '';

  try {
    await authStore.sendPasswordReset(form.email.trim().toLowerCase());
    successMsg.value = 'Лист для відновлення пароля відправлено на вашу пошту.';
  } catch (err) {
    console.error('reset password error', err);
    if (err.code === 'auth/user-not-found') {
      errorMsg.value = 'Користувача з такою адресою не знайдено.';
    } else {
      errorMsg.value = 'Не вдалося відправити лист. Перевірте електронну адресу.';
    }
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
    id="login_form"
    @submit="handleLogin"
  >
    <div class="authorization-form__title">Щоб увійти введіть електронну адресу або телефон</div>

    <BaseInput
      v-model.trim="form.email"
      :error="getError('email')"
      :class="getFieldValidationClass('email')"
      id="login-email"
      label="Адреса електронної пошти *"
      placeholder="example@email.com"
      type="email"
      autocomplete="email"
    />

    <BaseInput
      v-model="form.password"
      :error="getError('password')"
      :class="getFieldValidationClass('password')"
      id="login-password"
      label="Пароль *"
      placeholder="********"
      type="password"
      autocomplete="current-password"
      variant="password"
    />

    <p class="authorization-form__personal-data">
      Натискаючи на кнопку ви автоматично даєте згоду на обробку
      <a href="#" target="_blank">персональних данних</a>
    </p>

    <BaseButton
      type="submit"
      additional-class="authorization-form__submit"
      :disabled="authStore.loading"
    >
      {{ authStore.loading ? 'Вхід...' : 'Увійти' }}
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

    <p class="authorization-form__personal-data">
      <router-link to="/auth-forgot">Забули пароль?</router-link>
    </p>
  </form>
</template>
