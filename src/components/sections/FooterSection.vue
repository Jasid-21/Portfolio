<template>
  <footer>
    <img src="../../assets/images/logo.svg" alt="Logo" class="logo">
    <ul class="links-container">
      <li v-for="(l, idx) of links" :key="idx">
        <a :href="l.url" class="link">{{ l.name }}</a>
      </li>
    </ul>
  </footer>
</template>

<script setup lang="ts">
import j_links from '@/json/links.json';
import Link from '@/types/Link.type';

const links: Link[] = j_links.links;
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
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 0.3rem;
    row-gap: 0.3rem;

    a {
      color: inherit;
      text-decoration: none;
    }
  }
}
</style>