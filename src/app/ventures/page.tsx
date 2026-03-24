import { AnimatedCard, Reveal, StaggerGrid } from "@/components/motion";
import { RocketIcon, SparkIcon } from "@/components/icons";

export default function VenturesPage() {
  const services = [
    "Brand identity systems",
    "Strategic brand architecture",
    "Website branding frameworks",
  ];

  return (
    <div className="section-wrap">
      <Reveal>
        <h1 className="section-title flex items-center gap-2">
          <RocketIcon className="h-7 w-7" />
          Ventures Built Within the FunTech Ecosystem
        </h1>
        <p className="muted mt-4 max-w-4xl">
          FunTech collaborates with founders and innovators to build ventures
          for modern markets with strategic support and infrastructure.
        </p>
      </Reveal>

      <Reveal className="mt-10">
        <h2 className="text-2xl font-semibold">Current Venture: QuivaPro</h2>
      </Reveal>
      <StaggerGrid className="mt-6 grid gap-4 md:grid-cols-3">
        {services.map((service) => (
          <AnimatedCard
            key={service}
            className="rounded-2xl border border-zinc-200 bg-white p-5"
          >
            <SparkIcon className="mb-2 h-5 w-5" />
            <p>{service}</p>
          </AnimatedCard>
        ))}
      </StaggerGrid>
    </div>
  );
}
