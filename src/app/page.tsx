




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
  LayoutTemplate,
  Mail,
  MessageCircle,
  Rocket,
  Smartphone,
  MessageCircle as Whatsapp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import placeholderImages from "@/lib/placeholder-images.json";

const HeroSection = () => (
  <section className="relative h-dvh md:h-[70vh] min-h-[500px] flex items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8 overflow-hidden">
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
        Plan. Build. Launch. Grow with SPS.
      </h1>
      <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mb-8 animate-fade-in-up [animation-delay:0.4s]">
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
        {/* <Badge
          variant="outline"
          className="text-base md:text-lg font-medium tracking-wide border-primary/50 text-primary/90 bg-primary/10 mb-4"
        >
          About Me
        </Badge> */}
        <h2 className="font-headline text-4xl md:text-5xl text-primary/90 font-bold mb-6">
          Hii, I'm Simon.
        </h2>
        <p className="text-lg text-left text-muted-foreground mb-4">
        A freelance developer and analyst based in Accra, Ghana. I am a tech professional with a bachelor’s degree in Business Information Technology with a unique blend of business acumen and technical expertise 
        which gives me a unique advantage to understand business needs, strategy and the technical solutions needed to achieve them.
        </p>
        <p className="text-lg text-left text-muted-foreground">
        I specialize in the design and devlopment of high-performance and affordable websites and cross-platform applications for startups and SMEs to thrive and grow in the digital economy in Ghana. 
        My role is centered on partnering with clients to understand their needs, and turn ideas into into user-friendly applications that help optimize operations and drive business success.
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
    title: "High-Performance Websites & Web Platforms",
    description: "Having a professional online presence in the digital age is non-negotiable. I design and build fast, responsive websites that establish trust and make one’s business stand out. Beyond just standard websites and marketing sites, I build web applications where your users can log in, book services, or manage accounts. We can turn your website into a tool for customer self-service and drive sales 24/7.",
    link: "/service-plans",
    image: placeholderImages.services.web,
  },
  {
    icon: <Smartphone className="h-8 w-8 mb-4 text-primary" />,
    title: "Scalable Mobile Apps (iOS & Android)",
    description: "Get your own mobile app without the high cost of traditional development. I use smart cross-platform technology to build high-quality apps that work flawlessly on both iPhone and Android from a single codebase. marketplace, delivery service, or community. Whether you need a customer-facing app for bookings and orders, or an app for your agents and staff tools to manage tasks on the go, I help develop apps for your one’s unique needs.",
    link: "/services-and-plans",
    image: placeholderImages.services.mobile,
  },
  {
    icon: <Briefcase className="h-8 w-8 mb-4 text-primary" />,
    title: "Custom Business Software",
    description: "If you are outgrowing Excel sheets, notebooks but don’t have the budget to purchase expensive Enterprise software, it is time for a custom solution tailored specifically to your unique business needs. From managing customer data, to inventory or cashflows management, I build user friendly, secure and scalable tools that optimize your business operations and eliminate the headaches of scaling your business with the right digital tools.",
    link: "/services-and-plans",
    image: placeholderImages.services.custom,
  },
];

const ServicesSection = () => (
  <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
    <div className="max-w-6xl mx-auto text-center">
      <div className="animate-fade-in-up mb-12">
        <h2 className="font-headline text-4xl md:text-5xl text-primary font-bold">
          Services and How I Can Help
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8 justify-center animate-fade-in-up [animation-delay:0.2s] md:[perspective:1000px]">
        {services.map((service) => (
          <div key={service.title} className="group md:h-[400px]">
            <div className="relative w-full h-full rounded-xl shadow-lg transition-all duration-500 md:[transform-style:preserve-3d] md:group-hover:[transform:rotateY(180deg)]">
              {/* Front Face */}
              <div className="md:absolute md:inset-0 md:[backface-visibility:hidden]">
                <div className="relative w-full h-64 md:h-full rounded-xl overflow-hidden">
                  <Image
                    src={service.image.src}
                    alt={service.title}
                    width={service.image.width}
                    height={service.image.height}
                    data-ai-hint={service.image.hint}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-end p-6">
                    <h3 className="text-white text-2xl font-bold font-headline">{service.title}</h3>
                  </div>
                </div>
              </div>
              {/* Back Face */}
              <div className="relative md:absolute md:inset-0 md:[transform:rotateY(180deg)] md:[backface-visibility:hidden]">
                <Card className="flex flex-col h-full rounded-xl -mt-2 md:mt-0">
                  <CardHeader className="items-center">
                    {service.icon}
                    <CardTitle className="font-headline text-center text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-left text-muted-foreground text-sm">{service.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="link" className="w-full">
                      <Link href={service.link}>Learn More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
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
      description: "We start with a free chat. I learn about your ideas, business goals and challenges to understand exactly what you need. As both an analyst and a developer, I help you clarify your requirements to ensure we build the right solution, not just any solution.",
      image: placeholderImages.workflow.discovery,
    },
    {
      value: "step-2",
      title: "Step 2: Proposal & Planning",
      icon: <ClipboardList className="h-6 w-6 text-primary" />,
      shortTitle: "Planning",
      description: "Once I understand your needs, I create a clear proposal outlining what we’re building, how it will work, timelines and cost, and what you can expect at each stage. After your approval, I map out a structured plan and roadmap, so you know exactly what’s coming next. Everything is transparent from the start. No hidden surprises.",
      image: placeholderImages.workflow.planning,
    },
    {
      value: "step-3",
      title: "Step 3: Design & Development",
      icon: <Code className="h-6 w-6 text-primary" />,
      shortTitle: "Development",
      description: "This is where the magic happens. With the plan in place, I move into designing and building your solution. You’ll see wireframes, UI designs so you can visualize the result and test prototypes. I provide regular updates throughout the development process for you to stay informed and confident as your idea comes to life.",
      image: placeholderImages.workflow.development,
    },
    {
      value: "step-4",
      title: "Step 4: Launch & Support",
      icon: <Rocket className="h-6 w-6 text-primary" />,
      shortTitle: "Launch",
      description: "After thorough testing, improvements and your final approval, your solution is packaged and deployed. But I don't just disappear; I help you launch your project and ensure everything runs smoothly within the provided support period as your solution is in use.",
      image: placeholderImages.workflow.launch,
    },
];

const WorkflowSection = () => (
    <section id="workflow" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="font-headline text-4xl md:text-5xl text-primary font-bold">
            How We Can Work Together
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            In partnering you to turn your idea from concept to a working product., I keep the entire process simple, transparent, and collaborative through a 4-step workflow:
          </p>
        </div>
  
        <div className="animate-fade-in-up [animation-delay:0.2s]">
          <Accordion type="single" collapsible defaultValue="step-1">
            {workflowSteps.map(step => (
              <AccordionItem value={step.value} key={step.value}>
                <AccordionTrigger className="text-xl font-headline hover:no-underline">
                    <div className="flex items-center gap-4">
                        <span className="p-2 bg-primary/10 rounded-full">{step.icon}</span>
                        <span>{step.title}</span>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pl-4 border-l-2 border-primary ml-[18px]">
                    <div className="grid md:grid-cols-3 gap-8 py-4">
                        <div className="md:col-span-2">
                           {step.description}
                        </div>
                        <div className="relative h-48 w-full rounded-lg overflow-hidden">
                           <Image 
                             src={step.image.src}
                             alt={step.title}
                             width={step.image.width}
                             height={step.image.height}
                             data-ai-hint={step.image.hint}
                             className="w-full h-full object-cover"
                           />
                        </div>
                    </div>
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
        {/* <Badge
          variant="outline"
          className="text-base md:text-lg font-medium tracking-wide border-primary/50 text-primary/90 bg-primary/10 mb-4"
        >
          My Work
        </Badge> */}
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
      <div className="text-center mt-12 animate-fade-in-up [animation-delay:0.4s]">
        <Button asChild size="lg" variant="outline">
          <Link href="/projects">View More Projects</Link>
        </Button>
      </div>
    </div>
  </section>
);

const CtaSection = () => (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in-up">
                <h2 className="font-headline text-4xl md:text-5xl text-primary font-bold mb-6">
                  Let’s Talk About Your Project
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
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

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <div className="block" id="page-content">
        <Header variant="sticky" />
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

    
