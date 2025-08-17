<template>
  <section class="services-section" id="services-section" ref="context">
    <h2 class="section-title margin-0">{{ t('services') }}</h2>
    <h6 class="section-subtitle">{{ t('whatWeOffer') }}</h6>

    <div class="services-container">
      <ServiceCard v-for="(s, idx) of services" :key="idx" :service="s"
        :intersection-id="s[INTERSECTION_ID]"
        :visible="visibleElements.includes(s[INTERSECTION_ID])" />
    </div>
  </section>
</template>

<script setup lang="ts">
import ServiceCard from '@/components/ServiceCard.vue';
import { INTERSECTION_ID, useIntersectionObserver } from '@/composables/useIntersectionObserver';
import rawServices from '@/json/services.json';
import { getRandomCode } from '@/utils/getRandomCode';
import { nextTick, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const services = rawServices.services.map(b => {
    const o = Object.create(b) as typeof b & { [INTERSECTION_ID]: string };
    Object.defineProperty(o, INTERSECTION_ID, {
        value: getRandomCode(),
        writable: true,
        configurable: true,
        enumerable: true,
    });

    return o;
});

const { context, observeElements, visibleElements } = useIntersectionObserver();

onMounted(() => {
    nextTick(() => observeElements(context.value?.querySelectorAll('.observable')));
});
</script>

<style scoped lang="scss">
.services-section {
  background: url('../../assets/svg/services-bg.svg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  overflow: hidden;

  .services-container {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    & > * {
      position: relative;
      translate: -30% 0;
      opacity: 0;

      transition-property: translate, opacity;
      transition-duration: 800ms;
      transition-timing-function: ease;

      &:nth-child(even) {
        translate: 30% 0;
        align-self: flex-end;
      }

      &.visible {
        translate: 0 0;
        opacity: 1;
      }
    }
  }
}
</style>
