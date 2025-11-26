

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
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

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
  
export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header variant="sticky" />
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
