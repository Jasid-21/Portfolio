<template>
    <div class="templates-view">
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <TemplatesSection></TemplatesSection>
        <FooterSection></FooterSection>
    </div>
</template>

<script setup lang="ts">
import FooterSection from '@/components/FooterSection.vue';
import Navbar from '@/components/Navbar.vue';
import HeroSection from '@/components/templatesSections/HeroSection.vue';
import TemplatesSection from '@/components/templatesSections/TemplatesSection.vue';
</script>

<style scoped>

</style>
