import { CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  const points = [
    "Local Real Estate Knowledge",
    "Transparent Communication",
    "Customer Friendly Support",
    "Verified Property Assistance",
    "Quick Response on Call & WhatsApp",
    "Professional Guidance",
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4"> 
        <div className="text-center mb-12">
          <p className="text-emerald-600 font-semibold uppercase tracking-wide">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
            Why BR Associates is Trusted
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We provide professional real estate assistance with clear guidance,
            quick communication and customer-focused service.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4"
            >
              <CheckCircle className="text-emerald-600 w-6 h-6 mt-1" />
              <h3 className="font-semibold text-slate-800">{point}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
