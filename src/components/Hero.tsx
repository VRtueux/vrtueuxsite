import logo from '@/assets/logo.png';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/20 to-cyan-950/20">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <img src={logo} alt="VRtueux" className="h-48 w-auto mx-auto mb-8 animate-float" />
        <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          VRtueux
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Plongez dans l'univers de la réalité virtuelle à Vienne
        </p>

<div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-center gap-4">
  {/* Bouton Réserver */}
  <a
    href="https://vrtueux.setmore.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Réserver une session VR"
    className="inline-block w-full sm:w-auto text-center
               bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500
               text-white text-2xl font-bold py-6 px-10 rounded-full
               shadow-lg hover:shadow-xl hover:scale-105
               transition-all duration-300 animate-pulse"
  >
    Réserver maintenant !
  </a>

  {/* Bouton Cadeau */}
  <button
    onClick={() => {
      const element = document.getElementById('gift-card');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }}
    className="inline-block w-full sm:w-auto text-center
               bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500
               text-white text-2xl font-bold py-6 px-10 rounded-full
               shadow-lg hover:shadow-xl hover:scale-105
               transition-all duration-300 animate-pulse"
  >
    Gift Card
  </button>
</div>


      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }

        @keyframes pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 15px rgba(255,0,255,0.4); }
          50% { transform: scale(1.05); box-shadow: 0 0 25px rgba(0,255,255,0.6); }
        }
        .animate-pulse { animation: pulse 2s infinite; }
      `}</style>
    </section>
  );
}
