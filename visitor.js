import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "PASTE_YOUR_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const ref = doc(db, "stats", "visitors");

async function updateCount() {
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    await setDoc(ref, { count: 1 });
    document.getElementById("count").innerText = 1;
  } else {
    let newCount = snap.data().count + 1;
    await updateDoc(ref, { count: newCount });
    document.getElementById("count").innerText = newCount;
  }
}

updateCount();
