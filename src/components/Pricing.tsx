import { Check } from 'lucide-react';

export function Pricing() {
  const vrPricing = [
    {
      name: 'Tapis Omnidirectionnel',
      duration: '30 min',
      price: '24€',
      highlight: true,
      badge: 'EXCLUSIF',
      features: ['Unique en France', 'Expérience immersive totale', 'Déplacement naturel']
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
      badge: 'POPULAIRE',
      features: ['Idéal pour débuter', 'Plusieurs expériences', 'Accompagnement inclus']
    },
    {
      name: 'Abonnement 10 Sessions',
      duration: '10 x 30 min',
      price: '130€',
      features: ['Économisez 40€', 'Valable 6 mois', 'Partage possible']
    }
  ];

  const arcadePricing = [
    { name: '5 Parties', price: '12,50€', features: ['Jeux d’arcade VR', 'Idéal découverte'] },
    { name: '12 Parties', price: '29,95€', features: ['Meilleur rapport qualité/prix', 'Sessions libres'] },
    { name: '20 Parties', price: '49,90€', features: ['Pour les passionnés', 'Économie maximale'] }
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
      name: 'Nexus Club',
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

  const renderBlock = (item: any, highlight?: boolean, popular?: boolean) => (
    <div
      key={item.name}
      className="relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-10 border transition-all duration-300 hover:-translate-y-2"
    >
      {/* BADGE */}
      {item.badge && (
        <div className={`absolute -top-6 left-1/2 -translate-x-1/2 px-5 py-1 rounded-full text-sm font-bold shadow-md uppercase ${
          item.badge === 'EXCLUSIF' ? 'bg-yellow-400 text-black' : 'bg-purple-500 text-white'
        }`}>
          {item.badge}
        </div>
      )}
      {popular && (
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-5 py-1 rounded-full text-sm font-bold shadow-md uppercase bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
          POPULAIRE
        </div>
      )}

      {/* NOM + DUREE + PRIX */}
      <div className="text-center mb-8">
        <h4 className="text-xl text-white mb-3">{item.name}</h4>
        {item.duration && <div className="text-gray-400 mb-3">{item.duration}</div>}
        {item.price && (
          <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
            {item.price}
          </div>
        )}
      </div>

      {/* FEATURES */}
      {item.features && (
        <ul className="space-y-3 text-left">
          {item.features.map((feature: string, idx: number) => (
            <li key={idx} className="flex items-start gap-3 text-gray-300">
              <Check className="text-cyan-400 flex-shrink-0 mt-1" size={18} />
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
    <section id="pricing" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 space-y-32">

        {/* EXPÉRIENCES VR */}
        <div>
          <h2 className="text-4xl text-white text-center mb-10">Expériences VR Individuelles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {vrPricing.map(p => renderBlock(p, p.highlight))}
          </div>
        </div>

        {/* PACKS & FORFAITS */}
        <div>
          <h2 className="text-4xl text-white text-center mb-10">Packs & Forfaits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {packs.map(p => renderBlock(p, undefined, p.badge === 'POPULAIRE'))}
          </div>
        </div>

        {/* MODE ARCADE */}
        <div>
          <h2 className="text-4xl text-white text-center mb-10">Mode Arcade</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {arcadePricing.map(p => renderBlock(p))}
          </div>
        </div>

        {/* NEXUS CLUB */}
        <div>
          <h2 className="text-4xl text-white text-center mb-10">Nexus Club</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {nexusPricing.map(p => renderBlock(p, true))}
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
