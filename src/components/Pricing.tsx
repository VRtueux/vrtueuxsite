import { Check } from 'lucide-react';

export function Pricing() {
  const vrPricing = [
    {
      name: 'Tapis Omnidirectionnel',
      duration: '30 min',
      price: '24€',
      highlight: true,
      features: ['Unique en France', 'Expérience immersive totale', 'Déplacement naturel']
    },
    {
      name: 'SimRacing VR',
      duration: '30 min',
      price: '15€',
      features: ['Simulateur de voiture', 'Retour de force réaliste', 'Courses en VR']
    },
    {
      name: 'Casque Autonome',
      duration: '30 min',
      price: '12€',
      features: ['Large catalogue de jeux', 'Sans fil', 'Graphismes immersifs']
    }
  ];

  const cn = [
    {
      name: 'Ultimate Christmas',
      duration: 'Privatisation de 2 heures pour 2 personnes',
      price: '150€',
      highlight: true,
      features: ['Économie de 54€', 'Vivez la réalité virtuelle comme des VIP', 'Boissons et snacks inclus pour un confort premium']
    },
    {
      name: 'Pack Familial',
      duration: '30 min/personne',
      price: '24€',
      features: ['-5 % pour 2, -10 % pour 3, -15 % pour 4', 'Aventure partagée en famille ou entre amis', 'Souvenirs immersifs à vivre à plusieurs']
    },
    {
      name: 'Pack Arcade',
      duration: '50 sessions d’arcade VR',
      price: '25€',
      features: ['Accès libre aux jeux d’arcade VR', 'Parfait pour s’entraîner et battre les meilleurs scores (Beat Saber)', 'Expérience fun, rapide et addictive']
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
      features: ['Idéal pour débuter', 'Testez plusieurs expériences', 'Conseils personnalisés']
    },
    {
      name: 'Abonnement 10 Sessions',
      duration: '10 x 30 min',
      price: '130€',
      popular: true,
      features: ['Économisez 40€', 'Valable 6 mois', 'Partage possible']
    }
  ];

  const arcadePricing = [
    { name: '5 Parties', price: '12,50€', features: ['Battle', 'Jeux classiques'] },
    { name: '12 Parties', price: '29,95€', features: ['Meilleur rapport qualité/prix', 'Économisez 5€'] },
    { name: '20 Parties', price: '49,90€', features: ['Offre famille', 'Économisez 12,50€'] }
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
        '-10% sur toutes les sessions',
        'Accès aux évènements privés du Nexus',
        'E-sport : tournois Beat Saber et autres compétitions VR',
        'Et encore plein d’autres évènements.'
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

  const renderBlock = (item: any, highlightColor?: string, popular?: boolean) => (
    <div
      key={item.name}
      className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:-translate-y-2 ${
        highlightColor
          ? `border-${highlightColor}-500 shadow-lg shadow-${highlightColor}-500/20`
          : 'border-slate-700 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20'
      }`}
    >
      {/* BADGE Populaire / Exclusif / VIP Noël */}
{(popular || item.highlight || item.name === 'Ultimate Christmas') && (
  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
    <span
      className={`px-8 py-2 rounded-full text-lg font-bold text-white text-center shadow-lg ${
        item.name === 'Ultimate Christmas'
          ? 'bg-gradient-to-r from-red-600 via-yellow-400 to-green-500 border-2 border-yellow-400 shadow-red-500/70 animate-pulse'
          : item.highlight
          ? 'bg-purple-600 px-8 py-2 rounded-full text-lg font-bold text-white text-center'
          : popular
          ? 'bg-gradient-to-r from-cyan-500 to-blue-500 border-2 border-blue-400 shadow-blue-500/50'
          : ''
      }`}
    >
      {item.name === 'Ultimate Christmas'
        ? 'VIP'
        : item.highlight
        ? 'Exclusif'
        : 'Populaire'}
    </span>
  </div>
)}

      {/* NOM + DUREE + PRIX */}
      <div className="text-center mb-6">
        <h4 className="text-xl text-white mb-2">{item.name}</h4>
        {item.duration && <div className="text-gray-400 mb-4">{item.duration}</div>}
        {item.price && (
          <>
            <div className="text-4xl text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
              {item.price}
            </div>
            <div className="text-gray-500 text-sm">TTC</div>
          </>
        )}
      </div>

      {/* FEATURES */}
      {item.features && (
        <ul className="space-y-2 text-left">
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

        <div className="mb-16">
          <h3 className="text-2xl text-white mb-8 text-center">Expériences VR Individuelles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vrPricing.map(item => renderBlock(item, item.highlight ? 'purple' : undefined))}
          </div>
        </div>

        <div id="christmas-cards" className="mb-16">
          <h3 className="text-2xl text-white mb-8 text-center">Cartes Cadeaux / Noël</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cn.map(item => renderBlock(item, item.highlight ? 'purple' : undefined))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl text-white mb-8 text-center">Packs & Forfaits</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packs.map(item => renderBlock(item, undefined, item.popular))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl text-white mb-8 text-center">Bornes Arcade</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {arcadePricing.map(item => renderBlock(item))}
          </div>
        </div>

        <div id="nexus-club" className="mb-16 scroll-mt-24">
          <h3 className="text-2xl sm:text-4xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
              Nexus Club
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nexusPricing.map(item => renderBlock(item))}
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
