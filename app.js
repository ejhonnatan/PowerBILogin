// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// Configuración de tu proyecto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAu8uG3aPprDIi4c-JAB8Gwp58UVY-qSRo",
  authDomain: "powerbilogin-ed98c.firebaseapp.com",
  projectId: "powerbilogin-ed98c",
  storageBucket: "powerbilogin-ed98c.appspot.com",
  messagingSenderId: "488545271309",
  appId: "1:488545271309:web:260eb66f1ef0b7d39b5f44"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Función para login
window.login = (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Redirigir al dashboard si login correcto
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      document.getElementById("mensajeError").textContent =
        "Credenciales incorrectas. Intenta de nuevo.";
    });
};
