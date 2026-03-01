import { projects } from "@/lib/project-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react";
import { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | SPS Studio`,
    description: project.brief,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header variant="sticky" />
      <main className="flex-1">
        <article className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="mb-8 hover:bg-transparent -ml-2">
            <Link href="/projects" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Portfolio
            </Link>
          </Button>

          <div className="relative h-[300px] md:h-[450px] w-full rounded-2xl overflow-hidden mb-12 shadow-2xl border">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <Badge className="mb-4">{project.category}</Badge>
                <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
                  {project.title}
                </h1>
              </div>
              {project.liveUrl && (
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href={project.liveUrl} target="_blank">
                    <ExternalLink className="mr-2 h-5 w-5" /> Visit Live Project
                  </Link>
                </Button>
              )}
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold font-headline mb-4 border-b pb-2 text-primary">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 pt-8">
              <section>
                <h3 className="text-2xl font-bold font-headline mb-6 text-primary flex items-center gap-2">
                   Key Features
                </h3>
                <ul className="space-y-4">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-2xl font-bold font-headline mb-6 text-primary">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-sm py-1.5 px-3">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </section>
            </div>

            {project.liveUrl && (
              <div className="pt-12 border-t mt-12 flex justify-center">
                <Button asChild size="lg" variant="outline" className="gap-2">
                  <Link href={project.liveUrl} target="_blank">
                    <ExternalLink className="h-5 w-5" /> Open Project in New Tab
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </article>

        <section className="bg-secondary/20 py-20 mt-20">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="font-headline text-3xl font-bold mb-6 text-primary">Have a similar project in mind?</h2>
                <p className="text-xl text-muted-foreground mb-8">
                    Let's discuss how we can bring your ideas to life with professional engineering.
                </p>
                <Button asChild size="lg">
                    <Link href="/contact">Get in Touch</Link>
                </Button>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
