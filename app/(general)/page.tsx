import Hero from '@/components/Hero';
import HeroPortrait from '@/components/HeroPortrait';
import ProjectSection from "@/components/project/ProjectSection";


export default function Home() {
  return (
    <main className="min-h-dvh">
      <Hero />
      <HeroPortrait />
      <ProjectSection />
    </main>
  );
}
