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
      popular: true,
      features: ['Économisez 40€', 'Valable 6 mois', 'Partage possible']
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

  const renderBlock = (item: any, highlight?: boolean, popular?: boolean) => (
    <div
      key={item.name}
      className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:-translate-y-2 ${
        highlight ? 'border-purple-500 shadow-lg shadow-purple-500/20' : 'border-slate-700 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20'
      }`}
    >
      {/* BADGE */}
      {item.badge || item.highlight || popular ? (
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold shadow-md uppercase text-center
          bg-gradient-to-r from-cyan-500 to-purple-500 text-white">
          {item.badge ? item.badge : item.highlight ? 'EXCLUSIF' : 'POPULAIRE'}
        </div>
      ) : null}

      {/* NOM + DUREE + PRIX */}
      <div className="text-center mb-6">
        <h4 className="text-xl text-white mb-2">{item.name}</h4>
        {item.duration && <div className="text-gray-400 mb-2">{item.duration}</div>}
        {item.price && (
          <div className="text-3xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">{item.price}</div>
        )}
      </div>

      {/* FEATURES */}
      {item.features && (
        <ul className="space-y-2 text-left">
          {item.features.map((f: string, i: number) => (
            <li key={i} className="flex gap-2 text-gray-300 items-start">
              <Check className="text-cyan-400 mt-1" size={18} />
              {f}
            </li>
          ))}
        </ul>
      )}

      {/* WHEN */}
      {item.when && (
        <div className="mt-6 text-center text-gray-300">
          <h5 className="text-xl text-white mb-2">{item.when.title}</h5>
          <p>{item.when.description}</p>
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
    <section id="pricing" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 space-y-32">

        {/* Expériences VR */}
        <div>
          <h2 className="text-4xl text-white text-center mb-10">Expériences VR</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-16">
            {vrPricing.map(p => renderBlock(p, p.highlight))}
          </div>
        </div>

        {/* Packs & Forfaits */}
        <div>
          <h2 className="text-4xl text-white text-center mb-10">Packs & Forfaits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-16">
            {packs.map(p => renderBlock(p, undefined, p.popular))}
          </div>
        </div>

        {/* Nexus Club */}
        <div>
          <h2 className="text-4xl text-white text-center mb-10">Nexus Club</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-16">
            {nexusPricing.map(p => renderBlock(p, true))}
          </div>
        </div>

        {/* Mode Arcade */}
        <div>
          <h2 className="text-4xl text-white text-center mb-10">Mode Arcade</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-16">
            {arcadePricing.map(p => renderBlock(p))}
          </div>
        </div>

        <div className="mt-12 text-center text-gray-400 text-sm">
          * Tous les prix sont TTC. Les sessions sont à réserver à l'avance.
        </div>

      </div>
    </section>
  );
}
