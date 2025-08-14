<template>
  <section class="services-section" id="services-section">
    <h2 class="section-title margin-0">Services</h2>
    <h6 class="section-subtitle">What we offer?</h6>

    <div class="services-container">
      <ServiceCard v-for="(s, idx) of services.services" :key="idx" :service="s" />
    </div>
  </section>
</template>

<script setup lang="ts">
import ServiceCard from '@/components/ServiceCard.vue';
import services from '@/json/services.json';
</script>

<style scoped lang="scss">
.services-section {
  background: url('../../assets/svg/services-bg.svg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .services-container {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    & > *:nth-child(even) {
      align-self: flex-end;
    }
  }
}
</style>
