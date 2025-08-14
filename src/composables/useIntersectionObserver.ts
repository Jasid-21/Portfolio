import { onBeforeUnmount, onMounted, Ref, ref } from "vue";

export function useIntersectionObserver(el: Ref<HTMLElement | undefined>, threshold: number = 0.3 ) {
    const isVisible = ref<boolean>(false);
    const observer = new IntersectionObserver(([entry]) => {
        isVisible.value = entry.isIntersecting;
    }, { threshold });

    onMounted(() => {
        if (!el.value) return;
        observer.observe(el.value)
    });
    onBeforeUnmount(() => observer.disconnect());

    return {
        isVisible,
    }
}
