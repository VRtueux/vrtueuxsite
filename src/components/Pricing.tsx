const renderBlock = (item: any, highlightColor?: string, popular?: boolean) => (
  <div
    key={item.name}
    className="relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:-translate-y-2"
  >
    {/* BADGE */}
    {(popular || item.highlight || item.name === 'Ultimate Christmas') && (
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
        <span
          className={`inline-block px-10 py-2 text-base font-bold text-white rounded-full border-4 text-center shadow-lg ${
            item.name === 'Ultimate Christmas'
              ? 'bg-gradient-to-r from-red-600 via-yellow-400 to-green-500 border-yellow-400 shadow-red-500/70 animate-pulse'
              : item.highlight
              ? 'bg-gradient-to-r from-cyan-500 to-purple-500 border-purple-400 shadow-purple-500/50'
              : popular
              ? 'bg-gradient-to-r from-cyan-500 to-blue-500 border-blue-400 shadow-blue-500/50'
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
      <div className="mt-6 text-left text-gray-300">
        <h5 className="text-lg text-white mb-2">{item.when.title}</h5>
        <p className="whitespace-pre-line ml-2 mt-1">{item.when.description}</p>
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
