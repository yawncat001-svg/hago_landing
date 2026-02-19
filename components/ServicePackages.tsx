'use client';

import { motion } from 'framer-motion';

import { Check, Stethoscope, FileText, Clock } from 'lucide-react';

const packages = [
    {
        name: "잠 깨우기",
        type: "AI 진단 리포트",
        desc: "현재 브랜드 상태를 정밀 진단하고 개선점을 도출합니다.",
        price: "Free / 1회",
        features: [
            "브랜드 온라인 현황 분석",
            "경쟁사 비교 데이터",
            "키워드 노출 현황 진단",
            "AI 기반 개선 제안서"
        ],
        highlight: false,
    },
    {
        name: "기지개",
        type: "월간 마케팅 부스팅",
        desc: "필수 마케팅 채널을 활성화하고 유입을 증대시킵니다.",
        price: "문의",
        features: [
            "네이버 블로그 고품질 포스팅",
            "플레이스 최적화 관리",
            "매체별 광고 세팅 및 운영",
            "월간 성과 분석 리포트"
        ],
        highlight: true,
    },
    {
        name: "완전 각성",
        type: "개원/확장 올인원",
        desc: "브랜드 아이덴티티부터 마케팅까지 턴키 솔루션.",
        price: "문의",
        features: [
            "브랜드 아이덴티티(BI) 재정립",
            "홈페이지/랜딩페이지 제작",
            "전 채널 통합 마케팅",
            "영상 콘텐츠 기획 및 제작",
            "병원 내부 브랜딩 컨설팅"
        ],
        highlight: false,
    },
];

export default function ServicePackages() {
    return (
        <section id="packages" className="bg-zinc-950 overflow-hidden">
            <div className="container mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Service Packages</h2>
                    <p className="text-zinc-400">브랜드의 단계에 맞는 최적의 솔루션을 선택하세요.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className={`relative flex flex-col p-8 rounded-2xl border group transition-all duration-300 ${pkg.highlight
                                ? 'border-primary bg-zinc-900 shadow-[0_0_30px_rgba(57,255,20,0.15)] hover:shadow-[0_0_50px_rgba(57,255,20,0.3)]'
                                : 'border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 hover:border-zinc-700'
                                }`}
                        >
                            {pkg.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black font-bold px-4 py-1 rounded-full text-sm shadow-lg">
                                    MOST POPULAR
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className={`text-xl font-bold mb-2 transition-colors ${pkg.highlight ? 'text-primary' : 'text-zinc-300 group-hover:text-white'}`}>
                                    {pkg.name}
                                </h3>
                                <div className="text-3xl font-bold text-white mb-2">{pkg.type}</div>
                                <p className="text-zinc-500 text-sm h-10 group-hover:text-zinc-400 transition-colors">{pkg.desc}</p>
                            </div>

                            <div className="flex-grow space-y-4 mb-8">
                                {pkg.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-3 text-zinc-300 text-sm">
                                        <Check className={`w-5 h-5 shrink-0 transition-colors ${pkg.highlight ? 'text-primary' : 'text-zinc-500 group-hover:text-primary'}`} />
                                        {feature}
                                    </div>
                                ))}
                            </div>

                            <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${pkg.highlight
                                ? 'bg-primary text-black hover:bg-white hover:scale-105 shadow-[0_0_15px_rgba(57,255,20,0.4)]'
                                : 'bg-zinc-800 text-white hover:bg-primary hover:text-black hover:shadow-[0_0_15px_rgba(57,255,20,0.4)]'
                                }`}>
                                상담 신청하기
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* ROI Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 max-w-6xl mx-auto bg-zinc-900/80 rounded-3xl p-12 border border-zinc-800 text-center relative overflow-hidden"
                >
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-16">
                            자동화 청구시스템 <span className="text-blue-400">ROI</span><br className="md:hidden" /> 아직 사용 안 해보셨나요?
                        </h3>

                        <div className="grid md:grid-cols-3 gap-12 mb-12">
                            {/* Director */}
                            <div className="flex flex-col items-center">
                                <div className="bg-black/50 p-6 rounded-2xl border border-zinc-800 w-full mb-6 relative">
                                    <p className="text-blue-400 font-bold mb-2">ROI로 바꾸고 나서</p>
                                    <p className="text-zinc-300">병원 수익이 늘었어요!</p>
                                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-black/50 border-b border-r border-zinc-800 rotate-45"></div>
                                </div>
                                <div className="w-20 h-20 bg-zinc-800 rounded-full flex items-center justify-center mb-4 border border-zinc-700">
                                    <Stethoscope className="w-10 h-10 text-white" />
                                </div>
                                <h4 className="font-bold text-white text-lg">병원 원장님</h4>
                                <p className="text-zinc-500 text-sm mt-1">진료 후, 청구로 고생하시는</p>
                            </div>

                            {/* Billing Staff */}
                            <div className="flex flex-col items-center">
                                <div className="bg-black/50 p-6 rounded-2xl border border-zinc-800 w-full mb-6 relative">
                                    <p className="text-blue-400 font-bold mb-2">정신없던 청구업무가</p>
                                    <p className="text-zinc-300">한결 편해졌어요!</p>
                                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-black/50 border-b border-r border-zinc-800 rotate-45"></div>
                                </div>
                                <div className="w-20 h-20 bg-zinc-800 rounded-full flex items-center justify-center mb-4 border border-zinc-700">
                                    <FileText className="w-10 h-10 text-white" />
                                </div>
                                <h4 className="font-bold text-white text-lg">청구 담당자</h4>
                                <p className="text-zinc-500 text-sm mt-1">복잡한 청구로 고생하시는</p>
                            </div>

                            {/* Admin Staff */}
                            <div className="flex flex-col items-center">
                                <div className="bg-black/50 p-6 rounded-2xl border border-zinc-800 w-full mb-6 relative">
                                    <p className="text-blue-400 font-bold mb-2">불필요한 시간이 줄어드니</p>
                                    <p className="text-zinc-300">업무효율이 높아졌어요!</p>
                                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-black/50 border-b border-r border-zinc-800 rotate-45"></div>
                                </div>
                                <div className="w-20 h-20 bg-zinc-800 rounded-full flex items-center justify-center mb-4 border border-zinc-700">
                                    <Clock className="w-10 h-10 text-white" />
                                </div>
                                <h4 className="font-bold text-white text-lg">행정 담당자</h4>
                                <p className="text-zinc-500 text-sm mt-1">관리와 행정으로 정신없이 바쁜</p>
                            </div>
                        </div>

                        <p className="text-2xl md:text-3xl font-bold text-blue-400 neon-glow">
                            1시간 헤매는 청구시간을 10분으로 줄여보세요
                        </p>
                    </div>

                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -z-10" />
                </motion.div>
            </div>
        </section>
    );
}
