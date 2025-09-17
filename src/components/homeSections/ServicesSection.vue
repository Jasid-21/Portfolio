<template>
  <section id="services-section" class="services-section">
    <div class="container">
      <!-- Section Header -->
      <Transition
        appear
        @enter="onEnter"
        @leave="onLeave"
      >
        <div class="section-header">
          <h2 class="section-title">
            {{ t('services') }}
          </h2>
          <p class="section-subtitle">
            {{ t('servicesSubtitle') }}
          </p>
        </div>
      </Transition>

      <!-- Services Grid -->
      <div class="services-grid">
        <Transition
          v-for="(service, index) in services"
          :key="service.key"
          appear
          @enter="(el) => onEnterDelayed(el, index)"
        >
          <div class="service-card">
            <div class="service-content">
              <!-- Icon -->
              <div 
                class="service-icon"
                :class="`service-icon--${service.key}`"
              >
                <Icon :icon="`lucide:${service.iconName}`" />
              </div>

              <!-- Content -->
              <h3 class="service-title">
                {{ t(`servicesJson.${service.key}.name`) }}
              </h3>
              <p class="service-description">
                {{ t(`servicesJson.${service.key}.description`) }}
              </p>

              <!-- Hover Effect -->
              <div 
                class="service-hover-effect"
                :class="`service-hover-effect--${service.key}`"
              ></div>
            </div>
          </div>
        </Transition>
      </div>

      <!-- Background Decoration -->
      <div class="background-decoration"></div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const services = reactive([
  {
    iconName: 'globe',
    key: 'landing',
    color: 'blue-cyan'
  },
  {
    iconName: 'smartphone',
    key: 'interactive',
    color: 'purple-pink'
  },
  {
    iconName: 'database',
    key: 'platforms',
    color: 'green-emerald'
  },
  {
    iconName: 'wrench',
    key: 'support',
    color: 'orange-red'
  }
])

// Animación de entrada
const onEnter = (el) => {
  el.style.transform = 'translateY(50px)'
  el.style.opacity = '0'
  
  el.offsetHeight // trigger reflow
  
  el.style.transition = 'all 0.8s ease'
  el.style.transform = 'translateY(0)'
  el.style.opacity = '1'
}

// Animación de entrada con delay
const onEnterDelayed = (el, index) => {
  el.style.transform = 'translateY(50px)'
  el.style.opacity = '0'
  
  el.offsetHeight // trigger reflow
  
  setTimeout(() => {
    el.style.transition = 'all 0.8s ease'
    el.style.transform = 'translateY(0)'
    el.style.opacity = '1'
  }, index * 100)
}

// Animación de salida
const onLeave = (el) => {
  el.style.transition = 'all 0.5s ease'
  el.style.transform = 'translateY(-50px)'
  el.style.opacity = '0'
}
</script>

<style scoped>
.services-section {
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
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

/* Services Grid */
.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Service Card */
.service-card {
  position: relative;
  height: 100%;
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-10px);
}

.service-content {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  padding: 2rem;
  height: 100%;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.service-content:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
}

/* Service Icon */
.service-icon {
  width: 4rem;
  height: 4rem;
  border-radius: 0.75rem;
  padding: 1rem;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-card:hover .service-icon {
  transform: scale(1.1);
}

.service-icon svg {
  width: 100%;
  height: 100%;
  color: white;
}

/* Icon Colors */
.service-icon--landing {
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
}

.service-icon--interactive {
  background: linear-gradient(135deg, #8b5cf6, #ec4899);
}

.service-icon--platforms {
  background: linear-gradient(135deg, #10b981, #059669);
}

.service-icon--support {
  background: linear-gradient(135deg, #f97316, #ef4444);
}

/* Service Content */
.service-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
}

.service-description {
  color: #d1d5db;
  line-height: 1.625;
}

/* Hover Effects */
.service-hover-effect {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.service-card:hover .service-hover-effect {
  opacity: 0.1;
}

.service-hover-effect--landing {
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
}

.service-hover-effect--interactive {
  background: linear-gradient(135deg, #8b5cf6, #ec4899);
}

.service-hover-effect--platforms {
  background: linear-gradient(135deg, #10b981, #059669);
}

.service-hover-effect--support {
  background: linear-gradient(135deg, #f97316, #ef4444);
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
</style>
