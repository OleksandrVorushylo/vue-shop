import { createI18n } from 'vue-i18n';
import * as validators from '@vuelidate/validators';

const { createI18nMessage } = validators;

const messages = {
  uk: {
    validations: {
      required: 'Обов’язкове поле',
      requiredPhone: 'Номер телефону має складатися з 11 символів',
      minValueRequired: 'Потрібно вибрати опцію',
      minLength: 'Значення повинно містити не менше ніж {min} символів',
      maxLength: 'Значення повинно містити не більше ніж {max} символів',
      minValue: 'Значення повинно бути не менше ніж {min}',
      maxValue: 'Значення повинно бути не більше ніж {max}',
      between: 'Значення повинно бути між {min} та {max}',
      alpha: 'Допускаються лише літери',
      alphaNum: 'Допускаються лише літери та цифри',
      numeric: 'Допускаються лише числа',
      integer: 'Допускаються лише цілі числа',
      decimal: 'Допускаються лише десяткові числа',
      email: 'Неправильний формат електронної пошти',
      ipAddress: 'Неправильний формат IP-адреси',
      macAddress: 'Неправильний формат MAC-адреси',
      sameAs: 'Значення не збігаються',
      url: 'Неправильний формат URL-адреси',
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
export const requiredPhone = withI18nMessage(validators.minLength, { withArguments: true });
export const minLength = withI18nMessage(validators.minLength, { withArguments: true });
export const maxLength = withI18nMessage(validators.maxLength, { withArguments: true });
export const minValue = withI18nMessage(validators.minValue, { withArguments: true });
export const minValueRequired = withI18nMessage(validators.minValue, { withArguments: true });
export const maxValue = withI18nMessage(validators.maxValue, { withArguments: true });
export const between = withI18nMessage(validators.between, { withArguments: true });
export const alpha = withI18nMessage(validators.alpha);
export const alphaNum = withI18nMessage(validators.alphaNum);
export const numeric = withI18nMessage(validators.numeric);
export const integer = withI18nMessage(validators.integer);
export const decimal = withI18nMessage(validators.decimal);
export const email = withI18nMessage(validators.email);
export const ipAddress = withI18nMessage(validators.ipAddress);
export const macAddress = withI18nMessage(validators.macAddress);
export const sameAs = withI18nMessage(validators.sameAs, { withArguments: true });
export const url = withI18nMessage(validators.url);
