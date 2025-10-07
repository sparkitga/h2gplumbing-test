import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function BookingSection() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Book your time</h2>
            <p className="text-muted-foreground">Choose a slot below. You'll get a calendar invite instantly.</p>
          </div>

          <Card className="overflow-hidden">
            <CardHeader className="bg-card border-b">
              <CardTitle className="text-lg">H2G Plumbing Marketing</CardTitle>
              <CardDescription className="text-base font-semibold text-foreground">
                Schedule Visit | Hacer Una Cita
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground">
                  <p>⏱️ 1 hr</p>
                  <p>📞 Phone call</p>
                </div>

                <div className="bg-secondary/50 rounded-lg p-8 text-center">
                  <p className="text-muted-foreground mb-4">Calendar booking interface would be embedded here</p>
                  <p className="text-sm text-muted-foreground">
                    (Integration with scheduling service like Calendly, Cal.com, or custom booking system)
                  </p>
                </div>

                <div className="text-xs text-muted-foreground pt-4 border-t">
                  <p className="font-semibold mb-1">Time zone</p>
                  <p>UTC-7:00 (US West)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
