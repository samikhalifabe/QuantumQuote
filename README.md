# Indigo Studio - CRM & IA Solution

Une solution CRM moderne avec des capacités d'IA pour optimiser les ventes et la gestion client.

## 🎨 Thème Light/Dark

L'application supporte deux thèmes : clair (light) et sombre (dark).

### Comment utiliser le toggle

1. **Via la sidebar** : Le bouton de switch se trouve en bas de la sidebar
   - En mode étendu : Affiche "Thème" avec le toggle
   - En mode réduit : Affiche uniquement le toggle

2. **Persistance** : Le choix du thème est sauvegardé dans le localStorage

### Architecture du système de thème

```css
/* Variables CSS dans app/globals.css */
:root {
  /* Light theme */
  --background: #FFFFFF;
  --foreground: #0A0A0A;
  --card: #F8F9FA;
  --primary: #3ECF8E;
  /* ... */
}

.dark {
  /* Dark theme */
  --background: #0F0F0F;
  --foreground: #FAFAFA;
  --card: #171717;
  --primary: #3ECF8E;
  /* ... */
}
```

### Utilisation dans les composants

```tsx
// Utiliser les variables CSS
<div className="bg-background text-foreground">
  <Card className="bg-card border-border">
    <Button className="bg-primary text-primary-foreground">
      Action
    </Button>
  </Card>
</div>

// Pour des cas spécifiques dark/light
<div className="text-gray-900 dark:text-gray-100">
  Texte adaptatif
</div>
```

## 🚀 Installation

```bash
# Installer les dépendances
pnpm install

# Lancer en développement
pnpm dev

# Build pour production
pnpm build
```

## 📁 Structure du projet

```
app/
├── components/       # Composants React
├── contexts/        # Context providers (Theme)
├── constants/       # Constantes et tokens de design
├── data/           # Données mockées
├── globals.css     # Styles globaux et variables CSS
└── page.tsx        # Page principale

components/
└── ui/             # Composants UI réutilisables (shadcn/ui)
```

## 🛠 Technologies

- **Next.js 15** - Framework React
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - Composants UI
- **Lucide React** - Icônes

## 🎯 Fonctionnalités principales

- **Dashboard** : Vue d'ensemble avec ROI et statistiques
- **Roadmap** : Phases de développement interactives
- **Tarification** : Détail des coûts par phase
- **Contact** : Formulaire de contact
- **Sidebar collapsible** : Navigation optimisée
- **Animations subtiles** : Bordures animées sur les cartes principales

## 🔧 Configuration

### Variables d'environnement

Créer un fichier `.env.local` :

```env
# Ajouter vos variables ici
```

### Personnalisation du thème

Modifier les variables CSS dans `app/globals.css` pour adapter les couleurs à votre charte graphique.

## 📝 Licence

Propriétaire - Indigo Studio