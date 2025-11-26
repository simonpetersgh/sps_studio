import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image"; 
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Smartphone, Cpu, ArrowRight } from "lucide-react";
import {Header} from "@/components/layout/header"; 
import {Footer} from "@/components/layout/footer"; 
import PricingTable from "@/components/pricing-table"; 

// 1. SEO METADATA
export const metadata: Metadata = {
  title: "Services & Pricing | SPS Studio Ghana",
  description: "Affordable web development packages starting at GHS 1,200. Custom software and mobile app development for Ghanaian startups and businesses.",
  openGraph: {
    title: "Web Design Services - SPS Studio",
    description: "Get a professional website or custom app. Transparent pricing in GHS.",
  }
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      
      <main className="flex-1 pt-24">
        
        {/* 2. HERO SECTION */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16 text-center max-w-5xl mx-auto">
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary bg-primary/10">
            Services & Pricing
          </Badge>
          <h1 className="font-headline text-4xl md:text-6xl font-bold mb-6">
            There is a package for <span className="text-primary">you.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            We are dedicated to helping Ghanaian startups, gig workers, and small businesses launch their digital presence and build quality business applications affordably.
          </p>
        </section>

        {/* 3. PRICING TABLE (The interactive component) */}
        <PricingTable />

        {/* 4. CUSTOM & MOBILE SECTIONS */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-24">
                
                {/* Mobile Apps Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <Badge variant="outline" className="mb-4">iOS & Android</Badge>
                        <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6">Mobile Applications</h2>
                        <p className="text-lg text-muted-foreground mb-6">
                            From iOS to Android, we design and develop beautiful, intuitive, and high-performance native and cross-platform mobile applications. 
                            We handle the entire lifecycle from concept and UI/UX design to deployment.
                        </p>
                        <ul className="space-y-2 mb-8 text-muted-foreground">
                            <li className="flex items-center gap-2"><Smartphone className="w-5 h-5 text-primary"/> Native & Cross-Platform</li>
                            <li className="flex items-center gap-2"><Smartphone className="w-5 h-5 text-primary"/> App Store & Play Store Deployment</li>
                        </ul>
                        <div className="p-4 bg-secondary/20 rounded-lg border border-border mb-6">
                            <p className="text-sm font-medium">Pricing is determined by proposal after an initial discovery session.</p>
                        </div>
                        <Button asChild size="lg">
                            <Link href="/contact">Request Mobile Proposal</Link>
                        </Button>
                    </div>
                    {/* IMAGE PLACEHOLDER: Add your own image below */}
                    <div className="relative h-[400px] w-full bg-muted rounded-2xl overflow-hidden border flex items-center justify-center">
                         <span className="text-muted-foreground">Mobile App Mockup Image</span>
                    </div>
                </div>

                {/* Custom Software Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* IMAGE PLACEHOLDER: Add your own image below */}
                    <div className="order-2 md:order-1 relative h-[400px] w-full bg-muted rounded-2xl overflow-hidden border flex items-center justify-center">
                         <span className="text-muted-foreground">Dashboard/Software Image</span>
                    </div>
                    
                    <div className="order-1 md:order-2">
                        <Badge variant="outline" className="mb-4">Digital Transformation</Badge>
                        <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6">Custom Business Software</h2>
                        <p className="text-lg text-muted-foreground mb-6">
                            Streamline and digitize your operations with software built specifically for your business processes. 
                            We develop custom software, internal tools or platforms to solve your unique challenges.
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            <div className="flex items-center gap-3 p-3 border rounded-lg">
                                <Cpu className="w-5 h-5 text-primary" />
                                <span className="font-medium text-sm">MVP Development</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 border rounded-lg">
                                <Cpu className="w-5 h-5 text-primary" />
                                <span className="font-medium text-sm">Internal Tools</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 border rounded-lg">
                                <Cpu className="w-5 h-5 text-primary" />
                                <span className="font-medium text-sm">API Integrations</span>
                            </div>
                            <div className="flex items-center gap-3 p-3 border rounded-lg">
                                <Cpu className="w-5 h-5 text-primary" />
                                <span className="font-medium text-sm">Scalable Architecture</span>
                            </div>
                        </div>

                        <Button asChild size="lg" variant="outline">
                            <Link href="/contact">Request Software Proposal</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}