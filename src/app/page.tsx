

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
        Plan. Build. Grow. with SPS.
      </h1>
      <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mb-8 animate-fade-in-up [animation-delay:0.4s]">
      Developing web and mobile applications that empower individuals and startups to establish a strong online presence and drive growth.
      </p>
      <Button asChild size="lg" className="animate-fade-in-up [animation-delay:0.6s] bg-transparent border-white text-white hover:bg-primary hover:text-black" variant="outline">
        <Link href="/contact">Get in Touch</Link>
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
          src="/sp.png"
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
    description: "I build responsive websites and web apps for organisations of any kind or size. Whether you need a clean online presence or a platform for ecommerce, bookings, user management, and self-service. I build solutions that support your goals round the clock.",
    link: "/service-plans",
    image: placeholderImages.services.web,
  },
  {
    icon: <Smartphone className="h-8 w-8 mb-4 text-primary" />,
    title: "Scalable Mobile Apps (iOS & Android)",
    description: "Need a high-quality mobile app without the high cost of traditional development? I build apps that run smoothly on both iPhone and Android, designed to fit your needs and requirements for your customers, staff, or on-the-go operations.",
    link: "/services-and-plans",
    image: placeholderImages.services.mobile,
  },
  {
    icon: <Briefcase className="h-8 w-8 mb-4 text-primary" />,
    title: "Custom Business Software",
    description: "If spreadsheets, notes, and manual work are slowing you down, you don’t need expensive enterprise software, get a software that fits your workflow, supports your team, and grows with your organisation. I develop secure, efficient and scalable tools that help manage customers, inventory, finances, and daily operations with ease.",
    // description: "If you are outgrowing Excel sheets, notebooks but don’t have the budget to purchase expensive Enterprise software, it is time for a custom solution tailored specifically to your unique business needs. From managing customer data, to inventory or cashflows management, I build user friendly, secure and scalable tools that optimize your business operations and eliminate the headaches of scaling your business with the right digital tools.",
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
            <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up [animation-delay:0.2s]">
                {services.map((service) => (
                    <Card
                        key={service.title}
                        className="flex flex-col overflow-hidden group hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-2"
                    >
                        <div className="relative w-full h-64">
                            <Image
                                src={service.image.src}
                                alt={service.title}
                                fill
                                data-ai-hint={service.image.hint}
                                className="object-cover"
                            />
                        </div>
                        <CardHeader>
                            <CardTitle className="font-headline text-center text-xl">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <p className="text-left text-muted-foreground">{service.description}</p>
                        </CardContent>
                        <CardFooter>
                            <Button asChild variant="link" className="w-full">
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
          <CtaSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
