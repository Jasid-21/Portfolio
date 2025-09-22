<template>
  <div class="home">
    <Navbar />
    <HeroSection />
    <BenefitsSection />
    <ServicesSection />
    <TechnologiesSection />
    <ContactSection />
    <FooterSection />
  </div>
  <Analytics />
</template>

<script lang="ts" setup>
import Navbar from '@/components/Navbar.vue';
import ContactSection from '@/components/homeSections/ContactSection.vue';
import HeroSection from '@/components/homeSections/HeroSection.vue';
import ServicesSection from '@/components/homeSections/ServicesSection.vue';
import TechnologiesSection from '@/components/homeSections/TechnologiesSection.vue';
import FooterSection from '@/components/FooterSection.vue';
import BenefitsSection from '@/components/homeSections/BenefitsSection.vue';
import { Analytics } from "@vercel/analytics/vue";

</script>
