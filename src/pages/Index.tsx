
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Services from "@/components/services";
import Blog from "@/components/blog"; 
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <Blog />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
