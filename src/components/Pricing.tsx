import { Check } from "lucide-react";

const pricing = [
  {
    name: "Nos tarifs – Expériences VRtueux",
    duration: "Sessions immersives",
    price: "À partir de 15€",
    features: [
      "Accès aux expériences VR immersives",
      "Jeux solo et multijoueur",
      "Casques VR dernière génération",
      "Accompagnement par un animateur"
    ],
    highlight: true
  },

  {
    name: "Packs & Forfaits",
    duration: "Idéal pour offrir ou partager",
    price: "Dès 25€",
    features: [
      "Cartes cadeaux VR",
      "Offres duo, famille et groupes",
      "Valables sur toutes les expériences",
      "Parfait pour anniversaires & événements"
    ]
  },

  {
    name: "Nexus Club",
    price: "150€ / an",
    highlight: true,
    features: [
      "Le cercle premium officiel de VRtueux",
      "Communauté privée de passionnés VR",
      "-10% sur toutes les sessions",
      "Accès à des événements exclusifs",
      "Tournois e-sport (Beat Saber, etc.)",
      "Avantages et surprises toute l’année"
    ],
    when: {
      title: "Quand ?",
      description: "Inscription annuelle\nSessions exclusives les mercredis et dimanches"
    }
  },

  {
    name: "Mode Arcade",
    duration: "Fun immédiat",
    price: "À partir de 10€",
    features: [
      "Jeux rapides et accessibles",
      "Idéal pour débutants",
      "Parfait pour groupes & enfants",
      "Expérience fun et dynamique"
    ]
  }
];

export default function Pricing() {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {pricing.map((item, index) => (
          <div
            key={item.name}
            className={`relative bg-slate-900/80 backdrop-blur rounded-xl p-8 border transition-all duration-300
            ${item.highlight
              ? "border-cyan-500 shadow-lg shadow-cyan-500/30 scale-[1.02]"
              : "border-slate-700 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20"
            }`}
          >
            {/* Badge */}
            {item.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="px-6 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg">
                  Populaire
                </span>
              </div>
            )}

            {/* Titre */}
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-white">{item.name}</h3>
              {item.duration && (
                <p className="text-gray-400 mt-1">{item.duration}</p>
              )}
              {item.price && (
                <div className="mt-4 text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {item.price}
                </div>
              )}
            </div>

            {/* Features */}
            <ul className="space-y-2">
              {item.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-300">
                  <Check className="text-cyan-400 mt-1" size={18} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* WHEN */}
            {item.when && (
              <div className="mt-6 text-center text-gray-300">
                <h4 className="text-white font-semibold mb-1">{item.when.title}</h4>
                <p className="whitespace-pre-line">{item.when.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
