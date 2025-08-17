<template>
  <section class="contact-section" id="contact-section">
    <h2 class="section-title">{{ t('letsTalk') }}</h2>
    <div class="contact-methods-container">
      <form class="contact-form" ref="form" @submit.prevent="sendEmail">
        <h4 class="form-title">{{ t('illContactYouSoon') }}</h4>

        <div class="form-key">
          <label for="name">{{ t('yourName') }}</label>
          <input type="text" id="name" class="input-height" placeholder="Jhon Doe" name="from_name" required>
        </div>
        <div class="form-key">
          <label for="email">{{ t('yourEmail') }}</label>
          <input type="email" id="email" class="input-height" placeholder="someone@example.com" name="from_email" required>
        </div>
        <div class="form-key">
          <label for="name">{{ `${ t('yourWhatsapp') } (${ t('optional') })` }}</label>
          <input type="text" id="phone" class="input-height" placeholder="+12 345 5678909" name="from_phone">
        </div>
        <div class="form-key">
          <label for="message">{{ `${ t('yourMessage') } (${ t('optional') })` }}</label>
          <textarea id="message" cols="30" rows="10" name="message"
            :placeholder="t('typeSomethingHere')">
          </textarea>
        </div>
        <input type="submit" value="Send!">
      </form>
      <div class="logo-container">
        <img src="../../assets/images/bg_less_logo.svg" alt="Logo" class="logo">
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import emailjs from '@emailjs/browser';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const form = ref<HTMLFormElement>();
const sendEmail = () => {
  if (!form.value) return;
  emailjs.sendForm(
    process.env.VUE_APP_EMAILJS_ID,
    'template_37aqibf', form.value,
    process.env.VUE_APP_PUBLIC_KEY
  )
    .then((result) => {
      alert(`${ t('thankyou') } <br/> ${ t('illContactAsSoonAsPossible') }`);
    }, (error) => {
      console.log('FAILED...', error.text);
    }
  );
}
</script>

<style scoped lang="scss">
.contact-section {
  background: url('../../assets/svg/drawing.svg');
  background-color: $secondary;
  background-position: bottom right;
  background-size: cover;
  background-repeat: no-repeat;

  .contact-methods-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    column-gap: 1rem;
    row-gap: 2rem;

    .contact-form {
      width: 100%;
      max-width: 350px;

      background-color: $primary;
      box-shadow: 0 0 10px black;
      font-style: italic;
      color: white;

      border-radius: 0.5rem;
      padding: 1rem;

      justify-self: center;
      align-self: center;

      display: flex;
      flex-direction: column;
      gap: 0.75rem;

      .form-title {
        text-align: center;
      }

      input, textarea {
        width: 100%;

        background-color: white;
        border: 1px solid $accent;
        border-radius: 0.5rem;
        padding-left: 6px;
        resize: none;
      }

      textarea {
        height: 5rem;
      }

      input[type="submit"] {
        height: 2.5rem;
        font-weight: 700;
        color: white;
        background-color: $accent;
        border: 2px solid $d_accent;
        transition: all 180ms ease;

        &:hover {
          background-color: $secondary;
          color: $d_accent;
        }
      }
    }

    .logo-container {
      width: 100%;
      max-width: 300px !important;
      align-self: center;
      justify-self: center;

      .logo {
        max-width: 100% !important;
        max-height: 100% !important;
      }
    }
  }
}

@media (max-width: $ml) {
  .contact-section {
    .contact-methods-container {
      grid-template-columns: 1fr;
      grid-template-rows: auto;

      .logo-container {
        display: none;
      }
    }
  }
}
</style>