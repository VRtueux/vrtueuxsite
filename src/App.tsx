import { Hero } from './components/Hero';
import { About } from './components/About';
import { Games } from './components/Games';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <Hero />
      <About /> {/* La popup est maintenant gérée directement dans About */}
      <Games />
      <Pricing />
      <Contact />
    </div>
  );
}
