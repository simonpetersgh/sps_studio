
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
      title: "KEPS Studio",
      description:
        "A web app for the newly launched studio for a group of managed software engineers and freelance community.",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/sesa-studio.firebasestorage.app/o/keps-studio%2Fworkspace-1.png?alt=media&token=7338c884-7eab-43d9-884b-53d5309b910e",
      imageHint: "website cover",
      liveUrl: "https://sesastudio--sesa-studio.europe-west4.hosted.app/",
    },
    {
      title: "Delivery Mobile App",
      description:
        "An intuitive delivery and courier services application for a startup, soon to be available on both iOS and Android.",
      imageHint: "mobile payment",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/sesa-studio.firebasestorage.app/o/keps-studio%2Fdeft-project.png?alt=media&token=922e5b26-b7bf-4dba-bd28-e9bd35e1730a",
      liveUrl: "https://deft-admin.web.app",
    },
    {
      title: "Business Website Design",
      description:
        "A modern, performant, and SEO-friendly marketing website for a fashion brand in Accra.",
      imageUrl: "https://teesvividthread.com/og-image.png",
      imageHint: "corporate website",
      liveUrl: "https://www.teesvividthread.com",
    },
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
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
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
                    <p className="text-muted-foreground text-base">{project.description}</p>
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
