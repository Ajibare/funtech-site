import { AnimatedCard, Reveal, StaggerGrid } from "@/components/motion";
import { PenIcon, SparkIcon } from "@/components/icons";

export default function CreativeDevelopmentPage() {
  const offers = [
    "Creative Business Programs",
    "Innovation Competitions",
    "Creative Masterclasses",
    "Creative Development Products",
  ];

  return (
    <div className="section-wrap">
      <Reveal>
        <h1 className="section-title flex items-center gap-2">
          <PenIcon className="h-7 w-7" />
          Developing the Business Side of Creativity
        </h1>
        <p className="muted mt-4 max-w-4xl">
          FunTech bridges the gap between creative talent and business strategy.
          We help creatives build profitable and scalable ventures.
        </p>
      </Reveal>

      <Reveal className="mt-10">
        <h2 className="text-2xl font-semibold">What We Offer</h2>
      </Reveal>
      <StaggerGrid className="mt-6 grid gap-4 md:grid-cols-2">
        {offers.map((offer) => (
          <AnimatedCard
            key={offer}
            className="rounded-2xl border border-zinc-200 bg-white p-5"
          >
            <SparkIcon className="mb-2 h-5 w-5" />
            <p>{offer}</p>
          </AnimatedCard>
        ))}
      </StaggerGrid>
    </div>
  );
}
