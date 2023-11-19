<template>
  <section class="projects-section" id="projects-section">
    <h2 class="section-title">Projects</h2>
    <dis class="displayer">
      <div class="done-projects">
        <ProjectCard v-for="(p, idx) of projects" :key="idx" :project="p" />
      </div>
      <div class="upcomming-projects">
        <h4 class="title">Work in progress</h4>
        <ProjectCard v-for="(p, idx) of upcomming" :key="idx" :project="p" />
      </div>
    </dis>
  </section>
</template>

<script setup lang="ts">
import j_projects from '@/json/projects.json';
import Project from '@/types/Project.type';
import ProjectCard from '../ProjectCard.vue';

const projects: Project[] = j_projects.items;
const upcomming: Project[] = j_projects.developing;
</script>

<style scoped lang="scss">
.projects-section {
  .displayer {
    display: grid;
    grid-template-columns: 2fr 1fr;

    .done-projects {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      column-gap: 1rem;
      flex-wrap: wrap;
    }

    .upcomming-projects {
      border-left: 1px solid gray;

      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 1rem;

      .title {
        margin: 0;
        margin-bottom: 0.5rem;
      }
    }
  }
}

@media (max-width: 1147px) {
  .projects-section {
    .displayer {
      .done-projects {
        row-gap: 1rem;
      }
    }
  }
}
</style>
