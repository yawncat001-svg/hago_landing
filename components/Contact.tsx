'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowRight, Bot, CheckCircle, Loader2, AlertCircle } from 'lucide-react';

export default function Contact() {
    const [formState, setFormState] = useState<'idle' | 'analyzing' | 'sending' | 'success' | 'error'>('idle');
    const [phoneError, setPhoneError] = useState('');
    const [formData, setFormData] = useState({
        companyName: '',
        contactInfo: '',
        concern: ''
    });

    const formatPhoneNumber = (value: string) => {
        const numbers = value.replace(/[^0-9]/g, '');
        if (numbers.length <= 3) return numbers;
        if (numbers.length <= 7) return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
        return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
    };

    const validatePhoneNumber = (phone: string) => {
        const phoneRegex = /^[0-9]{3}-[0-9]{3,4}-[0-9]{4}$/;
        return phoneRegex.test(phone);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.companyName || !formData.contactInfo || !formData.concern) return;

        if (!validatePhoneNumber(formData.contactInfo)) {
            setPhoneError('올바른 전화번호 형식이 아닙니다. (예: 010-1234-5678)');
            return;
        }

        setFormState('analyzing');
        setPhoneError('');

        // Simulate AI Analysis
        setTimeout(async () => {
            setFormState('sending');

            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    setFormState('success');
                    setFormData({ companyName: '', contactInfo: '', concern: '' });
                } else {
                    setFormState('error');
                }
            } catch (error) {
                setFormState('error');
            }
        }, 2000); // 2 seconds AI analysis simulation
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        if (name === 'contactInfo') {
            const formatted = formatPhoneNumber(value);
            if (formatted.length <= 13) { // 010-1234-5678 length is 13
                setFormData({ ...formData, [name]: formatted });
                if (phoneError) setPhoneError('');
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    return (
        <section id="contact" className="bg-black overflow-hidden relative">
            <div className="container mx-auto px-6 py-12 relative z-10 flex flex-col justify-between h-full min-h-[100vh]">
                <div className="flex-grow flex items-center py-20">
                    <div className="grid md:grid-cols-2 gap-16 w-full items-center">

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
                                Ready to <br />
                                <span className="text-primary neon-glow">Awakening?</span>
                            </h2>
                            <p className="text-zinc-400 text-xl mb-12">
                                지금 바로 브랜드의 잠재력을 깨우세요.<br />
                                무료 진단 리포트부터 시작해 보시겠습니까?
                            </p>

                            <a
                                href="mailto:hago@yawncat.co.kr"
                                className="group flex items-center gap-4 text-2xl font-bold text-white hover:text-primary transition-colors"
                            >
                                <Mail className="w-8 h-8" />
                                <span>hago@yawncat.co.kr</span>
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </a>
                        </motion.div>

                        {/* AI Form Container */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-zinc-900/50 p-8 md:p-10 rounded-[2.5rem] border border-zinc-800 relative overflow-hidden min-h-[500px] flex flex-col justify-center shadow-2xl backdrop-blur-sm"
                        >
                            <AnimatePresence mode="wait">
                                {formState === 'idle' || formState === 'error' ? (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="space-y-6"
                                        onSubmit={handleSubmit}
                                    >
                                        <div className="flex items-center gap-2 mb-6 text-primary">
                                            <Bot className="w-6 h-6" />
                                            <span className="font-bold tracking-wider">AI Diagnosis Assistant</span>
                                        </div>

                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-zinc-400 mb-2 ml-1">병원/기업명</label>
                                                <input
                                                    name="companyName"
                                                    value={formData.companyName}
                                                    onChange={handleChange}
                                                    type="text"
                                                    required
                                                    className="w-full bg-black/50 border border-zinc-800 rounded-2xl p-4 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                                                    placeholder="(주)하품하는고양이"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-zinc-400 mb-2 ml-1">담당자 연락처</label>
                                                <input
                                                    name="contactInfo"
                                                    value={formData.contactInfo}
                                                    onChange={handleChange}
                                                    type="text"
                                                    inputMode="numeric"
                                                    required
                                                    className={`w-full bg-black/50 border rounded-2xl p-4 text-white focus:outline-none focus:ring-1 transition-all ${phoneError
                                                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                                        : 'border-zinc-800 focus:border-primary focus:ring-primary'
                                                        }`}
                                                    placeholder="010-1234-5678"
                                                />
                                                {phoneError && (
                                                    <p className="text-red-500 text-xs mt-2 ml-2">{phoneError}</p>
                                                )}
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-zinc-400 mb-2 ml-1">고민 내용 (간략히)</label>
                                                <textarea
                                                    name="concern"
                                                    value={formData.concern}
                                                    onChange={handleChange}
                                                    rows={4}
                                                    required
                                                    className="w-full bg-black/50 border border-zinc-800 rounded-2xl p-4 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                                                    placeholder="마케팅 성과가 정체되어 고민입니다..."
                                                />
                                            </div>
                                        </div>

                                        {formState === 'error' && (
                                            <div className="text-red-500 text-sm flex items-center gap-2 bg-red-500/10 p-3 rounded-xl border border-red-500/20">
                                                <AlertCircle className="w-4 h-4" />
                                                전송에 실패했습니다. 잠시 후 다시 시도해주세요.
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            className="w-full bg-primary text-black font-black py-4 rounded-2xl hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_20px_rgba(57,255,20,0.3)]"
                                        >
                                            무료 AI 진단 신청하기
                                        </button>
                                    </motion.form>
                                ) : formState === 'analyzing' ? (
                                    <motion.div
                                        key="analyzing"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="text-center space-y-6"
                                    >
                                        <div className="relative w-24 h-24 mx-auto">
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                                className="absolute inset-0 border-4 border-zinc-800 border-t-primary rounded-full"
                                            />
                                            <Bot className="absolute inset-0 m-auto w-10 h-10 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">AI가 내용을 분석 중입니다...</h3>
                                            <p className="text-zinc-400">입력하신 데이터를 기반으로<br />초기 진단 항목을 생성하고 있습니다.</p>
                                        </div>
                                    </motion.div>
                                ) : formState === 'sending' ? (
                                    <motion.div
                                        key="sending"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-center space-y-6"
                                    >
                                        <Loader2 className="w-16 h-16 text-primary mx-auto animate-spin" />
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">리포트 전송 중...</h3>
                                            <p className="text-zinc-400">담당자에게 암호화된 데이터를 전송합니다.</p>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center space-y-6"
                                    >
                                        <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <CheckCircle className="w-12 h-12 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-2">전송 완료!</h3>
                                            <p className="text-zinc-400 mb-6">
                                                AI 진단 신청이 성공적으로 접수되었습니다.<br />
                                                담당자가 검토 후 24시간 이내에 연락드립니다.
                                            </p>
                                            <button
                                                onClick={() => setFormState('idle')}
                                                className="text-primary hover:text-white underline underline-offset-8 transition-all"
                                            >
                                                다른 신청서 작성하기
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>

                    </div>
                </div>

                <div className="py-10 border-t border-zinc-900 text-center text-zinc-600 text-sm">
                    &copy; (주)하품하는고양이. All rights reserved.
                </div>
            </div>
        </section>
    );
}
