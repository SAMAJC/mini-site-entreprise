# Mini-site Entreprise - Épreuve Git

Ce dépôt contient le code source d'un mini-site de présentation d'entreprise, développé dans le cadre de l'épreuve de gestion de version Git.

## Stratégie de Branchement

Nous avons utilisé une stratégie de branchement basée sur GitFlow (simplifié), avec les branches principales suivantes :

* `master` : Représente la version stable et prête à la production du site. Seules les versions validées sont fusionnées ici.
* `dev` : Branche d'intégration. Toutes les nouvelles fonctionnalités y sont fusionnées avant d'être testées.
* `feature/*` : Des branches temporaires créées pour le développement de chaque nouvelle fonctionnalité (ex: `feature/about-page`, `feature/services-page`). Elles sont fusionnées dans `dev` une fois le développement terminé et sont ensuite supprimées.

## Étapes Suivies

Voici un résumé des étapes clés de développement et de gestion de version :

1.  **Initialisation du projet :** Création du dépôt Git local et du fichier `index.html` sur la branche `master`.
2.  **Création de la branche `dev` :** Séparation de `dev` à partir de `master`.
3.  **Développement de la page "À Propos" :**
    * Création de la branche `feature/about-page`.
    * Création du fichier `about.html`.
    * Fusion de `feature/about-page` dans `dev`.
    * Suppression de `feature/about-page`.
4.  **Développement de la page "Services" :**
    * Création de la branche `feature/services-page`.
    * Création du fichier `services.html`.
    * Fusion de `feature/services-page` dans `dev`.
    * Suppression de `feature/services-page`.
5.  **Fusion de `dev` vers `master` :** Intégration des fonctionnalités dans la branche stable.
6.  **Simulation et résolution de conflit :** Modification simultanée de `index.html` sur `master` et `dev`, entraînant un conflit résolu manuellement.
7.  **Liaison avec GitHub :** Création du dépôt distant et poussée des branches `master` et `dev`.

## Commandes Git Utilisées

Voici une liste des commandes Git clés utilisées dans ce projet :

* `git init` : Initialise un nouveau dépôt Git.
* `git config --global user.name "SAMAJC"` : Configure le nom d'utilisateur global.
* `git config --global user.email "ammightbgbiyongo@gmail.com"` : Configure l'email global.
* `git status` : Affiche l'état des fichiers (modifiés, ajoutés, non suivis).
* `git add .` ou `git add <fichier>` : Ajoute les changements à l'index (zone de staging).
* `git commit -m "Message"` : Enregistre les changements dans l'historique avec un message.
* `git branch <nom_branche>` : Crée une nouvelle branche.
* `git checkout <nom_branche>` : Bascule vers une branche existante.
* `git checkout -b <nom_nouvelle_branche>` : Crée une nouvelle branche et y bascule.
* `git merge <branche_a_fusionner>` : Fusionne une branche dans la branche actuelle.
* `git branch -d <nom_branche>` : Supprime une branche locale (si fusionnée).
* `git log --oneline --graph --all` : Affiche l'historique des commits de manière graphique.
* `git remote add origin <URL_GitHub>` : Lie le dépôt local à un dépôt distant.
* `git branch -M master` : Renomme la branche actuelle en `master`.
* `git push -u origin <branche>` : Pousse la branche locale vers le dépôt distant pour la première fois.
* `git push origin <branche>` : Pousse les commits locaux vers le dépôt distant.
* `git pull origin <branche>` : Récupère et fusionne les changements du dépôt distant.

---