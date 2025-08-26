import { createI18n } from 'vue-i18n';
import * as validators from '@vuelidate/validators';

const { createI18nMessage } = validators;

const messages = {
  uk: {
    validations: {
      required: 'Обов’язкове поле',
      minLength: 'Значення повинно містити не менше ніж {min} символів',
      maxLength: 'Значення повинно містити не більше ніж {max} символів',
      email: 'Неправильний формат електронної пошти',
    },
  },
};

const i18n = createI18n({
  locale: 'uk',
  fallbackLocale: 'en',
  messages,
});

const withI18nMessage = createI18nMessage({ t: i18n.global.t.bind(i18n) });

export const required = withI18nMessage(validators.required);
export const email = withI18nMessage(validators.email);
export const minLength = withI18nMessage(validators.minLength, { withArguments: true });
export const maxLength = withI18nMessage(validators.maxLength, { withArguments: true });
