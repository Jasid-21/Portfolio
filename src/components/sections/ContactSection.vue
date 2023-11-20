<template>
  <section class="contact-section" id="contact-section">
    <h2 class="section-title">Let's talk</h2>
    <div class="contact-methods-container">
      <form class="contact-form" ref="form" @submit.prevent="sendEmail">
        <h3 class="form-title">I'll contact you soon</h3>

        <label for="name">Your name</label>
        <input type="text" id="name" placeholder="Complete name" name="from_name">
        <br><br>
        <label for="email">Your email</label>
        <input type="email" id="email" placeholder="someone@example.com" name="from_email">
        <br><br>
        <label for="name">Your whatsapp (optional)</label>
        <input type="text" id="phone" placeholder="+123 345 5678909" name="from_phone">
        <br><br>
        <label for="message">Your message</label>
        <textarea id="message" cols="30" rows="10" name="message"
          placeholder="Type something here (optional)"></textarea>
        <br><br>
        <input type="submit" value="Send!">
      </form>
      <div class="logo-container">
        <img src="../../assets/images/bg_less_logo.png" alt="Logo" class="logo">
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import emailjs from '@emailjs/browser';
import { ref } from 'vue';

//* Defined.
const form = ref<HTMLFormElement>();

//* Functions.
const sendEmail = () => {
  if (!form.value) return;
  emailjs.sendForm('service_yhqcs8h', 'template_37aqibf', form.value, 'mMtSc3MSYDiJ64l2v')
    .then((result) => {
        alert("Thanks you! <br/> I'll contact you as soon as possible");
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

      border-radius: 10px;
      padding: 1rem;

      justify-self: center;
      align-self: center;

      .form-title {
        text-align: center;
      }

      label {
        font-weight: 700;
      }

      input, textarea {
        width: 100%;
        height: 26px;

        background-color: white;
        border: 1px solid $accent;
        border-radius: 6px;
        padding-left: 6px;
      }

      textarea {
        height: 100px;
      }

      input[type="submit"] {
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