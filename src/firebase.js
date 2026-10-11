// Firebase Authentication & Cloud Firestore Leaderboard Integration
import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth';
import { 
  getFirestore, 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  getDocs, 
  query, 
  orderBy, 
  limit, 
  serverTimestamp 
} from 'firebase/firestore';

// Default Demo / Fallback Configuration
// Users can provide their live Firebase config in the in-game Settings modal anytime!
const DEFAULT_CONFIG_KEY = 'subway_surfer_firebase_config';
const LOCAL_LEADERBOARD_KEY = 'subway_surfer_local_leaderboard';
const LOCAL_USER_KEY = 'subway_surfer_local_user';
const LOCAL_HISTORY_KEY = 'subway_surfer_local_history';

let app = null;
let auth = null;
let db = null;
let isFirebaseActive = false;

// Seed initial global records if local is empty
function getInitialLeaderboard() {
  return [
    { rank: 1, name: "Jake The Surfer", score: 142580, coins: 1240, photoURL: "https://api.dicebear.com/7.x/bottts/svg?seed=jake", date: "2026-10-09" },
    { rank: 2, name: "Tricky Beat", score: 98400, coins: 890, photoURL: "https://api.dicebear.com/7.x/bottts/svg?seed=tricky", date: "2026-10-08" },
    { rank: 3, name: "Fresh Kicks", score: 87120, coins: 760, photoURL: "https://api.dicebear.com/7.x/bottts/svg?seed=fresh", date: "2026-10-08" },
    { rank: 4, name: "Yutani Alien", score: 65400, coins: 520, photoURL: "https://api.dicebear.com/7.x/bottts/svg?seed=yutani", date: "2026-10-07" },
    { rank: 5, name: "Lucy Punk", score: 49200, coins: 410, photoURL: "https://api.dicebear.com/7.x/bottts/svg?seed=lucy", date: "2026-10-06" }
  ];
}

export function getSavedFirebaseConfig() {
  const saved = localStorage.getItem(DEFAULT_CONFIG_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.warn("Invalid saved firebase config:", e);
    }
  }
  return null;
}

export function saveFirebaseConfig(config) {
  localStorage.setItem(DEFAULT_CONFIG_KEY, JSON.stringify(config));
}

export function clearFirebaseConfig() {
  localStorage.removeItem(DEFAULT_CONFIG_KEY);
}

export async function initFirebase(customConfig = null) {
  const config = customConfig || getSavedFirebaseConfig();
  if (config && config.apiKey && config.projectId) {
    try {
      app = getApps().length === 0 ? initializeApp(config) : getApp();
      auth = getAuth(app);
      db = getFirestore(app);
      isFirebaseActive = true;
      console.log("🔥 Firebase initialized with project:", config.projectId);
      return { success: true, message: `Connected to Firebase project: ${config.projectId}` };
    } catch (error) {
      console.warn("⚠️ Firebase init failed, falling back to local storage:", error.message);
      isFirebaseActive = false;
      return { success: false, message: error.message };
    }
  } else {
    isFirebaseActive = false;
    return { success: false, message: "No custom Firebase credentials provided. Running in high-performance local mode." };
  }
}

// Current logged in user object
let currentUser = null;
const authListeners = [];

export function subscribeToAuth(callback) {
  authListeners.push(callback);
  // Send current state
  callback(currentUser);
}

function notifyAuthChange(user) {
  currentUser = user;
  authListeners.forEach(cb => cb(currentUser));
}

// Check local user on load
export function initAuth() {
  // If firebase is active, listen to firebase auth
  if (isFirebaseActive && auth) {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const profile = {
          uid: user.uid,
          displayName: user.displayName || "Google Surfer",
          email: user.email,
          photoURL: user.photoURL || `https://api.dicebear.com/7.x/bottts/svg?seed=${user.uid}`,
          isGoogle: true
        };
        // Fetch or init user record in Firestore
        await syncUserRecord(profile);
        notifyAuthChange(profile);
      } else {
        loadGuestUser();
      }
    });
  } else {
    loadGuestUser();
  }
}

function loadGuestUser() {
  const saved = localStorage.getItem(LOCAL_USER_KEY);
  if (saved) {
    try {
      currentUser = JSON.parse(saved);
    } catch (e) {
      currentUser = createGuestUser();
    }
  } else {
    currentUser = createGuestUser();
  }
  notifyAuthChange(currentUser);
}

function createGuestUser() {
  const guestId = 'guest_' + Math.floor(100000 + Math.random() * 900000);
  const guest = {
    uid: guestId,
    displayName: "Surfer #" + guestId.slice(-4),
    photoURL: `https://api.dicebear.com/7.x/bottts/svg?seed=${guestId}`,
    isGoogle: false,
    highScore: 0,
    totalCoins: 0,
    totalRuns: 0,
    longestDist: 0
  };
  localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(guest));
  return guest;
}

// Google Sign-In with Popup
export async function signInWithGoogle() {
  if (isFirebaseActive && auth) {
    try {
      const provider = new GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const profile = {
        uid: user.uid,
        displayName: user.displayName || "Google Surfer",
        email: user.email,
        photoURL: user.photoURL || `https://api.dicebear.com/7.x/bottts/svg?seed=${user.uid}`,
        isGoogle: true
      };
      await syncUserRecord(profile);
      notifyAuthChange(profile);
      return { success: true, user: profile };
    } catch (err) {
      console.error("Google Sign-In Error:", err);
      return { success: false, error: err.message };
    }
  } else {
    // If user clicks Google Sign-In before entering Firebase API key:
    // We offer a quick interactive prompt or mock Google Identity
    const namePrompt = prompt("Enter your Google Account Display Name or connect Firebase in Settings (⚙️):", currentUser?.displayName?.startsWith("Surfer") ? "Alex Rivera" : currentUser?.displayName);
    if (namePrompt) {
      currentUser = {
        ...currentUser,
        displayName: namePrompt,
        photoURL: `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(namePrompt)}`,
        isGoogle: true
      };
      localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(currentUser));
      notifyAuthChange(currentUser);
      return { success: true, user: currentUser };
    }
    return { success: false, error: "Sign in canceled" };
  }
}

export async function signOutUser() {
  if (isFirebaseActive && auth) {
    try {
      await signOut(auth);
    } catch (e) {
      console.warn("Sign out error:", e);
    }
  }
  loadGuestUser();
}

// Sync user stats in Firestore
async function syncUserRecord(profile) {
  if (isFirebaseActive && db) {
    try {
      const userRef = doc(db, 'users', profile.uid);
      const snap = await getDoc(userRef);
      if (snap.exists()) {
        const data = snap.data();
        profile.highScore = data.highScore || 0;
        profile.totalCoins = data.totalCoins || 0;
        profile.totalRuns = data.totalRuns || 0;
        profile.longestDist = data.longestDist || 0;
      } else {
        // Create initial doc
        profile.highScore = 0;
        profile.totalCoins = 0;
        profile.totalRuns = 0;
        profile.longestDist = 0;
        await setDoc(userRef, {
          displayName: profile.displayName,
          email: profile.email || '',
          photoURL: profile.photoURL,
          highScore: 0,
          totalCoins: 0,
          totalRuns: 0,
          longestDist: 0,
          createdAt: serverTimestamp()
        });
      }
    } catch (err) {
      console.warn("Error syncing user record with Firestore:", err);
    }
  }
}

// Save a completed run
export async function recordGameSession({ score, coins, distance }) {
  if (!currentUser) return;

  const now = new Date();
  const dateStr = now.toLocaleDateString() + ' ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const runItem = {
    id: 'run_' + Date.now(),
    score,
    coins,
    distance,
    date: dateStr,
    timestamp: Date.now()
  };

  const isNewHigh = score > (currentUser.highScore || 0);
  if (isNewHigh) {
    currentUser.highScore = score;
  }
  currentUser.totalCoins = (currentUser.totalCoins || 0) + coins;
  currentUser.totalRuns = (currentUser.totalRuns || 0) + 1;
  currentUser.longestDist = Math.max(currentUser.longestDist || 0, distance);

  // 1. Save locally
  localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(currentUser));
  
  // History
  let history = getLocalRunHistory();
  history.unshift(runItem);
  if (history.length > 50) history.pop();
  localStorage.setItem(LOCAL_HISTORY_KEY, JSON.stringify(history));

  // Update local leaderboard
  updateLocalLeaderboard({
    uid: currentUser.uid,
    name: currentUser.displayName,
    score: currentUser.highScore,
    coins: currentUser.totalCoins,
    photoURL: currentUser.photoURL,
    date: dateStr
  });

  // 2. If Firebase active, update Firestore
  if (isFirebaseActive && db) {
    try {
      // Update User Doc
      const userRef = doc(db, 'users', currentUser.uid);
      await setDoc(userRef, {
        displayName: currentUser.displayName,
        photoURL: currentUser.photoURL,
        highScore: currentUser.highScore,
        totalCoins: currentUser.totalCoins,
        totalRuns: currentUser.totalRuns,
        longestDist: currentUser.longestDist,
        lastUpdated: serverTimestamp()
      }, { merge: true });

      // Add to global leaderboard collection
      const lbRef = doc(db, 'leaderboard', currentUser.uid);
      await setDoc(lbRef, {
        uid: currentUser.uid,
        name: currentUser.displayName,
        score: currentUser.highScore,
        coins: currentUser.totalCoins,
        photoURL: currentUser.photoURL,
        date: dateStr,
        updatedAt: serverTimestamp()
      });

      // Save individual run log in subcollection
      const runLogRef = doc(collection(db, 'users', currentUser.uid, 'runs'));
      await setDoc(runLogRef, {
        score,
        coins,
        distance,
        createdAt: serverTimestamp()
      });

      return { success: true, isNewHigh, cloudSynced: true };
    } catch (err) {
      console.warn("Firestore record save error:", err);
      return { success: true, isNewHigh, cloudSynced: false, error: err.message };
    }
  }

  notifyAuthChange(currentUser);
  return { success: true, isNewHigh, cloudSynced: false };
}

// Fetch Global Leaderboard (Top 20)
export async function fetchLeaderboard() {
  if (isFirebaseActive && db) {
    try {
      const q = query(
        collection(db, 'leaderboard'),
        orderBy('score', 'desc'),
        limit(20)
      );
      const snapshot = await getDocs(q);
      const results = [];
      let rank = 1;
      snapshot.forEach(docSnap => {
        results.push({ rank: rank++, id: docSnap.id, ...docSnap.data() });
      });
      if (results.length > 0) {
        return results;
      }
    } catch (err) {
      console.warn("Failed to fetch Firestore leaderboard, falling back to local:", err);
    }
  }

  // Fallback / Local records
  return getLocalLeaderboard();
}

function getLocalLeaderboard() {
  const saved = localStorage.getItem(LOCAL_LEADERBOARD_KEY);
  let list = saved ? JSON.parse(saved) : getInitialLeaderboard();
  list.sort((a, b) => b.score - a.score);
  return list.map((item, idx) => ({ ...item, rank: idx + 1 }));
}

function updateLocalLeaderboard(entry) {
  let list = getLocalLeaderboard();
  const existingIdx = list.findIndex(item => item.uid === entry.uid || item.name === entry.name);
  if (existingIdx !== -1) {
    if (entry.score > list[existingIdx].score) {
      list[existingIdx] = { ...list[existingIdx], ...entry };
    }
  } else {
    list.push(entry);
  }
  list.sort((a, b) => b.score - a.score);
  localStorage.setItem(LOCAL_LEADERBOARD_KEY, JSON.stringify(list.slice(0, 30)));
}

export function getLocalRunHistory() {
  const saved = localStorage.getItem(LOCAL_HISTORY_KEY);
  return saved ? JSON.parse(saved) : [];
}

export function getCurrentUser() {
  return currentUser;
}
