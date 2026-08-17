import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Features from "@/components/home/Features";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Footer />
    </>
  );
}