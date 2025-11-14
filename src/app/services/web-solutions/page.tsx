
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";
import type { SVGProps } from "react";

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
    <header className="py-4 px-4 sm:px-6 lg:px-8 border-b">
      <nav className="flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <SpsLogo />
          <span className="font-headline text-xl font-bold">SPS Studio</span>
        </Link>
        <Button asChild variant="outline">
          <Link href="/#contact">Get In Touch</Link>
        </Button>
      </nav>
    </header>
);

const Footer = () => (
    <footer className="py-6 px-4 sm:px-6 lg:px-8 border-t">
      <div className="text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} SPS Studio. All Rights Reserved.
      </div>
    </footer>
);

const packages = [
    {
        name: 'Starter',
        price: '$500 - $1,500',
        description: 'Ideal for individuals and small businesses needing a professional online presence.',
        features: [
            'Up to 5 Pages',
            'Responsive Design',
            'Contact Form',
            'Basic SEO Setup',
        ],
        popular: false
    },
    {
        name: 'Business',
        price: '$1,500 - $5,000',
        description: 'Perfect for growing businesses looking to expand their digital footprint.',
        features: [
            'Up to 15 Pages',
            'CMS Integration (e.g., WordPress)',
            'Advanced SEO',
            'Blog Setup',
        ],
        popular: true
    },
    {
        name: 'Premium/E-commerce',
        price: '$5,000+',
        description: 'For businesses wanting a full-featured e-commerce solution or a complex web application.',
        features: [
            'Unlimited Pages',
            'Full E-commerce Functionality',
            'Payment Gateway Integration',
            'Custom Features',
        ],
        popular: false
    },
    {
        name: 'Custom Solution',
        price: 'By Consultation',
        description: 'A tailored solution for unique and complex project requirements.',
        features: [
            'Bespoke Design & Development',
            'API Integrations',
            'Scalable Architecture',
            'Ongoing Support & Maintenance',
        ],
        popular: false
    },
];

export default function WebSolutionsPage() {
    return (
        <div className="flex flex-col min-h-dvh bg-background">
            <Header />
            <main className="flex-1">
                <section id="web-solutions" className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <Badge
                                variant="outline"
                                className="text-base md:text-lg font-medium tracking-wide border-primary/50 text-primary/90 bg-primary/10 mb-4"
                            >
                                Services
                            </Badge>
                            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight mb-4">
                                Web Solutions
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                                From simple landing pages to complex e-commerce platforms, I build beautiful, functional, and high-performing websites that meet your business goals.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
                            {packages.map((pkg) => (
                                <Card key={pkg.name} className={`flex flex-col h-full ${pkg.popular ? 'border-primary shadow-lg' : ''}`}>
                                    <CardHeader className="text-center">
                                        {pkg.popular && <Badge className="absolute top-0 -translate-y-1/2">Most Popular</Badge>}
                                        <CardTitle className="font-headline text-2xl">{pkg.name}</CardTitle>
                                        <CardDescription>{pkg.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-1 flex flex-col">
                                        <div className="text-center mb-6">
                                            <span className="text-4xl font-bold">{pkg.price.startsWith('$') ? pkg.price.split(' ')[0] : ''}</span>
                                            <span className="text-muted-foreground">{pkg.price.startsWith('$') ? pkg.price.substring(pkg.price.indexOf(' ')) : pkg.price}</span>
                                        </div>
                                        <ul className="space-y-3 text-sm">
                                            {pkg.features.map((feature) => (
                                                <li key={feature} className="flex items-center gap-2">
                                                    <Check className="h-4 w-4 text-primary" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter>
                                        <Button asChild className="w-full" variant={pkg.popular ? 'default' : 'outline'}>
                                            <Link href="/#contact">Get Started</Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
