"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Ensure you have this for the images
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
import { Check, ArrowRight, ShieldCheck, Smartphone, Cpu } from "lucide-react";
import {Header} from "@/components/layout/header"; // Adjust path to your Header
import {Footer} from "@/components/layout/footer"; // Adjust path to your Footer

export default function ServicesPage() {
  const [billingCycle, setBillingCycle] = useState<"onetime" | "yearly">("onetime");

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      
      <main className="flex-1 pt-24">
        
        {/* --- HERO SECTION --- */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16 text-center max-w-5xl mx-auto">
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary bg-primary/10">
            Services & Pricing
          </Badge>
          <h1 className="font-headline text-4xl md:text-6xl font-bold mb-6">
            There is a package for <span className="text-primary">you.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            We are dedicated to helping Ghanaian startups, gig workers, and small businesses launch their digital presence. 
            We have tailored packages designed to suit your needs, budget, and digital transformation drive.
          </p>
        </section>

        {/* --- WEB SOLUTIONS (The Pricing Table) --- */}
        <section className="py-16 bg-secondary/20 px-4 sm:px-6 lg:px-8" id="web-packages">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-headline font-bold mb-4">Affordable Web Solutions</h2>
              <p className="text-muted-foreground mb-8">
                Pay once to own it, or subscribe for year-round peace of mind.
              </p>
              
              {/* TOGGLE SWITCH */}
              <div className="inline-flex bg-background border rounded-full p-1">
                <button
                  onClick={() => setBillingCycle("onetime")}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    billingCycle === "onetime" 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  One-Time Build
                </button>
                <button
                  onClick={() => setBillingCycle("yearly")}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    billingCycle === "yearly" 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Yearly Care Plans
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* PLAN 1: STARTER */}
              <Card className="flex flex-col border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Starter</CardTitle>
                  <CardDescription>
                    {billingCycle === "onetime" 
                      ? "Perfect for individuals needing a professional online presence." 
                      : "Essential care to keep your Starter website secure and updated."}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6">
                    <span className="text-3xl font-bold">
                        {billingCycle === "onetime" ? "GHS 1,200 - 1,500" : "GHS 750"}
                    </span>
                    <span className="text-sm text-muted-foreground block mt-1">
                        {billingCycle === "onetime" ? "One-time cost" : "/ year"}
                    </span>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {billingCycle === "onetime" ? (
                        <>
                            <li className="flex gap-2"><Check className="w-4 h-4 text-primary"/> Up to 5 Pages</li>
                            <li className="flex gap-2"><Check className="w-4 h-4 text-primary"/> 1 Year Domain & Hosting</li>
                            <li className="flex gap-2"><Check className="w-4 h-4 text-primary"/> SSL Certificate</li>
                            <li className="flex gap-2"><Check className="w-4 h-4 text-primary"/> Basic SEO Setup</li>
                        </>
                    ) : (
                        <>
                            <li className="flex gap-2"><Check className="w-4 h-4 text-green-500"/> Domain Renewals</li>
                            <li className="flex gap-2"><Check className="w-4 h-4 text-green-500"/> Secured Hosting</li>
                            <li className="flex gap-2"><Check className="w-4 h-4 text-green-500"/> Software Updates</li>
                            <li className="flex gap-2"><Check className="w-4 h-4 text-green-500"/> 2 Hours Monthly Support</li>
                        </>
                    )}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full" variant="outline">
                    <Link href={`https://wa.me/233540228056?text=Interested in Starter ${billingCycle} plan`}>Choose Starter</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* PLAN 2: BUSINESS */}
              <Card className="flex flex-col border-primary shadow-lg scale-105 z-10 bg-secondary/10">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold uppercase rounded-full">
                    Most Popular
                </div>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">Business</CardTitle>
                  <CardDescription>
                    {billingCycle === "onetime" 
                      ? "Enhanced digital footprint, features and functionality." 
                      : "Comprehensive support ensuring peak performance."}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6">
                    <span className="text-3xl font-bold">
                        {billingCycle === "onetime" ? "GHS 2,500 - 5,000" : "GHS 1,650"}
                    </span>
                    <span className="text-sm text-muted-foreground block mt-1">
                        {billingCycle === "onetime" ? "One-time cost" : "/ year"}
                    </span>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {billingCycle === "onetime" ? (
                        <>
                            <li className="flex gap-2"><Check className="w-4 h-4 text-primary"/> Up to 10 Pages</li>
                            <li className="flex gap-2"><Check className="w-4 h-4 text-primary"/> CMS Integration (WordPress/Next.js)</li>
                            <li className="flex gap-2"><Check className="w-4 h-4 text-primary"/> Advanced SEO & Analytics</li>
                            <li className="flex gap-2"><Check className="w-4 h-4 text-primary"/> Blog Setup</li>
                        </>
                    ) : (
                        <>
                            <li className="flex gap-2"><Check className="w-4 h-4 text-green-500"/> <strong>Everything in Starter</strong></li>
                            <li className="flex gap-2"><Check className="w-4 h-4 text-green-500"/> Performance Optimization</li>
                            <li className="flex gap-2"><Check className="w-4 h-4 text-green-500"/> Security Monitoring</li>
                            <li className="flex gap-2"><Check className="w-4 h-4 text-green-500"/> 5 Hours Monthly Support</li>
                        </>
                    )}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`https://wa.me/233540228056?text=Interested in Business ${billingCycle} plan`}>Choose Business</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* PLAN 3: E-COMMERCE */}
              <Card className="flex flex-col border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">E-commerce</CardTitle>
                  <CardDescription>
                    {billingCycle === "onetime" 
                      ? "For businesses ready to upsell online with a feature-rich site." 
                      : "Proactive maintenance for premium websites."}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6">
                    <span className="text-3xl font-bold">
                        {billingCycle === "onetime" ? "GHS 7,000+" : "GHS 4,500"}
                    </span>
                    <span className="text-sm text-muted-foreground block mt-1">
                        {billingCycle === "onetime" ? "One-time cost" : "/ year"}
                    </span>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {billingCycle === "onetime" ? (
                        <>
                            <li className="flex gap-2"><Check className="w-4 h-4 text-primary"/> Up to 20 Pages</li>
                            <li className="flex gap-2"><Check className="w-4 h-4 text-primary"/> E-commerce Store Setup</li>
                            <li className="flex gap-2"><Check className="w-4 h-4 text-primary"/> Digital Payments (Paystack/Hubtel)</li>
                            <li className="flex gap-2"><Check className="w-4 h-4 text-primary"/> 1 Month Free Support</li>
                        </>
                    ) : (
                        <>
                            <li className="flex gap-2"><Check className="w-4 h-4 text-green-500"/> <strong>Everything in Business</strong></li>
                            <li className="flex gap-2"><Check className="w-4 h-4 text-green-500"/> Priority Support</li>
                            <li className="flex gap-2"><Check className="w-4 h-4 text-green-500"/> Database Optimization</li>
                            <li className="flex gap-2"><Check className="w-4 h-4 text-green-500"/> 10 Hours Monthly Support</li>
                        </>
                    )}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full" variant="outline">
                    <Link href={`https://wa.me/233540228056?text=Interested in E-commerce ${billingCycle} plan`}>Choose E-commerce</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            {/* MAINTENANCE CALLOUT */}
            <div className="mt-12 bg-muted p-6 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 border">
                <div className="flex items-start gap-4">
                    <ShieldCheck className="w-10 h-10 text-primary shrink-0" />
                    <div>
                        <h4 className="font-bold text-lg">Already have a website?</h4>
                        <p className="text-muted-foreground text-sm">
                            We offer customizable support plans for websites not built by us. 
                            Includes Security Audits, Content Updates, and Redesigns.
                        </p>
                    </div>
                </div>
                <Button variant="secondary" asChild>
                    <Link href="/contact">Request Maintenance Quote</Link>
                </Button>
            </div>
          </div>
        </section>

        {/* --- CUSTOM & MOBILE (Layout from V2, Content from V1) --- */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-24">
                
                {/* 1. MOBILE APPS (Image Right) */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <Badge variant="outline" className="mb-4">iOS & Android</Badge>
                        <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6">Mobile Applications</h2>
                        <p className="text-lg text-muted-foreground mb-6">
                            From iOS to Android, we design and develop beautiful, intuitive, and high-performance native and cross-platform mobile applications. 
                            We handle the entire lifecycle from concept and UI/UX design to deployment and post-launch support.
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
                    {/* Placeholder for Image - Add your own image here */}
                    <div className="relative h-[400px] w-full bg-muted rounded-2xl overflow-hidden border">
                         {/* UNCOMMENT BELOW WHEN YOU HAVE AN IMAGE */}
                         {/* <Image src="/mobile-app-mockup.png" alt="Mobile App" fill className="object-cover" /> */}
                         <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                            Mobile App Mockup Image
                         </div>
                    </div>
                </div>

                {/* 2. CUSTOM SOFTWARE (Image Left) */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image Column */}
                    <div className="order-2 md:order-1 relative h-[400px] w-full bg-muted rounded-2xl overflow-hidden border">
                         {/* UNCOMMENT BELOW WHEN YOU HAVE AN IMAGE */}
                         {/* <Image src="/dashboard-mockup.png" alt="Dashboard" fill className="object-cover" /> */}
                         <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                            Dashboard/Software Image
                         </div>
                    </div>
                    
                    {/* Text Column */}
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