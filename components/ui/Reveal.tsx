import React from 'react';
import { useInView } from '../../hooks/useInView';

interface RevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

const Reveal: React.FC<RevealProps> = ({ children, className = "", delay = 0 }) => {
    const [ref, isInView] = useInView({ threshold: 0.1 });

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default Reveal;
