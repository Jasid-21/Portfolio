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
import ContactSection from '@/components/sections/ContactSection.vue';
import HeroSection from '@/components/sections/HeroSection.vue';
import ServicesSection from '@/components/sections/ServicesSection.vue';
import TechnologiesSection from '@/components/sections/TechnologiesSection.vue';
import FooterSection from '@/components/sections/FooterSection.vue';
import BenefitsSection from '@/components/sections/BenefitsSection.vue';
import { useHead } from '@vueuse/head';
import { Analytics } from "@vercel/analytics/next"

useHead({
  title: 'Professional software and website development | HauntedByte',
  meta: [
    {
      name: 'description',
      content: 'We create custom websites, apps, and digital solutions to grow your business. Attractive, fast, and tailored to your needs.'
    },
    {
      property: 'og:title',
      content: 'Digital solutions and software development tailored to your needs.'
    },
    {
      property: 'og:description',
      content: 'From websites to complete platforms, we help you digitize your business with modern technology and dedicated support.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://hauntedbyte.site'
    },
    {
      property: 'og:image',
      content: 'https://www.hauntedbyte.site/hauntedbyte_preview.png'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Professional software and website development'
    },
    {
      name: 'twitter:description',
      content: 'We create customized digital solutions to make your business stand out.'
    },
    {
      name: 'twitter:image',
      content: 'https://www.hauntedbyte.site/hauntedbyte_preview.png'
    }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.hauntedbyte.site' }
  ]
});
</script>
