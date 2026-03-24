import { AnimatedCard, Reveal, StaggerGrid } from "@/components/motion";
import { LinkIcon, SparkIcon, UsersIcon } from "@/components/icons";

export default function CollaboratePage() {
  const collaborators = ["Creators", "Experts", "Founders", "Innovators"];
  const support = [
    "Strategic structure",
    "Product development guidance",
    "Digital infrastructure",
    "Venture support",
  ];

  return (
    <div className="section-wrap">
      <Reveal>
        <h1 className="section-title flex items-center gap-2">
          <LinkIcon className="h-7 w-7" />
          Build With FunTech
        </h1>
        <p className="muted mt-4 max-w-4xl">
          FunTech collaborates with creators, experts, founders, and innovators
          to build digital ventures and knowledge platforms.
        </p>
      </Reveal>

      <Reveal className="mt-10">
        <h2 className="text-2xl font-semibold">Who We Collaborate With</h2>
      </Reveal>
      <StaggerGrid className="mt-6 grid gap-4 md:grid-cols-4">
        {collaborators.map((person) => (
          <AnimatedCard
            key={person}
            className="rounded-2xl border border-zinc-200 bg-white p-5 text-center"
          >
            <UsersIcon className="mx-auto mb-2 h-5 w-5" />
            {person}
          </AnimatedCard>
        ))}
      </StaggerGrid>

      <Reveal className="mt-12">
        <h2 className="text-2xl font-semibold">FunTech Provides</h2>
      </Reveal>
      <StaggerGrid className="mt-6 grid gap-4 md:grid-cols-2">
        {support.map((item) => (
          <AnimatedCard
            key={item}
            className="rounded-2xl border border-zinc-200 bg-white p-5"
          >
            <SparkIcon className="mb-2 h-5 w-5" />
            {item}
          </AnimatedCard>
        ))}
      </StaggerGrid>
    </div>
  );
}
