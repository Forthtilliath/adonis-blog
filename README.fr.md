# Adonis Blog

![License](https://img.shields.io/github/license/forthtilliath/adonis-blog?style=for-the-badge) [![AdonisJS 6.12](https://img.shields.io/badge/AdonisJS-6.12-blue?style=for-the-badge&logo=adonisjs)](https://adonisjs.com/) ![Prisma](https://img.shields.io/badge/Prisma-47848D?style=for-the-badge&logo=prisma&logoColor=white) [![Bootstrap 5](https://img.shields.io/badge/Bootstrap-5.3-blue?style=for-the-badge&logo=bootstrap)](https://getbootstrap.com/) ![TypeScript](https://img.shields.io/badge/-TypeScript-blue?logo=typescript&logoColor=white&style=for-the-badge)

English version : [🇬🇧](README.md)

## Introduction

### Motivations Initiales

Ce projet naît d'un désir intense de plonger dans le monde d'AdonisJS, et plus précisément de sa version 6, après avoir été captivé par une vidéo de présentation. Cette expérience m'a inspiré à explorer activement AdonisJS, et je recommande vivement cette vidéo à ceux qui souhaitent s'initier à Adonis : [Vidéo de Présentation](https://www.youtube.com/watch?v=eLNg9yelCqw).

### Description

Ce projet vise à développer un blog complet, en utilisant AdonisJS pour gérer à la fois le frontend et le backend. Parmi les fonctionnalités clés, figurent :

**Système d'Authentification** : Un système robuste d'authentification, permettant aux utilisateurs de se connecter de manière sécurisée à leur compte. La fonctionnalité de réinitialisation de mot de passe est également disponible, facilitant le processus de récupération d'accès pour les utilisateurs oubliant leurs identifiants.

**Connexion via Github** : Une option unique de connexion en utilisant un compte Github, simplifiant l'inscription et la connexion pour les utilisateurs déjà présents sur cette plateforme.

**Utilisation de Composants Clés d'AdonisJS** : Le projet exploite pleinement les capacités d'AdonisJS, incluant l'utilisation de ``controllers``, ``middleware``, ``models``, ``policies``, ``services`` et ``validators``. Ces composants permettent une structure organisée et efficace du code, facilitant la maintenance et l'évolution future du projet.

### Source d'Inspiration

Ce projet trouve son origine dans une playlist intitulée "[Adonis V6](https://www.youtube.com/playlist?list=PL_fWONAepR_D41KnEFMtqnhogOceHvUIh)", créée par [Houssam](https://www.youtube.com/@HoussamCode), un passionné de développement web. Cette série de vidéos a suscité chez moi une véritable curiosité technologique, m'incitant à expérimenter et à approfondir mes connaissances en AdonisJS, particulièrement la version 6.

## Table des Matières

- [Adonis Blog](#adonis-blog)
  - [Introduction](#introduction)
    - [Motivations Initiales](#motivations-initiales)
    - [Description](#description)
    - [Source d'Inspiration](#source-dinspiration)
  - [Table des Matières](#table-des-matières)
  - [Les principales librairies](#les-principales-librairies)
  - [Installation](#installation)
  - [Compétences Acquises](#compétences-acquises)

## Les principales librairies

Ce projet repose sur plusieurs dépendances essentielles pour son bon fonctionnement :

**AdonisJS** : Le framework principal utilisé pour le développement du backend et du frontend du projet. Inclut également toutes les librairies connexes telles que Vine pour la validation des données des formulaires.

**Bootstrap** : Bibliothèque CSS pour le design responsive et mobile-first du frontend.

**Marked et Highlight.js** : Utilisés pour la mise en forme et la coloration syntaxique du contenu texte, rendant le blog attrayant et facile à lire.

**Unpoly** : Une petite bibliothèque JavaScript pour rendre les pages web interactives sans recourir à AJAX ou jQuery.
  
**TypeScript** : Langage de programmation typé qui améliore la maintenabilité et la productivité du code source.

## Installation

Pour installer et exécuter ce projet localement:

1. Clonez le dépôt:
```bash
git clone https://github.com/Forthtilliath/adonis-blog.git
```

2. Accédez au dossier du projet:
```bash
cd adonis-blog
```

3. Installez les dépendances:
```bash
npm i
```

4. Création de la base de données
```bash
node ace migration:run
```

5. Démarrez le projet:
```bash
npm run dev
```

## Compétences Acquises

La réalisation de ce projet a constitué ma première immersion dans le monde d'AdonisJS. Malgré l'absence d'une approfondissement préalable, j'ai pu :

**Initier un projet avec AdonisJS** : J'ai pris en main mon premier projet avec AdonisJS, ce qui m'a permis de comprendre les bases de son installation et configuration.

**Explorer les commandes de base** : J'ai familiarisé avec les commandes essentielles d'AdonisJS, telles que la création de modèles, de contrôleurs, et la gestion des migrations, pour structurer mon projet.

**Comprendre la structure d'un projet AdonisJS** : En naviguant à travers les dossiers et fichiers typiques d'un projet AdonisJS, j'ai commencé à saisir l'organisation et la logique derrière la structure du framework.

**Développer une application web de bout en bout**: J'ai pu appliquer mes connaissances pour développer un blog, en intégrant des fonctionnalités telles que l'authentification et la gestion de contenu, ce qui a renforcé ma capacité à résoudre des problèmes pratiques.

Ces premières expériences avec AdonisJS ont été cruciales pour démarrer mon apprentissage et m'ont préparé à explorer davantage les capacités et les best practices du framework.