"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Check, ShieldCheck } from "lucide-react";

export default function PricingTable() {
  const [billingCycle, setBillingCycle] = useState<"onetime" | "yearly">("onetime");

  return (
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
              <CardDescription className="min-h-[40px]">
                {billingCycle === "onetime" 
                  ? "Perfect for individuals and startups needing a professional online presence." 
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
                        <li className="flex gap-2"><Check className="w-4 h-4 text-primary"/> 1 Year Domain (.com)</li>
                        <li className="flex gap-2"><Check className="w-4 h-4 text-primary"/> 1 Year Hosting</li>
                        <li className="flex gap-2"><Check className="w-4 h-4 text-primary"/> SSL Certificate</li>
                        <li className="flex gap-2"><Check className="w-4 h-4 text-primary"/> Basic SEO Setup</li>
                        <li className="flex gap-2"><Check className="w-4 h-4 text-primary"/> 1 Content Revision</li>
                    </>
                ) : (
                    <>
                        <li className="flex gap-2"><Check className="w-4 h-4 text-green-500"/> Domain Renewals</li>
                        <li className="flex gap-2"><Check className="w-4 h-4 text-green-500"/> Secured Hosting</li>
                        <li className="flex gap-2"><Check className="w-4 h-4 text-green-500"/> Software Updates</li>
                        <li className="flex gap-2"><Check className="w-4 h-4 text-green-500"/> Security Monitoring</li>
                        <li className="flex gap-2"><Check className="w-4 h-4 text-green-500"/> 2 Hours Monthly Support</li>
                    </>
                )}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full" variant="outline">
                <Link href={`https://wa.me/233540228056?text=Interested in Starter ${billingCycle} plan`} target="_blank">Choose Starter</Link>
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
              <CardDescription className="min-h-[40px]">
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
                        <li className="flex gap-2"><Check className="w-4 h-4 text-primary"/> CMS Integration</li>
                        <li className="flex gap-2"><Check className="w-4 h-4 text-primary"/> Advanced SEO & Analytics</li>
                        <li className="flex gap-2"><Check className="w-4 h-4 text-primary"/> Blog Setup</li>
                        <li className="flex gap-2"><Check className="w-4 h-4 text-primary"/> Speed Optimisation</li>
                        <li className="flex gap-2"><Check className="w-4 h-4 text-primary"/> 2 Content Revisions</li>
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
                <Link href={`https://wa.me/233540228056?text=Interested in Business ${billingCycle} plan`} target="_blank">Choose Business</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* PLAN 3: E-COMMERCE */}
          <Card className="flex flex-col border-border hover:border-primary/50 transition-colors">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">E-commerce</CardTitle>
              <CardDescription className="min-h-[40px]">
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
                        <li className="flex gap-2"><Check className="w-4 h-4 text-primary"/> Digital Payments</li>
                        <li className="flex gap-2"><Check className="w-4 h-4 text-primary"/> Advanced SSL</li>
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
                <Link href={`https://wa.me/233540228056?text=Interested in E-commerce ${billingCycle} plan`} target="_blank">Choose E-commerce</Link>
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
  );
}