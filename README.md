# 🏃‍♂️ Subway Surfers 3D — Web Edition

An immersive, browser-based 3D endless-runner inspired by Subway Surfers. Built with **Three.js, JavaScript, the Web Audio API, and Firebase integration**, this project brings dynamic subway environments, obstacle avoidance, collectible power-ups, synthesized audio, player records, and cloud leaderboard functionality to the web.

<p align="center">
  <a href="https://github.com/Rmy4143/Subway-Surfers">
    <img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github" alt="GitHub Repository">
  </a>
  <img src="https://img.shields.io/badge/Three.js-3D%20Rendering-black?style=for-the-badge&logo=threedotjs" alt="Three.js">
  <img src="https://img.shields.io/badge/Vite-Build%20Tool-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Firebase-Cloud%20Integration-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase">
</p>

**🎮 Play Online:** [Subway Surfers 3D](https://rmy4143.github.io/Subway-Surfers/)

**📂 Source Code:** [Rmy4143/Subway-Surfers](https://github.com/Rmy4143/Subway-Surfers)

> **Note:** The live game link requires a successful GitHub Pages deployment. Firebase authentication and cloud features require valid project configuration.

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Game Features](#-game-features)
- [Controls](#-controls)
- [Technology Stack](#-technology-stack)
- [Getting Started](#-getting-started)
- [Firebase Configuration](#-firebase-configuration)
- [Deployment on GitHub Pages](#-deployment-on-github-pages)
- [Project Structure](#-project-structure)
- [Troubleshooting](#-troubleshooting)
- [Future Enhancements](#-future-enhancements)
- [Author](#-author)
- [License](#-license)

---

## 🎮 Overview

Subway Surfers 3D is a web-based endless-runner game in which players navigate a subway environment, avoid obstacles, collect coins, and use special power-ups to survive longer and achieve higher scores.

The game combines real-time 3D rendering, keyboard and touch input, procedural audio, player progression, and optional cloud-based services.

### Core Gameplay

- Run across three lanes: left, center, and right.
- Dodge approaching trains, barriers, and other obstacles.
- Jump over hurdles and roll beneath overhead barriers.
- Move between track level and train rooftops using ramps.
- Collect coins and activate power-ups.
- Avoid collisions and try to beat your personal best.

---

## ✨ Game Features

### 🚇 1. Dynamic 3D Subway Environment

- Three-lane track system with procedural track generation.
- Detailed subway metro cars, including parked and moving trains.
- Elevated train rooftops that players can run across.
- Ramps connecting ground-level tracks to train rooftops.
- Low hurdles for jumping and high barriers for rolling underneath.
- Overhead gantries, subway arches, signage, and track ballast.

### 🏃 2. Runner Character and Chase System

- 3D runner character inspired by the iconic Subway Surfers character Jake.
- Character design featuring a cap, hoodie, and sneakers.
- Dynamic running, jumping, and rolling animations.
- Lane-switching movement with leaning effects.
- Chasing inspector and guard-dog elements.

### 🪙 3. Collectibles and Power-Ups

| Power-up | Function |
|---|---|
| 🪙 Golden Coins | Collect coins along tracks and train rooftops. |
| 🚀 Jetpack | Fly above ground obstacles and collect elevated coin trails. |
| 🧲 Coin Magnet | Attract nearby coins across the lanes. |
| 👟 Super Sneakers | Perform enhanced jumps to clear obstacles. |
| ✖️2 Score Multiplier | Increase score gain while active. |
| 🛹 Hoverboard | Protect against a crash while its protection is active. |

### 🔊 4. Procedural Audio System

Powered by the Web Audio API, the audio system is designed to provide:

- Procedurally synthesized background music.
- Coin collection chimes.
- Jump and roll sound effects.
- Train horns and environmental audio.
- Power-up activation sounds.
- Collision and crash effects.

### 🏆 5. Player Statistics and Career Records

The game is designed to track player progress through:

- Personal high score.
- Total coins collected.
- Total runs completed.
- Longest distance traveled.
- Match history and gameplay records.

### ☁️ 6. Authentication and Cloud Leaderboards

Firebase integration provides the foundation for online player features:

- Google account sign-in through Firebase Authentication.
- Cloud Firestore integration for leaderboard records.
- Real-time leaderboard updates when implemented and configured.
- Local persistence for supported gameplay data.
- Optional cloud synchronization when Firebase is connected.

**Firebase features are configuration-dependent.** Local gameplay and cloud functionality should be tested separately to confirm the behavior of the current build.

---

## ⌨️ Controls

| Action | Primary Key | Alternative | Touch |
|---|---|---|---|
| Move Left | `←` | `A` | Swipe left |
| Move Right | `→` | `D` | Swipe right |
| Jump | `↑` | `W` / `Space` | Swipe up |
| Roll / Duck | `↓` | `S` | Swipe down |
| Activate Hoverboard | Double-tap `Space` | `Enter` | Double-tap screen |
| Pause / Resume | `P` | `Escape` | Pause button |

> Controls can vary if the implementation or input configuration changes. Verify them in the running game.

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Application structure and entry point |
| CSS3 | Layout, styling, and interface design |
| JavaScript (ES Modules) | Game logic, controls, and interactions |
| Three.js | 3D rendering and scene management |
| Vite | Development server and production build |
| Web Audio API | Procedural music and sound effects |
| Firebase Authentication | Google sign-in integration |
| Cloud Firestore | Cloud player records and leaderboard data |
| Canvas Confetti | Confetti effects, if used by the current build |

---

## 🚀 Getting Started

Run the project locally to explore the game and make changes.

### Prerequisites

Install the following tools:

- [Node.js](https://nodejs.org/) — preferably the current LTS version.
- npm — included with Node.js.
- [Git](https://git-scm.com/) — optional, if you clone the repository.

### 1. Clone the repository

Open a terminal and execute:

```bash
git clone https://github.com/Rmy4143/Subway-Surfers.git
cd Subway-Surfers
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open the local URL printed in the terminal. With the default Vite configuration, it is commonly:

**http://localhost:5173/**

### 4. Build for production

```bash
npm run build
```

Vite generates the production-ready files in the `dist/` directory.

### 5. Preview the production build

```bash
npm run preview
```

Open the URL printed in the terminal to test the production build locally.

> **Important:** `python -m http.server 5173` is a basic static file server, not a replacement for the Vite build process. For this project, use `npm run dev` for development and `npm run build` for production.

---

## ☁️ Firebase Configuration

The game includes a Firebase configuration interface in its Settings (⚙️) drawer, according to the current project description.

### Step 1: Create a Firebase project

Visit the [Firebase Console](https://console.firebase.google.com/) and create a project or select an existing one.

### Step 2: Obtain your web app configuration

Register a web app in your Firebase project and obtain its configuration object.

Example structure:

```json
{
  "apiKey": "YOUR_API_KEY",
  "authDomain": "YOUR_PROJECT.firebaseapp.com",
  "projectId": "YOUR_PROJECT",
  "storageBucket": "YOUR_PROJECT.firebasestorage.app",
  "messagingSenderId": "YOUR_SENDER_ID",
  "appId": "YOUR_APP_ID"
}
```

Replace the example values with those supplied by your Firebase project. Use the exact storage bucket value displayed in your Firebase Console.

### Step 3: Connect Firebase in the game

1. Start the game in your browser.
2. Open the Settings (⚙️) drawer.
3. Paste the Firebase configuration JSON.
4. Select **Save & Connect Firebase**, if that option is available in the current build.
5. Confirm that the application connects successfully.

### Step 4: Enable Google Authentication

1. Open Firebase Console.
2. Navigate to **Authentication → Sign-in method**.
3. Enable the Google sign-in provider.
4. Configure the authorized domains for your deployment.

### Step 5: Enable Cloud Firestore

1. Open **Firestore Database** in Firebase Console.
2. Create a database.
3. Configure appropriate security rules for player records and leaderboard access.
4. Verify that the application can read and write the required documents.

### Firebase Security Notes

- Never commit service-account private keys or other server-side credentials.
- Firebase web configuration is not a substitute for access control.
- Configure Firestore security rules to prevent unauthorized writes or score manipulation.
- Validate leaderboard data and permissions rather than trusting arbitrary client-submitted scores.
- Do not expose sensitive personal information in public leaderboard documents.

---

## 🌐 Deployment on GitHub Pages

The intended project URL is:

**https://rmy4143.github.io/Subway-Surfers/**

Because the repository is a Vite application, it needs to be built before the generated static files are published.

### 1. Configure the Vite base path

Create or update `vite.config.js` in the project root:

```javascript
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Subway-Surfers/',
});
```

The base path ensures that generated asset URLs point to the repository's GitHub Pages location.

### 2. Test the production build

Run:

```bash
npm install
npm run build
npm run preview
```

Check the browser console for missing JavaScript, CSS, model, texture, and audio files. Ensure that the game works under the repository subpath, not just at the root of `localhost`.

### 3. Configure GitHub Pages

1. Push your changes to GitHub.
2. Open the repository's **Settings → Pages**.
3. Select **GitHub Actions** as the deployment source.
4. Configure a deployment workflow that installs dependencies, builds the Vite project, and publishes `dist/`.
5. Open the **Actions** tab and wait for the deployment to succeed.

Official guide: [GitHub Pages documentation](https://docs.github.com/en/pages).

### 4. Verify the live website

After deployment:

- Open the live URL.
- Test gameplay and controls.
- Check that all assets load correctly.
- Test the mobile layout.
- Verify Firebase authentication and cloud features independently.

GitHub Pages hosts the static frontend. It does not provide a Node.js backend or automatically configure Firebase.

---

## 📁 Project Structure

The following is a simplified overview of the project:

```text
Subway-Surfers/
├── src/                # Application source files
├── index.html          # HTML entry point
├── package.json        # Dependencies and npm scripts
├── README.md           # Project documentation
├── vite.config.js      # Vite configuration, if present
├── .github/
│   └── workflows/      # GitHub Actions deployment workflow
└── dist/               # Generated production output
```

The `.github/workflows/` directory is needed only if you use a GitHub Actions workflow, and `dist/` is generated during the build. The exact contents of `src/` depend on the implementation in the repository.

---

## 🧰 Troubleshooting

| Issue | What to check |
|---|---|
| `npm` is not recognized | Install Node.js and reopen the terminal. |
| Dependencies fail to install | Check your Node.js version and the npm error output. |
| Blank page on GitHub Pages | Verify the Vite base path and browser console. |
| CSS or assets are missing | Check absolute paths and generated asset URLs. |
| Google sign-in fails | Check Firebase Authentication and authorized domains. |
| Leaderboard does not update | Check Firestore configuration, security rules, and network errors. |
| Game works locally but not online | Test the production build and check case-sensitive file paths. |

---

## 🔮 Future Enhancements

Potential improvements include:

- Additional subway environments and track themes.
- More playable characters and customization.
- Missions, achievements, and daily challenges.
- Improved mobile performance and adaptive graphics quality.
- Enhanced leaderboard filtering and player profiles.
- Additional power-ups and gameplay events.
- Improved accessibility and configurable controls.

---

## 👨‍💻 Author

**Rmy4143**

- GitHub: [@Rmy4143](https://github.com/Rmy4143)
- Project: [Subway-Surfers 3D](https://github.com/Rmy4143/Subway-Surfers)
- Live Demo: [Play Online](https://rmy4143.github.io/Subway-Surfers/)

---

## 📄 License

No license has been specified in this README. Before distributing the project or accepting contributions, add an appropriate license after reviewing the rights associated with the game's name, characters, artwork, audio, and other third-party assets.

---

<p align="center">
  <b>Built with JavaScript, Three.js, and Vite. 🎮</b>
</p>
