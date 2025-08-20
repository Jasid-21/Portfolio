<template>
    <section class="templates-section">
        <div class="template-card" v-for="tmp in templates.templates" :key="tmp.name">
            <div class="preview-image-container">
                <img :src="tmp.imageUrl" :alt="tmp.name">

                <div class="visit-btn" @click="goToLink(tmp.link)">
                    <Icon icon="lucide:external-link"></Icon>
                </div>
            </div>

            <div class="info-container">
                <div class="template-name">{{ t(`templatesJson.${ tmp.name }.name`) }}</div>
                <div class="template-description">{{ t(`templatesJson.${ tmp.name }.description`) }}</div>
                <ul class="template-technologies">
                    <li class="technology" v-for="tech in tmp.technologies" :key="tech">{{ tech }}</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import templates from '@/json/templates.json';
import { Icon } from '@iconify/vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const goToLink = (link: string) => window.open(link);
</script>

<style lang="scss" scoped>
.templates-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.template-card {
    width: 100%;
    background-color: $l_secondary;
    padding: 1rem;

    border-radius: 0.5rem;

    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;

    .preview-image-container {
        width: 100%;
        max-width: 30rem;
        max-height: 15rem;
        position: relative;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .visit-btn {
            position: absolute;
            top: 0.5rem; right: 0.5rem;

            background-color: gray;
            color: #fff;
            border: 2px solid gray;
            border-radius: 0.25rem;
            font-weight: 600;
            padding: 0.25rem;

            transition-property: background-color, border-color;
            transition-duration: 180ms;
            transition-timing-function: ease;

            &:hover {
                background-color: $d_secondary;
                border-color: $d_secondary;
            }
        }
    }

    .info-container {
        display: grid;
        grid-template-rows: auto 1fr auto;
        gap: 0.5rem;

        .template-name {
            font-size: 1.125rem;
            font-weight: 600;
            border-bottom: 1px solid $secondary;
        }

        .template-technologies {
            margin: 0;
            color: $d_secondary;
            list-style: none;
            padding: 0;

            display: flex;
            justify-content: flex-end;
            flex-wrap: wrap;
            column-gap: 0.75rem;
        }
    }

    @media (max-width: $md) {
        grid-template-columns: 1fr;

        .preview-image-container {
            max-width: unset;
            max-height: unset;
            aspect-ratio: unset;
        }
    }
}
</style>
