import { MessageCircle, Phone } from "lucide-react";
import { siteData } from "../data/siteData";

const CTASection = () => {
  const whatsappText = encodeURIComponent(
    "Hi BR Associates, I am looking for property assistance in Bangalore."
  );

  return (
    <section className="py-16 bg-emerald-600">
      <div className="max-w-7xl mx-auto px-4 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-extrabold">
          Looking for Property Assistance in Bangalore?
        </h2>

        <p className="mt-5 text-lg text-emerald-50 max-w-3xl mx-auto leading-8">
          Connect with BR Associates today for buying, selling, rental and real
          estate consultation support.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a
            href={`tel:${siteData.phone1}`}
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-slate-950 font-bold"
          >
            <Phone size={20} />
            Call {siteData.phone1}
          </a>

          <a
            href={`https://wa.me/${siteData.whatsappNumber}?text=${whatsappText}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-slate-950 text-white font-bold"
          >
            <MessageCircle size={20} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;