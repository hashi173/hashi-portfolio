
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TrailDot {
    id: number;
    x: number;
    y: number;
    size: number;
    rotation: number;
    colorVariant: number;
    createdAt: number;
}

interface WatercolorTrailProps {
    containerRef: React.RefObject<HTMLElement | null>;
    isActive?: boolean;
}

// Soft ink wash colors - inspired by traditional thủy mặc
const inkColors = [
    { r: 70, g: 130, b: 180, a: 0.35 },  // Steel blue
    { r: 100, g: 149, b: 237, a: 0.3 },  // Cornflower
    { r: 65, g: 105, b: 185, a: 0.32 },  // Deeper blue
];

const WatercolorTrail: React.FC<WatercolorTrailProps> = ({ containerRef, isActive = true }) => {
    const [trails, setTrails] = useState<TrailDot[]>([]);
    const idCounter = useRef(0);
    const lastPos = useRef({ x: 0, y: 0 });
    const animationFrame = useRef<number>(0);

    const createTrailDot = useCallback((x: number, y: number) => {
        const id = idCounter.current++;
        const size = 100 + Math.random() * 100; // 100-200px - larger trails
        const rotation = Math.random() * 360;
        const colorVariant = Math.floor(Math.random() * inkColors.length);

        return {
            id,
            x,
            y,
            size,
            rotation,
            colorVariant,
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

                if (distance > 18) {
                    setTrails(prev => [...prev, createTrailDot(x, y)].slice(-30));
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

    // Fast fade - 1000ms lifetime
    useEffect(() => {
        const interval = setInterval(() => {
            const now = Date.now();
            setTrails(prev => prev.filter(dot => now - dot.createdAt < 1000));
        }, 50);

        return () => clearInterval(interval);
    }, []);

    if (!isActive) return null;

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-[5]">
            {/* SVG filter for organic ink wash effect */}
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                <defs>
                    <filter id="ink-wash" x="-50%" y="-50%" width="200%" height="200%">
                        {/* Create organic noise texture */}
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.015"
                            numOctaves="3"
                            seed="5"
                            result="noise"
                        />
                        {/* Displace edges organically */}
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="noise"
                            scale="12"
                            xChannelSelector="R"
                            yChannelSelector="G"
                            result="displaced"
                        />
                        {/* Heavy blur for ink diffusion */}
                        <feGaussianBlur
                            in="displaced"
                            stdDeviation="8"
                            result="blurred"
                        />
                        {/* Blend back for softness */}
                        <feBlend
                            in="blurred"
                            in2="SourceGraphic"
                            mode="normal"
                        />
                    </filter>
                </defs>
            </svg>

            <AnimatePresence>
                {trails.map((dot) => {
                    const age = Date.now() - dot.createdAt;
                    const lifeProgress = Math.min(age / 1000, 1);
                    const color = inkColors[dot.colorVariant];

                    // Smooth easing curves
                    const spreadProgress = 1 - Math.pow(1 - lifeProgress, 3);
                    const fadeProgress = Math.pow(lifeProgress, 0.6);

                    const currentOpacity = Math.max(0, color.a * (1 - fadeProgress));

                    return (
                        <motion.div
                            key={dot.id}
                            initial={{
                                scale: 0.4,
                                opacity: color.a,
                            }}
                            animate={{
                                scale: 1 + spreadProgress * 2,
                                opacity: currentOpacity,
                            }}
                            exit={{
                                scale: 2.5,
                                opacity: 0,
                            }}
                            transition={{
                                scale: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
                                opacity: { duration: 0.5, ease: 'easeOut' },
                            }}
                            style={{
                                position: 'absolute',
                                left: dot.x,
                                top: dot.y,
                                width: dot.size,
                                height: dot.size,
                                transform: 'translate(-50%, -50%)',
                                filter: 'url(#ink-wash)',
                            }}
                        >
                            {/* Inner ink blob - SVG for true organic shape */}
                            <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 100 100"
                                style={{ overflow: 'visible' }}
                            >
                                <defs>
                                    <radialGradient id={`ink-grad-${dot.id}`} cx="40%" cy="40%" r="60%">
                                        <stop offset="0%" stopColor={`rgba(${color.r}, ${color.g}, ${color.b}, 1)`} />
                                        <stop offset="40%" stopColor={`rgba(${color.r}, ${color.g}, ${color.b}, 0.6)`} />
                                        <stop offset="70%" stopColor={`rgba(${color.r}, ${color.g}, ${color.b}, 0.2)`} />
                                        <stop offset="100%" stopColor={`rgba(${color.r}, ${color.g}, ${color.b}, 0)`} />
                                    </radialGradient>
                                </defs>
                                <ellipse
                                    cx="50"
                                    cy="50"
                                    rx="45"
                                    ry="42"
                                    fill={`url(#ink-grad-${dot.id})`}
                                    transform={`rotate(${dot.rotation} 50 50)`}
                                />
                            </svg>
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </div>
    );
};

export default WatercolorTrail;
