import SectionTitle from "./SectionTitle";
import { processSteps } from "../data/siteData";

const Process = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          label="Our Process"
          title="Simple Steps to Get Property Assistance"
          description="Connect with us and get professional support for your property requirement."
        />

        <div className="grid md:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <div
              key={step.title}
              className="relative bg-white rounded-3xl p-7 border border-slate-100 shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-extrabold">
                {index + 1}
              </div>

              <h3 className="text-xl font-extrabold text-slate-950 mt-6">
                {step.title}
              </h3>

              <p className="text-slate-600 mt-4 leading-7">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;