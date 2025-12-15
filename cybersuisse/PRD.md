# PRD - Site Web Cybersécurité Freelance

Site web professionnel pour un expert freelance en cybersécurité basé en Suisse, offrant des services de pentest, audit CRA et développement sécurisé.

**Experience Qualities**:
1. **Professionnel** - Inspirer confiance et crédibilité dans le domaine de la cybersécurité
2. **Sécurisé** - Démontrer l'expertise technique à travers un design moderne et robuste
3. **Accessible** - Navigation claire et informations facilement compréhensibles pour les clients

**Complexity Level**: Light Application (multiple features with basic state)
- Navigation entre plusieurs pages de services avec état de routage simple et animations 3D

## Essential Features

**Navigation principale**
- Functionality: Menu de navigation avec liens vers toutes les pages de services
- Purpose: Permettre aux visiteurs d'explorer facilement tous les services offerts
- Trigger: Clic sur les éléments du menu
- Progression: Page d'accueil → Clic menu → Page service → Retour ou autre service
- Success criteria: Navigation fluide entre toutes les pages sans rechargement

**Page d'accueil avec présentation**
- Functionality: Introduction du freelancer et de son expertise
- Purpose: Établir la crédibilité et présenter l'offre globale
- Trigger: Arrivée sur le site
- Progression: Chargement → Hero section → Services overview → Call-to-action
- Success criteria: Visiteur comprend immédiatement l'expertise et les services

**Page À Propos**
- Functionality: Présentation détaillée du profil professionnel, certifications et expertise
- Purpose: Établir la crédibilité et la confiance par la transparence des qualifications
- Trigger: Clic sur "À Propos" dans le menu ou "Mon profil" sur l'accueil
- Progression: Navigation → Parcours professionnel → Certifications → Compétences → Contact
- Success criteria: Client fait confiance aux qualifications et à l'expertise présentée

**Page Pentest**
- Functionality: Détails du service de tests d'intrusion
- Purpose: Expliquer la méthodologie et les avantages du pentest
- Trigger: Clic sur "Pentest" dans le menu
- Progression: Navigation → Présentation service → Méthodologie → Contact
- Success criteria: Client comprend la valeur du service pentest

**Page Audit CRA**
- Functionality: Information sur la conformité à la nouvelle loi CRA
- Purpose: Positionner comme expert de la nouvelle réglementation
- Trigger: Clic sur "Audit CRA" dans le menu
- Progression: Navigation → Contexte légal → Service audit → Accompagnement
- Success criteria: Client comprend les obligations CRA et le besoin d'audit

**Page Développement Sécurisé**
- Functionality: Services de développement d'applications et sites sécurisés
- Purpose: Montrer l'expertise en développement avec focus sécurité
- Trigger: Clic sur "Développement" dans le menu
- Progression: Navigation → Technologies → Sécurité intégrée → Portfolio
- Success criteria: Client fait confiance pour développement sécurisé

## Edge Case Handling
- **Navigation mobile**: Menu hamburger responsive avec animations fluides
- **Images manquantes**: Placeholders avec icônes représentatives des services
- **Contenu long**: Scroll smooth avec indicateurs de progression
- **Erreurs de routage**: Page 404 avec navigation de retour claire

## Design Direction
Le design doit évoquer la confiance, la sécurité et le professionnisme avec une esthétique moderne et technologique - interface épurée avec des éléments 3D subtils qui renforcent l'expertise technique.

## Color Selection
Palette complémentaire (bleu/orange) pour créer un contraste professionnel qui évoque la sécurité et la fiabilité avec des touches d'énergie.

- **Primary Color**: Bleu marine profond oklch(0.25 0.08 240) - Sécurité et confiance
- **Secondary Colors**: Gris ardoise oklch(0.45 0.02 240) pour la sobriété, Blanc pur pour la clarté
- **Accent Color**: Orange sécurité oklch(0.65 0.15 50) - Call-to-action et éléments interactifs
- **Foreground/Background Pairings**: 
  - Background (Blanc oklch(1 0 0)): Texte gris foncé oklch(0.2 0 0) - Ratio 12.6:1 ✓
  - Primary (Bleu marine oklch(0.25 0.08 240)): Texte blanc oklch(1 0 0) - Ratio 8.2:1 ✓
  - Accent (Orange oklch(0.65 0.15 50)): Texte blanc oklch(1 0 0) - Ratio 4.9:1 ✓
  - Card (Gris très clair oklch(0.98 0 0)): Texte gris foncé oklch(0.2 0 0) - Ratio 11.8:1 ✓

## Font Selection
Typography moderne et technique qui inspire confiance avec une excellente lisibilité pour les contenus professionnels - utilisation d'Inter pour sa clarté et son caractère technologique.

- **Typographic Hierarchy**: 
  - H1 (Titre principal): Inter Bold/2.5rem/tight letter spacing
  - H2 (Titres sections): Inter SemiBold/2rem/normal
  - H3 (Sous-titres): Inter Medium/1.5rem/normal  
  - Body (Texte courant): Inter Regular/1rem/relaxed line height
  - Caption (Détails): Inter Regular/0.875rem/normal

## Animations
Animations subtiles et professionnelles qui renforcent l'expertise technique sans distraire - mouvement fluide qui évoque la précision et la sophistication.

- **Purposeful Meaning**: Animations 3D sur les boutons pour démontrer l'expertise technique, transitions fluides pour maintenir l'attention
- **Hierarchy of Movement**: Boutons CTA avec effets 3D prononcés, navigation avec micro-animations, éléments de service avec hover subtil

## Component Selection
- **Components**: Card pour présentation services, Button avec variants 3D, Navigation-menu responsive, Dialog pour contact, Badge pour technologies
- **Customizations**: Boutons 3D avec transform et box-shadow, Cards avec glassmorphism subtil, Navigation avec indicateurs actifs
- **States**: Boutons (default/hover/active avec transforms 3D), Inputs (focus avec glow de sécurité), Cards (hover avec élévation)
- **Icon Selection**: Shield, Lock, Eye, Code, Search pour représenter les services de cybersécurité
- **Spacing**: Système 8px avec genereux padding pour respiration professionnelle
- **Mobile**: Stack vertical avec menu hamburger, cards en pleine largeur, boutons touch-friendly 44px minimum