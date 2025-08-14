<template>
    <section class="benefits-section" id="benefits-section">
        <h2 class="section-title margin-0">Benefits</h2>
        <h6 class="section-subtitle">Why should you use a website?</h6>

        <div class="benefit-cards-container">
            <div class="benefit-card" v-for="benefit in benefits.benefits" :key="benefit.name">
                <div class="icon-container">
                    <Icon :icon="benefit.icon" :height="48"></Icon>
                </div>
                <div class="info-container">
                    <div class="benefit-name">{{ benefit.name }}</div>
                    <div class="benefit-description">{{ benefit.description }}</div>
                </div>
            </div>

            
        </div>
    </section>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import benefits from '@/json/benefits.json';
</script>

<style lang="scss" scoped>
/* Benefits section */
section.benefits-section {
    background-image: url('../../assets/svg/waves.svg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
}

section.benefits-section .benefit-cards-container {
    padding: 0 5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

section.benefits-section .benefit-cards-container .benefit-card {
    max-width: 40rem;

    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 1rem;
}

section.benefits-section .benefit-cards-container .benefit-card:nth-child(even) {
    direction: rtl;
    align-self: flex-end;
}

section.benefits-section .benefit-cards-container .benefit-card:nth-child(even) .benefit-description,
section.benefits-section .benefit-cards-container .benefit-card:nth-child(even) .benefit-name {
    direction: ltr;
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
