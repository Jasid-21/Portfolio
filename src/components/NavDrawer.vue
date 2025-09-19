<template>
  <Transition name="drawer" appear>
    <div v-if="show" class="nav-drawer">
      <div class="drawer-content">
        <!-- Header -->
        <div class="drawer-header">
          <div class="drawer-logo">
            <img src="../assets/images/logo.png" alt="HauntedByte Logo" class="drawer-logo-image">
            <span class="drawer-logo-text">HauntedByte</span>
          </div>
          <button 
            class="drawer-close-btn"
            @click="closeDrawer"
            aria-label="Close navigation menu"
          >
            <Icon icon="lucide:x" class="close-icon" />
          </button>
        </div>

        <!-- Navigation Links -->
        <nav class="drawer-nav">
          <ul class="drawer-links">
            <li 
              v-for="(link, idx) in links.links" 
              :key="idx"
              class="drawer-link-item"
            >
              <Transition
                name="link-slide"
                appear
                @enter="(el) => onLinkEnter(el as HTMLElement, idx)"
              >
                <a 
                  :href="link.url" 
                  @click="closeDrawer"
                  class="drawer-link"
                >
                  <div class="drawer-link-content">
                    <div class="drawer-link-icon" :class="{ 'drawer-link--accent': link.accent }">
                      <Icon :icon="link.icon" />
                    </div>
                    <span class="drawer-link-text">{{ t(link.name) }}</span>
                    <Icon icon="lucide:arrow-right" class="drawer-link-arrow" />
                  </div>
                  <div class="drawer-link-hover"></div>
                </a>
              </Transition>
            </li>
          </ul>
        </nav>

        <!-- Footer -->
        <div class="drawer-footer">
          <div class="drawer-footer-gradient"></div>
          <p class="drawer-footer-text">
            Crafted with ❤️ by HauntedByte
          </p>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import links from '@/json/links.json';
import { Icon } from '@iconify/vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const emit = defineEmits(['closeDrawer']);
defineProps({
  show: { type: Boolean, required: true },
});
const closeDrawer = () => emit('closeDrawer');

//* Functions.
const onLinkEnter = (el: HTMLElement, index: number) => {
  el.style.transform = 'translateX(50px)'
  el.style.opacity = '0'
  
  el.offsetHeight // trigger reflow
  
  setTimeout(() => {
    el.style.transition = 'all 0.4s ease'
    el.style.transform = 'translateX(0)'
    el.style.opacity = '1'
  }, index * 100)
}
</script>

<style scoped lang="scss">
.nav-drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 24rem;
  z-index: 9999;
  background: rgba(17, 24, 39, 0.95);
  backdrop-filter: blur(20px);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
}

.drawer-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}

/* Header */
.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
}

.drawer-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.drawer-logo-image {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
}

.drawer-logo-text {
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(135deg, #8b5cf6, #3b82f6);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.drawer-close-btn {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.drawer-close-btn:hover {
  background: rgba(239, 68, 68, 0.2);
  border-color: rgba(239, 68, 68, 0.3);
  transform: scale(1.05);
}

.close-icon {
  width: 1.25rem;
  height: 1.25rem;
}

/* Navigation */
.drawer-nav {
  flex: 1;
  padding: 2rem 0;
  overflow-y: auto;
}

.drawer-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.drawer-link-item {
  margin: 0;
  padding: 0 1.5rem;
}

.drawer-link {
  display: block;
  text-decoration: none;
  color: #d1d5db;
  position: relative;
  border-radius: 0.75rem;
  overflow: hidden;
  transition: all 0.3s ease;
}

.drawer-link-content {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  position: relative;
  z-index: 2;
}

.drawer-link-icon {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  overflow: hidden;
}

.drawer-link-icon svg {
  width: 1.25rem;
  height: 1.25rem;
}

.drawer-link-text {
  flex: 1;
  font-size: 1rem;
  font-weight: 500;
}

.drawer-link-arrow {
  width: 1rem;
  height: 1rem;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
}

.drawer-link-hover {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.1);
  opacity: 0;
  transition: all 0.3s ease;
}

/* Hover Effects */
.drawer-link:hover {
  color: white;
  transform: translateX(5px);
}

.drawer-link:hover .drawer-link-hover {
  opacity: 1;
}

.drawer-link:hover .drawer-link-icon {
  background: linear-gradient(135deg, #8b5cf6, #3b82f6);
  transform: scale(1.1);
}

.drawer-link:hover .drawer-link-arrow {
  opacity: 1;
  transform: translateX(0);
}

/* Accent Link */
.drawer-link--accent {
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: -0.125rem; right: -0.125rem;
    width: 0.625rem;
    height: 0.625rem;
    background-color: #8b5cf6;
    border-radius: 50%;
  }
}

.drawer-link--accent .drawer-link-hover {
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2));
}

.drawer-link--accent:hover .drawer-link-icon {
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
  transform: scale(1.15);
}

/* Footer */
.drawer-footer {
  position: relative;
  padding: 1.5rem;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.drawer-footer-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, #8b5cf6, #3b82f6, #8b5cf6);
}

.drawer-footer-text {
  color: #9ca3af;
  font-size: 0.875rem;
  margin: 0;
}

/* Transitions */
.drawer-enter-active,
.drawer-leave-active {
  transition: all 0.3s ease;
}

.drawer-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.drawer-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.link-slide-enter-active {
  transition: all 0.4s ease;
}

.link-slide-enter-from {
  transform: translateX(50px);
  opacity: 0;
}

/* Responsive */
@media (min-width: 1024px) {
  .nav-drawer {
    display: none;
  }
}

/* Custom scrollbar */
.drawer-nav::-webkit-scrollbar {
  width: 4px;
}

.drawer-nav::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
}

.drawer-nav::-webkit-scrollbar-thumb {
  background: rgba(139, 92, 246, 0.5);
  border-radius: 2px;
}

.drawer-nav::-webkit-scrollbar-thumb:hover {
  background: rgba(139, 92, 246, 0.7);
}
</style>
