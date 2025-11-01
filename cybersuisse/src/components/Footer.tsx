import { motion } from 'framer-motion'
import Logo from './Logo'
import { Envelope, Phone, MapPin } from '@phosphor-icons/react'

interface FooterProps {
  onNavigate?: (page: string) => void
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-primary/5 border-t border-border/50 py-12">
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
              <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                Expert freelance en cybersécurité basé en Suisse. Spécialisé dans les tests d'intrusion, 
                la surveillance de menaces, l'audit CRA et le développement sécurisé.
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
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Tests d'Intrusion</li>
                <li>Surveillance de Menaces</li>
                <li>Audit CRA</li>
                <li>Développement Sécurisé</li>
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
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Envelope size={16} className="text-accent" />
                  <span>modesto@cybersuisse.ch</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-accent" />
                  <span>+41 78 208 95 45</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-accent" />
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
          className="border-t border-border/50 my-8"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground"
        >
          <p>© 2024 Modesto Cybersécurité. Tous droits réservés.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            {onNavigate && (
              <>
                <button
                  onClick={() => onNavigate('cgv')}
                  className="hover:text-accent transition-colors duration-200 underline"
                >
                  CGV
                </button>
                <button
                  onClick={() => onNavigate('politique-confidentialite')}
                  className="hover:text-accent transition-colors duration-200 underline"
                >
                  Politique de Confidentialité
                </button>
                <button
                  onClick={() => onNavigate('mentions-legales')}
                  className="hover:text-accent transition-colors duration-200 underline"
                >
                  Mentions Légales
                </button>
                <button
                  onClick={() => onNavigate('security')}
                  className="hover:text-accent transition-colors duration-200 underline"
                >
                  Sécurité & CRA
                </button>
                <button
                  onClick={() => onNavigate('cookies')}
                  className="hover:text-accent transition-colors duration-200 underline"
                >
                  Cookies
                </button>
              </>
            )}
            <span>Freelance certifié en Suisse</span>
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          </div>
        </motion.div>
      </div>
    </footer>
  )
}