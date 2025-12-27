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
      features: ['Simulateur de voiture', 'Retour de force réaliste', 'Courses en immersion totale']
    },
    {
      name: 'Casque Autonome',
      duration: '30 min',
      price: '12€',
      features: ['Sans fil', 'Liberté totale', 'Idéal découverte']
    }
  ];

  const packs = [
    {
      name: 'Pack Découverte',
      duration: '1h',
      price: '49€',
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

  const arcadePricing = [
    {
      name: '5 Parties',
      price: '12,50€',
      features: ['Jeux d’arcade VR', 'Idéal découverte']
    },
    {
      name: '12 Parties',
      price: '29,95€',
      features: ['Meilleur rapport qualité/prix', 'Sessions libres']
    },
    {
      name: '20 Parties',
      price: '49,90€',
      features: ['Pour les passionnés', 'Économie maximale']
    }
  ];

  const nexusPricing = [
    {
      name: 'Nexus Club',
      price: '150€/an',
      features: [
        'Accès VIP toute l’année',
        '-10% sur toutes les sessions',
        'Événements privés & tournois',
        'Communauté exclusive'
      ]
    }
  ];

  const renderBlock = (item: any, highlight?: boolean) => (
    <div
      key={item.name}
      className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:-translate-y-2 ${
        highlight
          ? 'border-purple-500 shadow-lg shadow-purple-500/30'
          : 'border-slate-700 hover:border-cyan-500 hover:shadow-cyan-500/20'
      }`}
    >
      <div className="text-center mb-6">
        <h4 className="text-xl text-white mb-2">{item.name}</h4>
        {item.duration && <p className="text-gray-400">{item.duration}</p>}
        {item.price && (
          <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mt-2">
            {item.price}
          </div>
        )}
      </div>

      <ul className="space-y-2 text-gray-300">
        {item.features.map((f: string, i: number) => (
          <li key={i} className="flex gap-2">
            <Check className="text-cyan-400 mt-1" size={18} />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id="pricing" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">

        {/* EXPÉRIENCES VR */}
        <h2 className="text-4xl text-white text-center mb-10">Expériences VR</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {vrPricing.map(p => renderBlock(p, p.highlight))}
        </div>

        {/* PACKS */}
        <h2 className="text-4xl text-white text-center mb-10">Packs & Forfaits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {packs.map(p => renderBlock(p, p.popular))}
        </div>

        {/* NEXUS CLUB */}
        <h2 className="text-4xl text-white text-center mb-10">Nexus Club</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-20">
          {nexusPricing.map(p => renderBlock(p, true))}
        </div>

        {/* ARCADE */}
        <h2 className="text-4xl text-white text-center mb-10">Mode Arcade</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {arcadePricing.map(p => renderBlock(p))}
        </div>

      </div>
    </section>
  );
}
