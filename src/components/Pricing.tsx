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
      features: ['Economie de 54€', 'Vivez la réalité virtuelle comme des VIP','Boissons et snacks inclus pour un confort premium']
    },
    {
      name: 'Pack Familial',
      duration: '30 min/personne',
      price: '24€',
      features: ['-5 % pour 2, -10 % pour 3, -15 % pour 4', 'Une aventure partagée en famille ou entre amis', 'Des souvenirs immersifs à vivre à plusieurs']
    },
    {
      name: 'Pack Arcade',
      duration: '50 sessions d’arcade VR',
      price: '25€',
      features: ['Accès libre aux jeux d\’arcade VR', 'Parfait pour s\’entraîner et battre les meilleurs scores (Beat Saber)', 'Expérience fun, rapide et addictive']
    }
  ];

  const packs = [
        {
      name: 'Gift Card',
      duration: 'Carte Cadeau à prix libre',
      price: 'A partir de 15 €',
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

        {/* VR Individual */}
        <div className="mb-16">
          <h3 className="text-2xl text-white mb-8 text-center">Expériences VR Individuelles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vrPricing.map((item, index) => (
              <div
                key={index}
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:-translate-y-2 ${
                  item.highlight
                    ? 'border-purple-500 shadow-lg shadow-purple-500/20'
                    : 'border-slate-700 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20'
                }`}
              >
                {item.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm flex items-center gap-1">
                      <Sparkles size={14} />
                      Exclusif
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h4 className="text-xl text-white mb-2">{item.name}</h4>
                  <div className="text-gray-400 mb-4">{item.duration}</div>
                  <div className="text-4xl text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
                    {item.price}
                  </div>
                  <div className="text-gray-500 text-sm">TTC</div>
                </div>
                <ul className="space-y-3">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300">
                      <Check className="text-cyan-400 flex-shrink-0 mt-0.5" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

{/* Cadeau Noel */}
<div id="christmas-cards" className="mb-16 text-center">
  <h3 className="text-2xl text-white mb-2">
    Cartes Cadeaux : VR Christmas
  </h3>
  <p className="text-lg text-gray-400 mb-1">
    Carte valable 6 mois après date d'achat
  </p>
  <p className="text-sm text-gray-500 mb-8">
    À retirer sur place
  </p>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {cn.map((item, index) => (
  <div
  key={index}
  className={`relative rounded-xl transition-all duration-300 hover:-translate-y-2 ${
    item.highlight
      ? 'bg-gradient-to-br from-red-500 via-green-500 to-red-500 p-[2px] shadow-lg shadow-red-500/40'
      : 'bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20'
  }`}
>
        {item.highlight && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="px-4 py-1 rounded-full text-sm flex items-center gap-1 text-white font-semibold"
                  style={{
                    background: 'linear-gradient(90deg, rgba(220,38,38,1) 0%, rgba(16,185,129,0.85) 100%)',
                    boxShadow: '0 0 10px rgba(220,38,38,0.6), 0 0 20px rgba(16,185,129,0.4)'
                  }}
            >
              <Sparkles size={14} />
              VIP
            </span>
          </div>
        )}

        <div className="rounded-xl bg-slate-800/50 backdrop-blur-sm h-full w-full p-6">
        <div className="text-center mb-6">
          <h4 className="text-xl text-white mb-2">{item.name}</h4>
          <div className="text-gray-400 mb-4">{item.duration}</div>
          <div className="text-4xl text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
            {item.price}
          </div>
          <div className="text-gray-500 text-sm">TTC</div>
        </div>

        <ul className="space-y-3 text-left">
          {item.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-gray-300">
              <Check
                className="text-cyan-400 flex-shrink-0 mt-0.5"
                size={18}
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>
       {/* Arcade */}
        <div>
          <h3 className="text-2xl text-white mb-8 text-center">Bornes Arcade</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {arcadePricing.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-green-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-green-500/20"
              >
                <div className="text-center mb-6">
                  <h4 className="text-xl text-white mb-4">{item.name}</h4>
                  <div className="text-4xl text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text">
                    {item.price}
                  </div>
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

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            * Tous les prix sont TTC. Les sessions sont à réserver à l'avance.
          </p>
        </div>
      </div>
    </section>
  );
}
