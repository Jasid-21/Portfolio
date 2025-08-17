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
import { Analytics } from "@vercel/analytics/vue"
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
useHead({
  title: t('seo.title'),
  meta: [
    {
      name: 'description',
      content: t('seo.meta.description'),
    },
    {
      property: 'og:title',
      content: t('seo.meta.og.title'),
    },
    {
      property: 'og:description',
      content: t('seo.meta.og.description'),
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
      content: t('seo.meta.twitter.title'),
    },
    {
      name: 'twitter:description',
      content: t('seo.meta.twitter.description'),
    },
    {
      name: 'twitter:image',
      content: 'https://www.hauntedbyte.site/hauntedbyte_preview.png'
    }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.hauntedbyte.site' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "url": "https://hauntedbyte.site",
        "logo": "https://hauntedbyte.site/favicon.png"
      })
    }
  ],
});
</script>
