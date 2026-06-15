import { Link } from "react-router-dom";
import { siteData } from "../data/siteData";

const TermsConditions = () => {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-slate-950 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/" className="text-emerald-300 font-semibold">
            ← Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-extrabold mt-6">
            Terms & Conditions
          </h1>

          <p className="text-slate-300 mt-4">{siteData.businessName}</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-100 text-slate-700 leading-8 space-y-5">
          <p>
            Welcome to {siteData.businessName}. By using this website, you agree
            to follow the terms and conditions mentioned below.
          </p>

          <p>
            The information provided on this website is for general real estate
            assistance and enquiry purposes only. Property availability, pricing
            and details may change from time to time.
          </p>

          <p>
            {siteData.businessName} makes efforts to provide accurate
            information, but customers are advised to verify property details,
            documents and terms before making any final decision.
          </p>

          <p>
            Submitting an enquiry through this website does not guarantee
            property availability or confirmation.
          </p>

          <p>
            {siteData.businessName} may contact users through call, SMS or
            WhatsApp regarding their submitted enquiry.
          </p>

          <p>
            By using this website, you agree to use the information responsibly
            and not misuse the website or its services.
          </p>

          <p>
            For any questions, you can contact {siteData.businessName} at{" "}
            <strong>{siteData.phone1}</strong> or{" "}
            <strong>{siteData.phone2}</strong>.
          </p>
        </div>
      </section>
    </main>
  );
};

export default TermsConditions;