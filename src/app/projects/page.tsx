import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { projects } from "@/lib/project-data";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header variant="sticky" />
      <main className="flex-1">
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
                <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight mb-4 text-primary">
                    Portfolio
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                    A collection of web platforms, mobile applications, and custom systems built to solve real-world problems.
                </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={project.slug}
                  className="overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover"
                      data-ai-hint={project.imageHint}
                    />
                    <div className="absolute top-2 right-2">
                        <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                            {project.category}
                        </Badge>
                    </div>
                  </div>
                   <CardHeader>
                    <CardTitle className="font-headline text-xl text-primary">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground text-sm line-clamp-3">{project.brief}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center pt-0">
                    <Button asChild variant="link" className="p-0 text-primary hover:text-primary/80">
                      <Link href={`/projects/${project.slug}`}>
                        Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    {project.liveUrl && (
                      <Button asChild variant="ghost" size="sm" className="h-8">
                        <Link href={project.liveUrl} target="_blank">
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
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
