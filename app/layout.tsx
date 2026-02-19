import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';

import CursorFollower from '@/components/CursorFollower';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
    title: '(주)하품하는고양이 - HAGO',
    description: '브랜드의 각성, AX로 기지개를 켜다. AI Native Marketing Agency, Yawncat.',
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <html lang="ko" className="dark cursor-none">
            <body className={`${inter.variable} font-sans bg-black text-white antialiased selection:bg-primary selection:text-black`}>
                <CursorFollower />
                <div className="flex min-h-screen flex-col">
                    {children}
                </div>
            </body>
        </html>
    );
}
