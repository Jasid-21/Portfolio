<template>
  <nav class="navbar">
    <RouterLink class="logo-container" to="/">
      <Transition name="fade">
        <h1 class="logo" v-if="!showDrawer">
          <img src="../assets/images/logo.png">
          HauntedByte
        </h1>

        <div v-else></div>
      </Transition>
    </RouterLink>
    <div class="links-container">
      <a class="link-container" v-for="(l, idx) of links.links" :key="idx"
        :class="{ important: l.accent }" :href="l.url">
        <fai class="icon" :icon="`fa-${ l.collection || 'solid' } ${ l.icon }`" />
        <span class="link-name">{{ t(l.name) }}</span>
      </a>
    </div>
    <div class="bars-button-container" @click="openDrawer">
      <fai icon="fa-solid fa-bars" />
    </div>
  </nav>

  <NavDrawer :links="links.links" :show="showDrawer" @close-drawer="closeDrawer" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NavDrawer from '@/components/NavDrawer.vue';
import links from '@/json/links.json';
import { useI18n } from 'vue-i18n';
import { RouterLink } from 'vue-router';

const { t } = useI18n();

const showDrawer = ref<boolean>(false);
const openDrawer = () => showDrawer.value = true;
const closeDrawer = () => showDrawer.value = false;
</script>

<style scoped lang="scss">
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  z-index: 1000;
  
  padding: 2rem var(--x_pad);
  background-color: rgba($color: $primary, $alpha: 0.9);
  color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo-container {
    color: inherit;
    text-decoration: none;
  }

  .logo {
    margin: 0;
    font-size: 2.25rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    img {
      width: 3.5rem;
      height: 3.5rem;
    }
  }
  .links-container {
    display: flex;
    align-items: center;
    column-gap: 1rem;

    .link-container {
      position: relative;
      border-radius: 6px;
      padding: 0.5rem;
      color: inherit;
      text-decoration: none;

      transition: all 180ms ease;

      &:hover {
        background-color: $secondary;
        color: $accent;
      }
      .link-name {
        margin-left: 0.5rem;
      }
    }

    .link-container.important::after {
      $size: 8px;
      position: absolute;
      content: '';
      width: $size;
      height: $size;
      background-color: purple;
      border-radius: 50%;
      top: 2px;
      right: 2px;
    }
  }

  .bars-button-container {
    font-size: 1.325rem;
    display: none;
  }

  .bars-button-container:hover {
    color: $secondary;
  }
}

@media (max-width: $lg) {
  .navbar {
    .links-container {
      .link-container {
        .icon {
          display: none;
        }
      }
    }
  }
}

@media (max-width: $cml) {
  .navbar {
    .links-container {
      display: none;
    }

    .bars-button-container {
      display: block;
    }
  }
}
</style>
