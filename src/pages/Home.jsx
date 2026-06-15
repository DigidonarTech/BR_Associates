import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import PropertyAssistance from "../components/PropertyAssistance";
import Process from "../components/Process";
import CTASection from "../components/CTASection";
import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <PropertyAssistance />
      <Process />
      <CTASection />
      <ContactSection />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Home;