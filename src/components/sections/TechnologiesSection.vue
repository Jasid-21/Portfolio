<template>
  <section class="technologies-section" id="technologies-section">
    <h2 class="section-title">Technologies</h2>
    <div class="displayer">
      <div class="language" v-for="(l, idx) in languages" :key="idx" :style="{ color: l.color }">
        <span class="language-title">{{ l.name }}</span>
        <br>
        <fai class="icon" :icon="'fa-brands ' + l.icon" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import j_languages from '@/json/languages.json';
import Language from '@/types/Language.type';

const languages: Language[] = j_languages.languages;
</script>

<style scoped lang="scss">
.technologies-section {
  .displayer {
    display: flex;
    justify-content: space-around;
    row-gap: 2rem;
    column-gap: 2rem;
    flex-wrap: wrap;
    overflow: hidden;

    .language {
      width: min-content;
      text-align: center;
      font-weight: 700;

      .language-title {
        color: $text;
      }
      .icon {
        font-size: 5rem;
      }
    }
  }
}
</style>
