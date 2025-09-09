// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';   // <-- EXACT: folder, filename, extension, case

import './index.css';          // optional, if you moved CSS into src
createRoot(document.getElementById('root')).render(<App />);
