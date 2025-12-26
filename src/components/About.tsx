import { useState, useEffect } from 'react';
import { Gamepad2, Move, Car, X } from 'lucide-react';

export function About() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    document.body.style.overflow = popupOpen && isMobile ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [popupOpen, isMobile]);

  useEffect(() => {
    if (isMobile) setPopupOpen(true);
  }, [isMobile]);

  const features = [
    {
      icon: Move,
      title: 'Tapis Omnidirectionnel',
      description:
        'Unique en France ! Marchez, courez et déplacez-vous naturellement dans vos jeux VR.',
      highlight: 'Exclusif',
    },
    {
      icon: Car,
      title: 'Simulateur de Conduite',
      description:
        "Vivez l'expérience ultime du SimRacing VR sur nos simulateurs de pointe.",
      highlight: 'SimRacing VR',
    },
    {
      icon: Gamepad2,
      title: 'Casque Autonome',
      description:
        'Une large sélection de jeux VR autonomes pour jouer seul ou à plusieurs.',
      highlight: 'VR Autonome',
    },
    {
      icon: null,
      title: 'Nexus Club',
      description:
        'Accédez à des avantages exclusifs, des défis inédits et des sessions VIP réservées aux membres.',
      highlight: 'Game Club',
      imgSrc: 'https://i.ibb.co/v65QjWpt/image-541f8108-80a4-4a0a-b528-02f3889d8553.png',
      hasButton: true,
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-slate-900 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-cyan-600/20 blur-3xl rounded-full" />
        <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-purple-600/20 blur-3xl rounded-full" />
      </div>

      {/* POPUP MOBILE */}
      {isMobile && popupOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setPopupOpen(false)}
        >
          <div
            className="relative bg-gradient-to-br from-cyan-900 to-purple-900 rounded-2xl shadow-2xl p-5 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-white hover:text-cyan-400 transition"
              onClick={() => setPopupOpen(false)}
            >
              <X size={26} />
            </button>
            <img
              src="https://i.ibb.co/6RBwm0zC/VRtueux-vous-souhaite-une-bonne-ann-e-2026.png"
              alt="VRtueux"
              className="rounded-xl"
            />
          </div>
        </div>
      )}

      {/* HEADER */}
      <div className="relative z-10 text-center mb-20">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Bienvenue chez{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            VRtueux
          </span>
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Une expérience immersive unique mêlant technologie, sensations fortes
          et innovation.
        </p>
      </div>

      {/* FEATURES */}
      <div className="relative z-10 max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4 px-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-cyan-500 transition-all hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                {feature.icon ? (
                  <feature.icon size={28} className="text-white" />
                ) : (
                  <img src={feature.imgSrc} alt="" className="w-10" />
                )}
              </div>
              <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                {feature.highlight}
              </span>
            </div>

            <h3 className="text-xl text-white mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>

            {feature.hasButton && (
              <div className="mt-6 text-center">
                <button
                  onClick={() =>
                    document
                      .getElementById('nexus-club')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="px-10 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:scale-105 transition"
                >
                  Découvrir le Nexus Club
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* SECTION ÉQUIPEMENT */}
      <div className="relative z-10 mt-24 px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-10 border border-white/10 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <h3 className="text-3xl text-white mb-4">
              Un équipement unique en France
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Nous sommes fiers d'être les seuls en France à proposer un tapis
              omnidirectionnel offrant une immersion totale.
              <br /><br />
              Ajustez précisément votre casque grâce à votre écart
              interpupillaire pour une expérience VR parfaitement nette.
              <br /><br />
              VRtueux, c’est bien plus qu’un jeu : c’est une immersion totale.
            </p>
          </div>

          <div className="flex-1 flex justify-center">
            <img
              src="https://i.ibb.co/QFtBj97K/Capture-d-cran-2025-07-20-202224.png"
              alt="Tapis VR"
              className="rounded-2xl shadow-2xl max-w-md w-full hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
