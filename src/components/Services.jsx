import { Building2, Headphones, Home, KeyRound, Store, Handshake } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { services } from "../data/siteData";

const icons = [Home, Handshake, KeyRound, Building2, Store, Headphones];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          label="Our Services"
          title="Complete Real Estate Solutions"
          description="We provide real estate services designed to make property search, selling and consultation simple and convenient for customers."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = icons[index];

            return (
              <div
                key={service.title}
                className="group bg-white rounded-3xl p-7 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-extrabold text-slate-950 mt-6">
                  {service.title}
                </h3>

                <p className="text-slate-600 mt-4 leading-7">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;