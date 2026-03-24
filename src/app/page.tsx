import Image from "next/image";
import Link from "next/link";
import { AnimatedCard, Reveal, StaggerGrid } from "@/components/motion";
import {
  LinkIcon,
  PenIcon,
  RocketIcon,
  SparkIcon,
  UsersIcon,
} from "@/components/icons";

export default function Home() {
  const ecosystem = [
    {
      title: "Venture Collaboration",
      text: "We partner with founders and innovators to build scalable businesses under the FunTech canopy.",
      icon: RocketIcon,
    },
    {
      title: "Creative Development",
      text: "We equip creatives with business tools, knowledge, and platforms to build profitable careers.",
      icon: PenIcon,
    },
    {
      title: "Strategic Collaborations",
      text: "We collaborate with experts and creators to build digital ventures around their expertise and influence.",
      icon: LinkIcon,
    },
  ];
  const stats = [
    { value: "200+", label: "Projects Supported" },
    { value: "42,000", label: "Community Reach" },
    { value: "$30M", label: "Venture Potential" },
  ];
  const companies = ["QuivaPro", "CreatorLab", "KnowledgeStack", "VentureGrid"];

  return (
    <div>
      <section className="section-wrap pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-600">
              FunTech Innovations
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
              Building Ventures, Developing Creators, Powering Innovation
            </h1>
            <p className="muted mt-6 max-w-2xl text-lg">
              FunTech Innovations is an innovation ecosystem that builds scalable
              ventures, develops business-minded creatives, and collaborates
              with industry leaders to create profitable digital platforms.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="inline-block rounded-full bg-black px-6 py-3 font-medium text-white transition hover:translate-y-[-2px]"
              >
                Explore Ecosystem
              </Link>
              <Link
                href="/collaborate"
                className="inline-block rounded-full border border-zinc-300 px-6 py-3 font-medium text-black transition hover:translate-y-[-2px]"
              >
                Work With Us
              </Link>
            </div>
          </Reveal>

          <Reveal className="overflow-hidden rounded-2xl border border-zinc-200">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80"
              alt="Team collaborating around innovation strategy"
              width={1600}
              height={900}
              className="h-[340px] w-full object-cover"
              priority
            />
          </Reveal>
        </div>
      </section>

      <section className="section-wrap pt-6">
        <StaggerGrid className="grid gap-4 md:grid-cols-3">
          {stats.map((item) => (
            <AnimatedCard
              key={item.label}
              className="rounded-2xl border border-zinc-200 bg-white p-6"
            >
              <p className="text-3xl font-semibold">{item.value}</p>
              <p className="mt-2 text-sm text-zinc-600">{item.label}</p>
            </AnimatedCard>
          ))}
        </StaggerGrid>
      </section>

      <section className="section-wrap">
        <Reveal>
          <h2 className="section-title">What We Do</h2>
          <p className="muted mt-4 max-w-4xl">
            FunTech operates at the intersection of venture creation, creative
            development, and strategic collaboration. We transform ideas,
            expertise, and creative talent into scalable ventures and digital
            platforms.
          </p>
        </Reveal>
      </section>

      <section className="section-wrap">
        <Reveal>
          <h2 className="section-title">Our Ecosystem</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Founders", "Creators", "Innovators", "Experts"].map((token) => (
              <span
                key={token}
                className="rounded-full border border-zinc-300 bg-zinc-50 px-3 py-1 text-xs text-zinc-700"
              >
                {token}
              </span>
            ))}
          </div>
        </Reveal>
        <StaggerGrid className="mt-8 grid gap-5 md:grid-cols-3">
          {ecosystem.map((item) => (
            <AnimatedCard
              key={item.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6"
            >
              <item.icon className="h-5 w-5 text-zinc-900" />
              <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
              <p className="muted mt-3">{item.text}</p>
              <button className="mt-5 text-xs font-medium uppercase tracking-[0.14em] text-zinc-700">
                Learn More
              </button>
            </AnimatedCard>
          ))}
        </StaggerGrid>
        <Reveal className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80"
            alt="Digital ecosystem dashboard and analytics"
            width={1600}
            height={900}
            className="h-[260px] w-full object-cover"
          />
        </Reveal>
      </section>

      <section className="section-wrap">
        <Reveal>
          <h2 className="section-title">Our Companies</h2>
        </Reveal>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {companies.map((company) => (
            <Reveal
              key={company}
              className="rounded-xl border border-zinc-200 bg-white px-4 py-5 text-sm font-medium"
            >
              {company}
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-wrap">
        <Reveal className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 md:p-12">
          <div className="max-w-3xl">
            <SparkIcon className="h-7 w-7 text-zinc-900" />
            <p className="mt-5 text-2xl leading-relaxed md:text-3xl">
              &quot;FunTech enables modern entrepreneurship by combining
              strategic infrastructure, creative excellence, and venture
              collaboration into one scalable ecosystem.&quot;
            </p>
            <p className="mt-5 text-sm uppercase tracking-[0.16em] text-zinc-600">
              Founder&apos;s Note
            </p>
          </div>
        </Reveal>
      </section>

      <section className="section-wrap">
        <Reveal>
          <h2 className="section-title flex items-center gap-2">
            <UsersIcon className="h-6 w-6" />
            Ventures Under FunTech
          </h2>
          <p className="muted mt-4 max-w-4xl">
            FunTech supports a growing portfolio of ventures designed to solve
            modern market problems. Example: QuivaPro, a brand infrastructure
            platform helping startups build scalable brand systems.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-200">
            <Image
              src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=1600&q=80"
              alt="Founders reviewing startup venture plans"
              width={1600}
              height={900}
              className="h-[260px] w-full object-cover"
            />
          </div>
          <div className="mt-8">
            <Link
              href="/ventures"
              className="inline-block rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:translate-y-[-2px]"
            >
              View All Ventures
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
