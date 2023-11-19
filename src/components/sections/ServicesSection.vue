<template>
  <section class="services-section" id="services-section">
    <h2 class="section-title">Services</h2>
    <ServiceCard v-for="(s, idx) of services" :key="idx" :service="s" />
  </section>
</template>

<script setup lang="ts">
import ServiceCard from '@/components/ServiceCard.vue';
import j_services from '@/json/services.json';
import Service from '@/types/Service.type';

const services: Service[] = j_services.services;
</script>

<style scoped lang="scss">
.services-section {
  background: url('../../assets/svg/services-bg.svg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}
</style>
