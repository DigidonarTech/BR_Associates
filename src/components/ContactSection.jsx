import { useState } from "react";
import { MapPin, MessageCircle, Phone, Send } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { siteData } from "../data/siteData";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    requirement: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = encodeURIComponent(
      `Hi BR Associates, I am interested in your real estate services.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nRequirement: ${formData.requirement}\nMessage: ${formData.message}`
    );

    window.open(`https://wa.me/${siteData.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          label="Contact Us"
          title="Get in Touch with BR Associates"
          description="Have a property requirement? Contact us today and our team will assist you."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-slate-950 text-white rounded-[2rem] p-7 md:p-10">
            <h3 className="text-3xl font-extrabold">{siteData.businessName}</h3>
            <p className="text-emerald-300 font-semibold mt-2">
              {siteData.businessType}
            </p>

            <div className="mt-8 space-y-5">
              <a
                href={`tel:${siteData.phone1}`}
                className="flex items-center gap-4 bg-white/10 rounded-2xl p-5 hover:bg-white/15 transition"
              >
                <Phone className="text-emerald-300" />
                <div>
                  <p className="text-slate-300 text-sm">Phone</p>
                  <p className="font-bold">
                    {siteData.phone1} | {siteData.phone2}
                  </p>
                </div>
              </a>

              <a
                href={`https://wa.me/${siteData.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 bg-white/10 rounded-2xl p-5 hover:bg-white/15 transition"
              >
                <MessageCircle className="text-emerald-300" />
                <div>
                  <p className="text-slate-300 text-sm">WhatsApp</p>
                  <p className="font-bold">Chat with us on WhatsApp</p>
                </div>
              </a>

              <div className="flex items-start gap-4 bg-white/10 rounded-2xl p-5">
                <MapPin className="text-emerald-300 shrink-0 mt-1" />
                <div>
                  <p className="text-slate-300 text-sm">Address</p>
                  <p className="font-bold leading-7">{siteData.address}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-3xl border border-white/10">
              <iframe
                title="BR Associates Location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  siteData.address
                )}&output=embed`}
                className="w-full h-72 border-0"
                loading="lazy"
              />
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-slate-50 rounded-[2rem] p-7 md:p-10 border border-slate-100"
          >
            <h3 className="text-3xl font-extrabold text-slate-950">
              Submit Enquiry
            </h3>

            <p className="text-slate-600 mt-3">
              Fill the form and you will be redirected to WhatsApp.
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Full Name
                </label>
                <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Phone Number
                </label>
                <input
                  required
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Property Requirement
                </label>
                <select
                  required
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 outline-none focus:border-emerald-500 bg-white"
                >
                  <option value="">Select Requirement</option>
                  <option value="Buying Property">Buying Property</option>
                  <option value="Selling Property">Selling Property</option>
                  <option value="Rental Property">Rental Property</option>
                  <option value="Commercial Property">Commercial Property</option>
                  <option value="Real Estate Consultation">
                    Real Estate Consultation
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message"
                  rows="5"
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 outline-none focus:border-emerald-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition"
              >
                <Send size={20} />
                Submit Enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;