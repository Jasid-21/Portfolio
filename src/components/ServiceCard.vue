<template>
  <div class="service-card">
    <div class="image-container">
      <img :src="require('@/assets/images/services/' + service.imgUrl)"
        :alt="service.name" class="service-img" v-if="service.imgUrl">
      <div class="info-layer">
        <h4 class="service-name">{{ service.name }}</h4>
      </div>
    </div>
    <div class="info-container">
      <p class="description">
        {{ service.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Service from '@/types/Service.type';
import { PropType } from 'vue';

const props = defineProps({
  service: { type: Object as PropType<Service>, required: true },
});
</script>

<style scoped lang="scss">
.service-card {
  width: 100%;
  max-width: 800px;
  min-height: 220px;

  background-color: $primary;
  border-radius: 10px;
  color: white;
  overflow: hidden;

  box-shadow: 0 0 8px black;

  display: grid;
  grid-template-columns: 15rem auto;

  .image-container {
    position: relative;
    display: flex;

    .service-img {
      width: 100%;
      height: 100%;

      object-fit: cover;
    }

    .info-layer {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;

      padding: 0.5rem;
      background-color: rgba($color: black, $alpha: 0.7);

      display: flex;
      justify-content: center;
      align-items: center;

      .service-name {
        margin: 0;
        text-align: center;
      }
    }
  }

  .info-container {
    font-size: 0.95rem;
    padding: 1rem;
    display: flex;
    align-items: center;
  }
}

@media (max-width: $xsm) {
  .service-card {
    grid-template-columns: 1fr;
    grid-template-rows: 150px auto;
  }
}
</style>
