"use client";

import { useState } from "react";
import Link from "next/link";
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
import {
  Check,
  Smartphone,
  Layers,
  Code2,
  Wrench,
  ShieldCheck,
  Rocket,
  ArrowRight,
} from "lucide-react";

// Assuming you have moved Header/Footer to components. 
// If not, you will need to paste them here or import them.
import {Header} from "@/components/layout/header"; 
import {Footer} from "@/components/layout/footer";

// --- DATA ---
const webPackages = [
  {
    title: "Starter",
    description: "Get your brand online. Perfect for individuals and startups.",
    price: "GHS 1,200 - 1,500",
    features: [
      "Up to 5 Pages",
      "1 Year Domain (.com, .org)",
      "1 Year Hosting",
      "SSL Certificate",
      "Responsive Design",
      "Contact Form",
      "Basic SEO Setup",
      "1 Content Revision",
    ],
  },
  {
    title: "Business",
    description: "Enhanced digital footprint with CMS and Blog capabilities.",
    price: "GHS 2,500 - 5,000",
    isPopular: true,
    features: [
      "Up to 10 Pages",
      "CMS Integration",
      "Contact Forms & Blog Setup",
      "Advanced SEO",
      "Speed Optimisation",
      "Google Maps Integration",
      "Website Analytics",
      "2 Content Revisions",
      "Everything in Starter",
    ],
  },
  {
    title: "E-commerce",
    description: "Feature-rich online stores to sell and upsell digitally.",
    price: "GHS 7,000 - 30,000",
    features: [
      "Up to 20 Pages",
      "E-commerce Store Setup",
      "Digital Payment Integration",
      "Advanced SSL Certificate",
      "Product Management",
      "Advanced SEO & Speed Opt.",
      "Google Maps & Analytics",
      "1 Month Support",
    ],
  },
];

const carePlans = [
  {
    title: "Starter Subscription",
    price: "GHS 750 / year",
    description: "Essential care to keep your site secure and updated.",
    features: [
      "Everything in Starter (One-time)",
      "Domain Renewals",
      "Secured Hosting",
      "Software Updates",
      "Security Monitoring",
      "2 Hours Monthly Support",
    ],
  },
  {
    title: "Business Subscription",
    price: "GHS 1,650 / year",
    description: "Comprehensive support for peak performance.",
    isPopular: true,
    features: [
      "Everything in Business",
      "Domain Renewals",
      "Secured Hosting",
      "Performance Optimization",
      "Security Monitoring & Updates",
      "5 Hours Monthly Support",
    ],
  },
  {
    title: "E-commerce Subscription",
    price: "GHS 4,500 / year",
    description: "Proactive maintenance for premium websites.",
    features: [
      "Everything in E-commerce",
      "Domain Renewals",
      "Secured Hosting",
      "Software Updates",
      "Performance Monitoring",
      "10 Hours Monthly Support",
    ],
  },
];

const customServices = [
  {
    title: "MVP Development",
    icon: <Rocket className="h-8 w-8 text-primary mb-4" />,
    description: "We specialize in rapidly building and launching Minimum Viable Products (MVPs) to validate your business idea with real users. Our lean operation processes focus on building core functionality to get you to market quickly.",
    cta: "Request Proposal",
  },
  {
    title: "Mobile Applications",
    icon: <Smartphone className="h-8 w-8 text-primary mb-4" />,
    description: "From iOS to Android, we design and develop beautiful, intuitive, and high-performance native and cross-platform mobile applications. We handle the entire lifecycle from concept and UI/UX design to deployment.",
    cta: "Request Proposal",
  },
  {
    title: "Custom Business Software",
    icon: <Layers className="h-8 w-8 text-primary mb-4" />,
    description: "Streamline and digitize your operations with software built specifically for your business processes. We develop custom software, internal tools, or platforms to solve your unique challenges and drive digital transformation.",
    cta: "Request Proposal",
  },
];

export default function ServicesAndPricing() {
  const [activeTab, setActiveTab] = useState<"build" | "care">("build");

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      {/* Ensure Header is Sticky or Fixed based on preference */}
      <Header />
      
      <main className="flex-1 pt-24">
        
        {/* --- HERO SECTION --- */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16 text-center">
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary bg-primary/10">
            Services & Pricing
          </Badge>
          <h1 className="font-headline text-4xl md:text-6xl font-bold mb-6">
            Quality Solutions.<br />
            <span className="text-primary">Transparent Pricing.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We are dedicated to helping Ghanaian startups, gig workers, and small businesses launch their digital presence and build quality business applications affordably.
          </p>
        </section>

        {/* --- WEB PACKAGES SECTION (The Low Hanging Fruit) --- */}
        <section className="py-16 bg-secondary/30 px-4 sm:px-6 lg:px-8" id="web-packages">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-headline font-bold mb-4">Affordable Web Solutions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                 tailored web development packages for a one-time project or flexible yearly payment plans designed to provide value and quality.
              </p>
              
              {/* Toggle Switch */}
              <div className="inline-flex bg-background border rounded-full p-1 mb-8">
                <button
                  onClick={() => setActiveTab("build")}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTab === "build" 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  One-Time Build
                </button>
                <button
                  onClick={() => setActiveTab("care")}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTab === "care" 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Yearly Care Plans
                </button>
              </div>

              {/* Context Text based on Tab */}
              <div className="animate-fade-in-up">
                {activeTab === "build" ? (
                  <p className="text-sm text-primary mb-4 font-medium">Pay once, own your website forever. Ideal for full upfront ownership.</p>
                ) : (
                  <p className="text-sm text-primary mb-4 font-medium">Peace of mind. Security, updates, and domain renewals included.</p>
                )}
              </div>
            </div>

            {/* Pricing Cards Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {(activeTab === "build" ? webPackages : carePlans).map((plan, index) => (
                <Card 
                  key={index} 
                  className={`flex flex-col relative transition-all duration-300 hover:shadow-lg ${
                    plan.isPopular ? "border-primary shadow-md scale-105 z-10" : "border-border"
                  }`}
                >
                  {plan.isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold uppercase rounded-full tracking-wide">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl">{plan.title}</CardTitle>
                    <CardDescription className="h-10">{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="mb-6">
                      <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                      {activeTab === "build" && <span className="text-sm text-muted-foreground block mt-1">One-time cost</span>}
                    </div>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <Check className="h-5 w-5 text-green-500 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full" variant={plan.isPopular ? "default" : "outline"}>
                      <Link 
                        href={`https://wa.me/233540228056?text=Hi Simon, I am interested in the ${plan.title} ${activeTab === 'build' ? 'package' : 'subscription'}.`} 
                        target="_blank"
                      >
                        Choose {plan.title}
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {/* Custom Solution Callout within Pricing */}
            <div className="mt-12 bg-background border rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h3 className="text-xl font-bold font-headline">Need something Custom?</h3>
                <p className="text-muted-foreground mt-2 max-w-xl">
                  We offer bespoke design, API integrations, and scalable architecture for unique business needs.
                </p>
              </div>
              <Button asChild variant="secondary">
                <Link href="/contact">Request a Custom Quote</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* --- CUSTOM APP SERVICES (High Ticket Focus) --- */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 md:text-center max-w-3xl mx-auto">
              <Badge variant="outline" className="mb-4">Advanced Solutions</Badge>
              <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6">
                Custom App & Software Services
              </h2>
              <p className="text-lg text-muted-foreground">
                When your vision goes beyond a standard website, we build scalable, high-performance applications tailored to your unique business needs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {customServices.map((service, index) => (
                <Card key={index} className="bg-secondary/10 border-none hover:bg-secondary/20 transition-colors">
                  <CardHeader>
                    {service.icon}
                    <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" asChild className="px-0 text-primary">
                      <Link href="/contact" className="flex items-center gap-2">
                        {service.cta} <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* --- MAINTENANCE FOR OTHERS --- */}
        <section className="py-16 bg-muted/30 px-4 sm:px-6 lg:px-8 border-t">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
              <Wrench className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-headline font-bold mb-4">Have a site not built by us?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              We offer customizable support plans for websites with special requirements or existing codebases. 
              From security audits to feature improvements and redesigns.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge variant="secondary" className="px-3 py-1">Full Site Audit</Badge>
              <Badge variant="secondary" className="px-3 py-1">Security Checks</Badge>
              <Badge variant="secondary" className="px-3 py-1">Content Updates</Badge>
              <Badge variant="secondary" className="px-3 py-1">On-demand Dev Support</Badge>
            </div>
            <Button asChild size="lg">
              <Link href="/contact">Get a Maintenance Quote</Link>
            </Button>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}