import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WhyLocalSection } from "@/components/why-local-section"
import { ServicesSection } from "@/components/services-section"
import { BookingSection } from "@/components/booking-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <WhyLocalSection />
      <ServicesSection />
      <BookingSection />
      <Footer />
    </main>
  )
}
