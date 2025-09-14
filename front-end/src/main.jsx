import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyACmO4GlaPAuVN7qUuGuoxoWqCm3M5GjiQ",
  authDomain: "full-stack-react-8ccde.firebaseapp.com",
  projectId: "full-stack-react-8ccde",
  storageBucket: "full-stack-react-8ccde.firebasestorage.app",
  messagingSenderId: "1036341802652",
  appId: "1:1036341802652:web:c7dc1ce95803e628451f59"
};

const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
