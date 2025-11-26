

import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle as Whatsapp } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const CtaSection = () => (
    <section id="contact-cta" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in-up">
                <h2 className="font-headline text-4xl md:text-5xl text-primary font-bold mb-6">
                  Let’s Talk About Your Project
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  You don't need a full technical plan to get started. Just bring your idea and I am happy to discuss how we can bring it to life. Let's analyze your business needs and find the best solution for your budget.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white">
                        <Link href="https://wa.me/233540228056" target="_blank">
                            <Whatsapp className="mr-2 h-5 w-5" /> Chat on WhatsApp
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                        <Link href="mailto:simonpetersgh@gmail.com">
                            <Mail className="mr-2 h-5 w-5" /> Send Email
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    </section>
);

const ContactFormSection = () => (
    <section id="contact-form" className="pb-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            Or, Send a Message Via The Form
          </h2>
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
            <Header variant="sticky" />
            <main className="flex-1">
                <CtaSection />
                <ContactFormSection />
            </main>
            <Footer />
        </div>
    )
}
