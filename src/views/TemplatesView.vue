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
import { useHead } from '@vueuse/head';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
useHead({
  title: "Website Templates | HauntedByte",
  meta: [
    {
      name: "description",
      content: computed(() => t('seo.templates.meta.description')),
    },
    {
      property: "og:title",
      content: computed(() => t('seo.templates.meta.og.title')),
    },
    {
      property: "og:description",
      content: computed(() => t('seo.templates.meta.og.description')),
    },
    {
      property: "og:url",
      content: "https://hauntedbyte.site/templates"
    },
    {
      property: "og:image",
      content: "https://www.hauntedbyte.site/templates_preview.png"
    },
    {
      name: "twitter:title",
      content: computed(() => t('seo.templates.meta.twitter.title')),
    },
    {
      name: "twitter:description",
      content: computed(() => t('seo.templates.meta.twitter.description')),
    },
    {
      name: "twitter:image",
      content: "https://www.hauntedbyte.site/templates_preview.png"
    }
  ],
  link: [
    { rel: "canonical", href: "https://www.hauntedbyte.site/templates" }
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "url": "https://www.hauntedbyte.site/templates",
        "name": "Website Templates",
        "description": "Collection of web templates and past projects by HauntedByte."
      })
    }
  ]
})

</script>

<style scoped>

</style>
