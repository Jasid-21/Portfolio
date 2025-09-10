<template>
  <Transition>
    <div class="drawer" v-if="show" ref="drawer">
      <h1 class="logo">
        <img src="../assets/images/logo.png">
        HauntedByte
      </h1>
      <br>
      <ul class="links-container">
        <li class="link-container"
          v-for="(l, idx) of links.links" :key="idx">
          <a :href="l.url" @click="closeDrawer" :class="{ accent: l.accent }">
            <Icon class="icon" :icon="l.icon" height="20"></Icon>
            <span class="link-name">{{ t(l.name) }}</span>
          </a>
        </li>
      </ul>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import links from '@/json/links.json';
import { Icon } from '@iconify/vue';
import { onClickOutside } from '@vueuse/core';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const emit = defineEmits(['closeDrawer']);
const props = defineProps({
  show: { type: Boolean, required: true },
});
const drawer = ref<HTMLElement>();
const closeDrawer = () => emit('closeDrawer');

//* Functions.
onClickOutside(drawer, closeDrawer);
</script>

<style scoped lang="scss">
.drawer {
  position: fixed;
  left: 0;
  top: 0;
  min-width: 250px;
  height: 100vh;

  padding: 2rem;

  background-color: rgba($color: $secondary, $alpha: 0.9);
  box-shadow: 2px 0 0.25rem 0 black;

  z-index: 1001;

  .logo {
    border-bottom: 1px solid $primary;
    margin: 0;
    padding-bottom: 1rem;
    font-size: 2.25rem;
    font-style: italic;
    color: $primary;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    img {
      width: 3.25rem;
      height: 3.25rem;
    }
  }

  .links-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 1rem;

    list-style: none;
    padding: 0;

    .link-container {
      width: 100%;
      height: min-content;
      border-radius: 6px;
      padding: 0.5rem !important;
      position: relative;
      transition: all 180ms ease;

      a {
        width: fit-content;
        color: inherit;
        text-decoration: none;
        position: relative;

        display: grid;
        grid-template-columns: 40px auto;
        align-items: center;

        .link-name {
          margin-left: 0.5rem;
        }

        &.accent::after {
          $size: 8px;
          position: absolute;
          content: '';
          width: $size;
          height: $size;
          background-color: purple;
          border-radius: 50%;
          top: 0.25rem;
          right: calc(($size + 0.75rem) * (-1));
        }
      }

      &:hover {
        background-color: $primary;
        color: white;
      }
    }
  }
}

.v-enter-from,
.v-leave-to {
  left: -400px;
}

.v-enter-to,
.v-leave-from {
  left: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 180ms ease;
}
</style>
