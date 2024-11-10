<template>
  <section class="projects-section" id="projects-section">
    <h2 class="section-title">Projects</h2>
    <dis class="displayer" :class="{ complete: upcomming.length <= 0 }">
      <div class="done-projects">
        <ProjectCard v-for="(p, idx) of projects" :key="idx" :project="p" />
      </div>
      <div class="upcomming-projects" v-if="upcomming.length > 0">
        <h4 class="title">Work in progress</h4>
        <div class="items-container">
          <ProjectCard v-for="(p, idx) of upcomming" :key="idx" :project="p" />
        </div>
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

    &.complete {
      grid-template-columns: 1fr;
    }

    .done-projects {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      column-gap: 1rem;
      row-gap: 1rem;
      flex-wrap: wrap;
    }

    .upcomming-projects {
      border-left: 1px solid gray;

      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 60px auto;
      row-gap: 1rem;

      .title {
        justify-self: center;
        margin: 0;
        margin-bottom: 0.5rem;
      }

      .items-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        row-gap: 1rem;
      }
    }
  }
}

@media (max-width: 1147px) {
  .projects-section {
    .displayer {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;

      .done-projects {
        row-gap: 1rem;
      }

      .upcomming-projects {
        border: none;
        padding-top: 3rem;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;

        .items-container {
          flex-direction: row;
          justify-content: center;
          column-gap: 1rem;
          flex-wrap: wrap;
        }
      }
    }
  }
}
</style>
