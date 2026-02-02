import { useEffect, useState, useRef, RefObject } from 'react';

export function useInView(options: IntersectionObserverInit = {}): [RefObject<HTMLDivElement>, boolean] {
    const ref = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                // Once visible, we can stop observing if we only want the animation to trigger once
                if (element) observer.unobserve(element);
            }
        }, {
            threshold: 0.1,
            ...options
        });

        observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, [options]);

    return [ref, isInView];
}
