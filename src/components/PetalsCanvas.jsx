import React, { useEffect, useRef } from 'react';

/**
 * PetalsCanvas
 * Realistic falling rose petals & golden foil confetti with gentle wind physics,
 * 3D tumbling rotation, and interactive cursor deflection.
 */
const PetalsCanvas = ({ count = 48, active = true }) => {
    const canvasRef = useRef(null);
    const mousePos = useRef({ x: -1000, y: -1000, radius: 120 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const handleResize = () => {
            if (!canvas) return;
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        const handleMouseMove = (e) => {
            mousePos.current.x = e.clientX;
            mousePos.current.y = e.clientY;
        };

        const handleTouchMove = (e) => {
            if (e.touches && e.touches[0]) {
                mousePos.current.x = e.touches[0].clientX;
                mousePos.current.y = e.touches[0].clientY;
            }
        };

        const handleMouseLeave = () => {
            mousePos.current.x = -1000;
            mousePos.current.y = -1000;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        // Petal & Confetti Colors
        const COLORS = [
            'rgba(214, 104, 116, 0.82)', // Deep blush rose
            'rgba(230, 152, 155, 0.85)', // Soft pink petal
            'rgba(244, 172, 183, 0.78)', // Pale rose
            'rgba(201, 150, 62, 0.88)',  // Shimmering gold foil
            'rgba(212, 175, 55, 0.85)',  // Royal gold
            'rgba(238, 203, 140, 0.80)', // Champagne gold
            'rgba(184, 89, 64, 0.75)',   // Warm terracotta
        ];

        // Create particles
        const particles = Array.from({ length: count }).map(() => ({
            x: Math.random() * width,
            y: Math.random() * height - height,
            size: Math.random() * 8 + 6,
            aspectRatio: Math.random() * 0.5 + 0.9, // petal aspect
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
            speedY: Math.random() * 1.2 + 0.8,
            speedX: Math.random() * 0.8 - 0.4,
            sway: Math.random() * 0.03 + 0.015,
            swayOffset: Math.random() * Math.PI * 2,
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.03,
            flip: Math.random() * Math.PI,
            flipSpeed: Math.random() * 0.04 + 0.01,
            isPetal: Math.random() > 0.35 // 65% rose petals, 35% gold foil confetti
        }));

        const drawPetal = (ctx, p) => {
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation);
            ctx.scale(Math.cos(p.flip), 1);

            ctx.fillStyle = p.color;

            if (p.isPetal) {
                // Organic rose petal curve
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.bezierCurveTo(
                    -p.size * 0.8, -p.size * 0.6,
                    -p.size * 0.8, p.size * 0.6,
                    0, p.size * 1.2
                );
                ctx.bezierCurveTo(
                    p.size * 0.8, p.size * 0.6,
                    p.size * 0.8, -p.size * 0.6,
                    0, 0
                );
                ctx.fill();

                // Gentle petal highlight
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
                ctx.lineWidth = 0.6;
                ctx.stroke();
            } else {
                // Golden confetti rectangle
                ctx.beginPath();
                ctx.rect(-p.size * 0.5, -p.size * 0.3, p.size, p.size * 0.6);
                ctx.fill();
            }

            ctx.restore();
        };

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            particles.forEach((p) => {
                p.swayOffset += p.sway;
                p.y += p.speedY;
                p.x += Math.sin(p.swayOffset) * 0.9 + p.speedX;
                p.rotation += p.rotationSpeed;
                p.flip += p.flipSpeed;

                // Mouse deflection interaction
                const dx = p.x - mousePos.current.x;
                const dy = p.y - mousePos.current.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < mousePos.current.radius) {
                    const force = (mousePos.current.radius - dist) / mousePos.current.radius;
                    p.x += (dx / dist) * force * 3.5;
                    p.y += (dy / dist) * force * 2.5;
                }

                // Wrap around edges
                if (p.y > height + 20) {
                    p.y = -20;
                    p.x = Math.random() * width;
                }
                if (p.x > width + 20) p.x = -20;
                if (p.x < -20) p.x = width + 20;

                drawPetal(ctx, p);
            });

            if (active) {
                animationFrameId = requestAnimationFrame(render);
            }
        };

        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [count, active]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[1] w-full h-full"
            style={{ opacity: 0.9 }}
        />
    );
};

export default PetalsCanvas;
