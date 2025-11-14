
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Facebook, Github, Instagram, Linkedin, LocateIcon, Mail, Phone, Smartphone, Tablet, Twitter, Watch } from "lucide-react";
import Link from "next/link";
import type { SVGProps } from "react";
import Image from "next/image";

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


const webPackages = [
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

const mobileFeatures = [
    'iOS & Android Platforms',
    'User-Centric UI/UX Design',
    'Scalable Backend Development',
    'App Store & Play Store Submission',
    'Push Notifications & In-App Purchases',
    'Post-Launch Maintenance'
];

const customSoftwareFeatures = [
    'Internal Tools & Dashboards',
    'CRM & ERP Systems',
    'Workflow Automation',
    'Third-party API Integrations',
    'Data Management Solutions',
    'Inventory & Asset Management'
];


export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-dvh bg-background">
            <Header />
            <main className="flex-1">
                {/* Web Solutions Section */}
                <section id="web-solutions" className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <Badge
                                variant="outline"
                                className="text-base md:text-lg font-medium tracking-wide border-primary/50 text-primary/90 bg-primary/10 mb-4"
                            >
                                Service
                            </Badge>
                            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight mb-4">
                                Web Solutions
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                                From simple landing pages to complex e-commerce platforms, I build beautiful, functional, and high-performing websites that meet your business goals.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
                            {webPackages.map((pkg) => (
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
                                            <Link href="/contact">Get Started</Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
                
                {/* Mobile Applications Section */}
                <section id="mobile-applications" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                             <Badge
                                variant="outline"
                                className="text-base md:text-lg font-medium tracking-wide border-primary/50 text-primary/90 bg-primary/10 mb-4"
                            >
                                Service
                            </Badge>
                            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight mb-4">
                                Mobile App Development
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                                I create beautiful, intuitive, and high-performance mobile applications for iOS and Android that your users will love.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="font-headline text-3xl font-bold mb-4">From Idea to App Store</h2>
                                <p className="text-muted-foreground mb-6">
                                    The mobile app development process is a journey we'll take together. It starts with your vision. I'll help refine your idea, create a beautiful design, develop a robust and scalable application, and guide you through the process of launching on the Apple App Store and Google Play Store.
                                </p>
                                <div className="grid grid-cols-3 gap-4 text-center mb-8">
                                    <div className="p-4 bg-background/50 rounded-lg">
                                        <Smartphone className="h-8 w-8 mx-auto mb-2 text-primary" />
                                        <p className="font-semibold">Phones</p>
                                    </div>
                                    <div className="p-4 bg-background/50 rounded-lg">
                                        <Tablet className="h-8 w-8 mx-auto mb-2 text-primary" />
                                        <p className="font-semibold">Tablets</p>
                                    </div>
                                    <div className="p-4 bg-background/50 rounded-lg">
                                        <Watch className="h-8 w-8 mx-auto mb-2 text-primary" />
                                        <p className="font-semibold">Wearables</p>
                                    </div>
                                </div>
                                <Button asChild size="lg">
                                    <Link href="/contact">Discuss Your App Idea</Link>
                                </Button>
                            </div>
                             <div className="flex justify-center">
                                <Image
                                    src="https://picsum.photos/seed/mobileapp/600/800"
                                    alt="Mobile App Showcase"
                                    width={400}
                                    height={550}
                                    className="rounded-xl shadow-2xl"
                                    data-ai-hint="mobile app interface"
                                />
                            </div>
                        </div>

                        <div className="mt-24 text-center">
                             <h2 className="font-headline text-4xl font-bold mb-4">Pricing</h2>
                             <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                                Every mobile app is unique. The final cost depends on the complexity, features, and platforms required. I provide a detailed, transparent quote after our initial consultation.
                             </p>
                             <Card className="max-w-md mx-auto">
                                <CardHeader>
                                    <CardTitle className="font-headline">Custom Pricing</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-4xl font-bold mb-4">By Consultation</p>
                                    <p className="text-muted-foreground">
                                        Let's discuss your project to determine the scope and provide a detailed estimate.
                                    </p>
                                </CardContent>
                             </Card>
                        </div>
                    </div>
                </section>

                {/* Custom Business Software Section */}
                 <section id="custom-business-software" className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <Badge
                                variant="outline"
                                className="text-base md:text-lg font-medium tracking-wide border-primary/50 text-primary/90 bg-primary/10 mb-4"
                            >
                                Service
                            </Badge>
                            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight mb-4">
                                Custom Business Software
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                                I develop tailored software solutions that streamline your operations, boost productivity, and provide a competitive edge.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="flex justify-center">
                                 <Image
                                    src="https://picsum.photos/seed/software/800/600"
                                    alt="Custom Software Interface"
                                    width={600}
                                    height={450}
                                    className="rounded-xl shadow-2xl"
                                    data-ai-hint="business software dashboard"
                                />
                            </div>
                            <div>
                                <h2 className="font-headline text-3xl font-bold mb-4">Your Business, Your Software</h2>
                                <p className="text-muted-foreground mb-6">
                                    Off-the-shelf software doesn't always fit. When you have unique processes, you need a solution built around your business. I work closely with you to understand your challenges and build a robust, scalable, and secure software application that perfectly matches your needs.
                                </p>
                                <ul className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8">
                                    {customSoftwareFeatures.map((feature) => (
                                        <li key={feature} className="flex items-center gap-2">
                                            <Check className="h-4 w-4 text-primary shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button asChild size="lg">
                                    <Link href="/contact">Book a Consultation</Link>
                                </Button>
                            </div>
                        </div>

                        <div className="mt-24 text-center">
                             <h2 className="font-headline text-4xl font-bold mb-4">Pricing</h2>
                             <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                               Custom software projects are quoted based on the specific requirements, complexity, and timeline. I believe in full transparency and will provide a detailed proposal after our initial consultation.
                             </p>
                             <Card className="max-w-md mx-auto">
                                <CardHeader>
                                    <CardTitle className="font-headline">Custom Pricing</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-4xl font-bold mb-4">By Consultation</p>
                                    <p className="text-muted-foreground">
                                        Let's analyze your needs and build a comprehensive project plan and estimate.
                                    </p>
                                </CardContent>
                             </Card>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

    