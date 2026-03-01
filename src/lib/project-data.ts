export interface Project {
  slug: string;
  title: string;
  brief: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  liveUrl?: string;
  technologies: string[];
  features: string[];
  category: 'Web' | 'Mobile' | 'System';
}

export const projects: Project[] = [
  {
    slug: "madwuma-marketing",
    title: "Madwuma Apps Website",
    brief: "The online presence and promotional platform for the Madwuma mobile application.",
    description: "The Madwuma App Marketing Site serves as the online presence and promotional platform for the Madwuma mobile application. Designed to attract users and drive downloads, the site highlights the app’s key features, benefits, and use cases.",
    imageUrl: "/images/madwuma-site.png",
    imageHint: "marketing website",
    category: "Web",
    technologies: ["HTML5", "Tailwind CSS", "TypeScript", "React.js", "NextJS", "Firebase", "Resend", "SEO optimization"],
    features: [
      "Responsive web design ensuring seamless experience across devices",
      "Interactive feature showcase with graphics and animations",
      "Download links and call-to-action buttons optimized for conversions",
      "Blog/updates section for announcements and user engagement",
      "Integration with analytics tools for traffic and engagement tracking"
    ]
  },
  {
    slug: "madwuma-cashbook",
    title: "Madwuma Cashbook App",
    brief: "A financial management tool for small businesses and freelancers to track expenses and income.",
    description: "Madwuma Cashbook is a financial management tool designed for small businesses and freelancers to track expenses, income, and cash flow efficiently. The app simplifies bookkeeping and financial record-keeping through an intuitive interface.",
    imageUrl: "/images/m-cashbook.png",
    imageHint: "financial app interface",
    category: "Mobile",
    technologies: ["Flutter", "Supabase", "Authentication", "Real-time Database", "Analytics", "Reporting"],
    features: [
      "Secure account setup and login system",
      "User based access control and data management",
      "Record and categorize transactions with real-time updates",
      "Generate financial summaries and reports for decision-making",
      "Export data to Excel for further analysis"
    ]
  },
  {
    slug: "sycast",
    title: "SyCast – Live Audio Streaming System",
    brief: "A reliable platform for streaming audio content to multiple users simultaneously.",
    description: "SyCast is a live audio streaming system designed for online radio, podcasts, and live events. It provides a reliable platform for streaming audio content to multiple users simultaneously, with real-time listener interaction.",
    imageUrl: "/images/m-sycast.jpg",
    imageHint: "audio streaming dashboard",
    category: "System",
    technologies: ["Flutter for Web and Mobile", "Icecast Server", "Cloudflare Tunnels", "Supabase"],
    features: [
      "High-quality live audio streaming with minimal latency",
      "Multi-user support with real-time listener statistics",
      "Chat and interaction tools for audience engagement",
      "Recording and archiving live sessions for on-demand playback",
      "Secure streaming with authentication and access control"
    ]
  },
  {
    slug: "deft-delivery",
    title: "Deft Pickup and Delivery Services",
    brief: "A comprehensive logistics platform combining delivery management and a digital marketplace.",
    description: "Deft Pickup and Delivery Services is a comprehensive logistics platform combining delivery management and a digital marketplace. The client app enables users to request pickups, track deliveries in real-time, and access marketplace offerings directly from their devices.",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/sesa-studio.firebasestorage.app/o/keps-studio%2Fdeft-project.png?alt=media&token=922e5b26-b7bf-4dba-bd28-e9bd35e1730a",
    imageHint: "logistics app tracking",
    category: "Mobile",
    liveUrl: "https://deft-admin.web.app",
    technologies: ["Flutter", "Google Maps API", "Firebase", "Paystack", "Serverless Functions"],
    features: [
      "Real-time delivery tracking with live map integration",
      "Request pickups and schedule deliveries with ease",
      "Digital marketplace for browsing and purchasing products",
      "Secure in-app payment and transaction history",
      "Notifications and updates for delivery status"
    ]
  },
  {
    slug: "sps-livecast",
    title: "SPS LiveCast",
    brief: "On-demand live audio streaming solution for private organizations.",
    description: "A on-demand live audio streaming solution designed for organizations that require reliable and high-quality real-time broadcasting without the complexity of managing shared or social media platforms.",
    imageUrl: "/images/livecast.jpg",
    imageHint: "App snapshot",
    category: "System",
    liveUrl: "https://livecast.thesps.online",
    technologies: ["Next.js", "Firebase", "Web Audio API"],
    features: ["Private broadcasting", "High fidelity audio", "Custom branding"]
  },
  {
    slug: "keps-studio",
    title: "KEPS Studio",
    brief: "Web app for a community of managed software engineers and freelancers.",
    description: "A web app for the newly launched studio for a group of managed software engineers and freelance community.",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/sesa-studio.firebasestorage.app/o/keps-studio%2Fworkspace-1.png?alt=media&token=7338c884-7eab-43d9-884b-53d5309b910e",
    imageHint: "website cover",
    category: "Web",
    liveUrl: "https://sesastudio--sesa-studio.europe-west4.hosted.app/",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    features: ["Project showcasing", "Freelancer directory", "Service booking"]
  },
  {
    slug: "vivid-thread",
    title: "Vivid Thread Marketing",
    brief: "Modern, performant, and SEO-friendly marketing website for a fashion brand.",
    description: "A modern, performant, and SEO-friendly marketing website for a fashion brand in Accra.",
    imageUrl: "https://teesvividthread.com/og-image.png",
    imageHint: "corporate website",
    category: "Web",
    liveUrl: "https://www.teesvividthread.com",
    technologies: ["Next.js", "Vercel", "Tailwind CSS"],
    features: ["Product catalog", "Responsive design", "SEO optimized"]
  }
];
