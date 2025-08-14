<template>
  <div class="project-card" @click="goToProject">
    <img :src="require('@/assets/images/projects' + project.img)"
      :alt="project.name" class="project-img">
    <div class="info-container">
      <span class="project-name">{{ project.name }}</span>
      <br>
      <span class="technologies">
        {{ project.technologies.toString().replaceAll(',', ', ') }}
      </span>
    </div>
    <div class="badge" :class="project.type">{{ project.type }}</div>
  </div>
</template>

<script setup lang="ts">
import Project from '@/types/Project.type';
import { PropType } from 'vue';

const props = defineProps({
  project: { type: Object as PropType<Project>, required: true },
});

//* Functions.
const goToProject = () => {
  const website = props.project.link;
  window.open(website, "_blank") || window.location.replace(website);
}
</script>

<style scoped lang="scss">
.project-card {
  width: 100%;
  max-width: 300px;
  height: 200px;

  position: relative;
  border-radius: 10px;
  overflow: hidden;

  box-shadow: 0 0 5px $primary;

  .project-img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    transition: scale 180ms ease;
    cursor: pointer;
  }

  .info-container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    min-height: 50px;
    padding: 0.5rem;

    background-color: rgba($color: $secondary, $alpha: 0.95);

    opacity: 0;
    transition: opacity 180ms ease;
    cursor: pointer;

    .project-name {
      font-size: 0.875rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    .technologies {
      font-size: 0.8rem;
      font-weight: 600;
      color: rgb(83, 83, 83);
    }
  }

  &:hover {
    .info-container {
      opacity: 1;
    }

    .project-img {
      scale: 1.2;
    }

    .info-container {
      opacity: 1;
    }
  }

  .badge {
    min-width: 3rem;
    text-align: center;
    font-size: 0.75rem;
    font-weight: 700;
    font-style: italic;
    padding: 0.3rem 0.5rem;

    border-radius: 0.5rem;

    position: absolute;
    top: 10px;
    right: 10px;
  }

  .badge.App {
    --base-color: rgb(153, 37, 153);
    background-color: var(--base-color);
    border: 1px solid color-mix(in srgb, var(--base-color), #000 40%);
    color: #fff;
  }

  .badge.Website {
    --base-color: rgb(37, 37, 165);
    background-color: var(--base-color);
    border: 1px solid color-mix(in srgb, var(--base-color), #000 40%);
    color: #fff;
  }
}
</style>
