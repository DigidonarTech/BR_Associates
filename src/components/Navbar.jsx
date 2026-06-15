import { useState } from "react";
import { Menu, X, Phone, MessageCircle, MapPin, Building2 } from "lucide-react";
import { siteData } from "../data/siteData";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Why Choose Us", href: "/#why-choose-us" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const whatsappLink = `https://wa.me/${siteData.whatsappNumber}`;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100">
      <div className="hidden lg:block bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-emerald-400" />
            <span>{siteData.city} - 560076</span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={`tel:${siteData.phone1}`}
              className="flex items-center gap-2 hover:text-emerald-300"
            >
              <Phone size={16} />
              {siteData.phone1}
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-emerald-300"
            >
              <MessageCircle size={16} />
              WhatsApp Now
            </a>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/#home" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center">
            <img
              src="./images/BR_Associate.png"
              alt="logo"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-950 leading-none">
              {siteData.businessName}
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              {siteData.businessType}
            </p>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${siteData.phone1}`}
            className="px-5 py-3 rounded-full bg-slate-950 text-white font-semibold text-sm hover:bg-emerald-600 transition"
          >
            Call Now
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-11 h-11 rounded-xl border border-slate-200 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 pb-5">
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 px-3 rounded-xl text-slate-700 font-medium hover:bg-slate-50"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 mt-4">
            <a
              href={`tel:${siteData.phone1}`}
              className="text-center px-4 py-3 rounded-xl bg-slate-950 text-white font-semibold"
            >
              Call
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="text-center px-4 py-3 rounded-xl bg-emerald-600 text-white font-semibold"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;