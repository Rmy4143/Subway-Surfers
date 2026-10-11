# 🏃‍♂️ Subway Surfers 3D - Web Edition

An authentic, high-octane 3D Subway Surfers web runner crafted with **Three.js**, **Web Audio API**, and **Firebase** (Google Authentication & Cloud Firestore Real-time Leaderboards).

---

## 🎮 Game Features

- **Realistic 3D Subway Environment**:
  - 3-Lane Track System (Left, Center, Right) with infinite procedural track generation.
  - Realistic subway metro cars (parked and moving trains).
  - Train roofs: Run directly on top of train cars!
  - Train ramps: Launch seamlessly from track level onto train roofs.
  - Hurdles & Roadblocks: Low hurdles (jump over) and high barriers (roll under).
  - Overhead gantries, subway arches, neon signage, and ballast tracks.
- **Iconic Runner Character ("Jake")**:
  - Full 3D rigged runner with cap, hoodie, sneakers, dynamic run cycle, jump tuck, roll animation, and lane lean physics.
  - Chasing Inspector & Guard Dog right behind you!
- **Authentic Power-Ups & Collectibles**:
  - 🪙 **Golden Coins**: Placed along tracks and train tops.
  - 🚀 **Jetpack**: Launch high into the sky, avoiding ground obstacles while collecting sky coin ribbons.
  - 🧲 **Coin Magnet**: Attracts coins from all 3 lanes directly to you.
  - 👟 **Super Sneakers**: High-altitude spring jump to leap over trains.
  - ✖️2 **2X Multiplier**: Doubles your score gain.
  - 🛹 **Hoverboard**: Shields you from a crash impact (activated with double-tap Space or on-screen button).
- **Audio Synthesizer (Web Audio API)**:
  - Procedural upbeat funk background beat.
  - Authentic SFX: Coin chimes, jump whoosh, roll swoosh, train horns, powerup fanfare, and crash impacts.
- **Account Creation & Live Records**:
  - **Google Sign-In**: Authenticate using your Google account.
  - **Cloud Firestore**: Real-time global leaderboard where the top scores from all players are recorded and displayed.
  - **Career Records**: High score, total coins collected, total runs, longest distance, and match history.
  - **High-Performance Fallback**: Works immediately with zero setup using local persistence, with seamless synchronization when Firebase credentials are connected.

---

## ⌨️ Controls

| Action | Primary Key | Secondary Key | Touch / Gesture |
| :--- | :--- | :--- | :--- |
| **Move Left** | `← Arrow Left` | `A` | Swipe Left |
| **Move Right** | `→ Arrow Right` | `D` | Swipe Right |
| **Jump** | `↑ Arrow Up` | `W` or `Space` | Swipe Up |
| **Roll / Duck** | `↓ Arrow Down` | `S` | Swipe Down |
| **Activate Hoverboard** | `Double-Tap Space` | `Enter` | Double Tap Screen |
| **Pause / Resume** | `P` | `Escape` | Pause Button (Top-Right) |

---

## 🚀 How to Run Locally

The game is hosted on a local web server:

```bash
# Option 1: Python HTTP Server (Already running at http://localhost:5173)
python -m http.server 5173

# Option 2: Vite Dev Server
npm run dev
```

Open your browser and navigate to:
👉 **[http://localhost:5173](http://localhost:5173)**

---

## ☁️ Connecting Your Firebase Project (Google Auth & Cloud Firestore)

The game includes a built-in **Settings (⚙️)** drawer:
1. Open the game in your browser.
2. Click the **⚙️** icon in the top right.
3. Paste your Firebase project configuration JSON:
```json
{
  "apiKey": "YOUR_API_KEY",
  "authDomain": "YOUR_PROJECT.firebaseapp.com",
  "projectId": "YOUR_PROJECT",
  "storageBucket": "YOUR_PROJECT.appspot.com",
  "messagingSenderId": "YOUR_SENDER_ID",
  "appId": "YOUR_APP_ID"
}
```
4. Click **Save & Connect Firebase**.
5. Enable **Google Provider** in Firebase Console -> Authentication -> Sign-in method.
6. Enable **Cloud Firestore** in Firebase Console -> Firestore Database.
