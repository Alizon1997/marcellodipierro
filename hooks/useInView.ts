import { useEffect, useState, useRef, useMemo, RefObject } from 'react';

export function useInView(options: IntersectionObserverInit = {}): [RefObject<HTMLDivElement>, boolean] {
    const ref = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);

    // Memoize options to avoid recreating observer on every render
    const threshold = options.threshold ?? 0.1;
    const rootMargin = options.rootMargin ?? '0px';
    const memoizedOptions = useMemo(
        () => ({ threshold, rootMargin }),
        [threshold, rootMargin]
    );

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                if (element) observer.unobserve(element);
            }
        }, memoizedOptions);

        observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, [memoizedOptions]);

    return [ref, isInView];
}
