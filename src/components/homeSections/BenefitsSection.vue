<template>
  <section id="benefits-section" class="benefits-section">
    <div class="container">
      <!-- Section Header -->
      <Transition
        appear
        @enter="(el) => onEnterHeader(el as HTMLElement)"
      >
        <div class="section-header">
          <h2 class="section-title">
            {{ t('benefits') }}
          </h2>
          <p class="section-subtitle">
            {{ t('wyhShouldHaveWebsite') }}
          </p>
        </div>
      </Transition>

      <!-- Benefits Grid -->
      <div class="benefits-grid">
        <Transition
          v-for="(benefit, index) in benefits"
          :key="benefit.key"
          appear
          @enter="(el) => onEnterBenefit(el as HTMLElement, index)"
        >
          <div 
            class="benefit-card"
            :class="{ 'benefit-card--reverse': index % 2 === 1 }"
          >
            <div class="benefit-content">
              <!-- Icon -->
              <div class="benefit-icon">
                <Icon :icon="benefit.icon" />
              </div>

              <!-- Content -->
              <div class="benefit-info">
                <h3 class="benefit-title">
                  {{ t(`benefitsJson.${benefit.key}.name`) }}
                </h3>
                <p class="benefit-description">
                  {{ t(`benefitsJson.${benefit.key}.description`) }}
                </p>
              </div>

              <!-- Hover Effect -->
              <div class="benefit-hover-effect"></div>
            </div>
          </div>
        </Transition>
      </div>

      <!-- Background Decoration -->
      <div class="background-decoration"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'
import rawBenefits from '@/json/benefits.json'

const { t } = useI18n()

// Transform benefits data
const benefits = ref(rawBenefits.benefits.map(benefit => ({
  ...benefit,
  key: benefit.key
})))

// Animation handlers
const onEnterHeader = (el: HTMLElement) => {
  el.style.transform = 'translateY(50px)'
  el.style.opacity = '0'
  
  el.offsetHeight // trigger reflow
  
  el.style.transition = 'all 0.8s ease'
  el.style.transform = 'translateY(0)'
  el.style.opacity = '1'
}

const onEnterBenefit = (el: HTMLElement, index: number) => {
  // Alternate entry direction
  const isEven = index % 2 === 0
  const translateX = isEven ? '-50px' : '50px'
  
  el.style.transform = `translateX(${translateX})`
  el.style.opacity = '0'
  
  el.offsetHeight // trigger reflow
  
  setTimeout(() => {
    el.style.transition = 'all 0.8s ease'
    el.style.transform = 'translateX(0)'
    el.style.opacity = '1'
  }, index * 150)
}
</script>

<style scoped>
.benefits-section {
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

/* Benefits Grid */
.benefits-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 4xl;
  margin: 0 auto;
}

@media (min-width: 1024px) {
  .benefits-grid {
    gap: 3rem;
  }
}

/* Benefit Card */
.benefit-card {
  position: relative;
  max-width: 40rem;
  width: 100%;
  transition: transform 0.3s ease;
}

.benefit-card:hover {
  transform: translateY(-5px);
}

.benefit-card--reverse {
  align-self: flex-end;
}

@media (max-width: 1023px) {
  .benefit-card--reverse {
    align-self: stretch;
  }
}

.benefit-content {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  padding: 2rem;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 1.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
}

.benefit-card--reverse .benefit-content {
  direction: rtl;
}

.benefit-card--reverse .benefit-info {
  direction: ltr;
  text-align: right;
}

@media (max-width: 1023px) {
  .benefit-card--reverse .benefit-content {
    direction: ltr;
  }
  
  .benefit-card--reverse .benefit-info {
    text-align: left;
  }
}

.benefit-content:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
}

/* Benefit Icon */
.benefit-icon {
  width: 4rem;
  height: 4rem;
  border-radius: 0.75rem;
  background: linear-gradient(135deg, #8b5cf6, #3b82f6);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.benefit-card:hover .benefit-icon {
  transform: scale(1.1);
}

.benefit-icon svg {
  width: 100%;
  height: 100%;
  color: white;
}

/* Benefit Info */
.benefit-info {
  min-height: fit-content;
}

.benefit-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.75rem;
  margin-top: 0;
}

.benefit-description {
  color: #d1d5db;
  line-height: 1.625;
  margin: 0;
  font-size: 0.95rem;
}

/* Hover Effect */
.benefit-hover-effect {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 1rem;
  background: linear-gradient(135deg, #8b5cf6, #3b82f6);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.benefit-card:hover .benefit-hover-effect {
  opacity: 0.05;
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

/* Mobile Adjustments */
@media (max-width: 768px) {
  .benefit-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1rem;
  }
  
  .benefit-card--reverse .benefit-info {
    text-align: center;
  }
  
  .benefit-icon {
    justify-self: center;
  }
  
  .benefits-grid {
    gap: 1.5rem;
  }
}

@media (max-width: 640px) {
  .container {
    padding: 0 1rem;
  }
  
  .benefit-content {
    padding: 1.5rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .section-subtitle {
    font-size: 1.125rem;
  }
}
</style>