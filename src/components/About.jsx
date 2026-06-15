import { Building2, CheckCircle, MapPin } from "lucide-react";
import { siteData } from "../data/siteData";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="rounded-[2rem] bg-slate-100 p-8 md:p-12">
            <div className="bg-white rounded-[1.5rem] p-8 shadow-xl">
              <div className="w-16 h-16 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-6">
                <Building2 size={34} />
              </div>

              <h3 className="text-3xl font-extrabold text-slate-950">
                {siteData.businessName}
              </h3>

              <p className="text-slate-600 mt-4 leading-8">
                Professional real estate assistance for buying, selling, renting
                and property consultation in Bangalore.
              </p>

              <div className="mt-6 flex items-start gap-3 text-slate-700">
                <MapPin className="text-emerald-600 shrink-0 mt-1" />
                <p>{siteData.address}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-emerald-600 font-bold uppercase tracking-widest text-sm">
            About BR Associates
          </p>

          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-950 mt-3 leading-tight">
            Professional Real Estate Assistance You Can Trust
          </h2>

          <p className="text-slate-600 mt-6 leading-8 text-lg">
            BR Associates is a Bangalore-based real estate service provider
            offering reliable support for property buying, selling, rental
            assistance and real estate consultation. We focus on helping customers
            make better property decisions with clear communication, local
            knowledge and professional guidance.
          </p>

          <p className="text-slate-600 mt-4 leading-8 text-lg">
            Whether you are looking for a residential property, commercial space
            or rental option, our team helps you with the right property guidance
            based on your needs and budget.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            {["Residential Support", "Commercial Support", "Rental Assistance", "Consultation"].map(
              (item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="text-emerald-600" size={22} />
                  <span className="font-semibold text-slate-800">{item}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;