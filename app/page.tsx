import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TnpLabTraining from "@/components/TnpLabTraining";
import WhyTnpLab from "@/components/WhyTnpLab";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TnpLabTraining />
      <WhyTnpLab />
      <Testimonials />
      <Footer />
    </main>
  );
}
