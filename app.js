// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail
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

// Utilidad para mostrar mensajes en el <p id="mensajeError">
function mostrarMensaje(msg, esError = true) {
  const el = document.getElementById("mensajeError");
  if (!el) return alert(msg);
  el.textContent = msg;
  el.style.color = esError ? "#d32f2f" : "#2e7d32";
}

// Función para login (expuesta al ámbito global)
window.login = (e) => {
  e.preventDefault();
  const email = document.getElementById("email")?.value.trim();
  const password = document.getElementById("password")?.value.trim();

  if (!email || !password) {
    mostrarMensaje("Ingresa email y contraseña.");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      // Redirigir al dashboard si login correcto
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      console.error(error);
      mostrarMensaje("Credenciales incorrectas. Intenta de nuevo.");
    });
};

// Función para recuperar contraseña (expuesta al ámbito global)
window.forgotPassword = async () => {
  const email = document.getElementById("email")?.value.trim();

  if (!email) {
    mostrarMensaje("Escribe tu correo en el campo Email para enviarte el enlace de recuperación.");
    return;
  }

  try {
    await sendPasswordResetEmail(auth, email);
    mostrarMensaje("Te enviamos un correo para restablecer tu contraseña.", false);
    // Opcional: también puedes usar alert(...) si prefieres
  } catch (error) {
    console.error("Error al enviar correo de recuperación:", error);
    // Manejo básico por códigos comunes
    let msg = "No pudimos enviar el correo. Verifica que el correo esté registrado.";
    if (error.code === "auth/invalid-email") msg = "El correo no es válido.";
    if (error.code === "auth/user-not-found") msg = "No encontramos una cuenta con ese correo.";
    if (error.code === "auth/too-many-requests") msg = "Demasiados intentos. Inténtalo más tarde.";
    mostrarMensaje(msg);
  }
};
