import { MessageCircle } from "lucide-react";
import { siteData } from "../data/siteData";

const WhatsAppButton = () => {
  const text = encodeURIComponent(
    "Hi BR Associates, I need property assistance."
  );

  return (
    <a
      href={`https://wa.me/${siteData.whatsappNumber}?text=${text}`}
      target="_blank"
      rel="noreferrer"
      className="fixed right-5 bottom-5 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-2xl hover:bg-emerald-700 transition"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={30} />
    </a>
  );
};

export default WhatsAppButton;