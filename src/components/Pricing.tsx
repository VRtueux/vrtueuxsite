import { Check, Sparkles } from 'lucide-react';

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
      name: 'Pass 10 Sessions',
      duration: '10 x 30 min',
      price: '130€',
      popular: true,
      features: ['Économisez 40€', 'Valable 6 mois', 'Partage possible']
    }
  ];

  const arcadePricing = [
    {
      name: '5 Parties',
      price: '12,50€',
      features: ['Battle', 'Jeux classiques']
    },
    {
      name: '12 Parties',
      price: '29,95€',
      features: ['Meilleur rapport qualité/prix', 'Économisez 5€']
    },
    {
      name: '20 Parties',
      price: '49,90€',
      features: ['Offre famille', 'Économisez 12,50€']
    }
  ];

  const nexusPricing = [
    {
      name: "Qu'est-ce que le Nexus Club ?",
      description:
        'Le VRtueux Nexus Club est le cercle premium officiel de VRtueux. C’est une communauté réservée aux passionnés de VR.'
    },
    {
      name: 'Prix / Avantages',
      description:
      price ; '150€ /an'
      features : ['-10% sur toutes les sessions', 'Accès aux évènements privées du Nexus', 'E-sport : tournois Beat Saber et autres compétitions VR', 'Et encore plein d\'autres évènements.']    },
    {
      name: 'Pour qui ?',
      description:
      features : ['Gamers passionnés, clients réguliers', 'membres d’associations partenaires', 'communautés e-sport, groupes d’amis', 'toute personne souhaitant accéder au cercle VIP VRtueux.']
    }
  ];

  const renderBlock = (item: any, highlightColor?: string, popular?: boolean) => (
    <div
      className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:-translate-y-2 ${
        highlightColor
          ? `border-${highlightColor}-500 shadow-lg shadow-${highlightColor}-500/20`
          : 'border-slate-700 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20'
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm">
            Populaire
          </span>
        </div>
      )}
      <div className="text-center mb-6">
        <h4 className="text-xl text-white mb-2">{item.name}</h4>
        {item.duration && <div className="text-gray-400 mb-4">{item.duration}</div>}
        {item.price && <div className="text-4xl text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">{item.price}</div>}
        {item.price && <div className="text-gray-500 text-sm">TTC</div>}
        {item.description && <p className="text-gray-300 whitespace-pre-line">{item.description}</p>}
      </div>
      {item.features && (
        <ul className="space-y-3 text-left">
          {item.features.map((feature: string, idx: number) => (
            <li key={idx} className="flex items-start gap-2 text-gray-300">
              <Check className="text-cyan-400 flex-shrink-0 mt-0.5" size={18} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
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

        {/* Expériences VR Individuelles */}
        <div className="mb-16">
          <h3 className="text-2xl text-white mb-8 text-center">Expériences VR Individuelles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vrPricing.map((item, idx) => renderBlock(item, item.highlight ? 'purple' : undefined))}
          </div>
        </div>

        {/* Cartes Cadeaux / Noël */}
        <div id="christmas-cards" className="mb-16">
          <h3 className="text-2xl text-white mb-8 text-center">Cartes Cadeaux / Noël</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cn.map((item, idx) => renderBlock(item, item.highlight ? 'purple' : undefined))}
          </div>
        </div>

        {/* Packs & Forfaits */}
<div className="mb-16">
  <h3 className="text-2xl text-white mb-8 text-center">Packs & Forfaits</h3>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {packs.map((item, idx) => renderBlock(item, undefined, item.popular))}
  </div>
</div>


        {/* Bornes Arcade */}
        <div className="mb-16">
          <h3 className="text-2xl text-white mb-8 text-center">Bornes Arcade</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {arcadePricing.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-green-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-green-500/20"
              >
                <div className="text-center mb-6">
                  <h4 className="text-xl text-white mb-4">{item.name}</h4>
                  <div className="text-4xl text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text">{item.price}</div>
                  <div className="text-gray-500 text-sm">TTC</div>
                </div>
                <ul className="space-y-3">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300">
                      <Check className="text-green-400 flex-shrink-0 mt-0.5" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

       {/* Nexus Club */}
<div id="nexus-club" className="mb-16">
  <h3 className="text-2xl sm:text-4xl font-bold mb-8 text-center">
    <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
      Nexus Club
    </span>
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {nexusPricing.map((item, idx) => (
      <div
        key={idx}
        className="relative bg-gradient-to-br from-purple-700/40 via-pink-700/30 to-cyan-700/40 backdrop-blur-sm rounded-xl p-8 border border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
      >
        {idx === 0 && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-white px-4 py-1 rounded-full text-sm flex items-center gap-1">
              <Sparkles size={14} />
              Nexus Club
            </span>
          </div>
        )}

        <div className="text-center mb-6">
          <h4 className="text-xl sm:text-2xl text-white mb-2">{item.name}</h4>
          {item.description && (
            <p className="text-gray-300 whitespace-pre-line">{item.description}</p>
          )}

          {/* Bloc Avantages / Bouton pour le bloc “Prix / Avantages” */}
          {item.name === 'Prix / Avantages' && (
            <div className="mt-4">
              <ul className="text-left text-gray-300 space-y-2 mb-4">
                <li>💰 Adhésion annuelle : 150 €/an</li>
                <li>🎁 Réduction de <span className="text-cyan-400 font-semibold">-10%</span> sur toutes les sessions</li>
                <li>🎮 Accès aux soirées privées du Nexus (2/mois)</li>
                <li>🏆 E-sport Battle mensuel : Beat Saber & autres compétitions VR</li>
                <li>⏱ Réservations prioritaires pour tapis & simulateur</li>
                <li>💬 Canal Discord privé “Nexus Lounge”</li>
                <li>🕹 Accès en avant-première aux nouveaux jeux</li>
                <li>🎁 1 goodie exclusif VRtueux offert chaque année</li>
              </ul>
              <button
                onClick={() =>
                  document
                    .getElementById('pricing')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="bg-gradient-to-r from-cyan-400 to-purple-400 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
              >
                Rejoindre le Nexus Club
              </button>
            </div>
          )}
        </div>
      </div>
    ))}
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
