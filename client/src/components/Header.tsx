import { useState } from "react";
import { Smartphone, Menu } from "lucide-react";
import { Link } from "wouter";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto max-w-7xl">
        <Link href="/" data-testid="link-home">
          <div className="flex items-center gap-2 hover-elevate cursor-pointer rounded-md px-3 py-2">
            <Smartphone className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold">Budget Bundles</span>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" data-testid="link-nav-home">
            <span className="text-sm font-medium hover-elevate cursor-pointer rounded-md px-3 py-2">
              Home
            </span>
          </Link>
          <Link href="/about" data-testid="link-nav-about">
            <span className="text-sm font-medium hover-elevate cursor-pointer rounded-md px-3 py-2">
              About
            </span>
          </Link>
          <Link href="/contact" data-testid="link-nav-contact">
            <span className="text-sm font-medium hover-elevate cursor-pointer rounded-md px-3 py-2">
              Contact
            </span>
          </Link>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" data-testid="button-menu">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px]">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/" data-testid="link-nav-mobile-home">
                <span 
                  onClick={() => setOpen(false)}
                  className="text-base font-medium hover-elevate cursor-pointer rounded-md px-4 py-3 block"
                >
                  Home
                </span>
              </Link>
              <Link href="/about" data-testid="link-nav-mobile-about">
                <span 
                  onClick={() => setOpen(false)}
                  className="text-base font-medium hover-elevate cursor-pointer rounded-md px-4 py-3 block"
                >
                  About
                </span>
              </Link>
              <Link href="/contact" data-testid="link-nav-mobile-contact">
                <span 
                  onClick={() => setOpen(false)}
                  className="text-base font-medium hover-elevate cursor-pointer rounded-md px-4 py-3 block"
                >
                  Contact
                </span>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
