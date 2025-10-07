import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">Fast, Local Support</div>
          <nav className="flex items-center gap-6">
            <Link href="#why-us" className="text-sm font-medium hover:text-primary transition-colors">
              Why Us
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </Link>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Book Now
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
