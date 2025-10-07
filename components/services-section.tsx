import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ServicesSection() {
  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What we can do together</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-card hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">Plumbing</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">Repair, Installation, & Replacement</CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-card hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">Drain Services</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">Drain Cleaning, Sewer Cleaning, & Drain Repair</CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-card hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">Water Services</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">Hot Water, Heating Repair, & Replacement</CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
