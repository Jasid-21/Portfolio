<template>
  <Transition>
    <div class="drawer" v-if="show" ref="drawer">
      <h1 class="logo">Siternet</h1>
      <br>
      <ul class="links-container">
        <li class="link-container" :class="{ accent: l.accent }"
          v-for="(l, idx) of links" :key="idx">
          <a :href="l.url">
            <fai class="icon" :icon="'fa-solid ' + l.icon" />
            <span class="link-name">{{ l.name }}</span>
          </a>
        </li>
      </ul>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import Link from '@/types/Link.type';
import { PropType, onMounted } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { ref } from 'vue';

//* Defined.
const emit = defineEmits(['closeDrawer']);
const props = defineProps({
  links: { type: Array as PropType<Link[]>, required: true, },
  show: { type: Boolean, required: true },
});
const drawer = ref<HTMLElement>();

//* Functions.
onClickOutside(drawer, () => {
  emit('closeDrawer');
});
</script>

<style scoped lang="scss">
.drawer {
  position: fixed;
  left: 0;
  top: 0;
  min-width: 250px;
  height: 100vh;

  padding: 2rem;

  background-color: $secondary;
  box-shadow: 2px 0 10px 0 black;

  z-index: 1001;

  .logo {
    border-bottom: 1px solid $primary;
    margin: 0;
    padding-bottom: 1rem;
    font-size: 3rem;
    font-style: italic;
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
        color: inherit;
        text-decoration: none;

        display: grid;
        grid-template-columns: 40px auto;

        * {
          align-self: flex-start;
        }

        .link-name {
          margin-left: 0.5rem;
        }
      }

      &:hover {
        background-color: $primary;
        color: white;
      }
    }

    .link-container.accent::after {
      $size: 8px;
      position: absolute;
      content: '';
      width: $size;
      height: $size;
      background-color: purple;
      border-radius: 50%;
      top: 6px;
      right: 50px;
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
