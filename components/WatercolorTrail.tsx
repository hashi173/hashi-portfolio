
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TrailDot {
    id: number;
    x: number;
    y: number;
    size: number;
    createdAt: number;
}

interface WatercolorTrailProps {
    containerRef: React.RefObject<HTMLElement | null>;
    isActive?: boolean;
}

const WatercolorTrail: React.FC<WatercolorTrailProps> = ({ containerRef, isActive = true }) => {
    const [trails, setTrails] = useState<TrailDot[]>([]);
    const idCounter = useRef(0);
    const lastPos = useRef({ x: 0, y: 0 });
    const animationFrame = useRef<number>(0);

    const createTrailDot = useCallback((x: number, y: number) => {
        const id = idCounter.current++;
        const size = 100 + Math.random() * 80; // 100-180px

        return {
            id,
            x,
            y,
            size,
            createdAt: Date.now(),
        };
    }, []);

    useEffect(() => {
        if (!isActive) return;

        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e: MouseEvent) => {
            cancelAnimationFrame(animationFrame.current);

            animationFrame.current = requestAnimationFrame(() => {
                const rect = container.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                if (x < 0 || x > rect.width || y < 0 || y > rect.height) return;

                const dx = x - lastPos.current.x;
                const dy = y - lastPos.current.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance > 25) {
                    setTrails(prev => [...prev, createTrailDot(x, y)].slice(-20));
                    lastPos.current = { x, y };
                }
            });
        };

        container.addEventListener('mousemove', handleMouseMove, { passive: true });

        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrame.current);
        };
    }, [containerRef, isActive, createTrailDot]);

    // Smooth cleanup with interval
    useEffect(() => {
        const interval = setInterval(() => {
            const now = Date.now();
            setTrails(prev => prev.filter(dot => now - dot.createdAt < 2000));
        }, 100);

        return () => clearInterval(interval);
    }, []);

    if (!isActive) return null;

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-[5]">
            <svg className="absolute inset-0 w-full h-full">
                <defs>
                    <filter id="watercolor-blur" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="25" />
                    </filter>
                </defs>
            </svg>

            <AnimatePresence>
                {trails.map((dot) => {
                    const age = Date.now() - dot.createdAt;
                    const lifeProgress = Math.min(age / 2000, 1); // 0 to 1 over 2 seconds

                    return (
                        <motion.div
                            key={dot.id}
                            initial={{
                                scale: 0.3,
                                opacity: 0.6,
                            }}
                            animate={{
                                scale: 1 + lifeProgress * 0.8,
                                opacity: Math.max(0, 0.5 - lifeProgress * 0.5),
                            }}
                            exit={{
                                scale: 2,
                                opacity: 0,
                            }}
                            transition={{
                                scale: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
                                opacity: { duration: 1.5, ease: 'easeOut' },
                            }}
                            style={{
                                position: 'absolute',
                                left: dot.x,
                                top: dot.y,
                                width: dot.size,
                                height: dot.size,
                                borderRadius: '50%',
                                background: `radial-gradient(circle at 35% 35%, 
                  rgba(0, 119, 182, 0.5), 
                  rgba(0, 150, 199, 0.3) 35%, 
                  rgba(0, 180, 216, 0.15) 60%, 
                  transparent 85%)`,
                                transform: 'translate(-50%, -50%)',
                                filter: 'blur(30px)',
                                mixBlendMode: 'multiply',
                                willChange: 'transform, opacity',
                            }}
                        />
                    );
                })}
            </AnimatePresence>
        </div>
    );
};

export default WatercolorTrail;
