'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function ProblemInsight() {
    return (
        <section id="packages" className="bg-zinc-950 overflow-hidden">
            <div className="container mx-auto px-6 py-20 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-start">

                    {/* Left: Problem Statement */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/50 bg-red-950/30 text-red-500 text-sm font-bold mb-6">
                                <AlertTriangle className="w-4 h-4" />
                                <span>WARNING</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-[1.2] tracking-tight">
                                여전히 <span className="text-zinc-600 line-through decoration-red-500/70 decoration-[6px]">과거의 방식</span>에<br />
                                머물러 있습니까?
                            </h2>
                            <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
                                대부분의 병의원 및 기업이 비효율적인 마케팅에 예산을 낭비하고 있습니다.
                                데이터 없는 감과 느린 실행력으로는 더 이상 경쟁에서 이길 수 없습니다.
                            </p>
                        </div>

                        <div className="space-y-4 max-w-lg">
                            <div className="flex items-center gap-5 p-5 border border-zinc-800 rounded-2xl bg-zinc-900/30 hover:border-zinc-700 transition-colors group">
                                <div className="text-zinc-700 text-3xl font-black group-hover:text-red-500/50 transition-colors">01</div>
                                <div>
                                    <h3 className="text-lg font-bold text-zinc-200 mb-1">비효율적 리소스</h3>
                                    <p className="text-sm text-zinc-500">인간의 한계로 인한 막대한 시간과 기회비용 발생</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 p-5 border border-zinc-800 rounded-2xl bg-zinc-900/30 hover:border-zinc-700 transition-colors group">
                                <div className="text-zinc-700 text-3xl font-black group-hover:text-red-500/50 transition-colors">02</div>
                                <div>
                                    <h3 className="text-lg font-bold text-zinc-200 mb-1">낮은 데이터 정확도</h3>
                                    <p className="text-sm text-zinc-500">경쟁사 분석과 시장 트렌드 파악의 치명적 한계</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: The Solution Insight */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="bg-zinc-900 rounded-[2.5rem] p-10 border border-zinc-800 relative z-10 shadow-2xl">
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-[80px]"></div>

                            <div className="flex items-center gap-2 text-primary font-bold mb-8 tracking-wider text-sm">
                                <TrendingUp className="w-5 h-5" />
                                <span>THE INSIGHT</span>
                            </div>

                            <p className="text-2xl md:text-3xl font-black leading-[1.4] mb-10 text-white tracking-tight">
                                "마케팅으로 번 돈, <br />
                                <span className="text-primary italic">청구 실수로 잃지 않게</span><br /> 해드립니다."
                            </p>

                            <div className="space-y-8">
                                <div className="flex gap-5 group">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-black text-sm">
                                        01
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-lg font-bold text-white flex items-center gap-2">
                                            AI 사전 점검(ROI)
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                                        </h4>
                                        <p className="text-zinc-400 text-sm leading-relaxed">
                                            심평원 청구 전 삭감 패턴을 미리 잡아내어 <br className="hidden lg:block" />
                                            매출 누수를 막는 선제적 대응 시스템을 제공합니다.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-5 group">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-black text-sm">
                                        02
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-lg font-bold text-white flex items-center gap-2">
                                            비급여 특화 관리
                                        </h4>
                                        <p className="text-zinc-400 text-sm leading-relaxed">
                                            미용 중심 피부과/성형외과라도 놓치기 쉬운 급여 매출과 <br className="hidden lg:block" />
                                            세금 환급까지 경영 파트너로서 함께 고민합니다.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-transparent rounded-[2.6rem] blur-sm -z-10 opacity-30"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
