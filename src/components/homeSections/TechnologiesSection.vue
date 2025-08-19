<template>
  <section class="technologies-section" id="technologies-section">
      <h2 class="section-title">{{ t('technologies') }}</h2>
      <h4 class="section-subtitle"></h4>
      <div class="languages-container">
          <div class="language" v-for="(l, idx) in languages.languages" :key="idx"
              :style="{ color: l.color }">
              <div class="language-name">{{ l.name }}</div>
              <Icon :icon="l.icon" :height="96"></Icon>
          </div>
      </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import languages from '@/json/languages.json';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped lang="scss">
/* Technologies section */
section.technologies-section .languages-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    flex-wrap: wrap;
    flex-shrink: 0;
    gap: 1rem;
}

section.technologies-section .languages-container .language-name {
    font-size: 1rem;
    text-align: center;
}
</style>
