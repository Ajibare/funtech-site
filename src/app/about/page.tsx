import { AnimatedCard, Reveal, StaggerGrid } from "@/components/motion";
import { LinkIcon, PenIcon, RocketIcon, SparkIcon } from "@/components/icons";

export default function AboutPage() {
  const pillars = [
    "Venture Collaboration - partnering with founders to build new ventures.",
    "Creative Development - programs, competitions, and knowledge platforms.",
    "Strategic Collaborations - digital ventures with creators and experts.",
  ];

  return (
    <div className="section-wrap">
      <Reveal>
        <h1 className="section-title flex items-center gap-2">
          <SparkIcon className="h-7 w-7" />
          The Ecosystem for Modern Innovation
        </h1>
        <p className="muted mt-4 max-w-4xl">
          FunTech Innovations is focused on building scalable ventures and
          empowering the next generation of creators and entrepreneurs.
        </p>
      </Reveal>

      <Reveal className="mt-10">
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p className="muted mt-3 max-w-3xl">
          To transform ideas, talent, and influence into sustainable digital
          ventures.
        </p>
      </Reveal>

      <Reveal className="mt-10">
        <h2 className="text-2xl font-semibold">Our Ecosystem Model</h2>
      </Reveal>
      <StaggerGrid className="mt-6 grid gap-4 md:grid-cols-3">
        {pillars.map((pillar) => (
          <AnimatedCard
            key={pillar}
            className="rounded-2xl border border-zinc-200 bg-white p-5"
          >
            {pillar.startsWith("Venture") && <RocketIcon className="mb-2 h-5 w-5" />}
            {pillar.startsWith("Creative") && <PenIcon className="mb-2 h-5 w-5" />}
            {pillar.startsWith("Strategic") && <LinkIcon className="mb-2 h-5 w-5" />}
            <p className="muted">{pillar}</p>
          </AnimatedCard>
        ))}
      </StaggerGrid>
    </div>
  );
}
