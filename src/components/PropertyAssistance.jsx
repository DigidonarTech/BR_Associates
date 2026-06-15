import { Building2, Home, Store } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { propertyAssistance } from "../data/siteData";

const icons = [Home, Store, Building2];

const PropertyAssistance = () => {
  return (
    <section className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          light
          label="Property Assistance"
          title="Helping You Make Better Property Decisions"
          description="Buying, selling or renting a property can be confusing without the right support. BR Associates helps you understand available options, location benefits, pricing and property suitability."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {propertyAssistance.map((item, index) => {
            const Icon = icons[index];

            return (
              <div
                key={item.title}
                className="rounded-3xl bg-white/10 border border-white/10 p-8 hover:bg-white/15 transition"
              >
                <div className="w-16 h-16 rounded-2xl bg-emerald-500 text-white flex items-center justify-center">
                  <Icon size={32} />
                </div>

                <h3 className="text-2xl font-extrabold mt-6">{item.title}</h3>

                <p className="text-slate-300 leading-7 mt-4">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PropertyAssistance;