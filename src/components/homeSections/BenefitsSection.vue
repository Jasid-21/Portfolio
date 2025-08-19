<template>
    <section class="benefits-section" id="benefits-section" ref="context">
        <h2 class="section-title margin-0">{{ t('benefits') }}</h2>
        <h6 class="section-subtitle">{{ t('wyhShouldHaveWebsite') }}</h6>

        <div class="benefit-cards-container">
            <div v-for="benefit in benefits" :key="t(`benefitsJson.${ benefit.key }.name`)"
                class="benefit-card observable"
                :class="{ visible: visibleElements.includes(benefit[INTERSECTION_ID]) }"
                 v-bind:[INTERSECTION_ID]="benefit[INTERSECTION_ID]">
                <div class="icon-container">
                    <Icon :icon="benefit.icon" :height="48"></Icon>
                </div>
                <div class="info-container">
                    <div class="benefit-name">{{ t(`benefitsJson.${ benefit.key }.name`) }}</div>
                    <div class="benefit-description">{{ t(`benefitsJson.${ benefit.key }.description`) }}</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import rawBenefits from '@/json/benefits.json';
import { INTERSECTION_ID, useIntersectionObserver } from "@/composables/useIntersectionObserver";
import { getRandomCode } from "@/utils/getRandomCode";
import { nextTick, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const benefits = rawBenefits.benefits.map(b => {
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

<style lang="scss" scoped>
/* Benefits section */
section.benefits-section {
    background-image: url('../../assets/svg/waves.svg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;

    overflow: hidden;
}

section.benefits-section .benefit-cards-container {
    padding: 0 5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

section.benefits-section .benefit-cards-container .benefit-card {
    max-width: 40rem;

    position: relative;
    translate: -30% 0;
    opacity: 0;

    transition-property: translate, opacity;
    transition-duration: 800ms;
    transition-timing-function: ease;

    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 1rem;
}

section.benefits-section .benefit-cards-container .benefit-card:nth-child(even) {
    translate: 30% 0;
    direction: rtl;
    align-self: flex-end;
}

section.benefits-section .benefit-cards-container .benefit-card:nth-child(even) .benefit-description,
section.benefits-section .benefit-cards-container .benefit-card:nth-child(even) .benefit-name {
    direction: ltr;
}

section.benefits-section .benefit-cards-container .benefit-card.visible {
    translate: 0 0;
    opacity: 1;
}

section.benefits-section .benefit-cards-container .benefit-card .benefit-name {
    font-size: 1rem;
    font-weight: 600;
}

section.benefits-section .benefit-cards-container .benefit-card .benefit-description {
    font-size: 0.875rem;
}

@media (max-width: $md) {
  section.benefits-section .benefit-cards-container {
    padding: 0 3rem;
  }
}

@media (max-width: $sm) {
  section.benefits-section .benefit-cards-container {
    padding: 0 1rem;
  }
}
</style>
