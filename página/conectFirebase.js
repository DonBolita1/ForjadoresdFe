<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA1puD8BPpmCoaW3YNGpRJ-UVFtnd3iV5M",
    authDomain: "forjadoresdfe.firebaseapp.com",
    projectId: "forjadoresdfe",
    storageBucket: "forjadoresdfe.firebasestorage.app",
    messagingSenderId: "945751187968",
    appId: "1:945751187968:web:6a7c2e70c79f0c117c2ee5",
    measurementId: "G-W0RFPBDH9P"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>