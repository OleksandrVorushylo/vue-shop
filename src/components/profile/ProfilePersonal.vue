<script setup>
import BaseInput from '@/components/base/fields/input/BaseInput.vue';
import BaseSelect from '@/components/base/fields/select/BaseSelect.vue';
import ButtonsWrapper from '@/components/base/buttons/ButtonsWrapper.vue';
import BaseButton from '@/components/base/buttons/button/BaseButton.vue';

const citiesOptions = [
  { value: 'chernihiv', label: 'Чернігів' },
  { value: 'kyiv', label: 'Київ' },
  { value: 'poltava', label: 'Полтава' },
];
</script>

<template>
  <h1 class="profile__title large-title-4">Особисті дані</h1>
  <form class="profile__form">
    <div class="profile__form-item">
      <h3 class="profile__form-title">
        <span>Персональні дані</span>
      </h3>
      <div class="profile__form-grid">
        <BaseInput
          id="register-full-name"
          label="Ваше прізвище та ім'я *"
          autocomplete="name"
          additional-class="col-span-full"
        />

        <BaseInput
          id="personal-email"
          label="Адреса електронної пошти *"
          placeholder="example@email.com"
          type="email"
          autocomplete="email"
        />

        <BaseInput id="personal-phone" label="Телефон *" autocomplete="tel" />
      </div>
    </div>

    <div class="profile__form-item">
      <h3 class="profile__form-title">
        <span>Змінити пароль</span>
      </h3>

      <div class="profile__form-grid">
        <BaseInput
          id="personal-new-password"
          label="Новий пароль *"
          placeholder="********"
          type="email"
          autocomplete="password"
          variant="password"
        />

        <BaseInput
          id="register-confirm-password"
          label="Підтвердіть пароль *"
          placeholder="********"
          type="email"
          autocomplete="password"
          variant="password"
        />
      </div>
    </div>

    <div class="profile__form-item">
      <h3 class="profile__form-title">
        <span>АДРЕСА ДОСТАВКИ</span>
      </h3>
      <div class="profile__form-grid">
        <BaseSelect
          select-id="personal-city"
          :is-label-for-select="false"
          :options="citiesOptions"
          placeholder="Сортувати за..."
          label="label"
          track-by="value"
        ></BaseSelect>

        <BaseInput id="personal-address-street" label="Вулиця" autocomplete="street" />

        <div class="profile__form-grid-second col-span-full">
          <BaseInput id="personal-address-house" label="Будинок" autocomplete="house" />
          <BaseInput id="personal-address-entrance" label="Під’їзд" autocomplete="entrance" />
          <BaseInput id="personal-address-flat" label="Квартира" autocomplete="flat" />
        </div>
      </div>
    </div>
    <ButtonsWrapper additional-class="profile__form-buttons">
      <BaseButton>
        Застосувати зміни
        <span class="icon-svg">
          <svg
            width="24"
            height="24"
            viewbox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_3108_8808)">
              <path
                opacity="0.2"
                d="M20.25 8.56031V19.5C20.25 19.6989 20.171 19.8897 20.0303 20.0303C19.8897 20.171 19.6989 20.25 19.5 20.25H16.5V14.25C16.5 14.0511 16.421 13.8603 16.2803 13.7197C16.1397 13.579 15.9489 13.5 15.75 13.5H8.25C8.05109 13.5 7.86032 13.579 7.71967 13.7197C7.57902 13.8603 7.5 14.0511 7.5 14.25V20.25H4.5C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5V4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75H15.4397C15.6383 3.75009 15.8288 3.82899 15.9694 3.96938L20.0306 8.02969C20.1003 8.09939 20.1555 8.18213 20.1931 8.27318C20.2307 8.36422 20.2501 8.46179 20.25 8.56031Z"
                fill="white"
              ></path>
              <path
                d="M20.5603 7.50001L16.5 3.43969C16.3612 3.2998 16.196 3.18889 16.014 3.11341C15.832 3.03792 15.6367 2.99938 15.4397 3.00001H4.5C4.10218 3.00001 3.72064 3.15804 3.43934 3.43935C3.15804 3.72065 3 4.10218 3 4.50001V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H19.5C19.8978 21 20.2794 20.842 20.5607 20.5607C20.842 20.2794 21 19.8978 21 19.5V8.56032C21.0006 8.36326 20.9621 8.16805 20.8866 7.98602C20.8111 7.804 20.7002 7.63879 20.5603 7.50001ZM15.75 19.5H8.25V14.25H15.75V19.5ZM19.5 19.5H17.25V14.25C17.25 13.8522 17.092 13.4707 16.8107 13.1893C16.5294 12.908 16.1478 12.75 15.75 12.75H8.25C7.85218 12.75 7.47064 12.908 7.18934 13.1893C6.90804 13.4707 6.75 13.8522 6.75 14.25V19.5H4.5V4.50001H15.4397L19.5 8.56032V19.5ZM15 6.75001C15 6.94892 14.921 7.13969 14.7803 7.28034C14.6397 7.42099 14.4489 7.50001 14.25 7.50001H9C8.80109 7.50001 8.61032 7.42099 8.46967 7.28034C8.32902 7.13969 8.25 6.94892 8.25 6.75001C8.25 6.5511 8.32902 6.36033 8.46967 6.21968C8.61032 6.07903 8.80109 6.00001 9 6.00001H14.25C14.4489 6.00001 14.6397 6.07903 14.7803 6.21968C14.921 6.36033 15 6.5511 15 6.75001Z"
                fill="white"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_3108_8808">
                <rect width="24" height="24" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </span>
      </BaseButton>
    </ButtonsWrapper>
  </form>
</template>

<style scoped></style>
