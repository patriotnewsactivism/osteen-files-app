import React from 'react'
import ReactDOM from 'react-dom/client'
import OsteenEvidenceHub from './App'
import './index.css'
import { HelmetProvider } from "react-helmet-async";
// ...
<HelmetProvider>
  <App />
</HelmetProvider>
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <OsteenEvidenceHub />
  </React.StrictMode>,
)
