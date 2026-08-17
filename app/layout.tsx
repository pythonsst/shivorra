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
    default: "Shivorra — IT consultancy & AI automation studio",
    template: "%s · Shivorra",
  },
  description:
    "IT consulting, custom software and AI automation for growing businesses. We advise on the stack, build the systems, and ship agents that handle the follow-ups, invoices and bookings while you sleep.",
  keywords: [
    "IT consultancy",
    "IT consulting services",
    "AI automation agency",
    "business process automation",
    "custom software for small business",
    "AI agents for SMB",
    "cloud migration consulting",
    "workflow automation",
    "Shivorra",
  ],
  authors: [{ name: "Shivorra" }],
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Shivorra",
    title: "Shivorra — IT consultancy & AI automation studio",
    description:
      "Stop paying humans to do robot work. IT consulting, internal software and AI agents that run your operations end to end.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivorra — IT consultancy & AI automation studio",
    description:
      "We advise on the stack and build it too. Ship in weeks, not quarters.",
  },
  alternates: { canonical: SITE },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#06070a",
  width: "device-width",
  initialScale: 1,
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Shivorra",
  url: SITE,
  description:
    "IT consultancy and AI automation studio providing technology advisory, cloud migration, custom software and AI agents for growing businesses.",
  email: "hello@shivorra.it.com",
  telephone: "+91-70077-46087",
  areaServed: "Worldwide",
  serviceType: [
    "IT consulting",
    "Cloud migration",
    "AI automation",
    "Custom software development",
    "Web development",
    "Business process automation",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
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
