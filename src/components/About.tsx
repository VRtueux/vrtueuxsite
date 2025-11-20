import { Gamepad2, Move, Car, Sparkles } from 'lucide-react';

export function About() {
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
      imgSrc: 'https://i.ibb.co/0pZH1PBj/NEXUS-Logo.png',
      hasButton: true,
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-900 relative">
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
              {/* Icon + Highlight sur la même ligne */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`flex items-center justify-center w-14 h-14 rounded-lg group-hover:scale-110 transition-transform
                    ${feature.icon ? 'bg-gradient-to-br from-cyan-500 to-purple-500' : ''}`}
                >
                  {feature.icon ? (
                    <feature.icon className="text-white" size={28} />
                  ) : feature.imgSrc ? (
                    <img
                      src={feature.imgSrc}
                      alt={feature.title}
                      className="w-10 h-10 object-contain"
                    />
                  ) : null}
                </div>

                {feature.highlight && (
                  <div className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm whitespace-nowrap">
                    {feature.highlight}
                  </div>
                )}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 mb-4">{feature.description}</p>

              {/* Bouton Nexus Club */}
              {feature.hasButton && (
                <div className="text-center mt-4">
                  <button
                    onClick={() =>
                      document
                        .getElementById('nexus-club')
                        ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
                  >
                    <Sparkles size={30} />
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
