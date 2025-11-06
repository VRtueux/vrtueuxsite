import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="VRtueux" className="h-12 w-auto cursor-pointer" onClick={() => scrollToSection('hero')} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('hero')} className="text-gray-300 hover:text-cyan-400 transition-colors">
              Accueil
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-cyan-400 transition-colors">
              À propos
            </button>
            <button onClick={() => scrollToSection('games')} className="text-gray-300 hover:text-cyan-400 transition-colors">
              Jeux
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-300 hover:text-cyan-400 transition-colors">
              Tarifs
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-cyan-400 transition-colors">
              Contact
            </button>
           <script 
           id="setmore_script" 
           type="text/javascript" 
           src="https://assets.setmore.com/integration/static/setmoreIframeLive.js"></script>
           <a style="float: none" 
           id="Setmore_button_iframe" 
           href="https://vrtueux.setmore.com"><img 
           border="none" 
           src="https://assets.setmore.com/integration/images/newdesign/others/book-now-button.svg" 
           alt="Book an appointment with VRtueux using Setmore" />
           </a>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-cyan-400"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-md">
          <div className="px-4 pt-2 pb-6 space-y-3">
            <button
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-800 rounded transition-colors"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-800 rounded transition-colors"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection('games')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-800 rounded transition-colors"
            >
              Jeux
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-800 rounded transition-colors"
            >
              Tarifs
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-800 rounded transition-colors"
            >
              Contact
            </button>
            <a href="https://vrtueux.setmore.com/?fbclid=PAZXh0bgNhZW0CMTEAAacUMcGurlhlyC-GJgjzvhAmseVlvvBBXlMIgYa45i-3QmrmSqVdkvkKLCPdkQ_aem_g-L0mFxazO_YmhwD5o0rUQ" className="block w-full text-left px-3 py-2 text-purple-300 hover:text-cyan-400 hover:bg-slate-800 rounded transition-colors"> Réserver </a>

          </div>
        </div>
      )}
    </nav>
  );
}
