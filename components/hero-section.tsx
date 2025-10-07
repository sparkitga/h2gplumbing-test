import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                Move faster with <span className="text-primary">local, family-owned</span> plumbing support
              </h1>
            </div>

            <div className="space-y-3">
              <p className="text-lg font-semibold text-foreground">Serving Water, Real People.</p>
              <p className="text-base text-muted-foreground leading-relaxed">
                We're a <span className="font-semibold text-foreground">Latino-heritage</span>, family-owned team
                delivering <span className="font-semibold text-foreground">fast, local service</span> that keeps your
                family moving forward.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Book on our calendar
              </Button>
              <Button size="lg" variant="outline">
                Why choose us?
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="font-medium">Family-Owned</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="font-medium">Latino Heritage</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="font-medium">Fast & Local</span>
              </div>
            </div>

            <p className="text-xs text-muted-foreground italic">
              +Hablas español? ¡Nosotros también! Nuestro equipo es bilingüe en español.
            </p>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/professional-plumbers-working-on-kitchen-sink-inst.jpg"
                alt="Professional plumbers at work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
