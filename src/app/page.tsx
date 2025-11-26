

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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Briefcase,
  ClipboardList,
  Code,
  ExternalLink,
  Facebook,
  Github,
  Instagram,
  LayoutTemplate,
  Linkedin,
  LocateIcon,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  Rocket,
  Smartphone,
  Twitter,
  MessageCircle as Whatsapp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { SVGProps } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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
        <span className="font-headline text-xl font-bold">TheSPS Studio</span>
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
      <div className="md:hidden">
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background text-foreground">
                <div className="grid gap-4 py-6">
                    <Link href="/" className="flex items-center gap-2 mb-4">
                        <SpsLogo className="w-8 h-8" />
                        <span className="font-headline text-xl font-bold">Simon Peters Sakpla</span>
                    </Link>
                    <Link href="/#about" className="text-lg font-medium hover:text-primary transition-colors">
                      About
                    </Link>
                    <Link href="/#services" className="text-lg font-medium hover:text-primary transition-colors">
                      Services
                    </Link>
                    <Link href="/#portfolio" className="text-lg font-medium hover:text-primary transition-colors">
                      Projects
                    </Link>
                    <Link href="/contact" className="text-lg font-medium hover:text-primary transition-colors">
                      Contact
                    </Link>
                </div>
                <Button asChild className="w-full" variant="outline">
                    <Link href="/contact">Get In Touch</Link>
                </Button>
            </SheetContent>
        </Sheet>
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
        <span className="font-headline text-xl font-bold">Simon Peters Sakpla</span>
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
       <div className="md:hidden">
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <div className="grid gap-4 py-6">
                    <Link href="/" className="flex items-center gap-2 mb-4">
                        <SpsLogo className="w-8 h-8" />
                        <span className="font-headline text-xl font-bold">SPS Studio</span>
                    </Link>
                    <Link href="/#about" className="text-lg font-medium hover:text-primary transition-colors">
                      About
                    </Link>
                    <Link href="/#services" className="text-lg font-medium hover:text-primary transition-colors">
                      Services
                    </Link>
                    <Link href="/#portfolio" className="text-lg font-medium hover:text-primary transition-colors">
                      Projects
                    </Link>
                    <Link href="/contact" className="text-lg font-medium hover:text-primary transition-colors">
                      Contact
                    </Link>
                </div>
                <Button asChild className="w-full" variant="outline">
                    <Link href="/contact">Get In Touch</Link>
                </Button>
            </SheetContent>
        </Sheet>
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
      {/* <h1 className="font-headline text-4xl md:text-6xl font-bold text-primary/90 tracking-tight mb-4 max-w-4xl leading-tight animate-fade-in-up [animation-delay:0.2s]">
        [Simon Peters Sakpla]
      </h1> */}
      <h1 className="font-headline text-4xl md:text-4xl font-bold text-primary/90 tracking-tight py-6 mb-4 max-w-4xl leading-tight animate-fade-in-up [animation-delay:0.2s]">
        Chat. Plan. Build. Launch. Grow with SPS.
      </h1>
      <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-8 animate-fade-in-up [animation-delay:0.4s]">
      Developing web and mobile applications that empower individuals and startups to establish a strong online presence and drive growth.
      </p>
      <Button asChild size="lg" className="animate-fade-in-up [animation-delay:0.6s] bg-transparent border-white text-white hover:bg-primary hover:text-black" variant="outline">
        <Link href="#contact">Get in Touch</Link>
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
          About Me
        </Badge>
        <h2 className="font-headline text-4xl md:text-5xl text-primary/90 font-bold mb-6">
          Hii, I'm Simon.
        </h2>
        <p className="text-lg text-left text-muted-foreground mb-4">
        A freelance developer and analyst based in Accra, Ghana. I am a tech professional with a bachelor’s degree in Business Information Technology with a unique blend of business acumen and technical expertise 
        which gives me a unique advantage. 
        I understand both the business needs, strategy and the technical solutions needed to achieve them.
        </p>
        <p className="text-lg text-left text-muted-foreground">
        I specialize in the design and devlopment of high-performance and affordable websites and cross-platform applications for startups and SMEs to thrive and grow in the digital economy in Ghana. 
        My role is centered on partnering clients to understand their needs, and turn ideas into into user-friendly applications that help optimize operations and drive business success.
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
    description: "Having a professional online presence in the digital age is non-negotiable. I design and build fast, responsive websites that establish trust and make one’s business stand out. Beyond just standard websites and marketing sites, I build web applications where your users can log in, book services, or manage accounts. We can turn your website into a tool for customer self-service and drive sales 24/7.",
    link: "/services#web-solutions",
  },
  {
    icon: <Smartphone className="h-8 w-8 mb-4 text-primary" />,
    title: "Mobile App Development",
    description: "Get your own mobile app without the high cost of traditional development. I use smart cross-platform technology to build high-quality apps that work flawlessly on both iPhone and Android from a single codebase. marketplace, delivery service, or community. Whether you need a customer-facing app for bookings and orders, or an app for your agents and staff tools to manage tasks on the go, I help develop apps for your one’s unique needs.",
    link: "/services#mobile-applications",
  },
  {
    icon: <Briefcase className="h-8 w-8 mb-4 text-primary" />,
    title: "Custom Business Software",
    description: "If you are outgrowing Excel sheets, notebooks but don’t have the budget to purchase expensive Enterprise software, it is time for a custom solution tailored specifically to your unique business needs. From managing customer data, to inventory or cashflows management, I build user friendly, secure and scalable tools that optimize your business operations and eliminate the headaches of scaling your business with the right digital tools.",
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
        <h2 className="font-headline text-4xl md:text-5xl text-primary font-bold">
          How I Can Help?
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8 justify-center animate-fade-in-up [animation-delay:0.2s]">
        {services.map((service, index) => (
          <Card
            key={service.title}
            className="flex flex-col text-center items-center hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader className="items-center">
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

const workflowSteps = [
    {
      value: "step-1",
      title: "Step 1: Discovery & Strategy",
      icon: <MessageCircle className="h-6 w-6 text-primary" />,
      shortTitle: "Discovery",
      description: "We start with a free chat. I learn about your ideas, business goals and challenges to understand exactly what you need. As both an analyst and a developer, I help you clarify your requirements to ensure we build the right solution, not just any solution."
    },
    {
      value: "step-2",
      title: "Step 2: Proposal & Planning",
      icon: <ClipboardList className="h-6 w-6 text-primary" />,
      shortTitle: "Planning",
      description: "Once I understand your needs, I create a clear proposal outlining what we’re building, how it will work, timelines and cost, and what you can expect at each stage. After your approval, I map out a structured plan and roadmap, so you know exactly what’s coming next. Everything is transparent from the start. No hidden surprises."
    },
    {
      value: "step-3",
      title: "Step 3: Design & Development",
      icon: <Code className="h-6 w-6 text-primary" />,
      shortTitle: "Development",
      description: "This is where the magic happens. With the plan in place, I move into designing and building your solution. You’ll see wireframes, UI designs so you can visualize the result and test prototypes. I provide regular updates throughout the development process for you to stay informed and confident as your idea comes to life."
    },
    {
      value: "step-4",
      title: "Step 4: Launch & Support",
      icon: <Rocket className="h-6 w-6 text-primary" />,
      shortTitle: "Launch",
      description: "After thorough testing, improvements and your final approval, your solution is packaged and deployed. But I don't just disappear; I help you launch your project and ensure everything runs smoothly within the provided support period as your solution is in use."
    },
  ];
  
const WorkflowSection = () => (
    <section id="workflow" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
            <Badge
                variant="outline"
                className="text-base md:text-lg font-medium tracking-wide border-primary/50 text-primary/90 bg-primary/10 mb-4"
            >
                Our Process
            </Badge>
          <h2 className="font-headline text-4xl md:text-5xl text-primary font-bold">
            How We Can Work Together
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            In partnering you to turn your idea from concept to a working product., I keep the entire process simple, transparent, and collaborative through a 4-step workflow:
          </p>
        </div>
  
        <div className="hidden md:flex justify-between items-center mb-8 relative animate-fade-in-up [animation-delay:0.2s]">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2"></div>
            {workflowSteps.map((step, index) => (
                <div key={step.value} className="relative z-10 flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                        {step.icon}
                    </div>
                    <p className="mt-2 font-semibold text-sm">{step.shortTitle}</p>
                </div>
            ))}
        </div>
        
        <div className="animate-fade-in-up [animation-delay:0.4s]">
          <Accordion type="single" collapsible defaultValue="step-1">
            {workflowSteps.map(step => (
              <AccordionItem value={step.value} key={step.value}>
                <AccordionTrigger className="text-lg font-headline hover:no-underline">
                    <div className="flex items-center gap-4">
                        <span className="md:hidden">{step.icon}</span>
                        <span>{step.title}</span>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pl-4 border-l-2 border-primary ml-2">
                    {step.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
);
  
const projects = [
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

const PortfolioSection = () => (
  <section
    id="portfolio"
    className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50"
  >
    <div className="max-w-6xl mx-auto text-center">
      <div className="mb-12 animate-fade-in-up">
        <Badge
          variant="outline"
          className="text-base md:text-lg font-medium tracking-wide border-primary/50 text-primary/90 bg-primary/10 mb-4"
        >
          My Work
        </Badge>
        <h2 className="font-headline text-4xl md:text-5xl text-primary font-bold">
          Featured Projects
        </h2>
      </div>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 text-left animate-fade-in-up [animation-delay:0.2s]">
        {projects.map((project, index) => (
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
      <div className="text-center mt-12 animate-fade-in-up [animation-delay:0.4s]">
        <Button asChild size="lg" variant="outline">
          <Link href="/projects">View More Projects</Link>
        </Button>
      </div>
    </div>
  </section>
);

const CtaSection = () => (
    <section id="contact-referrer" className="py-20 px-4 sm:px-6 lg:px-8">
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
        © {new Date().getFullYear()} TheSPS Studio. All Rights Reserved.
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
          <WorkflowSection />
          <PortfolioSection />
          <CtaSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

    
