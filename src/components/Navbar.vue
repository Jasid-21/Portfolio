<template>
  <nav class="navbar">
    <div class="navbar-container">
      <!-- Logo -->
      <RouterLink class="logo-container" to="/">
        <Transition name="logo-fade" mode="out-in">
          <div class="logo" v-if="!showDrawer" key="logo">
            <img src="../assets/images/logo.png" alt="HauntedByte Logo" class="logo-image">
            <span class="logo-text">HauntedByte</span>
          </div>
          <div v-else key="placeholder" class="logo-placeholder"></div>
        </Transition>
      </RouterLink>

      <!-- Desktop Navigation Links -->
      <div class="nav-links">
        <a 
          v-for="(link, idx) in links.links" 
          :key="idx"
          :href="link.url"
          class="nav-link"
          :class="{ 'nav-link--accent': link.accent }"
        >
          <Icon class="nav-icon" :icon="link.icon" />
          <span class="nav-text">{{ t(link.name) }}</span>
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        class="mobile-menu-btn"
        :class="{ 'mobile-menu-btn--active': showDrawer }"
        @click="openDrawer"
        aria-label="Toggle navigation menu"
      >
        <Transition name="menu-icon" mode="out-in">
          <Icon 
            v-if="!showDrawer" 
            key="menu"
            icon="lucide:menu" 
            class="menu-icon"
          />
          <Icon 
            v-else 
            key="close"
            icon="lucide:x" 
            class="menu-icon"
          />
        </Transition>
      </button>
    </div>

    <!-- Mobile Navigation Backdrop -->
    <Transition name="backdrop">
      <div 
        v-if="showDrawer" 
        class="nav-backdrop"
        @click="closeDrawer"
      ></div>
    </Transition>
  </nav>

  <!-- Navigation Drawer -->
  <NavDrawer 
    :links="links.links" 
    :show="showDrawer" 
    @close-drawer="closeDrawer" 
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NavDrawer from '@/components/NavDrawer.vue';
import links from '@/json/links.json';
import { useI18n } from 'vue-i18n';
import { RouterLink } from 'vue-router';
import { Icon } from '@iconify/vue';

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
  z-index: 1000;
  background: rgba(17, 24, 39, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.navbar-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
}

@media (min-width: 640px) {
  .navbar-container {
    padding: 0 1.5rem;
  }
}

@media (min-width: 1024px) {
  .navbar-container {
    padding: 0 2rem;
  }
}

/* Logo */
.logo-container {
  text-decoration: none;
  display: flex;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-image {
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(135deg, #8b5cf6, #3b82f6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.logo-placeholder {
  width: 2rem;
  height: 2rem;
}

/* Desktop Navigation */
.nav-links {
  display: none;
  align-items: center;
  gap: 2rem;
}

@media (min-width: 1024px) {
  .nav-links {
    display: flex;
  }
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  text-decoration: none;
  color: #d1d5db;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.5s ease;
}

.nav-link:hover::before {
  left: 100%;
}

.nav-link:hover {
  color: white;
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.nav-link--accent {
  &::after {
    content: '';
    position: absolute;
    top: 2px; right: 2px;
    width: 0.5rem;
    height: 0.5rem;
    background-color: #8b5cf6;
    border-radius: 50%;
  }
}

.nav-link--accent:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
}

.nav-icon {
  width: 1.25rem;
  height: 1.25rem;
}

.nav-text {
  font-size: 0.9rem;
}

/* Mobile Menu Button */
.mobile-menu-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

@media (min-width: 1024px) {
  .mobile-menu-btn {
    display: none;
  }
}

.mobile-menu-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
}

.mobile-menu-btn--active {
  background: linear-gradient(135deg, #8b5cf6, #3b82f6);
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
}

.menu-icon {
  width: 1.5rem;
  height: 1.5rem;
}

/* Backdrop */
.nav-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
}

/* Transitions */
.logo-fade-enter-active,
.logo-fade-leave-active {
  transition: all 0.3s ease;
}

.logo-fade-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.logo-fade-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.menu-icon-enter-active,
.menu-icon-leave-active {
  transition: all 0.2s ease;
}

.menu-icon-enter-from,
.menu-icon-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.8);
}

.backdrop-enter-active,
.backdrop-leave-active {
  transition: all 0.3s ease;
}

.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}

/* Scrolled state */
.navbar.scrolled {
  background: rgba(17, 24, 39, 0.95);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}
</style>
