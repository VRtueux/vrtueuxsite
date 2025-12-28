import { Check } from 'lucide-react';

export function Pricing() {
  const vrPricing = [
    {
      name: 'Tapis Omnidirectionnel',
      duration: '30 min',
      price: '15€',
      highlight: true,
      features: ['Immersion totale', 'Liberté de mouvement', 'Expérience réaliste']
    },
    {
      name: 'SimRacing VR',
      duration: '30 min',
      price: '15€',
      features: ['Simulateur de voiture', 'Retour de force réaliste', 'Courses en immersion totale']
    },
    {
      name: 'Casque Autonome',
      duration: '30 min',
      price: '12€',
      features: ['Large catalogue de jeux', 'Sans fil', 'Graphismes immersifs']
    }
  ];

  const packs = [
    {
      name: 'Gift Card',
      duration: 'Carte Cadeau à prix libre',
      price: 'À partir de 15€',
      features: ['Montant libre', 'Laisse le choix de l’expérience à offrir', 'Idéal pour découvrir la VR sans limite']
    },
    {
      name: 'Pack Découverte',
      duration: '1h',
      price: '49€',
      popular: true,
      features: ['Idéal pour débuter', 'Plusieurs expériences', 'Accompagnement inclus']
    },
    {
      name: 'Abonnement 10 Sessions',
      duration: '1h/session',
      price: '130€',
      features: ['Économie de 25%', 'Accès prioritaire', 'Sessions flexibles']
    }
  ];

  const nexusPricing = [
    {
      name: "Qu'est-ce que le Nexus Club ?",
      features: [
        'Le VRtueux Nexus Club est le cercle premium officiel de VRtueux.',
        'C’est une communauté réservée aux passionnés de VR.'
      ]
    },
    {
      name: 'Prix / Avantages',
      price: '150€/an',
      features: [
        'Accès VIP toute l’année',
        '-10% sur toutes les sessions',
        'Accès aux évènements privés du Nexus',
        'E-sport : tournois Beat Saber et autres compétitions VR',
        'Événements privés & tournois',
        'Communauté exclusive'
      ]
    },
    {
      name: 'Pour qui ?',
      features: [
        'Gamers passionnés, clients réguliers',
        'Membres d’associations partenaires',
        'Communautés e-sport, groupes d’amis',
        'Toute personne souhaitant accéder au cercle VIP VRtueux'
      ],
      when: {
        title: 'Quand ?',
        description: 'Inscription annuelle. RDV les Mercredi et Dimanche pour des sessions exclusives.'
      }
    }
  ];

  const arcadePricing = [
    { name: '5 Parties', price: '12,50€', features: ['Jeux d’arcade VR', 'Idéal découverte'] },
    { name: '12 Parties', price: '29,95€', features: ['Meilleur rapport qualité/prix', 'Sessions libres'] },
    { name: '20 Parties', price: '49,90€', features: ['Pour les passionnés', 'Économie maximale'] }
  ];

  const renderBlock = (item: any) => {
    const isPopular = item.popular;
    const isHighlight = item.highlight;

    return (
      <div
        key={item.name}
        className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:-translate-y-2 flex flex-col justify-start h-full`}
      >
        {/* BADGE */}
        {(isHighlight || isPopular) && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span
              className={`px-6 py-2 rounded-full text-lg font-bold text-white text-center shadow-lg ${
                isHighlight
                  ? 'bg-purple-600 border-2 border-purple-400 shadow-purple-500/50'
                  : 'bg-gradient-to-r from-cyan-500 to-blue-500 border-2 border-blue-400 shadow-blue-500/50'
              }`}
            >
              {isHighlight ? 'Exclusif' : 'Populaire'}
            </span>
          </div>
        )}

        {/* TITRE */}
        <h4 className="text-xl text-white text-center mb-4">{item.name}</h4>

        {/* PRIX */}
        {item.price && (
          <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-center mb-2">
            {item.price}
          </div>
        )}

        {/* DURÉE */}
        {item.duration && (
          <div className="text-gray-400 text-center mb-4">{item.duration}</div>
        )}

        {/* FEATURES / DESCRIPTION */}
        {item.features && (
          <ul className="space-y-2 text-left mt-2 flex-1">
            {item.features.map((feature: string, idx: number) => (
              <li key={idx} className="flex items-start gap-2 text-gray-300">
                <Check className="text-cyan-400 flex-shrink-0 mt-0.5" size={18} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* BLOCS “QUI ?” et “QUAND ?” */}
        {item.when && (
          <div className="mt-6 text-center text-gray-300">
            <h5 className="text-xl text-white mb-2">{item.when.title}</h5>
            <p className="whitespace-pre-line mt-2">{item.when.description}</p>
          </div>
        )}

        {/* NEXUS CLUB DISCORD */}
        {item.name === "Qu'est-ce que le Nexus Club ?" && (
          <div className="mt-6 text-center">
            <a
              href="https://discord.gg/aVsYRYJP"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#7289da] text-white font-semibold px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform hover:shadow-lg"
            >
              <img
                src="https://i.ibb.co/dsBr3HpT/t-l-chargement-3.png"
                alt="Discord Logo"
                className="h-4 w-4"
              />
            </a>
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="pricing" className="py-20 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-white mb-4">
            Nos <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Tarifs</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Des formules adaptées à tous vos besoins, que vous soyez débutant ou expert.
          </p>
        </div>

        {/* EXPÉRIENCES VR INDIVIDUELLES */}
        <div className="mb-16">
          <h3 className="text-2xl text-white mb-8 text-center">Expériences VR Individuelles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vrPricing.map(renderBlock)}
          </div>
        </div>

        {/* PACKS */}
        <div className="mb-16">
          <h3 className="text-2xl text-white mb-8 text-center">Packs & Forfaits</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packs.map(renderBlock)}
          </div>
        </div>

        {/* NEXUS CLUB */}
        <h2 className="text-4xl text-white text-center mb-10">Nexus Club</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {nexusPricing.map(renderBlock)}
        </div>

        {/* ARCADE */}
        <div className="mb-16">
          <h3 className="text-2xl text-white mb-8 text-center">Modes Arcade</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {arcadePricing.map(renderBlock)}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            * Tous les prix sont TTC. Les sessions sont à réserver à l'avance.
          </p>
        </div>
      </div>
    </section>
  );
}
