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
      title: 'Virtual Army : Revolution',
      description: 'Prépare-toi à plonger dans une bataille à 360° plus vraie que nature !\nInspiré des plus grands jeux de tir, ce jeu t’embarque dans un univers ultra-immersif où chaque mouvement compte et où stratégie et réflexes feront la différence.',
      image: 'https://i.ibb.co/dwhM60Rg/Virtual-Army-Revolution.jpg',
      platform: 'Tapis Omnidirectionnel'
    },
    {
      id: '2',
      title: 'Beat Saber',
      description: 'Plonge dans le rythme et tranche les cubes ! Teste tes réflexes, bat ton score et deviens le maître du sabre lumineux !\nLe meilleur score du mois remporte un cadeau !',
      image: 'https://i.ibb.co/YBQ6hPpB/Beat-Saber.jpg',
      platform: 'CVR Autonome'
    },
    {
      id: '3',
      title: 'Assetto Corsa Competizione',
      description: 'Choisis ton circuit et ta voiture !\nConduis, dépasse et teste tes réflexes dans des courses immersives.',
      image: 'https://i.ibb.co/spDYkmGG/t-l-chargement.jpg',
      platform: 'SimRacing VR'
    },
    {
      id: '4',
      title: 'Sairento VR',
      description: 'Devenez un Ninja en réalité virtuelle !\nAffrontez vos ennemis à travers 5 cartes et 5 classes différentes.',
      image: 'https://i.ibb.co/bjxPGjnr/sairentovr-header-700x400.jpg',
      platform: 'Tapis Omnidirectionnel'
    },
    {
      id: '5',
      title: 'Roblox VR',
      description: 'Plonge dans l’univers infini de Roblox !\nCrée, explore et joue à des milliers de mondes imaginaires.',
      image: 'https://i.ibb.co/tM7SYrb9/Roblox.jpg',
      platform: 'CVR Autonome'
    },
    {
      id: '6',
      title: 'AFFECTED : The Manor',
      description: 'Explore le Manoir hanté !\nUtilise ta torche pour éclairer ton chemin et choisis l’un des 3 parcours possibles.',
      image: 'https://i.ibb.co/fdJ3mW18/Affected-The-manor.jpg',
      platform: 'Tapis Omnidirectionnel'
    },
    {
      id: '7',
      title: 'Dreadhalls (Escape Game)',
      description: 'Tente de t’échapper du labyrinthe en moins de 10 minutes !\nUtilise ta carte pour explorer méthodiquement et trouver la sortie avant qu’il ne soit trop tard.\nMais prends garde : des créatures mortelles rôdent dans l’ombre.',
      image: 'https://i.ibb.co/jPtjRkny/Dreadhalls.jpg',
      platform: 'Tapis Omnidirectionnel'
    },
    {
      id: '8',
      title: 'VRZ : Torment',
      description: 'Survis à l’apocalypse zombie !\nAffronte des vagues de morts-vivants pendant 10 minutes et améliore tes armes à chaque élimination !',
      image: 'https://i.ibb.co/KpL2CpKV/VRZ-Torment.jpg',
      platform: 'Tapis Omnidirectionnel'
    },
    {
      id: '9',
      title: 'VR Shooter Guns',
      description: 'La station spatiale est attaquée !\nFuis vers les pods de secours, élimine un max d’ennemis et récupère les Power-Ups !',
      image: 'https://i.ibb.co/ZpjMHBZ5/VR-shooter-gun.jpg',
      platform: 'Tapis Omnidirectionnel'
    },
  ];

  const platformColors = {
    'Tapis Omnidirectionnel': 'from-purple-500 to-pink-500',
    'SimRacing VR': 'from-red-500 to-orange-500',
    'CVR Autonome': 'from-cyan-500 to-blue-500',
    'Arcade': 'from-green-500 to-emerald-500'
  };

  const filters: FilterType[] = ['Tous', 'Tapis Omnidirectionnel', 'SimRacing VR', 'CVR Autonome'];
  const filteredGames = activeFilter === 'Tous' ? games : games.filter(game => game.platform === activeFilter);

  return (
    <section id="games" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TITRE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-white mb-4">
            Notre <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Catalogue</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Découvrez notre sélection de jeux et expériences VR disponibles sur nos différentes plateformes.
          </p>

          {/* FILTRES */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full transition-all duration-300 font-semibold ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/50 scale-105'
                    : 'bg-slate-800/50 text-gray-400 hover:text-white hover:bg-slate-700 border border-slate-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Compteur */}
          <p className="text-gray-500 mt-6">
            {filteredGames.length} {filteredGames.length > 1 ? 'jeux disponibles' : 'jeu disponible'}
          </p>
        </div>

        {/* GRILLE DE JEUX */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGames.map(game => (
            <div
              key={game.id}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <ImageWithFallback
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <span
                  className={`inline-block bg-gradient-to-r ${platformColors[game.platform]} px-3 py-1 rounded-full text-white text-sm mb-3`}
                >
                  {game.platform}
                </span>
                <h3 className="text-xl text-white mb-2">{game.title}</h3>
                <p className="text-gray-400 whitespace-pre-line">{game.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
