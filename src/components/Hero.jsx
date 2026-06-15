import { useEffect, useState } from "react";
import { ArrowRight, BadgeCheck, MessageCircle, Phone } from "lucide-react";
import { siteData } from "../data/siteData";

const slideImages = [
  "/images/hero-1.jpg",
  "/images/hero-2.jpg",
  "/images/hero-3.jpg",
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const whatsappText = encodeURIComponent(
    "Hi BR Associates, I am interested in your real estate services."
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden text-white flex items-center justify-center"
    >
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slideImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
      </div>

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-slate-950/70" /> */}
      <div className="absolute inset-0 bg-slate-950/35" />

      {/* Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/60 to-emerald-950/80" /> */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/45 via-slate-900/25 to-emerald-950/40" />

      {/* Glow Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full blur-3xl" />
      </div>

      {/* Center Content */}
      <div className="relative max-w-6xl mx-auto px-4 py-24 text-center">
        <div className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/10 px-4 py-2 rounded-full text-sm text-emerald-100 mb-6 backdrop-blur-md">
          <BadgeCheck size={18} className="text-emerald-300" />
          Trusted Real Estate Services in Bangalore
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight max-w-5xl mx-auto">
          Find Your Perfect Property with{" "}
          <span className="text-emerald-400">BR Associates</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-200 leading-8 max-w-3xl mx-auto">
          BR Associates helps customers buy, sell, rent and explore property
          options in Bangalore with transparent guidance and professional real
          estate support.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <a
            href={`tel:${siteData.phone1}`}
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-emerald-600 text-white font-bold hover:bg-emerald-500 transition shadow-lg shadow-emerald-950/30"
          >
            <Phone size={20} />
            Call Now
          </a>

          <a
            href={`https://wa.me/${siteData.whatsappNumber}?text=${whatsappText}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-slate-950 font-bold hover:bg-slate-100 transition"
          >
            <MessageCircle size={20} />
            WhatsApp Us
          </a>

          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-white/30 text-white font-bold hover:bg-white/10 transition backdrop-blur-md"
          >
            View Services
            <ArrowRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 max-w-4xl mx-auto">
          {[
            "Verified Property Assistance",
            "Quick Response",
            "Local Market Knowledge",
          ].map((item) => (
            <div
              key={item}
              className="bg-white/10 border border-white/10 rounded-2xl p-5 backdrop-blur-md"
            >
              <BadgeCheck
                className="text-emerald-300 mx-auto mb-3"
                size={24}
              />
              <p className="text-sm font-semibold text-slate-100">{item}</p>
            </div>
          ))}
        </div>

        {/* Slider Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {slideImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentSlide
                  ? "bg-emerald-400 w-8"
                  : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;