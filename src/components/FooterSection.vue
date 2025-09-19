<template>
  <footer>
    <img src="@/assets/images/logo.png" alt="Logo" class="logo">
    <ul class="links-container">
      <li v-for="(l, idx) of links.links" :key="idx">
        <a :href="l.url" class="link">{{ t(l.name) }}</a>
      </li>
    </ul>
  </footer>
</template>

<script setup lang="ts">
import links from '@/json/links.json';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped lang="scss">
footer {
  $padding-y: 50px;
  padding-top: $padding-y;
  padding-bottom: $padding-y;

  background-color: $d_primary;
  font-weight: 600;
  color: white;

  display: grid;
  grid-template-columns: 70px auto;
  grid-template-rows: 1fr;
  column-gap: 1rem;

  .logo {
    max-width: 100% !important;
    max-height: 100% !important;

    justify-self: center;
    align-self: center;
  }

  .links-container {
    list-style: none;
    padding: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 4rem;
    row-gap: 0.3rem;
    font-weight: 400;
    font-size: 0.95rem;

    @media (max-width: 420px) {
      justify-content: flex-start;
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  }
}
</style>