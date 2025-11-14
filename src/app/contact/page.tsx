
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { SVGProps } from "react";
import { Facebook, Github, Instagram, Linkedin, LocateIcon, Mail, Phone, Twitter } from "lucide-react";

const SpsLogo = (props: SVGProps<SVGSVGElement>) => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM20.6667 13.3333C18.3363 13.3333 16.4444 15.2251 16.4444 17.5556C16.4444 19.886 18.3363 21.7778 20.6667 21.7778H27.3333C29.6637 21.7778 31.5556 19.886 31.5556 17.5556C31.5556 15.2251 29.6637 13.3333 27.3333 13.3333H20.6667ZM20.6667 26.2222C18.3363 26.2222 16.4444 28.114 16.4444 30.4444C16.4444 32.7749 18.3363 34.6667 20.6667 34.6667H27.3333C29.6637 34.6667 31.5556 32.7749 31.5556 30.4444C31.5556 28.114 29.6637 26.2222 27.3333 26.2222H20.6667Z"
        fill="hsl(var(--primary))"
      />
    </svg>
);

const Header = () => (
  <header className="py-4 px-4 sm:px-6 lg:px-8 sticky top-0 z-20 bg-background/80 backdrop-blur-sm border-b">
    <nav className="flex justify-between items-center max-w-7xl mx-auto">
      <Link href="/" className="flex items-center gap-2">
        <SpsLogo />
        <span className="font-headline text-xl font-bold">[Simon S. Peters]</span>
      </Link>
      <div className="hidden md:flex items-center gap-4 text-sm font-medium">
        <Link href="/#about" className="hover:text-primary transition-colors">
          About
        </Link>
        <Link href="/#services" className="hover:text-primary transition-colors">
          Services
        </Link>
        <Link href="/#portfolio" className="hover:text-primary transition-colors">
          Projects
        </Link>
        <Link href="/contact" className="hover:text-primary transition-colors">
          Contact
        </Link>
      </div>
      <Button asChild className="hidden md:block" variant="outline">
        <Link href="/contact">Get In Touch</Link>
      </Button>
    </nav>
  </header>
);
  
const Footer = () => (
    <footer className="bg-muted text-muted-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
              <SpsLogo className="w-8 h-8" />
              <span className="font-headline text-xl font-bold text-foreground">SPS Studio</span>
          </div>
          <p className="text-sm">
            Crafting digital excellence, from needs-focused requirement analysis to seamless web & app solutions.
          </p>
        </div>

        <div>
            <h3 className="font-headline text-lg font-semibold text-foreground mb-4">Contact Information</h3>
            <div className="space-y-2 text-sm">
                <div className="flex items-start gap-3">
                    <LocateIcon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>Accra, Ghana</span>
                </div>
                <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <a href="mailto:simonpetersgh@gmail.com" className="hover:text-primary hover:underline">
                        simonpetersgh@gmail.com
                    </a>
                </div>
                <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>(+233) 0540-228-056</span>
                </div>
            </div>
        </div>

        <div>
            <h3 className="font-headline text-lg font-semibold text-foreground mb-4">Follow Me</h3>
            <div className="flex gap-4">
            <Button asChild variant="outline" size="icon" className="bg-transparent hover:bg-accent/50">
              <Link href="#" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="icon" className="bg-transparent hover:bg-accent/50">
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="icon" className="bg-transparent hover:bg-accent/50">
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="icon" className="bg-transparent hover:bg-accent/50">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="icon" className="bg-transparent hover:bg-accent/50">
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

      </div>
      <div className="mt-8 pt-6 border-t border-muted-foreground/20 text-center text-sm">
        © {new Date().getFullYear()} SPS Studio. All Rights Reserved.
      </div>
    </footer>
);

const ContactSection = () => (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <Badge
            variant="outline"
            className="text-base md:text-lg font-medium tracking-wide border-primary/50 text-primary/90 bg-primary/10 mb-4"
          >
            Let's Connect
          </Badge>
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a project in mind? I'd love to hear from you.
          </p>
        </div>
        <Card className="rounded-xl p-8 animate-fade-in-up [animation-delay:0.2s]">
          <ContactForm />
        </Card>
      </div>
    </section>
);

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-dvh bg-background">
            <Header />
            <main className="flex-1">
                <ContactSection />
            </main>
            <Footer />
        </div>
    )
}
