import { createFileRoute } from "@tanstack/react-router";

import { SectionHeading } from "@/components/site/SectionHeading";
import { VenueCard } from "@/components/site/VenueCard";
import { Button } from "@/components/ui/button";
import { services, shops } from "@/data/catalog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Platinum & Co — Тансаг худалдаа, үйлчилгээний төв" },
      { name: "description", content: "Chanel, Dior, Graff, Hermès болон бусад тансаг брэнд, ресторан, лаунж нэг дор." },
      { property: "og:title", content: "Platinum & Co — Тансаг худалдаа, үйлчилгээний төв" },
      { property: "og:description", content: "Chanel, Dior, Graff, Hermès болон бусад тансаг брэнд, ресторан, лаунж нэг дор." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      <section className="relative flex min-h-[78vh] items-end overflow-hidden">
        <img src="/images/venues/hero.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-veil" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 text-center sm:px-8 sm:pb-24">
          <p className="eyebrow animate-rise text-primary">Maison de Luxe · Улаанбаатар</p>
          <h1 className="mt-4 animate-rise text-6xl leading-none text-gold-gradient sm:text-8xl">
            Platinum <span className="italic">&amp;</span> Co
          </h1>
          <p className="mx-auto mt-5 max-w-xl animate-rise text-lg text-foreground/85">
            Тансаг зэрэглэлийн худалдаа, үйлчилгээний нэгдсэн төв
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="gold" size="xl"><a href="#shops">Худалдааны төв</a></Button>
            <Button asChild variant="goldOutline" size="xl"><a href="#services">Үйлчилгээний төв</a></Button>
          </div>
        </div>
      </section>

      <section id="shops" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-8 sm:py-24">
        <SectionHeading eyebrow="Хэсэг I" title="Худалдааны төв" description="Дэлхийн шилдэг найман тансаг брэнд." />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {shops.map((v, i) => <VenueCard key={v.id} venue={v} index={i} />)}
        </div>
      </section>

      <section id="services" className="scroll-mt-20 bg-ivory py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <SectionHeading tone="light" eyebrow="Хэсэг II" title="Үйлчилгээний төв" description="Шефийн амт, сонгомол дарс, виски." />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {services.map((v, i) => <VenueCard key={v.id} venue={v} index={i} large />)}
          </div>
        </div>
      </section>
    </div>
  );
}
