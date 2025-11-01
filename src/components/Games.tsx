import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  platform: 'Tapis Omnidirectionnel' | 'SimRacing VR' | 'CVR Autonome' | 'Arcade';
}

type FilterType = 'Tous' | 'Tapis Omnidirectionnel' | 'SimRacing VR' | 'CVR Autonome';

export function Games() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('Tous');
  const games: Game[] = [
    {
      id: '1',
      title: 'Half-Life: Alyx',
      description: 'Explorez City 17 dans cette aventure VR époustouflante',
      image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600',
      platform: 'Tapis Omnidirectionnel'
    },
    {
      id: '2',
      title: 'Beat Saber',
      description: 'Découpez des cubes au rythme de la musique',
      image: 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=600',
      platform: 'CVR Autonome'
    },
    {
      id: '3',
      title: 'Assetto Corsa Competizione',
      description: 'Le simulateur de course ultime en VR',
      image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=600',
      platform: 'SimRacing VR'
    },
    {
      id: '4',
      title: 'The Walking Dead: Saints & Sinners',
      description: 'Survivez dans l\'apocalypse zombie en VR',
      image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=600',
      platform: 'CVR Autonome'
    },
    {
      id: '5',
      title: 'Acan\'s Call',
      description: 'Plongez dans une aventure mystique en réalité virtuelle',
      image: 'https://i.ibb.co/zhzVywPm/Acan-s-Call.jpg'
      platform: 'CVR Autonome'
    },
    {
      id: '6',
      title: 'AFFECTED : The Manor',
      description: 'Osez entrer dans ce manoir hanté terrifiant',
      image: 'https://images.unsplash.com/photo-1577388219814-9b75a45cea09?w=600',
      platform: 'CVR Autonome'
    },
    {
      id: '7',
      title: 'Dreadhalls',
      description: 'Explorez des donjons horrifiques en VR',
      image: 'https://images.unsplash.com/photo-1577388219814-9b75a45cea09?w=600',
      platform: 'Tapis Omnidirectionnel'
    },
    {
      id: '8',
      title: 'VRZ : Torment',
      description: 'Survivez dans un monde post-apocalyptique infesté de zombies',
      image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=600',
      platform: 'Tapis Omnidirectionnel'
    },
    {
      id: '9',
      title: 'Intense Warfare',
      description: 'Combat tactique multijoueur en réalité virtuelle',
      image: 'https://images.unsplash.com/photo-1613477757272-96c69d8a64de?w=600',
      platform: 'CVR Autonome'
    },
    {
      id: '10',
      title: 'ProtonWar',
      description: 'Action spatiale futuriste avec batailles intergalactiques',
      image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600',
      platform: 'CVR Autonome'
    },
    {
      id: '11',
      title: 'SAGA',
      description: 'Épopée fantastique en réalité virtuelle immersive',
      image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600',
      platform: 'Tapis Omnidirectionnel'
    },
    {
      id: '12',
      title: 'Sairento VR',
      description: 'Incarnez un ninja cyber-samouraï dans des combats acrobatiques',
      image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600',
      platform: 'CVR Autonome'
    },
    {
      id: '13',
      title: 'Virtual Army : Revolution',
      description: 'Combat militaire tactique en équipe',
      image: 'https://images.unsplash.com/photo-1613477757272-96c69d8a64de?w=600',
      platform: 'Tapis Omnidirectionnel'
    },
    {
      id: '14',
      title: 'VR Hero Sentry',
      description: 'Défendez votre position contre des vagues d\'ennemis',
      image: 'https://images.unsplash.com/photo-1709952565060-bd033682b54a?w=600',
      platform: 'CVR Autonome'
    },
    {
      id: '16',
      title: 'VR Shooter Guns',
      description: 'Action FPS intense avec arsenal d\'armes varié',
      image: 'https://images.unsplash.com/photo-1709952565060-bd033682b54a?w=600',
      platform: 'CVR Autonome'
    }
  ];

  const platformColors = {
    'Tapis Omnidirectionnel': 'from-purple-500 to-pink-500',
    'SimRacing VR': 'from-red-500 to-orange-500',
    'CVR Autonome': 'from-cyan-500 to-blue-500',
    'Arcade': 'from-green-500 to-emerald-500'
  };

  const filters: FilterType[] = ['Tous', 'Tapis Omnidirectionnel', 'SimRacing VR', 'CVR Autonome'];

  const filteredGames = activeFilter === 'Tous' 
    ? games 
    : games.filter(game => game.platform === activeFilter);

  return (
    <section id="games" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-white mb-4">
            Notre <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Catalogue</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Découvrez notre sélection de jeux et expériences VR disponibles sur nos différentes plateformes.
          </p>

          {/* Filtres */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/50 scale-105'
                    : 'bg-slate-800/50 text-gray-400 hover:text-white hover:bg-slate-700 border border-slate-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Compteur de jeux */}
          <p className="text-gray-500 mt-6">
            {filteredGames.length} {filteredGames.length > 1 ? 'jeux disponibles' : 'jeu disponible'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGames.map((game) => (
            <div
              key={game.id}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <div className={`inline-block bg-gradient-to-r ${platformColors[game.platform]} px-3 py-1 rounded-full text-white text-sm mb-3`}>
                  {game.platform}
                </div>
                <h3 className="text-xl text-white mb-2">{game.title}</h3>
                <p className="text-gray-400">{game.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
