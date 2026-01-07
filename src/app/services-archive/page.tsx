

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
import { Check, Smartphone, Tablet, Watch } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

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
            <Header variant="sticky" />
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
                            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
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
                                        <ul className="space-y-3 text-base">
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
                            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                                I create beautiful, intuitive, and high-performance mobile applications for iOS and Android that your users will love.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="font-headline text-3xl font-bold mb-4">From Idea to App Store</h2>
                                <p className="text-muted-foreground mb-6 text-lg">
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
                             <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
                                Every mobile app is unique. The final cost depends on the complexity, features, and platforms required. I provide a detailed, transparent quote after our initial consultation.
                             </p>
                             <Card className="max-w-md mx-auto">
                                <CardHeader>
                                    <CardTitle className="font-headline">Custom Pricing</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-4xl font-bold mb-4">By Consultation</p>
                                    <p className="text-muted-foreground text-base">
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
                            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
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
                                <p className="text-muted-foreground mb-6 text-lg">
                                    Off-the-shelf software doesn't always fit. When you have unique processes, you need a solution built around your business. I work closely with you to understand your challenges and build a robust, scalable, and secure software application that perfectly matches your needs.
                                </p>
                                <ul className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8 text-base">
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
                             <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
                               Custom software projects are quoted based on the specific requirements, complexity, and timeline. I believe in full transparency and will provide a detailed proposal after our initial consultation.
                             </p>
                             <Card className="max-w-md mx-auto">
                                <CardHeader>
                                    <CardTitle className="font-headline">Custom Pricing</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-4xl font-bold mb-4">By Consultation</p>
                                    <p className="text-muted-foreground text-base">
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

    
