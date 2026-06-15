import { Building2, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { siteData } from "../data/siteData";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-14 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center">
              <img
                src="./images/BR_Associate.png"
                alt="logo"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h3 className="text-2xl font-extrabold">{siteData.businessName}</h3>
              <p className="text-emerald-300 text-sm">{siteData.businessType}</p>
            </div>
          </div>

          <p className="text-slate-300 leading-8 mt-5 max-w-xl">
            BR Associates is a trusted real estate service provider in Bangalore,
            helping customers with property buying, selling, rental assistance
            and property consultation.
          </p>
        </div>

        <div>
          <h4 className="font-extrabold text-lg mb-5">Quick Links</h4>

          <div className="space-y-3 text-slate-300">
            <a href="/#home" className="block hover:text-emerald-300">
              Home
            </a>
            <a href="/#about" className="block hover:text-emerald-300">
              About
            </a>
            <a href="/#services" className="block hover:text-emerald-300">
              Services
            </a>
            <a href="/#contact" className="block hover:text-emerald-300">
              Contact
            </a>
            <Link to="/privacy-policy" className="block hover:text-emerald-300">
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="block hover:text-emerald-300"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-extrabold text-lg mb-5">Contact Info</h4>

          <div className="space-y-4 text-slate-300">
            <div className="flex items-start gap-3">
              <Phone size={20} className="text-emerald-300 shrink-0 mt-1" />
              <p>
                {siteData.phone1}
                <br />
                {siteData.phone2}
              </p>
            </div>

            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-emerald-300 shrink-0 mt-1" />
              <p>{siteData.address}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 text-center text-slate-400 text-sm">
          © {siteData.year} {siteData.businessName}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;