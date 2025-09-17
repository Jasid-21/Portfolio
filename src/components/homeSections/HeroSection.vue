<template>
  <section class="hero-section">
    <div class="background-overlay"></div>
    <div class="decorative-blur-top"></div>
    <div class="decorative-blur-bottom"></div>

    <div class="info-layer">
      <div class="logo-continer">
      </div>
      <Transition name="info">
        <div class="info-container" v-if="showInfo">
          <h1 class="title gradient-text">{{ t('turnWebsiteIntoReality') }}</h1>
          <p class="description">
            {{ t('boostYourBussinessSlogan') }}
          </p>

          <a type="submit" class="submit-button">
            <Icon icon="lucide:send" />
            <span>{{ t('contact') }}</span>
          </a>

          <!--
          <div class="buttons-container">
            <a class="projects-link-btn input-height" href="/templates">
              <span>{{ t('templates') }}</span>
            </a>

            <a class="contact-link-btn input-height" href="#contact-section">
              <span>{{ t('contact') }}</span>
            </a>
          </div>
        -->
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
  min-height: 100vh;

  position: relative;
  overflow: hidden;

  /*
  &::after {
    position: absolute;
    top: var(--y_pad); left: var(--x_pad);
    width: 40%;
    bottom: var(--y_pad);
    content: '';

    background: url('../../assets/images/hero.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 8px;
    border-radius: 1rem;

    z-index: -1;
  }
    */

  /* Gradiente de fondo que cubre todo el contenedor */
  .background-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(135deg,
        rgba(88, 28, 135, 0.2) 0%,
        rgba(30, 58, 138, 0.2) 50%,
        rgba(67, 56, 202, 0.2) 100%);
  }

  /* Elemento decorativo superior izquierdo */
  .decorative-blur-top {
    position: absolute;
    top: 80px;
    left: 40px;
    width: 288px;
    height: 288px;
    background-color: rgba(168, 85, 247, 0.1);
    border-radius: 50%;
    filter: blur(48px);
  }

  /* Elemento decorativo inferior derecho */
  .decorative-blur-bottom {
    position: absolute;
    bottom: 80px;
    right: 40px;
    width: 384px;
    height: 384px;
    background-color: rgba(59, 130, 246, 0.1);
    border-radius: 50%;
    filter: blur(48px);
  }

  .info-layer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
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
      justify-self: center;
      align-self: center;

      color: white;
      position: static;

      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      .title {
        margin: 0;
      }

      .projects-link-btn,
      .contact-link-btn {
        width: 100px;

        color: white;
        border-radius: 0.5rem;
        padding: 1.25rem 1.75rem;

        transition: all 180ms ease;

        display: flex;
        justify-content: center;
        align-items: center;

        font-weight: 700;
        cursor: pointer;
      }

      .projects-link-btn {
        background-color: $accent;
        border: 2px solid $accent;
        color: $primary;
      }

      .contact-link-btn {
        background-color: $primary;
        border: 2px solid $primary;
      }

      .projects-link-btn:hover {
        background-color: rgba($color: $primary, $alpha: 0.3);
        backdrop-filter: blur(10px);
        border: 2px solid $accent;
        color: $accent;
      }

      .contact-link-btn:hover {
        background-color: rgba($color: $primary, $alpha: 0.3);
        backdrop-filter: blur(10px);
        border: 2px solid $primary;
        color: $l_primary;
      }

      .buttons-container {
        display: flex;
        gap: 1rem;
      }

      .submit-button {
        width: fit-content;
        min-width: 10rem;
        padding: 1rem;
        font-size: 1.125rem;
        font-weight: 600;
        border-radius: 0.5rem;
        background: linear-gradient(135deg, #8b5cf6, #3b82f6);
        color: white;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        transition: all 0.2s ease;

        &:hover:not(:disabled) {
          transform: scale(1.02);
          box-shadow: 0 10px 25px rgba(139, 92, 246, 0.3);
        }
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
      grid-template-rows: auto 1fr;

      .info-container {
        width: 80%;
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
