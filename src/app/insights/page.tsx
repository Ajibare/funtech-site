import { AnimatedCard, Reveal, StaggerGrid } from "@/components/motion";
import { BookIcon, SparkIcon } from "@/components/icons";

const ideas = [
  "Why Most Startups Fail Before They Even Launch",
  "The Hidden Infrastructure Behind Successful Digital Ventures",
  "How Venture Ecosystems Build Multiple Companies at Once",
  "The Difference Between a Startup Idea and a Scalable Venture",
  "Why Brand Infrastructure Matters for Startups",
  "Why Most Creatives Struggle to Monetize Their Talent",
  "How Innovation Ecosystems Are Changing Entrepreneurship",
  "Why Collaboration Is the Future of Business",
];

export default function InsightsPage() {
  return (
    <div className="section-wrap">
      <Reveal>
        <h1 className="section-title flex items-center gap-2">
          <BookIcon className="h-7 w-7" />
          Ideas on Innovation, Creativity, and Venture Building
        </h1>
        <p className="muted mt-4 max-w-4xl">
          FunTech Insights explores venture ecosystems, creative
          entrepreneurship, and the future of digital platforms.
        </p>
      </Reveal>

      <StaggerGrid className="mt-10 grid gap-4 md:grid-cols-2">
        {ideas.map((idea) => (
          <AnimatedCard
            key={idea}
            className="rounded-2xl border border-zinc-200 bg-white p-5"
          >
            <SparkIcon className="mb-2 h-5 w-5" />
            {idea}
          </AnimatedCard>
        ))}
      </StaggerGrid>
    </div>
  );
}
