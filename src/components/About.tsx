import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function Popup() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="relative max-w-lg w-full rounded-2xl overflow-hidden bg-gradient-to-tr from-cyan-800/80 to-purple-900/80 p-4 sm:p-6 shadow-2xl">
        {/* Croix de fermeture */}
        <button
          className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center rounded-full bg-slate-900/80 text-white hover:bg-purple-700 transition"
          onClick={() => setOpen(false)}
          aria-label="Fermer la popup"
        >
          <X size={24} />
        </button>

        {/* Image */}
        <img
          src="https://i.ibb.co/6RBwm0zC/VRtueux-vous-souhaite-une-bonne-ann-e-2026.png"
          alt="VRtueux vous souhaite une bonne année 2026"
          className="w-full h-auto rounded-xl"
        />
      </div>
    </div>
  );
}
