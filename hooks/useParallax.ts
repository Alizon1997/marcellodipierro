import { useEffect, useRef } from 'react';

/**
 * A hook that returns a ref to be attached to a DOM element.
 * The element will translate vertically based on the window scroll position * speed.
 * 
 * @param speed - The speed factor. 
 * Positive values (e.g. 0.1) make the element move down as you scroll down (appearing slower/farther).
 * Negative values (e.g. -0.1) make it move up faster than scroll (appearing closer).
 */
export const useParallax = (speed: number = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const updatePosition = () => {
      if (!ref.current) return;
      
      const scrollY = window.scrollY;
      // Apply translation using translate3d for GPU acceleration
      const offset = scrollY * speed;
      ref.current.style.transform = `translate3d(0, ${offset}px, 0)`;
    };

    const onScroll = () => {
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // Initial position check
    updatePosition();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed]);

  return ref;
};