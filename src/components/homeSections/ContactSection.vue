<template>
  <section id="contact-section" class="contact-section">
    <div class="container">
      <!-- Section Header -->
      <Transition appear @enter="(el) => onEnterHeader(el as HTMLElement)">
        <div class="section-header">
          <h2 class="section-title">
            {{ t('contact') }}
          </h2>
          <p class="section-subtitle">
            {{ t('letsTalkAboutYouNextProject') }}
          </p>
        </div>
      </Transition>

      <div class="contact-grid">
        <!-- Contact Info -->
        <Transition appear @enter="(el) => onEnterFromLeft(el as HTMLElement)">
          <div class="contact-info">
            <div class="contact-intro">
              <h3 class="contact-intro-title">
                {{ t('contactInformation') }}
              </h3>
              <p class="contact-intro-text">
                {{ t('contactSectionDescription') }}
              </p>
            </div>

            <div class="contact-details">
              <Transition v-for="(info, index) in contactInfo" :key="info.label" appear
                @enter="(el) => onEnterContactInfo(el as HTMLElement, index)">
                <div class="contact-item">
                  <div class="contact-icon">
                    <Icon :icon="`${ info.collection || 'lucide' }:${info.iconName}`" />
                  </div>
                  <div class="contact-content">
                    <p class="contact-label">{{ info.label }}</p>
                    <a v-if="info.href" :href="info.href" class="contact-link">
                      {{ info.value }}
                    </a>
                    <p v-else class="contact-value">
                      {{ info.value }}
                    </p>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </Transition>

        <!-- Contact Form -->
        <Transition appear @enter="(el) => onEnterFromRight(el as HTMLElement)">
          <form @submit.prevent="sendEmail" class="contact-form" ref="form">
            <div class="form-group">
              <label for="name" class="form-label">
                {{ t('contact') }}
              </label>
              <input id="name" type="text" name="from_name" required class="form-input"
                placeholder="Jhon Doe">
            </div>

            <div class="form-group">
              <label for="email" class="form-label">
                {{ t('email') }}
              </label>
              <input id="email" type="email" name="form_email" required class="form-input"
                placeholder="example@email.com">
            </div>

            <div class="form-group">
              <label for="message" class="form-label">
                {{ t('message') }}
              </label>
              <textarea id="message" name="message" required rows="5" class="form-textarea"
                :placeholder="t('tellMeAboutYourProject')"></textarea>
            </div>

            <Transition name="button" mode="out-in">
              <button type="submit" :disabled="isSubmitting" class="submit-button"
                :class="{ 'submitting': isSubmitting }">
                <div v-if="isSubmitting" class="loading-spinner"></div>
                <template v-else>
                  <Icon icon="lucide:send" />
                  <span>{{ t('send') }}</span>
                </template>
              </button>
            </Transition>
          </form>
        </Transition>
      </div>

      <!-- Background Effects -->
      <div class="background-decoration"></div>
    </div>

    <!-- Toast Notification -->
    <Transition name="toast">
      <div v-if="showToast" class="toast-notification">
        <div class="toast-content">
          <Icon icon="lucide:check-circle" class="toast-icon" />
          <div>
            <p class="toast-title">{{ t('success') }}</p>
            <p class="toast-message">{{ t('formSendSuccessMessage') }}</p>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'
import emailjs from '@emailjs/browser';

const { t } = useI18n()

// Contact information
const contactInfo = reactive([
  {
    iconName: 'mail',
    label: 'Email',
    value: 'hauntedbyte.site@gmail.com',
    href: 'mailto:hauntedbyte.site@gmail.com'
  },
  {
    iconName: 'map-pin',
    label: t('location'),
    value: t('availableRemote'),
    href: null
  },
  {
    collection: 'ic',
    iconName: 'baseline-whatsapp',
    label: t('whatsapp'),
    value: '+57 (311) 345-4507',
  }
])

const isSubmitting = ref(false);
const showToast = ref(false);
const form = ref<HTMLFormElement>();
const sendEmail = () => {
  if (!form.value) return;
  isSubmitting.value = true
  emailjs.sendForm(
    process.env.VUE_APP_EMAILJS_ID,
    'template_37aqibf', form.value,
    process.env.VUE_APP_PUBLIC_KEY
  )
    .then((result) => {
      isSubmitting.value = false;
      showToast.value = true;

      setTimeout(() => showToast.value = false, 5000);
    }, (error) => {
      console.log('FAILED...', error.text);
    }
  );
}

const useTransitionHandlers = () => {
  // Animation handlers
  const onEnterHeader = (el: HTMLElement) => {
    el.style.transform = 'translateY(50px)'
    el.style.opacity = '0'

    el.offsetHeight // trigger reflow

    el.style.transition = 'all 0.8s ease'
    el.style.transform = 'translateY(0)'
    el.style.opacity = '1'
  }

  const onEnterFromLeft = (el: HTMLElement) => {
    el.style.transform = 'translateX(-50px)'
    el.style.opacity = '0'

    el.offsetHeight // trigger reflow

    el.style.transition = 'all 0.8s ease'
    el.style.transform = 'translateX(0)'
    el.style.opacity = '1'
  }

  const onEnterFromRight = (el: HTMLElement) => {
    el.style.transform = 'translateX(50px)'
    el.style.opacity = '0'

    el.offsetHeight // trigger reflow

    el.style.transition = 'all 0.8s ease'
    el.style.transform = 'translateX(0)'
    el.style.opacity = '1'
  }

  const onEnterContactInfo = (el: HTMLElement, index: number) => {
    el.style.transform = 'translateY(20px)'
    el.style.opacity = '0'

    el.offsetHeight // trigger reflow

    setTimeout(() => {
      el.style.transition = 'all 0.5s ease'
      el.style.transform = 'translateY(0)'
      el.style.opacity = '1'
    }, index * 100)
  }

  return {
    onEnterContactInfo,
    onEnterFromLeft,
    onEnterFromRight,
    onEnterHeader,
  }
}

const {
  onEnterContactInfo,
  onEnterFromLeft,
  onEnterFromRight,
  onEnterHeader,
} = useTransitionHandlers();
</script>

<style scoped>
.contact-section {
  padding: 5rem 0;
  position: relative;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .container {
    padding: 0 1.5rem;
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 2rem;
  }
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

@media (min-width: 768px) {
  .section-title {
    font-size: 3rem;
  }
}

.section-subtitle {
  font-size: 1.25rem;
  color: #d1d5db;
  max-width: 32rem;
  margin: 0 auto;
}

/* Contact Grid */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

@media (min-width: 1024px) {
  .contact-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Contact Info */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-intro-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1.5rem;
}

.contact-intro-text {
  color: #d1d5db;
  line-height: 1.625;
  margin-bottom: 2rem;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.contact-icon {
  width: 3rem;
  height: 3rem;
  background: linear-gradient(135deg, #8b5cf6, #3b82f6);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-icon svg {
  width: 1.25rem;
  height: 1.25rem;
  color: white;
}

.contact-label {
  color: #9ca3af;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
}

.contact-link {
  color: white;
  text-decoration: none;
  transition: color 0.2s ease;
}

.contact-link:hover {
  color: #a855f7;
}

.contact-value {
  color: white;
  margin: 0;
}

/* Contact Form */
.contact-form {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #d1d5db;
  margin-bottom: 0.5rem;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background: rgba(31, 41, 55, 0.5);
  border: 1px solid #4b5563;
  color: white;
  transition: all 0.2s ease;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: #9ca3af;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #8b5cf6;
  box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.2);
}

.form-textarea {
  resize: none;
}

/* Submit Button */
.submit-button {
  width: 100%;
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
}

.submit-button:hover:not(:disabled) {
  transform: scale(1.02);
  box-shadow: 0 10px 25px rgba(139, 92, 246, 0.3);
}

.submit-button:active {
  transform: scale(0.98);
}

.submit-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.submit-button.submitting:hover {
  transform: none;
}

.loading-spinner {
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid white;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Background Decoration */
.background-decoration {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24rem;
  height: 24rem;
  background: rgba(139, 92, 246, 0.05);
  border-radius: 50%;
  filter: blur(3rem);
  z-index: -1;
}

/* Toast Notification */
.toast-notification {
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 1000;
  max-width: 24rem;
}

.toast-content {
  background: rgba(16, 185, 129, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 0.75rem;
  padding: 1rem;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
}

.toast-icon {
  width: 1.5rem;
  height: 1.5rem;
  color: white;
  flex-shrink: 0;
  margin-top: 0.125rem;
}

.toast-title {
  font-weight: 600;
  color: white;
  margin: 0 0 0.25rem 0;
}

.toast-message {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.875rem;
  margin: 0;
}

/* Toast Transitions */
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.toast-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

/* Button Transitions */
.button-enter-active,
.button-leave-active {
  transition: all 0.2s ease;
}

.button-enter-from,
.button-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
