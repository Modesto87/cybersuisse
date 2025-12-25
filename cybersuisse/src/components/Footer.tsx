import { motion } from 'framer-motion'
import Logo from './Logo'
import { Envelope, Phone, MapPin } from '@phosphor-icons/react'

interface FooterProps {
  onNavigate?: (page: string) => void
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#0A0A0A] border-t border-red-900/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Logo size="md" showText={true} className="mb-4" />
              <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                Expert freelance en cybersécurité basé en Suisse. Spécialisé dans les tests d'intrusion, 
                les opérations Red Team et le développement sécurisé.
              </p>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="hover:text-red-400 transition-colors cursor-pointer">Tests d'Intrusion</li>
                <li className="hover:text-red-400 transition-colors cursor-pointer">Red Team Operations</li>
                <li className="hover:text-red-400 transition-colors cursor-pointer">Développement Sécurisé</li>
              </ul>
            </motion.div>
          </div>

          {/* Contact */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-3 text-sm text-gray-500">
                <div className="flex items-center gap-2 hover:text-red-400 transition-colors">
                  <Envelope size={16} className="text-red-500" />
                  <span>modesto@cybersuisse.ch</span>
                </div>
                <div className="flex items-center gap-2 hover:text-red-400 transition-colors">
                  <Phone size={16} className="text-red-500" />
                  <span>+41 78 208 95 45</span>
                </div>
                <div className="flex items-center gap-2 hover:text-red-400 transition-colors">
                  <MapPin size={16} className="text-red-500" />
                  <span>Bienne/Biel, Canton de Berne, Suisse</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Séparateur */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-red-900/30 my-8"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500"
        >
          <p>© 2024 Modesto Cybersécurité. Tous droits réservés.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            {onNavigate && (
              <>
                <button
                  onClick={() => onNavigate('cgv')}
                  className="hover:text-red-400 transition-colors duration-200 underline"
                >
                  CGV
                </button>
                <button
                  onClick={() => onNavigate('politique-confidentialite')}
                  className="hover:text-red-400 transition-colors duration-200 underline"
                >
                  Politique de Confidentialité
                </button>
                <button
                  onClick={() => onNavigate('mentions-legales')}
                  className="hover:text-red-400 transition-colors duration-200 underline"
                >
                  Mentions Légales
                </button>
                <button
                  onClick={() => onNavigate('cookies')}
                  className="hover:text-red-400 transition-colors duration-200 underline"
                >
                  Cookies
                </button>
              </>
            )}
            <span className="text-gray-600">Freelance certifié en Suisse</span>
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse cs-shadow-glow-red-10-strong" />
          </div>
        </motion.div>
      </div>
    </footer>
  )
}