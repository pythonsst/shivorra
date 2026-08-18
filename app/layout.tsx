import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

const SITE = "https://shivorra.it.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Shivorra — end-to-end technology partner",
    template: "%s · Shivorra",
  },
  description:
    "Consulting, design, websites, custom software, mobile apps and AI automation under one roof. We advise on the stack, design it, build it, and ship agents that handle the follow-ups, invoices and bookings while you sleep.",
  keywords: [
    "IT consultancy",
    "end to end software development",
    "custom software development",
    "mobile app development",
    "UI UX design agency",
    "website development",
    "AI automation agency",
    "business process automation",
    "cloud migration consulting",
    "Shivorra",
  ],
  authors: [{ name: "Shivorra" }],
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Shivorra",
    title: "Shivorra — end-to-end technology partner",
    description:
      "Stop paying humans to do robot work. Consulting, design, web, apps and AI automation — one partner from idea to running system.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivorra — end-to-end technology partner",
    description:
      "Consulting, design, web, apps and AI automation. One partner, idea to running system.",
  },
  alternates: { canonical: SITE },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#06070a" },
  ],
  width: "device-width",
  initialScale: 1,
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Shivorra",
  url: SITE,
  description:
    "End-to-end technology partner providing IT consulting, brand and UI/UX design, websites, custom software, mobile apps and AI automation for growing businesses.",
  email: "hello@shivorra.it.com",
  telephone: "+91-70077-46087",
  areaServed: "Worldwide",
  serviceType: [
    "IT consulting",
    "UI/UX design",
    "Web development",
    "Custom software development",
    "Mobile app development",
    "AI automation",
    "Cloud migration",
    "Business process automation",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${display.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Applies the stored theme before first paint so there is no flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}",
          }}
        />
      </head>
      <body className="grain antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
      </body>
    </html>
  );
}
