<template>
  <div class="home">
    <Navbar />
    <HeroSection />
    <ProjectsSection />
  </div>
</template>

<script lang="ts" setup>
import Navbar from '@/components/Navbar.vue';
import HeroSection from '@/components/sections/HeroSection.vue';
import ProjectsSection from '@/components/sections/ProjectsSection.vue';
</script>
