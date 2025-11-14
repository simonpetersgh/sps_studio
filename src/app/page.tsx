
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Briefcase,
  ExternalLink,
  Facebook,
  Github,
  Instagram,
  LayoutTemplate,
  Linkedin,
  LocateIcon,
  Mail,
  Phone,
  Smartphone,
  Twitter,
} from "lucide-react";
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

const Header = () => (
  <header className="py-4 px-4 sm:px-6 lg:px-8 absolute top-0 left-0 right-0 z-10 bg-transparent text-white group">
    <nav className="flex justify-between items-center max-w-7xl mx-auto">
      <Link href="/" className="flex items-center gap-2">
        <SpsLogo />
        <span className="font-headline text-xl font-bold">[Simon S. Peters]</span>
      </Link>
      <div className="hidden md:flex items-center gap-4 text-sm font-medium">
        <Link href="#about" className="hover:text-primary transition-colors">
          About
        </Link>
        <Link href="#services" className="hover:text-primary transition-colors">
          Services
        </Link>
        <Link href="#portfolio" className="hover:text-primary transition-colors">
          Projects
        </Link>
        <Link href="/contact" className="hover:text-primary transition-colors">
          Contact
        </Link>
      </div>
      <Button asChild className="hidden md:block bg-transparent border-white text-white hover:bg-white hover:text-black" variant="outline">
        <Link href="/contact">Get In Touch</Link>
      </Button>
    </nav>
  </header>
);

const StickyHeader = () => (
  <header className="py-4 px-4 sm:px-6 lg:px-8 sticky top-0 z-20 bg-background/80 backdrop-blur-sm border-b">
    <nav className="flex justify-between items-center max-w-7xl mx-auto">
      <Link href="/" className="flex items-center gap-2">
        <SpsLogo />
        <span className="font-headline text-xl font-bold">[Simon S. Peters]</span>
      </Link>
      <div className="hidden md:flex items-center gap-4 text-sm font-medium">
        <Link href="#about" className="hover:text-primary transition-colors">
          About
        </Link>
        <Link href="#services" className="hover:text-primary transition-colors">
          Services
        </Link>
        <Link href="#portfolio" className="hover:text-primary transition-colors">
          Projects
        </Link>
        <Link href="/contact" className="hover:text-primary transition-colors">
          Contact
        </Link>
      </div>
      <Button asChild className="hidden md:block" variant="outline">
        <Link href="/contact">Get In Touch</Link>
      </Button>
    </nav>
  </header>
);

const HeroSection = () => (
  <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8 overflow-hidden">
    <div className="absolute inset-0">
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/sesa-studio.firebasestorage.app/o/sps-studio%2Fcover-3.png?alt=media&token=949857a4-ed32-4151-a458-13ee7a589482"
        alt="Abstract background image"
        fill
        className="object-cover animate-slow-zoom"
        data-ai-hint="abstract background"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />
    </div>
    <div className="relative z-10 flex flex-col items-center">
      <div className="animate-fade-in-up">
        <Badge
          variant="outline"
          className="text-lg md:text-xl font-medium tracking-wide border-primary/50 text-primary/90 bg-primary/10 mb-4"
        >
          Business Analyst & Software Developer
        </Badge>
      </div>
      <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary/90 tracking-tight mb-4 max-w-4xl leading-tight animate-fade-in-up [animation-delay:0.2s]">
        Transforming Ideas into Powerful Digital Solutions
      </h1>
      <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-8 animate-fade-in-up [animation-delay:0.4s]">
      I develop digital solutions that empower startups to establish a strong online presence, optimize performance and drive growth.
      </p>
      <Button asChild size="lg" className="animate-fade-in-up [animation-delay:0.6s] bg-transparent border-white text-white hover:bg-white hover:text-black" variant="outline">
        <Link href="#portfolio">Explore My Work</Link>
      </Button>
    </div>
  </section>
);


const AboutSection = () => (
  <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div className="order-2 md:order-1 animate-fade-in-up text-center md:text-left">
        <Badge
          variant="outline"
          className="text-base md:text-lg font-medium tracking-wide border-primary/50 text-primary/90 bg-primary/10 mb-4"
        >
          Hii, I'm Simon
        </Badge>
        <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">
          Hi, I'm Simon.
        </h2>
        <p className="text-lg text-muted-foreground mb-4">
          I'm the creative mind behind SPS Studio. With a passion for both the analytical and the artistic, I've dedicated my career to bridging the gap between data and design. My journey began in data analysis, where I honed my skills in uncovering hidden patterns and telling stories with numbers.
        </p>
        <p className="text-lg text-muted-foreground">
          This analytical foundation now fuels my work in web and app development, allowing me to build not just beautiful, but also smart and effective digital solutions. I thrive on transforming complex problems into elegant, user-friendly experiences. Let's create something exceptional together.
        </p>
      </div>
      <div className="flex justify-center order-1 md:order-2 animate-fade-in-up [animation-delay:0.2s]">
        <Image
          src="/sp-re.png"
          alt="A portrait of Simon"
          width={400}
          height={400}
          className="rounded-full object-cover w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
          data-ai-hint="portrait man"
        />
      </div>
    </div>
  </section>
);

const services = [
  {
    icon: <LayoutTemplate className="h-8 w-8 mb-4 text-primary" />,
    title: "Web Solutions",
    description:
      "Crafting responsive, high-performance websites and web applications tailored to your business needs.",
    link: "/services#web-solutions",
  },
  {
    icon: <Smartphone className="h-8 w-8 mb-4 text-primary" />,
    title: "Mobile App Development",
    description:
      "Building intuitive and engaging cross-platform mobile experiences for both iOS and Android.",
      link: "/services#mobile-applications",
  },
  {
    icon: <Briefcase className="h-8 w-8 mb-4 text-primary" />,
    title: "Custom Business Software",
    description:
      "Developing bespoke software solutions to solve your unique challenges and drive business growth.",
      link: "/services#custom-business-software",
  },
];

const ServicesSection = () => (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
    <div className="max-w-6xl mx-auto text-center">
      <div className="animate-fade-in-up mb-12">
        <Badge
          variant="outline"
          className="text-base md:text-lg font-medium tracking-wide border-primary/50 text-primary/90 bg-primary/10 mb-4"
        >
          My Expertise
        </Badge>
        <h2 className="font-headline text-4xl md:text-5xl font-bold">
          What I Do
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8 justify-center">
        {services.map((service, index) => (
          <Card
            key={service.title}
            className="flex flex-col text-center items-center hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <CardHeader>
              {service.icon}
              <CardTitle className="font-headline">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="link">
                <Link href={service.link}>Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const projects = [
  {
    title: "Insight Dashboard",
    description:
      "A powerful data visualization platform for analyzing business metrics and trends in real-time.",
    imageUrl: "https://picsum.photos/seed/2/600/400",
    imageHint: "data dashboard",
    liveUrl: "#",
  },
  {
    title: "Mobile POS System",
    description:
      "An intuitive point-of-sale application for small businesses, available on both iOS and Android.",
    imageUrl: "https://picsum.photos/seed/3/600/400",
    imageHint: "mobile payment",
    liveUrl: "#",
  },
  {
    title: "Corporate Website Redesign",
    description:
      "A modern, performant, and SEO-friendly marketing website for a leading tech company.",
    imageUrl: "https://picsum.photos/seed/4/600/400",
    imageHint: "corporate website",
    liveUrl: "#",
  },
];

const PortfolioSection = () => (
  <section
    id="portfolio"
    className="py-20 px-4 sm:px-6 lg:px-8"
  >
    <div className="max-w-6xl mx-auto text-center">
      <div className="mb-12 animate-fade-in-up">
        <Badge
          variant="outline"
          className="text-base md:text-lg font-medium tracking-wide border-primary/50 text-primary/90 bg-primary/10 mb-4"
        >
          My Work
        </Badge>
        <h2 className="font-headline text-4xl md:text-5xl font-bold">
          Featured Projects
        </h2>
      </div>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 text-left">
        {projects.map((project, index) => (
          <Card
            key={project.title}
            className="overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.15}s` }}
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
      <div className="text-center mt-12 animate-fade-in-up">
        <Button asChild size="lg" variant="outline">
          <Link href="/projects">View More Projects</Link>
        </Button>
      </div>
    </div>
  </section>
);

const ContactReferrerSection = () => (
    <section id="contact-referrer" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in-up">
                <Badge
                  variant="outline"
                  className="text-base md:text-lg font-medium tracking-wide border-primary/50 text-primary/90 bg-primary/10 mb-4"
                >
                  Have a project in mind?
                </Badge>
                <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">
                  Let's Build Something Great Together
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  I'm currently available for freelance work and new projects. If you want to chat about an idea or just say hi, I'd love to hear from you.
                </p>
                <Button asChild size="lg" variant="outline">
                    <Link href="/contact">Get In Touch</Link>
                </Button>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="bg-muted text-muted-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
              <SpsLogo className="w-8 h-8" />
              <span className="font-headline text-xl font-bold text-foreground">SPS Studio</span>
          </div>
          <p className="text-sm">
            Crafting digital excellence, from needs-focused requirement analysis to seamless web & app solutions.
          </p>
        </div>

        <div>
            <h3 className="font-headline text-lg font-semibold text-foreground mb-4">Contact Information</h3>
            <div className="space-y-2 text-sm">
                <div className="flex items-start gap-3">
                    <LocateIcon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>Accra, Ghana</span>
                </div>
                <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <a href="mailto:simonpetersgh@gmail.com" className="hover:text-primary hover:underline">
                        simonpetersgh@gmail.com
                    </a>
                </div>
                <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>(+233) 0540-228-056</span>
                </div>
            </div>
        </div>

        <div>
            <h3 className="font-headline text-lg font-semibold text-foreground mb-4">Follow Me</h3>
            <div className="flex gap-4">
            <Button asChild variant="outline" size="icon" className="bg-transparent hover:bg-accent/50">
              <Link href="#" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="icon" className="bg-transparent hover:bg-accent/50">
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="icon" className="bg-transparent hover:bg-accent/50">
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="icon" className="bg-transparent hover:bg-accent/50">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="icon" className="bg-transparent hover:bg-accent/50">
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

      </div>
      <div className="mt-8 pt-6 border-t border-muted-foreground/20 text-center text-sm">
        © {new Date().getFullYear()} SPS Studio. All Rights Reserved.
      </div>
    </footer>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <div className="block" id="page-content">
        <StickyHeader />
        <main className="flex-1">
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <PortfolioSection />
          <ContactReferrerSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

    