import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "[REMOVED]",
  authDomain: "full-stack-react-8ccde.firebaseapp.com",
  projectId: "full-stack-react-8ccde",
  storageBucket: "[REMOVED]",
  messagingSenderId: "[REMOVED]",
  appId: "[REMOVED]"
};

const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
