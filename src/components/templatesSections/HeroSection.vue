<template>
    <section class="hero-section">
        <div class="transparency-layer"></div>
        <h1>{{ t('templatesAndApps') }}</h1>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

//* Variables.
const showInfo = ref<boolean>(false);

setTimeout(() => {
    showInfo.value = true;
}, 180);
</script>

<style scoped lang="scss">
.hero-section {
    min-height: 35rem;
    background: url('../../assets/images/hero.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    padding: 7rem var(--x_pad) var(--y_pad);
    color: #fff;
    text-align: center;

    position: relative;
    isolation: isolate;

    display: flex;
    justify-content: center;
    align-items: center;

    .transparency-layer {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba($color: $primary, $alpha: 0.3);
        z-index: -1;
    }
}
</style>
