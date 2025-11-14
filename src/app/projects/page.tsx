
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
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


const allProjects = [
    {
      title: "Insight Dashboard",
      description: "A powerful data visualization platform for analyzing business metrics and trends in real-time.",
      imageUrl: "https://picsum.photos/seed/2/600/400",
      imageHint: "data dashboard",
      liveUrl: "#",
    },
    {
      title: "Mobile POS System",
      description: "An intuitive point-of-sale application for small businesses, available on both iOS and Android.",
      imageUrl: "https://picsum.photos/seed/3/600/400",
      imageHint: "mobile payment",
      liveUrl: "#",
    },
    {
      title: "Corporate Website Redesign",
      description: "A modern, performant, and SEO-friendly marketing website for a leading tech company.",
      imageUrl: "https://picsum.photos/seed/4/600/400",
      imageHint: "corporate website",
      liveUrl: "#",
    },
    {
      title: "E-commerce Storefront",
      description: "A full-featured e-commerce platform with a custom CMS and payment integration.",
      imageUrl: "https://picsum.photos/seed/5/600/400",
      imageHint: "online store",
      liveUrl: "#",
    },
    {
      title: "Project Management Tool",
      description: "A collaborative tool to help teams manage tasks, timelines, and resources effectively.",
      imageUrl: "https://picsum.photos/seed/6/600/400",
      imageHint: "project management",
      liveUrl: "#",
    },
    {
        title: "Recipe Finder App",
        description: "A mobile app that helps users discover new recipes based on ingredients they have.",
        imageUrl: "https://picsum.photos/seed/7/600/400",
        imageHint: "food recipe",
        liveUrl: "#",
    }
  ];
  
const Header = () => (
  <header className="py-4 px-4 sm:px-6 lg:px-8 border-b">
    <nav className="flex justify-between items-center">
      <Link href="/" className="flex items-center gap-2">
        <SpsLogo />
        <span className="font-headline text-xl font-bold">SPS Studio</span>
      </Link>
      <Button asChild variant="outline">
        <Link href="/contact">Get In Touch</Link>
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
  

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight mb-4">
                    All Projects
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                    Here's a broader selection of my work, showcasing my skills across different domains.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProjects.map((project) => (
                <Card
                  key={project.title}
                  className="overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
                >
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                    data-ai-hint={project.imageHint}
                  />
                   <CardHeader>
                    <CardTitle className="font-headline">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2">
                    <Button asChild variant="outline">
                      <Link href={project.liveUrl} target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live View
                      </Link>
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

    
