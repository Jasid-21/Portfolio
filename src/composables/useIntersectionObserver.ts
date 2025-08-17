import { onBeforeUnmount, onMounted, Ref, ref } from "vue";

export const INTERSECTION_ID = 'intersection-id';
const visibleElements = ref<string[]>([]);
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        const intId = e.target.getAttribute(INTERSECTION_ID);
        if (! intId) return;
        if (e.isIntersecting) {
            visibleElements.value.push(intId);

            observer.unobserve(e.target);
            return;
        }

        visibleElements.value = visibleElements.value.filter(v => v != intId);
    })
}, { threshold: 0.6 });

export function useIntersectionObserver() {
    const context = ref<HTMLElement>();

    let observedElements: Element[] = [];
    const observeElements = (els: NodeListOf<Element> | undefined) => {
        if (!els) return;

        observedElements.push(...els);
        els.forEach(el => observer.observe(el));
    } 

    onBeforeUnmount(() => observedElements.forEach(el => observer.unobserve(el)));

    window.addEventListener('beforeunload', () => observer.disconnect());

    return {
        observer,
        visibleElements,
        
        observedElements,
        observeElements,
        context
    }
}
