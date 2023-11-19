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

  box-shadow: 0 0 10px black;

  .project-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .info-container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    min-height: 50px;
    padding: 0.5rem;

    background-color: rgba($color: $secondary, $alpha: 0.8);

    .project-name {
      font-size: 1.2rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    .technologies {
      font-size: 0.8rem;
      font-weight: 600;
      color: rgb(83, 83, 83);
    }
  }

  .badge {
    font-size: 0.9rem;
    font-weight: 700;
    font-style: italic;
    padding: 0.3rem;

    border-radius: 6px;

    position: absolute;
    top: 10px;
    right: 10px;
  }

  .badge.App {
    background-color: rgb(199, 100, 199);
    border: 1px solid purple;
  }

  .badge.Website {
    background-color: rgb(100, 102, 199);
    border: 1px solid blue;
  }
}
</style>
