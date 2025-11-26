import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SpsLogo } from "@/components/sps-logo";
import { Facebook, Github, Instagram, Linkedin, LocateIcon, Mail, Phone, Twitter } from "lucide-react";

export const Footer = () => (
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
        © {new Date().getFullYear()} TheSPS Studio. All Rights Reserved.
      </div>
    </footer>
);
