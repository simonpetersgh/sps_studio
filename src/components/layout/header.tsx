import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { SpsLogo } from "@/components/sps-logo";
import { cn } from "@/lib/utils";

interface HeaderProps {
  variant?: 'transparent' | 'sticky';
}

const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
  <>
    <Link href="/#about" className={cn(mobile ? "text-lg font-medium" : "text-sm", "hover:text-primary transition-colors")}>
      About
    </Link>
    <Link href="/services-and-pricing" className={cn(mobile ? "text-lg font-medium" : "text-sm", "hover:text-primary transition-colors")}>
      Services
    </Link>
    <Link href="/projects" className={cn(mobile ? "text-lg font-medium" : "text-sm", "hover:text-primary transition-colors")}>
      Projects
    </Link>
    <Link href="/contact" className={cn(mobile ? "text-lg font-medium" : "text-sm", "hover:text-primary transition-colors")}>
      Contact
    </Link>
  </>
);

const TransparentHeader = () => (
    <header className="py-4 px-4 sm:px-6 lg:px-8 absolute top-0 left-0 right-0 z-10 bg-transparent text-white group">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
            <SpsLogo />
            <span className="font-headline text-xl font-bold">Simon Peters Sakpla</span>
        </Link>
        <div className="hidden md:flex items-center gap-4 text-sm font-medium">
            <NavLinks />
        </div>
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="bg-background text-foreground">
                    <div className="grid gap-4 py-6">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <SpsLogo className="w-8 h-8" />
                            <span className="font-headline text-xl font-bold">Simon Peters Sakpla</span>
                        </Link>
                        <NavLinks mobile />
                    </div>
                    <Button asChild className="w-full" variant="outline">
                        <Link href="/contact">Get In Touch</Link>
                    </Button>
                </SheetContent>
            </Sheet>
        </div>
        <Button asChild className="hidden md:block bg-transparent border-white text-white hover:bg-white hover:text-black" variant="outline">
            <Link href="/contact">Get In Touch</Link>
        </Button>
        </nav>
    </header>
);

const StickyHeader = () => (
    <header className="py-4 px-4 sm:px-6 lg:px-8 sticky top-0 z-20 bg-background/80 backdrop-blur-sm border-b">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
            <SpsLogo />
            <span className="font-headline text-xl font-bold">Simon Peters Sakpla</span>
        </Link>
        <div className="hidden md:flex items-center gap-4 text-sm font-medium">
            <NavLinks />
        </div>
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <div className="grid gap-4 py-6">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <SpsLogo className="w-8 h-8" />
                            <span className="font-headline text-xl font-bold">SPS Studio</span>
                        </Link>
                        <NavLinks mobile />
                    </div>
                    <Button asChild className="w-full" variant="outline">
                        <Link href="/contact">Get In Touch</Link>
                    </Button>
                </SheetContent>
            </Sheet>
        </div>
        <Button asChild className="hidden md:block" variant="outline">
            <Link href="/contact">Get In Touch</Link>
        </Button>
        </nav>
    </header>
);

export const Header = ({ variant = 'transparent' }: HeaderProps) => {
    if (variant === 'sticky') {
        return <StickyHeader />;
    }
    return <TransparentHeader />;
};
