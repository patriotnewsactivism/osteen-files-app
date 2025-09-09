// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// if CSS is in src-js:
import '../src-js/index.css';

createRoot(document.getElementById('root')).render(<App />);
