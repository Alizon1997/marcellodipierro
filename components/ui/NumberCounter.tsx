import React, { useState, useEffect, useRef } from 'react';

interface NumberCounterProps {
    end: number | string;
    duration?: number;
    prefix?: string;
    suffix?: string;
    className?: string;
}

const NumberCounter: React.FC<NumberCounterProps> = ({
    end,
    duration = 2000,
    prefix = '',
    suffix = '',
    className = ''
}) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    // Parse the end value - handle strings like "90gg", "100%", "4°"
    const parseValue = (val: number | string): number => {
        if (typeof val === 'number') return val;
        const numMatch = val.match(/[\d.]+/);
        return numMatch ? parseFloat(numMatch[0]) : 0;
    };

    const endNumber = parseValue(end);

    // Extract suffix from end value if not provided
    const extractedSuffix = typeof end === 'string'
        ? end.replace(/[\d.]+/, '').trim()
        : '';

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    useEffect(() => {
        if (!isVisible) return;

        const startTime = performance.now();
        const startValue = 0;

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function (ease-out-cubic)
            const easeOut = 1 - Math.pow(1 - progress, 3);

            const currentCount = Math.floor(startValue + (endNumber - startValue) * easeOut);
            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(endNumber);
            }
        };

        requestAnimationFrame(animate);
    }, [isVisible, endNumber, duration]);

    const displaySuffix = suffix || extractedSuffix;

    return (
        <span ref={ref} className={className}>
            {prefix}{count}{displaySuffix}
        </span>
    );
};

export default NumberCounter;
