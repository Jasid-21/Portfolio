<template>
  <div class="home">
    <Navbar />
    <HeroSection />
    <ProjectsSection />
    <ServicesSection />
    <TechnologiesSection />
    <ContactSection />
  </div>
</template>

<script lang="ts" setup>
import Navbar from '@/components/Navbar.vue';
import ContactSection from '@/components/sections/ContactSection.vue';
import HeroSection from '@/components/sections/HeroSection.vue';
import ProjectsSection from '@/components/sections/ProjectsSection.vue';
import ServicesSection from '@/components/sections/ServicesSection.vue';
import TechnologiesSection from '@/components/sections/TechnologiesSection.vue';
</script>
