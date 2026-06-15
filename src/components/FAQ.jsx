import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { faqs } from "../data/siteData";

const FAQ = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle
          label="FAQs"
          title="Frequently Asked Questions"
          description="Find quick answers about BR Associates real estate services."
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <div
                key={faq.question}
                className="bg-white border border-slate-100 rounded-3xl overflow-hidden"
              >
                <button
                  onClick={() => setActive(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="font-extrabold text-slate-950">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`shrink-0 text-emerald-600 transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-slate-600 leading-7">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;