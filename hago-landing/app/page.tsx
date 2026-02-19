import Hero from '@/components/Hero';
import ProblemInsight from '@/components/ProblemInsight';
import Solutions from '@/components/Solutions';
import ServicePackages from '@/components/ServicePackages';
import Contact from '@/components/Contact';

export default function Home() {
    return (
        <main className="bg-zinc-950 text-white overflow-hidden">
            <Hero />
            <ProblemInsight />
            <Solutions />
            <ServicePackages />
            <Contact />
        </main>
    );
}
