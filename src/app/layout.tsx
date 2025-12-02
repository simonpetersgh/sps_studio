import type { Metadata } from 'next';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

// export const metadata: Metadata = {
//   title: 'Simon Peters Sakpla | SPS Studio',
//   description: 'Innovation',
// };
// app/layout.tsx

export const metadata: Metadata = {
  title: "Simon Peters Sakpla | SPS Studio",
  description:
    "Freelance Software Developer | Professional Web, Mobile App & Custom Software Development Services",
  keywords: [
    "web development",
    "web developer",
    "web developer ghana",
    "mobile app development",
    "mobile app developer",
    "mobile app developer ghana",
    "custom software",
    "business software",
    "web design",
    "websitedesign",
    "web design ghana",
    "web developer",
    "Next.js developer",
    "Flutter developer",
    "Flutter developer ghana",
    "Ghana software developer",
    "booking apps",
    "inventory systems",
    "business tools",
    "digital solutions",
    "SPS Studio",
    "Simon Peters Sakpla",
  ],
  authors: [{ name: "Simon Peters Sakpla" }],
  creator: "Simon Peters Sakpla",
  publisher: "SPS Studio",
  robots: "index, follow",

  openGraph: {
    title: "Simon Peters Sakpla | SPS STUDIO",
    description:
      "Business Analyst & Software Developer - Professional Web, Mobile App & Custom Software Development Services",
    url: "https://simonpetersgh.com",
    siteName: "Simon Peters Sakpla | SPS STUDIO",
    images: [
      {
        url: "https://simonpetersgh.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Simon Peters Sakpla | SPS STUDIO",
      },
    ],
    locale: "en_GH",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Simon Peters Sakpla | SPS Studio",
    description:
      "Business Analyst & Software Developer | Web, Mobile App & Custom Software Development services for individuals, startups, businesses and organisation of all kinds.",
    images: ["https://simonpetersgh.com/og-image.png"],
    creator: "@simonpetersgh",
  },

  alternates: {
    canonical: "https://simonpetersgh.com",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" rel="stylesheet"></link>
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
        {/* ANALYTICS AND PAGE INSIGHT */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
