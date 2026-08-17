import Audience from "@/components/Audience";
import Blueprints from "@/components/Blueprints";
import Calculator from "@/components/Calculator";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Nav from "@/components/Nav";
import Pricing from "@/components/Pricing";
import Problem from "@/components/Problem";
import Process from "@/components/Process";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Problem />
        <Services />
        <Audience />
        <Process />
        <Calculator />
        <Blueprints />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
