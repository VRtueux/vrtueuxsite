import { useEffect, useState } from "react";
import { X } from "lucide-react";

const Popup = () => {
  const [open, setOpen] = useState<boolean>(true);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  return (
    <>
      <style>{`
        .popup-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }

        .popup-content {
          position: relative;
          max-width: 480px; /* PC : réduit */
          width: 90%;
          border-radius: 16px;
          animation: popupFade 0.3s ease;
        }

        .popup-content img {
          width: 100%;
          height: auto;
          border-radius: 16px;
          display: block;
        }

        .popup-close {
          position: absolute;
          top: -14px;
          right: -14px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: none;
          background: #0f172a;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .popup-close:hover {
          transform: scale(1.1);
          background: #7c3aed; /* violet VRtueux */
        }

        @media (max-width: 640px) {
          .popup-content {
            max-width: 95%;
          }
        }

        @keyframes popupFade {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>

      <div className="popup-overlay">
        <div className="popup-content">
          <button
            className="popup-close"
            onClick={() => setOpen(false)}
            aria-label="Fermer la popup"
          >
            <X size={22} />
          </button>

          <img
            src="https://i.ibb.co/6RBwm0zC/VRtueux-vous-souhaite-une-bonne-ann-e-2026.png"
            alt="VRtueux vous souhaite une bonne année 2026"
            loading="eager"
          />
        </div>
      </div>
    </>
  );
};

export default Popup;
