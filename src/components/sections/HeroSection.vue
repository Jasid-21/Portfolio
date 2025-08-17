<template>
  <section class="hero-section">
    <div class="info-layer">
      <div class="logo-continer">
        <img src="@/assets/images/hero-logo.svg" alt="Logo" class="logo">
      </div>
      <Transition name="info">
        <div class="info-container" v-if="showInfo">
          <h2 class="title">{{ t('turnWebsiteIntoReality') }}</h2>
          <p class="description">
            {{ t('boostYourBussinessSlogan') }}
          </p>
          <a class="projects-link-btn input-height" href="#contact-section">
            <span>{{ t('contact') }}</span>
          </a>
        </div>
      </Transition>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

//* Variables.
const showInfo = ref<boolean>(false);

setTimeout(() => {
  showInfo.value = true;
}, 180);
</script>

<style scoped lang="scss">
.hero-section {
  height: 100vh;

  background: url('../../assets/images/hero.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  position: relative;
  overflow: hidden;

  .info-layer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba($color: $primary, $alpha: 0.3);
    padding: var(--y_pad) var(--x_pad);

    display: grid;
    grid-template-columns: auto 1fr;

    .logo-continer {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .logo {
        width: 17rem;
      }
    }

    .info-container {
      max-width: 35rem;
      justify-self: flex-end;
      align-self: center;
      color: white;
      position: static;

      display: flex;
      flex-direction: column;

      .title {
        margin: 0;
      }

      .projects-link-btn {
        width: 100px;

        color: white;
        text-decoration: none;
        background-color: $accent;
        border-radius: 10px;
        border: 2px solid $accent;
        transition: all 180ms ease;

        display: flex;
        justify-content: center;
        align-items: center;

        font-weight: 700;
        font-style: italic;
      }

      .projects-link-btn:hover {
        cursor: pointer;
        background-color: transparent;
        border: 3px solid $d_accent;
      }
    }

    .info-enter-from {
      position: absolute;

      right: -600px;
      top: 50%;
      translate: 0 -50%;

      opacity: 0;
    }

    .info-enter-to {
      right: 0;
      top: 50%;

      opacity: 1;
    }

    .info-enter-active {
      transition: all 1s ease;
    }
  }
}

@media (max-width: $md) {
  .hero-section {
    .info-layer {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;

      .logo-continer {
        .logo {
          align-self: flex-end;
        }
      }

      .info-container {
        width: 80%;
        justify-self: center;
      }
    }
  }
}

@media (max-width: $sm) {
  .hero-section {
    .info-layer {
      .info-container {
        width: 100%;
      }
    }
  }
}
</style>
