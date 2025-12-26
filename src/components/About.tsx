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
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [popupOpen, isMobile]);

  // Affiche le popup automatiquement sur mobile
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
        'Une grande variété de jeux VR autonomes à découvrir et pour encore plus de fun, jouez aussi en multijoueur !',
      highlight: 'VR Autonome',
    },
    {
      icon: null,
      title: 'Nexus Club',
      description:
        'Rejoignez notre Club Nexus, accédez à des avantages uniques, des défis spéciaux et des sessions VIP pour vivre la VR comme jamais auparavant.',
      highlight: 'Game Club',
      imgSrc: 'https://i.ibb.co/v65QjWpt/image-541f8108-80a4-4a0a-b528-02f3889d8553.png',
      hasButton: true,
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-900 relative">
      {/* --- MOBILE POPUP --- */}
      {isMobile && popupOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setPopupOpen(false)}
        >
          <div
            className="relative bg-gradient-to-tr from-cyan-800/80 to-purple-900/80 rounded-2xl shadow-2xl p-4 sm:p-6
                       max-w-[500px] w-[90%] max-h-[80vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center rounded-full bg-slate-900/80 text-white hover:bg-purple-700 transition"
              onClick={() => setPopupOpen(false)}
              aria-label="Fermer la popup"
            >
              <X size={24} />
            </button>
            <img
              src="https://i.ibb.co/6RBwm0zC/VRtueux-vous-souhaite-une-bonne-ann-e-2026.png"
              alt="VRtueux vous souhaite une bonne année 2026"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      )}

      {/* --- PC IMAGE --- */}
      {!isMobile && (
        <div className="flex flex-col items-center justify-center mb-12 relative">
          <img
            src="https://i.ibb.co/6RBwm0zC/VRtueux-vous-souhaite-une-bonne-ann-e-2026.png"
            alt="VRtueux vous souhaite une bonne année 2026"
            className="w-[500px] sm:w-[600px] md:w-[700px] lg:w-[800px] h-auto rounded-xl shadow-2xl"
          />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TITRE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-white mb-4">
            Bienvenue chez{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              VRtueux
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Votre destination gaming ultime à Vienne.<br />
            Vivez des expériences immersives uniques avec nos équipements de pointe.
          </p>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-2"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`flex items-center justify-center w-14 h-14 rounded-lg transition-transform ${
                    feature.icon
                      ? 'bg-gradient-to-br from-cyan-500 to-purple-500 group-hover:scale-110'
                      : ''
                  }`}
                >
                  {feature.icon ? (
                    <feature.icon className="text-white" size={28} />
                  ) : feature.imgSrc ? (
                    <img
                      src={feature.imgSrc}
                      alt={feature.title}
                      className="w-12 h-12 object-contain mx-auto"
                    />
                  ) : null}
                </div>

                {feature.highlight && (
                  <div className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm whitespace-nowrap">
                    {feature.highlight}
                  </div>
                )}
              </div>

              <h3 className="text-xl text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 mb-4">{feature.description}</p>

              {feature.hasButton && (
                <div className="text-center mt-4">
                 <button
  onClick={() => {
    const element = document.getElementById('nexus-club');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }}
  className="inline-block bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500
             text-white font-semibold text-lg px-16 py-8 rounded-full
             shadow-lg hover:shadow-xl hover:scale-105
             transition-all duration-300"
>
  Découvrir le Nexus Club
</button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* SECTION UNIQUE EN FRANCE */}
        <div className="mt-16 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 border border-purple-500/20 text-center">
          <h3 className="text-2xl text-white mb-4">Un équipement unique en France</h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Nous sommes fiers d'être les{' '}
            <span className="text-cyan-400">seuls possesseurs en France</span> du tapis omnidirectionnel,
            vous offrant une expérience de réalité virtuelle sans précédent.<br /><br />
            Pour une immersion optimale, il est recommandé de connaître votre écart interpupillaire
            afin de régler correctement la netteté de votre casque VR.<br /><br />
            Venez découvrir ce qui fait de VRtueux une destination gaming d'exception !
          </p>
        </div>
      </div>
    </section>
  );
}
