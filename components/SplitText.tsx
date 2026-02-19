'use client';

import { motion } from 'framer-motion';

interface SplitTextProps {
    children: string;
    className?: string;
    delay?: number;
}

export default function SplitText({ children, className = '', delay = 0 }: SplitTextProps) {
    const characters = children.split('');

    return (
        <span className={className}>
            {characters.map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: delay + index * 0.05,
                        type: 'spring',
                        damping: 12,
                        stiffness: 100,
                    }}
                    className="inline-block"
                >
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </span>
    );
}
