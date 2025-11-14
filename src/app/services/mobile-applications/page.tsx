
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Tablet, Watch } from "lucide-react";
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


export default function MobileAppsPage() {
    return (
        <div className="flex flex-col min-h-dvh bg-background">
            <Header />
            <main className="flex-1">
                <section id="mobile-apps" className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <Badge
                                variant="outline"
                                className="text-base md:text-lg font-medium tracking-wide border-primary/50 text-primary/90 bg-primary/10 mb-4"
                            >
                                Services
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
                                    <div className="p-4 bg-secondary/50 rounded-lg">
                                        <Smartphone className="h-8 w-8 mx-auto mb-2 text-primary" />
                                        <p className="font-semibold">Phones</p>
                                    </div>
                                    <div className="p-4 bg-secondary/50 rounded-lg">
                                        <Tablet className="h-8 w-8 mx-auto mb-2 text-primary" />
                                        <p className="font-semibold">Tablets</p>
                                    </div>
                                    <div className="p-4 bg-secondary/50 rounded-lg">
                                        <Watch className="h-8 w-8 mx-auto mb-2 text-primary" />
                                        <p className="font-semibold">Wearables</p>
                                    </div>
                                </div>
                                <Button asChild size="lg">
                                    <Link href="/#contact">Discuss Your App Idea</Link>
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
            </main>
            <Footer />
        </div>
    );
}
