<template>
  <router-view/>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
onMounted(() => {
  const language = navigator.language.split('-')[0];
  locale.value = ['es', 'en'].includes(language) ? language : 'en';
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Anek%20Kannada:700|Anek%20Kannada:400');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-primary);
}

* {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  text-decoration: none;
}

html, body {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

html {
  background-color: $background;
}

section, footer {
  padding: 100px var(--x_pad);
}

body {
  font-family: 'Anek Kannada';
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Anek Kannada';
  font-weight: 700;
  margin: 0;
}

html {font-size: 100%;} /* 16px */

h1 {font-size: 4.210rem; /* 67.36px */}

h2 {font-size: 3.158rem; /* 50.56px */}

h3 {font-size: 2.369rem; /* 37.92px */}

h4 {font-size: 1.777rem; /* 28.48px */}

h5 {font-size: 1.333rem; /* 21.28px */}

h6, small {font-size: 0.750rem; /* 12px */}

.link-item {
  cursor: pointer;
}

.section-title {
  text-align: center;

  margin: 0 0 4rem;
  display: block;
}

.section-subtitle {
  font-weight: 600;
  text-align: center;
  margin: 0 0 4rem;
}

.important {
  color: $accent;
}

.input-height {
  height: 2.25rem;
}

.margin-0 {
  margin: 0;
}

.gradient-text {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Button styles */
.btn-primary {
  background: var(--gradient-primary);
  color: var(--text-primary);
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-glow);
}

.btn-primary:before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.btn-primary:hover:before {
  left: 100%;
}
</style>
