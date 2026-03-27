# Cahier des charges fonctionnel

## Projet : Wharton Alumni AI Studio

### 1. Présentation du projet
Développer une plateforme web destinée aux anciens élèves de Wharton, axée sur l’IA, permettant :
- La gestion d’événements
- Les discussions thématiques
- Le partage de publications
- Le matching de startups
- Un annuaire d’utilisateurs
- Un espace d’administration

---

### 2. Fonctionnalités principales

#### 2.1. Authentification & Tableau de bord
- Connexion / Inscription sécurisée
- Accès à un tableau de bord personnalisé selon le rôle (utilisateur/admin)

#### 2.2. Gestion des événements
- Affichage des événements à venir et passés
- Recherche et filtrage par mot-clé et type d’événement (Webinar, Virtuel, Présentiel)
- Inscription à un événement
- Affichage des détails (date, lieu, description, image)
- Bouton "Register"

#### 2.3. Discussions (Forum)
- Liste des discussions par catégories (AI, groupes régionaux, industrie, intérêts spéciaux)
- Affichage des sujets récents et populaires
- Création d’un nouveau sujet
- Affichage des réponses et activité récente

#### 2.4. Publications
- Liste des publications récentes
- Possibilité de publier un article ou une actualité
- Modération des publications (pour les admins)

#### 2.5. Annuaire des utilisateurs
- Recherche par nom, industrie, rôle, disponibilité pour mentorat
- Affichage des profils avec photo, entreprise, titre, activité récente
- Indicateur "Open to Mentorship"
- Accès au profil complet

#### 2.6. Startup Matching
- Recherche de projets/startups par mots-clés
- Filtres par stade, industrie, fondateur
- Affichage des fiches projets avec possibilité de contact (WhatsApp, etc.)

#### 2.7. Espace Admin
- Tableau de bord statistiques (utilisateurs, inscriptions, activité forum, publications à valider)
- Gestion des utilisateurs, groupes, permissions
- Modération des publications et discussions
- Gestion de la visibilité des groupes (public, privé, authentifié)

---

### 3. Contraintes techniques
- Responsive design (desktop et mobile)
- Sécurité des données utilisateurs
- Interface intuitive et moderne (conforme aux maquettes)
- Backend Node.js/Express, Frontend HTML/CSS/JS (ou framework JS si précisé)
- Base de données relationnelle (ex : PostgreSQL/MySQL)

---

### 4. Livrables attendus
- Maquettes validées (déjà fournies)
- Code source complet (frontend + backend)
- Documentation technique et utilisateur
- Scripts d’installation et de déploiement

---

### 5. Planning prévisionnel
- Semaine 1 : Setup technique, base de données, auth
- Semaine 2 : Événements & publications
- Semaine 3 : Forum & annuaire utilisateurs
- Semaine 4 : Startup matching & admin
- Semaine 5 : Tests, corrections, documentation
