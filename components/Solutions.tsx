'use client';

import { motion } from 'framer-motion';
import { Cpu, Search, PenTool, Database, Stethoscope, FileText, Clock, TrendingUp, Smile, Zap } from 'lucide-react';

const technologies = [
    {
        icon: <Search className="w-8 h-8" />,
        tool: "HAGO Scanner (스캐너)",
        title: "경쟁 병원이 놓친 '노다지' 키워드만 골라냅니다",
        desc: "실시간 웹 검색과 데이터 리서치를 통해 우리 지역구 경쟁사가 아직 점유하지 못한 틈새 키워드를 발굴합니다.\n\n단순 조회가 아닌, 실제 내원으로 이어질 '구매 직전' 환자들의 검색 경로를 장악합니다.",
        color: "bg-blue-500/10 text-blue-500 border-blue-500/20"
    },
    {
        icon: <Cpu className="w-8 h-8" />,
        tool: "HAGO Brain (브레인)",
        title: "3,400개 병원 데이터가 말해주는 필승 전략을 세웁니다",
        desc: "숨메디텍의 방대한 네트워크 데이터를 기반으로, 우리 병원에 최적화된 마케팅 예산 분배와 진료 특화 포지셔닝을 제안합니다.\n\n감에 의존하는 마케팅이 아닌, 1%의 초격차 병원들이 선택하는 검증된 로직을 적용합니다.",
        color: "bg-purple-500/10 text-purple-500 border-purple-500/20"
    },
    {
        icon: <PenTool className="w-8 h-8" />,
        tool: "HAGO Persona (페르소나)",
        title: "원장님의 진료 철학을 100% 모사한 맞춤형 글쓰기",
        desc: "원장님이 쓰신 전문 논문, 칼럼, 평소 상담 말투를 AI가 학습하여 대행사 느낌 없는 '진짜 원장님의 글'을 발행합니다.\n\n의료법 위반 소지가 있는 단어는 AI가 1차로 필터링하여 행정 처분의 리스크까지 최소화합니다.",
        color: "bg-green-500/10 text-green-500 border-green-500/20"
    },
];

export default function Solutions() {
    return (
        <section id="solutions" className="bg-black overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20" />

            <div className="container mx-auto px-6 py-20 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black mb-4"
                    >
                        The <span className="text-primary italic">HAGO</span> Engine
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-400 text-lg max-w-2xl mx-auto"
                    >
                        4대의 AI 워크스테이션이 24시간 멈추지 않고 돌아갑니다.<br />
                        인간의 한계를 뛰어넘는 분석력과 생산성을 경험하세요.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className={`p-8 rounded-[2.5rem] border ${tech.color} bg-opacity-5 backdrop-blur-sm group hover:bg-opacity-10 shadow-xl`}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className={`p-4 rounded-2xl inline-block ${tech.color} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}>
                                    {tech.icon}
                                </div>
                                <span className={`text-xl font-black ${tech.color.split(' ')[1]}`}>{tech.tool}</span>
                            </div>
                            <h3 className="text-2xl font-black text-white mb-6 group-hover:text-primary transition-colors leading-tight tracking-tight">{tech.title}</h3>
                            <p className="text-zinc-400 leading-relaxed whitespace-pre-line text-base font-medium">{tech.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
