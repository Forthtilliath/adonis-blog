# Adonis Blog

![License](https://img.shields.io/github/license/forthtilliath/adonis-blog?style=for-the-badge) [![AdonisJS 6.12](https://img.shields.io/badge/AdonisJS-6.12-blue?style=for-the-badge&logo=adonisjs)](https://adonisjs.com/) ![Prisma](https://img.shields.io/badge/Prisma-47848D?style=for-the-badge&logo=prisma&logoColor=white) [![Bootstrap 5](https://img.shields.io/badge/Bootstrap-5.3-blue?style=for-the-badge&logo=bootstrap)](https://getbootstrap.com/) ![TypeScript](https://img.shields.io/badge/-TypeScript-blue?logo=typescript&logoColor=white&style=for-the-badge)

Version française : [🇫🇷](README.fr.md)

## Introduction

### Initial Motivations

This project stems from an intense desire to delve into the world of AdonisJS, specifically version 6, after being captivated by a presentation video. This experience inspired me to actively explore AdonisJS, and I highly recommend this video to those wishing to get started with Adonis: [Presentation Video](https://www.youtube.com/watch?v=eLNg9yelCqw).

### Description

This project aims to develop a comprehensive blog, using AdonisJS to manage both the frontend and backend. Among the key features are:

**Authentication System** : A robust authentication system allowing users to securely log in to their account. Password reset functionality is also available, simplifying the access recovery process for users who forget their credentials.

**GitHub Login** : A unique login option using a GitHub account, simplifying registration and login for users already present on this platform.

**Use of Key AdonisJS Components** : The project fully leverages AdonisJS capabilities, including the use of ``controllers``, ``middleware``, ``models``, ``policies``, ``services``, and ``validators``. These components allow for an organized and efficient code structure, facilitating maintenance and future evolution of the project.

### Inspiration Source

This project originates from a playlist titled "[Adonis V6](https://www.youtube.com/playlist?list=PL_fWONAepR_D41KnEFMtqnhogOceHvUIh)", created by [Houssam](https://www.youtube.com/@HoussamCode), a web development enthusiast. This series of videos sparked a genuine technological curiosity in me, prompting me to experiment and deepen my knowledge in AdonisJS, particularly version 6.

## Table of Contents

- [Adonis Blog](#adonis-blog)
  - [Introduction](#introduction)
    - [Initial Motivations](#initial-motivations)
    - [Description](#description)
    - [Inspiration Source](#inspiration-source)
  - [Table of Contents](#table-of-contents)
  - [Main Libraries](#main-libraries)
  - [Installation](#installation)
  - [Skills Acquired](#skills-acquired)

## Main Libraries

This project relies on several essential dependencies for its proper functioning:

**AdonisJS** : The main framework used for developing both the backend and frontend of the project. It also includes all connected libraries such as Vine for form data validation.

**Bootstrap** : A CSS library for responsive and mobile-first frontend design.

**Marked and Highlight.js** : Used for formatting and syntax highlighting of textual content, making the blog attractive and easy to read.

**Unpoly** : A small JavaScript library for making web pages interactive without resorting to AJAX or jQuery.

**TypeScript** : A typed programming language that improves code maintainability and productivity.

## Installation

To install and run this project locally:

1. Clone the repository:
```bash
git clone https://github.com/Forthtilliath/adonis-blog.git
```

2. Navigate to the project directory:
```bash
cd adonis-blog
```

3. Install dependencies:
```bash
npm i
```

4. Database creation
```bash
node ace migration:run
```

5. Start the project:
```bash
npm run dev
```


## Skills Acquired

Completing this project constituted my first immersion in the world of AdonisJS. Despite the absence of prior deepening, I was able to:

**Start a project with AdonisJS** : Taking on my first project with AdonisJS allowed me to understand the basics of its setup and configuration.

**Explore Basic Commands** : Familiarizing myself with the essential commands of AdonisJS, such as creating models, controllers, and managing migrations, to structure my project.

**Understand the Structure of an AdonisJS Project** : Navigating through typical folders and files of an AdonisJS project began to grasp the organization and logic behind the framework's structure.

**Develop a Full-Stack Web Application**: I was able to apply my knowledge to develop a blog, integrating features such as authentication and content management, strengthening my ability to solve practical problems.

These first experiences with AdonisJS were crucial for starting my learning and preparing me to further explore the capacities and best practices of the framework.
