import { IVisibilityObserver } from "@/types/VisibilityObserver.interface";
import { onBeforeUnmount, onMounted, ref, Ref } from "vue";

export function useComponentsVisibility(root?: HTMLElement) {
    const observables = ref<IVisibilityObserver[]>([]);
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const observable = observables.value.find(v => v.element === entry.target);
            if (!observable) return;

            observable.isVisible = entry.isIntersecting;
        });
    });

    onMounted(() => {
        const elements = (root || document).querySelectorAll('.observable');
        elements.forEach(el => observer.observe(el));
    });

    onBeforeUnmount(() => observer.disconnect());
}
