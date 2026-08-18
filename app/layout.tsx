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
    default: "Shivorra — websites, software and automation for growing businesses",
    template: "%s · Shivorra",
  },
  description:
    "We build the website, software and automation that take the busywork off your plate — so you can get back to growing. Plain English, real prices, up and running in weeks.",
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
    title: "Shivorra — websites, software and automation for growing businesses",
    description:
      "Too busy running the business to grow it? We build the website, software and automation that take the busywork off your plate.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivorra — websites, software and automation for growing businesses",
    description:
      "Websites, software and automation that take the busywork off your plate.",
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
    "We build websites, custom software, phone apps and automation for growing businesses, plus friendly IT advice and support.",
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
