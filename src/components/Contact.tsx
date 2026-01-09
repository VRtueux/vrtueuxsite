import { Phone, Mail, MapPin, Instagram, Clock, Youtube } from 'lucide-react'; // ajouter Youtube

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl text-white mb-4">
            Nous <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Contacter</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Une question ? Envie de réserver ? N'hésitez pas à nous contacter !
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Téléphone */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white mb-2">Téléphone</h3>
                  <a href="tel:0437042501" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    04 37 04 25 01
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white mb-2">Email</h3>
                  <a href="mailto:Contact@vrtueux.fr" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    contact@vrtueux.fr
                  </a>
                </div>
              </div>
            </div>

            {/* Adresse */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white mb-2">Adresse</h3>
                  <p className="text-gray-400 mb-2">22 rue boson, 38200, Vienne, France</p>
                  <a
                    href="https://www.google.com/maps/place/VRtueux/@45.5234331,4.8695156,830m/data=!3m2!1e3!4b1!4m6!3m5!1s0x47f4df96df867eb1:0x33aa68de3c69a7a9!8m2!3d45.5234294!4d4.8720959!16s%2Fg%2F11xh9nm5sx!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Voir sur Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Instagram className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white mb-2">Nos Réseaux</h3>
                  <a
                    href="https://www.instagram.com/vrtueux/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.tiktok.com/@vrtueux"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <br />Tiktok
                  </a>
                  <a
                    href="https://discord.gg/JzRRdQg7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <br />Discord
                  </a>
                  <a
                    href="https://www.youtube.com/@VRtueux"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <br />YouTube
                  </a>
                </div>
              </div>
            </div>

            {/* Horaires */}
            <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-xl p-6 border border-purple-500/20">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white mb-2">Horaires</h3>
                  <p className="text-gray-300">
                    Mardi au Dimanche : 11h à 22h<br />
                    Lundi : Fermé<br />
                    <br />
                    <span className="text-sm text-gray-400">Dernière réservation à 20h30.</span><br />
                    <span className="text-sm text-cyan-400"> <a href="https://vrtueux.setmore.com/?fbclid=PAZXh0bgNhZW0CMTEAAacUMcGurlhlyC-GJgjzvhAmseVlvvBBXlMIgYa45i-3QmrmSqVdkvkKLCPdkQ_aem_g-L0mFxazO_YmhwD5o0rUQ"> Réserver maintenant.</a></span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-full min-h-[500px] rounded-xl overflow-hidden border border-slate-700 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.7843644887745!2d4.869515576548658!3d45.52343307107438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4df96df867eb1%3A0x33aa68de3c69a7a9!2sVRtueux!5e0!3m2!1sen!2sfr!4v1729351234567!5m2!1sen!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="VRtueux Location"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-8 border-t border-slate-800">
        <div className="text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} VRtueux. Tous droits réservés.</p>
          <p className="mt-2 text-sm">Votre destination gaming VR à Vienne</p>
        </div>
      </div>
    </section>
  );
}
