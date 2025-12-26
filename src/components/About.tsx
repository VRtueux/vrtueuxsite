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
        'Marchez, courez et explorez librement dans vos jeux VR grâce à une technologie unique en France.',
      highlight: 'Exclusif',
    },
    {
      icon: Car,
      title: 'Simulateur de Conduite',
      description:
        'Plongez dans une expérience de simulation ultra-réaliste avec nos cockpits professionnels.',
      highlight: 'SimRacing VR',
    },
    {
      icon: Gamepad2,
      title: 'Casques VR',
      description:
        'Découvrez une large sélection de jeux VR solo et multijoueur accessibles à tous.',
      highlight: 'VR Autonome',
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-900 relative">

      {/* POPUP MOBILE */}
      {isMobile && popupOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setPopupOpen(false)}
        >
          <div
            className="relative bg-gradient-to-tr from-cyan-800/80 to-purple-900/80 rounded-2xl p-6 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 text-white"
              onClick={() => setPopupOpen(false)}
            >
              <X size={22} />
            </button>
            <img
              src="https://i.ibb.co/6RBwm0zC/VRtueux-vous-souhaite-une-bonne-ann-e-2026.png"
              alt="VRtueux"
              className="rounded-xl w-full"
            />
          </div>
        </div>
      )}

      {/* HERO */}
      <div className="text-center mb-20 px-4">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Bienvenue chez{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            VRtueux
          </span>
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          L’expérience VR ultime à Vienne. Technologie, immersion et sensations réunies dans un même lieu.
        </p>
      </div>

      {/* FEATURES */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-slate-800/60 backdrop-blur rounded-2xl p-8 border border-slate-700 hover:border-cyan-500 transition-all hover:shadow-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                <f.icon className="text-white" size={28} />
              </div>
              <span className="text-sm bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">
                {f.highlight}
              </span>
            </div>

            <h3 className="text-xl text-white mb-2">{f.title}</h3>
            <p className="text-gray-400">{f.description}</p>
          </div>
        ))}
      </div>

      {/* SECTION UNIQUE */}
      <div className="mt-24 px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-3xl p-10 flex flex-col lg:flex-row items-center gap-10">
          
          <div className="flex-1">
            <h3 className="text-3xl font-semibold text-white mb-4">
              Une expérience unique en France
            </h3>
            <p className="text-gray-300 leading-relaxed">
              VRtueux est le seul centre à proposer une immersion totale grâce à un
              tapis omnidirectionnel professionnel.  
              <br /><br />
              Marchez, courez, explorez et vivez vos jeux comme jamais auparavant.
              Chaque détail est pensé pour une immersion maximale.
            </p>
          </div>

          <div className="flex-1 flex justify-center">
            <img
              src="https://i.ibb.co/QFtBj97K/Capture-d-cran-2025-07-20-202224.png"
              alt="Tapis omnidirectionnel VR"
              className="rounded-2xl shadow-2xl max-w-md w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
