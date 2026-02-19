'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

import SplitText from '@/components/SplitText';
import HeroVisual from './HeroVisual';

export default function Hero() {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
            {/* Abstract Data Visualization Background */}
            <HeroVisual />

            <div className="z-10 text-center px-4 max-w-5xl mx-auto">


                <div className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 leading-tight">
                    <SplitText delay={0.8} className="block mb-2">브랜드의 각성,</SplitText>
                    <span className="text-primary neon-glow inline-block">
                        <SplitText delay={1.5} className="">AX로 기지개를 켜다.</SplitText>
                    </span>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    하품은 졸음이 아닌 <strong>'각성'</strong>의 신호입니다.<br />
                    정체된 브랜드가 다시 깨어나도록, AI 기술로 압도적인 마케팅 퍼포먼스를 만듭니다.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="flex flex-col md:flex-row gap-4 justify-center items-center"
                >
                    <Link
                        href="#contact"
                        className="px-8 py-4 bg-primary text-black font-bold text-lg rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(57,255,20,0.5)]"
                    >
                        무료 AI 진단 신청하기
                    </Link>
                    <Link
                        href="#solutions"
                        className="px-8 py-4 border border-zinc-700 text-zinc-300 font-medium text-lg rounded-full hover:border-primary hover:text-primary transition-all duration-300"
                    >
                        HAGO Engine 알아보기
                    </Link>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
            >
                <ArrowDown className="w-6 h-6" />
            </motion.div>
        </section>
    );
}
