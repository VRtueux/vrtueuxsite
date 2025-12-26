import { useState, useEffect } from 'react';
import { Gamepad2, Move, Car } from 'lucide-react';

export function About() {
  const [isMobile, setIsMobile] = useState(false);

  // Détection mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
      {/* --- IMAGE PRINCIPALE --- */}
      <div className="flex flex-col items-center justify-center mb-12 relative">
        <img
          src="https://i.ibb.co/6RBwm0zC/VRtueux-vous-souhaite-une-bonne-ann-e-2026.png"
          alt="VRtueux vous souhaite une bonne année 2026"
          className={`${
            isMobile ? 'w-full max-w-sm' : 'w-[500px] sm:w-[600px] md:w-[700px] lg:w-[800px]'
          } h-auto rounded-xl shadow-2xl`}
        />
      </div>

      {/* --- TITRE --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* --- FEATURES --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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

        {/* --- UNIQUE EN FRANCE --- */}
        {isMobile ? (
          <div className="mt-16 relative rounded-2xl overflow-hidden border border-purple-500/20">
            <img
              src="https://i.ibb.co/NnWtnwf5/Tapis-Omnidirectionnel.png"
              alt="Tapis omnidirectionnel VRtueux"
              className="w-full h-auto object-cover rounded-t-2xl"
            />
            <div className="p-6 text-white text-center">
              <h3 className="text-2xl mb-4">Un équipement unique en France</h3>
              <p>
                Nous sommes fiers d'être les <span className="text-cyan-400">seuls possesseurs en France</span> du tapis omnidirectionnel, vous offrant une expérience de réalité virtuelle sans précédent.
                <br /><br />
                Pour une immersion optimale, il est recommandé de connaître votre écart interpupillaire afin de régler correctement la netteté de votre casque VR.
                <br /><br />
                Venez découvrir ce qui fait de VRtueux une destination gaming d'exception !
              </p>
            </div>
          </div>
        ) : (
          <div className="mt-16 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 border border-purple-500/20">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl text-white mb-4">Un équipement unique en France</h3>
                <p className="text-gray-300 max-w-xl mx-auto lg:mx-0">
                  Nous sommes fiers d'être les <span className="text-cyan-400">seuls possesseurs en France</span> du tapis omnidirectionnel, vous offrant une expérience de réalité virtuelle sans précédent.
                  <br /><br />
                  Pour une immersion optimale, il est recommandé de connaître votre écart interpupillaire afin de régler correctement la netteté de votre casque VR.
                  <br /><br />
                  Venez découvrir ce qui fait de VRtueux une destination gaming d'exception !
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <img
                  src="https://i.ibb.co/NnWtnwf5/Tapis-Omnidirectionnel.png"
                  alt="Tapis omnidirectionnel VRtueux"
                  className="w-full max-w-md rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
