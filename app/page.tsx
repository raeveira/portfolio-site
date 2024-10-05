import Hero from '@/components/Hero';
import HeroPortrait from '@/components/HeroPortrait';
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="min-h-dvh">
      <Hero />
      <HeroPortrait />
      <ProjectCard />
    </main>
  );
}
