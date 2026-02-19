'use client';

import { motion } from 'framer-motion';

export default function HeroVisual() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Central Glowing Core - Faster Pulse */}
            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                    duration: 2, // Faster pulse
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[100px]"
            />

            {/* Rotating Data Rings - Faster Rotation */}
            <motion.div
                animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                transition={{
                    rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                    scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/30 rounded-full border-dashed"
            />

            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-zinc-700/50 rounded-full"
            />

            <motion.div
                animate={{ rotate: 180, scale: [1, 1.1, 1] }}
                transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-dashed border-zinc-700/30 rounded-full"
            />

            {/* Floating Particles / Data Points - More Active */}
            {[...Array(30)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary rounded-full shadow-[0_0_10px_rgba(57,255,20,0.8)]"
                    initial={{
                        x: Math.random() * 1200 - 600,
                        y: Math.random() * 1200 - 600,
                        opacity: 0,
                        scale: 0,
                    }}
                    animate={{
                        y: [null, Math.random() * -200],
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                    }}
                    transition={{
                        duration: Math.random() * 2 + 1.5, // Faster duration
                        repeat: Infinity,
                        delay: Math.random() * 1,
                        ease: "easeInOut",
                    }}
                    style={{
                        top: '50%',
                        left: '50%',
                    }}
                />
            ))}

            {/* Grid Lines */}
            <div
                className="absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent)]"
                style={{
                    backgroundImage: 'linear-gradient(rgba(57, 255, 20, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(57, 255, 20, 0.1) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }}
            />

            {/* Scanning Line Effect - Faster */}
            <motion.div
                animate={{ top: ['0%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/80 to-transparent w-full blur-[2px]"
            />
        </div>
    );
}
