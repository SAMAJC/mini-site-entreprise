# Mini-site Entreprise - Épreuve Git

Ce dépôt contient le code source d'un mini-site de présentation d'entreprise, développé dans le cadre de l'épreuve de gestion de version Git.

## Contexte et Objectifs

Le projet vise à démontrer l'application des bonnes pratiques de gestion de version via Git sur un projet concret de développement web. L'objectif est de maîtriser les commandes Git essentielles, d'appliquer une stratégie de branchement structurée et de gérer les conflits.

## Stratégie de Branchement Adoptée

Nous avons implémenté une stratégie de branchement inspirée de GitFlow, avec le flux de travail recommandé par l'énoncé : `feature/*` → `test/*` → `dev` → `main`.

* `master` (équivalent de `main` dans cette implémentation) : Branche stable et finale, représentant le code prêt pour la production.
* `dev` : Branche d'intégration globale. Toutes les fonctionnalités y sont fusionnées avant d'être testées en profondeur.
* `feature/*` : Branches de développement dédiées à chaque nouvelle fonctionnalité ou tâche spécifique. Elles se détachent de `dev` et y sont fusionnées une fois complétées. Pour cette épreuve, les branches de fonctionnalités implémentées (simulées avec du contenu basique) incluent :
    * `feature/html-structure` (pour la mise en place des pages `index.html`, `about.html`, `services.html`)
    * `feature/css-theme` (pour l'intégration du fichier `style.css` et la liaison aux pages HTML)
    * `feature/js-interactions` (pour l'intégration du fichier `script.js` et la liaison aux pages HTML)
* `test/*` : Branches destinées aux tests intermédiaires. Bien que non créées physiquement en tant que branches distinctes pour chaque fonctionnalité (pour simplifier le processus et se concentrer sur l'essentiel de Git), leur rôle a été pris en compte comme étape de validation avant l'intégration à `dev`.

## Étapes Clés du Processus Git

Voici un résumé chronologique des principales opérations Git effectuées :

1.  **Initialisation du dépôt Git local** (`git init`).
2.  **Configuration des informations utilisateur** (`git config`).
3.  **Création du fichier `index.html`** et premier commit sur la branche `master`.
4.  **Création et basculement vers la branche `dev`** (`git branch dev`, `git checkout dev`).
5.  **Développement des pages "À Propos" et "Services" :**
    * Création de branches `feature/about-page` et `feature/services-page`.
    * Création des fichiers `about.html` et `services.html`.
    * Fusion de ces branches dans `dev` (`git merge`).
    * Suppression des branches de fonctionnalité après fusion (`git branch -d`).
6.  **Développement de l'intégration CSS :**
    * Création de la branche `feature/css-theme`.
    * Création du fichier `style.css` et ajout des liens dans les fichiers HTML.
    * Fusion de `feature/css-theme` dans `dev`.
    * Suppression de la branche.
7.  **Développement des interactions JavaScript :**
    * Création de la branche `feature/js-interactions`.
    * Création du fichier `script.js` et ajout des liens dans les fichiers HTML.
    * Fusion de `feature/js-interactions` dans `dev`.
    * Suppression de la branche.
8.  **Simulation et résolution de conflit :**
    * Modification de la même ligne dans `index.html` sur `master` et `dev`.
    * Tentative de fusion, entraînant un conflit.
    * Résolution manuelle du conflit et commit de la résolution.
9.  **Liaison avec le dépôt distant GitHub** (`git remote add origin`).
10. **Poussée des branches `master` et `dev`** vers GitHub (`git push`).

## Commandes Git Utilisées (non exhaustif, mais couvrant les exigences)

* `git init` : Initialise un nouveau dépôt Git.
* `git config --global user.name "..."` et `user.email "..."` : Configure les informations de l'utilisateur.
* `git status` : Affiche l'état des fichiers (modifiés, ajoutés, non suivis).
* `git add .` ou `git add <fichier>` : Ajoute les changements à l'index (zone de staging).
* `git commit -m "Message"` : Enregistre les changements dans l'historique avec un message descriptif.
* `git branch <nom_branche>` : Crée une nouvelle branche.
* `git checkout <nom_branche>` : Bascule vers une branche existante.
* `git checkout -b <nom_nouvelle_branche>` : Crée une nouvelle branche et y bascule immédiatement.
* `git merge <branche_a_fusionner>` : Fusionne les changements d'une branche spécifiée dans la branche actuelle.
* `git branch -d <nom_branche>` : Supprime une branche locale (si elle a été fusionnée).
* `git log --oneline --graph --all` : Affiche l'historique des commits de manière concise et graphique sur toutes les branches.
* `git remote add origin <URL_GitHub>` : Lie le dépôt local à un dépôt distant GitHub.
* `git push -u origin <branche>` : Pousse la branche locale vers le dépôt distant pour la première fois.
* `git push origin <branche>` : Pousse les commits locaux vers le dépôt distant.
* `git pull origin <branche>` : Récupère et fusionne les changements du dépôt distant (non utilisé en profondeur dans cette épreuve mais mentionné pour complétude).

---