import { Link } from "react-router-dom";
import { siteData } from "../data/siteData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-slate-50">
      <section className="bg-slate-950 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/" className="text-emerald-300 font-semibold">
            ← Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-extrabold mt-6">
            Privacy Policy
          </h1>

          <p className="text-slate-300 mt-4">{siteData.businessName}</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-100 text-slate-700 leading-8 space-y-5">
          <p>
            At {siteData.businessName}, we respect your privacy and are committed
            to protecting the personal information shared by our customers.
          </p>

          <p>
            We may collect basic information such as your name, phone number,
            property requirement and message when you submit an enquiry through
            our website or contact us through call or WhatsApp.
          </p>

          <p>
            The information collected is used only to respond to your enquiry,
            provide property-related assistance and improve our customer support.
          </p>

          <p>
            We do not sell, rent or share your personal information with
            unauthorized third parties.
          </p>

          <p>
            By using our website, you agree to the collection and use of
            information as described in this Privacy Policy.
          </p>

          <p>
            For any privacy-related questions, you can contact us at{" "}
            <strong>{siteData.phone1}</strong> or{" "}
            <strong>{siteData.phone2}</strong>.
          </p>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
};

export default PrivacyPolicy;