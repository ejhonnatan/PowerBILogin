// Importa lo que necesitas
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAu8uG3aPprDIi4c-JAB8Gwp58UVY-qSRo",
  authDomain: "powerbilogin-ed98c.firebaseapp.com",
  projectId: "powerbilogin-ed98c",
  storageBucket: "powerbilogin-ed98c.appspot.com",
  messagingSenderId: "488545271309",
  appId: "1:488545271309:web:260eb66f1ef0b7d39b5f44"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Función de login
window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorDiv = document.getElementById("error");

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Redireccionar al dashboard de Power BI
      window.location.href = "https://app.powerbi.com/view?r=eyJrIjoiNjYxYTE3NDctN2FhZS00OTRjLWJmMTEtNGViN2NmM2IwMzcwIiwidCI6IjJkODcwNTVkLTBlYmItNDdmNy05OTU5LWU3OWYwYzBhMzNkNyJ9";
    })
    .catch((error) => {
      errorDiv.innerText = "Credenciales incorrectas.";
    });
};
