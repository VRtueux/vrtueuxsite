import { Check } from "lucide-react";

export function Pricing() {
  const vrPricing = [
    {
      name: "Tapis Omnidirectionnel",
      duration: "30 min",
      price: "24€",
      highlight: true,
      features: ["Unique en France", "Expérience immersive totale", "Déplacement naturel"]
    },
    {
      name: "SimRacing VR",
      duration: "30 min",
      price: "15€",
      features: ["Simulateur de voiture", "Retour de force réaliste", "Courses en VR"]
    },
    {
      name: "Casque Autonome",
      duration: "30 min",
      price: "12€",
      features: ["Large catalogue de jeux", "Sans fil", "Graphismes immersifs"]
    }
  ];

  const packs = [
    {
      name: "Gift Card",
      duration: "Carte cadeau",
      price: "À partir de 15€",
      features: ["Montant libre", "Valable sur toutes les expériences", "Idéal pour offrir"]
    },
    {
      name: "Pack Découverte",
      duration: "1h",
      price: "49€",
      features: ["Idéal pour débuter", "Plusieurs expériences", "Accompagnement inclus"]
    },
    {
      name: "Abonnement 10 Sessions",
      duration: "10 x 30 min",
      price: "130€",
      popular: true,
      features: ["Économisez 40€", "Valable 6 mois", "Partage possible"]
    }
  ];

  const nexusPricing = [
    {
      name: "Qu’est-ce que le Nexus Club ?",
      features: [
        "Le cercle premium officiel de VRtueux",
        "Une communauté dédiée aux passionnés de VR"
      ]
    },
    {
      name: "Prix & Avantages",
      price: "150€/an",
      features: [
        "-10% sur toutes les sessions",
        "Événements privés",
        "Tournois VR & compétitions"
      ]
    },
    {
      name: "Pour qui ?",
      features: [
        "Gamers passionnés",
        "Groupes & associations",
        "Amateurs de VR premium"
      ],
      when: {
        title: "Quand ?",
        description: "Accès annuel — événements les mercredis et dimanches"
      }
    }
  ];

  const renderBlock = (item: any, highlight?: boolean) => (
    <div
      key={item.name}
      className={`relative rounded-xl p-8 border transition-all duration-300 bg-slate-800/60 backdrop-blur
        ${highlight ? "border-cyan-500 shadow-cyan-500/30 shadow-lg" : "border-slate-700 hover:border-cyan-500"}
      `}
    >
      {highlight && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="px-5 py-1 text-sm font-bold text-white rounded-full bg-gradient-to-r from-cyan-500 to-blue-500">
            Populaire
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-xl text-white">{item.name}</h3>
        {item.duration && <p className="text-gray-400 mt-1">{item.duration}</p>}
        {item.price && (
          <p className="mt-3 text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            {item.price}
          </p>
        )}
      </div>

      <ul className="space-y-2">
        {item.features.map((f: string, i: number) => (
          <li key={i} className="flex items-start gap-2 text-gray-300">
            <Check className="text-cyan-400 mt-1" size={18} />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {item.when && (
        <div className="mt-6 text-center text-gray-300">
          <h4 className="text-white font-semibold mb-1">{item.when.title}</h4>
          <p>{item.when.description}</p>
        </div>
      )}
    </div>
  );

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-4xl font-bold text-white mb-16">
          Nos <span className="text-cyan-400">Tarifs</span>
        </h2>

        {/* EXPÉRIENCES */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {vrPricing.map(item => renderBlock(item, item.highlight))}
        </div>

        {/* PACKS */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {packs.map(item => renderBlock(item, item.popular))}
        </div>

        {/* NEXUS CLUB */}
        <div className="grid md:grid-cols-3 gap-8">
          {nexusPricing.map(item => renderBlock(item))}
        </div>

      </div>
    </section>
  );
}
