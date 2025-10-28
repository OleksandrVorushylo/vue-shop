<script setup>
import { ref, reactive, computed, watch } from 'vue';
import { useNotification } from '@/composables/useNotification.js';
import { useAuthStore } from '@/stores/auth.store';
import { useVuelidate } from '@vuelidate/core';
import { required, email, maxLength } from '@/validations/loginForm.js';
import BaseInput from '@/components/base/fields/input/BaseInput.vue';
import BaseButton from '@/components/base/buttons/button/BaseButton.vue';
import ButtonsWrapper from '@/components/base/buttons/ButtonsWrapper.vue';
import router from '@/router/index.js';

const { successNotification, errorNotification } = useNotification();
const authStore = useAuthStore();

const form = reactive({
  email: '',
});

const rules = computed(() => ({
  email: {
    required,
    email,
    maxLength: maxLength(100),
  },
}));

const v = useVuelidate(rules, form);

const isFormTouched = ref(false);
const isSubmitting = ref(false);

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

const handleSubmit = async (e) => {
  e.preventDefault();
  isFormTouched.value = true;
  v.value.$touch();

  if (await v.value.$validate()) {
    isSubmitting.value = true;

    try {
      await authStore.sendPasswordReset(form.email.trim().toLowerCase());

      successNotification(
        'Лист для відновлення пароля відправлено на вашу пошту. Перевірте папку "Спам", якщо не бачите лист.',
        'Успішно',
        5000,
      );

      setTimeout(() => {
        router.push('/auth-forgot-success');
      }, 2000);
    } catch (err) {
      console.error('password reset error', err);

      if (err.code === 'auth/user-not-found') {
        errorNotification('Користувача з такою електронною адресою не знайдено.');
      } else if (err.code === 'auth/invalid-email') {
        errorNotification('Некоректна електронна адреса.');
      } else if (err.code === 'auth/too-many-requests') {
        errorNotification('Забагато спроб. Спробуйте пізніше.');
      } else {
        errorNotification('Помилка відправки листа. Спробуйте ще раз.');
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
          <h1 class="authorization__title large-title-4">Відновлення паролю</h1>
        </div>
        <div class="authorization-content">
          <form class="authorization-content__form" @submit="handleSubmit">
            <div class="authorization-content__form-title">
              Щоб відновити пароль введіть електронну адресу
            </div>

            <BaseInput
              v-model.trim="form.email"
              :error="getError('email')"
              :class="getFieldValidationClass('email')"
              id="forgot-email"
              label="Адреса електронної пошти *"
              placeholder="example@email.com"
              type="email"
              autocomplete="email"
            />

            <ButtonsWrapper additional-class="authorization-content__buttons">
              <BaseButton type="submit" :disabled="authStore.loading || isSubmitting">
                {{ isSubmitting ? 'Відправка...' : 'Відправити' }}
              </BaseButton>
              <BaseButton variant="second" to="/auth"> Назад до входу </BaseButton>
            </ButtonsWrapper>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
