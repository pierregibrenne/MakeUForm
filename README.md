# FormSaas

## Description

FormSaas est une application web permettant de créer et gérer des formulaires en ligne. Elle utilise Supabase pour la gestion de l'authentification et des données, et est construite avec React, TypeScript et Vite.

## Prérequis

- Node.js (version 14 ou supérieure)
- npm ou yarn

## Installation

1. Clonez le dépôt :
  ```bash
  git clone https://github.com/votre-utilisateur/FormSaas.git
  cd FormSaas
  ```

2. Installez les dépendances :
  ```bash
  npm install
  # ou
  yarn install
  ```

3. Configurez les variables d'environnement :
  Créez un fichier `.env` à la racine du projet et ajoutez les variables suivantes :
  ```env
  VITE_SUPABASE_URL=https://qwbftujuhdgrwofalspa.supabase.co
  VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3YmZ0dWp1aGRncndvZmFsc3BhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY0Mjg3MjUsImV4cCI6MjA0MjAwNDcyNX0.OXZQjbv5bKzImPJFND_r7P99bsQZiiU9qwbc4qOCzqg
  ```

## Démarrage

Pour démarrer l'application en mode développement, exécutez :
```bash
npm run dev
# ou
yarn dev
```

L'application sera accessible à l'adresse `http://localhost:3000`.

## Structure du projet

- `src/`: Contient le code source de l'application.
  - `components/`: Composants réutilisables.
  - `context/`: Contextes React pour la gestion de l'état global.
  - `features/`: Fonctionnalités spécifiques de l'application (authentification, création de formulaires, etc.).
  - `routes/`: Définition des routes de l'application.
  - `utils/`: Fonctions utilitaires et configuration de Supabase.
- `public/`: Fichiers statiques.
- `index.html`: Fichier HTML principal.
- `vite.config.ts`: Configuration de Vite.

## Authentification

L'authentification est gérée par Supabase. Les utilisateurs peuvent se connecter et s'inscrire via les routes `/login` et `/signup`.

## Déploiement

Pour créer une version de production de l'application, exécutez :
```bash
npm run build
# ou
yarn build
```

Les fichiers de production seront générés dans le dossier `dist`.

## Contribution

Les contributions sont les bienvenues ! Veuillez soumettre une pull request ou ouvrir une issue pour discuter des changements que vous souhaitez apporter.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.
