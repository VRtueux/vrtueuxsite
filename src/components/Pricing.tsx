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
      features: ['Simulateur de voiture', 'Retour de force réaliste', 'Courses immersives']
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
      duration: 'Carte cadeau à montant libre',
      price: 'À partir de 15€',
      features: [
        'Montant libre',
        'Laisse le choix de l’expérience',
        'Idéal pour découvrir la VR'
      ]
    },
    {
      name: 'Pack Découverte',
      duration: '1h',
      price: '49€',
      popular: true,
      features: [
        'Idéal pour débuter',
        'Plusieurs expériences',
        'Accompagnement inclus'
      ]
    },
    {
      name: 'Abonnement 10 Sessions',
      duration: '1h / session',
      price: '130€',
      features: [
        'Économie de 25%',
        'Accès prioritaire',
        'Sessions flexibles'
      ]
    }
  ];

  const renderBlock = (item) => (
    <div
      key={item.name}
      className="relative bg-slate-800/60 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-cyan-500 transition-all hover:shadow-xl"
    >
      {/* Badge */}
      {item.highlight && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-6 py-1 rounded-full text-sm font-semibold shadow-lg">
          Populaire
        </div>
      )}

      {/* Titre */}
      <div className="text-center mb-6">
        <h4 className="text-xl text-white">{item.name}</h4>
        <p className="text-gray-400 mt-1">{item.duration}</p>
        <p className="text-3xl font-bold mt-3 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          {item.price}
        </p>
      </div>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        {item.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-gray-300">
            <Check size={18} className="text-cyan-400 mt-1" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Bouton Gift Card */}
      {item.name === 'Gift Card' && (
        <div className="text-center">
          <a
            href="https://www.paypal.com/ncp/payment/C28MCSPHAPTU4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-8 py-3 rounded-full font-semibold text-white 
                       bg-gradient-to-r from-purple-500 to-cyan-500 
                       hover:scale-105 transition-transform shadow-lg"
          >
            Acheter
          </a>
        </div>
      )}
    </div>
  );

  return (
    <section id="pricing" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-white mb-4">
            Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Tarifs</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choisissez l’expérience VR qui vous correspond.
          </p>
        </div>

        {/* VR Experiences */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {vrPricing.map(renderBlock)}
        </div>

        {/* Packs */}
        <div className="grid md:grid-cols-3 gap-8">
          {packs.map(renderBlock)}
        </div>
      </div>
    </section>
  );
}
