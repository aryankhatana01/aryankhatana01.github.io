
import React, { useEffect, useRef } from 'react';

interface RevealAnimationProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const RevealAnimation: React.FC<RevealAnimationProps> = ({ 
  children, 
  delay = 0,
  className = '' 
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animated');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div ref={ref} data-animate className={className}>
      {children}
    </div>
  );
};

export default RevealAnimation;
