#!/bin/bash

# 🚀 OSTEEN EVIDENCE HUB - COMPLETE SETUP SCRIPT
# Constitutional Violations Documentation Platform

echo "🏛️  Setting up Constitutional Violations Documentation Platform..."

# Create directory structure
echo "📁 Creating directories..."
mkdir -p public/docs public/images src/data src/components

# Create package.json
echo "📦 Creating package.json..."
cat > package.json << 'EOF'
{
  "name": "osteen-evidence-hub",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "npm run build && git add . && git commit -m 'Deploy constitutional violations platform' && git push"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.263.1",
    "recharts": "^2.8.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.0.0",
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.24",
    "tailwindcss": "^3.3.0",
    "@tailwindcss/typography": "^0.5.9",
    "typescript": "^5.0.0",
    "vite": "^4.4.0"
  }
}
EOF

# Install dependencies
echo "📥 Installing dependencies..."
npm install

# Tailwind config
echo "🎨 Creating Tailwind config..."
cat > tailwind.config.js << 'EOF'
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'slide-in-right': 'slide-in-right 0.3s ease-out',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fade-in 0.3s ease-out',
      },
      keyframes: {
        'slide-in-right': {
          'from': { transform: 'translateX(100%)', opacity: '0' },
          'to': { transform: 'translateX(0)', opacity: '1' }
        },
        'fade-in': {
          'from': { opacity: '0', transform: 'translateY(10px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
EOF

# PostCSS config
echo "🔧 Creating PostCSS config..."
cat > postcss.config.js << 'EOF'
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOF

# TypeScript config
echo "📝 Creating TypeScript config..."
cat > tsconfig.json << 'EOF'
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
EOF

# Node TypeScript config
echo "🔗 Creating Node TypeScript config..."
cat > tsconfig.node.json << 'EOF'
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
EOF

# Vite config
echo "⚡ Creating Vite config..."
cat > vite.config.ts << 'EOF'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['lucide-react', 'recharts']
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
EOF

# Netlify headers
echo "🛡️  Creating Netlify headers..."
cat > public/_headers << 'EOF'
/docs/*
  Cache-Control: public, max-age=604800, immutable
  
/images/*
  Cache-Control: public, max-age=2592000, immutable

/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self' https:; media-src 'self' https:; object-src 'none'; frame-src 'self' https:;
EOF

# Netlify redirects
echo "🔄 Creating Netlify redirects..."
cat > public/_redirects << 'EOF'
/*    /index.html   200
EOF

# Netlify config
echo "📋 Creating Netlify config..."
cat > netlify.toml << 'EOF'
[build]
  publish = "dist"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/docs/*"
  [headers.values]
    Cache-Control = "public, max-age=604800, immutable"

[[headers]]
  for = "/images/*"
  [headers.values]
    Cache-Control = "public, max-age=2592000, immutable"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
EOF

# Index HTML
echo "📄 Creating index.html..."
cat > index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>⚖️</text></svg>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Osteen Evidence Hub - Constitutional Violations Documentation</title>
    
    <meta name="description" content="Constitutional violations documentation platform with evidence, legal filings, and musical chronicle." />
    <meta name="keywords" content="Osteen, constitutional violations, civil rights, legal evidence, Bad Actors album" />
    <meta name="author" content="Outlawed Productions" />
    
    <meta property="og:title" content="Osteen Evidence Hub" />
    <meta property="og:description" content="Constitutional violations documentation platform" />
    <meta property="og:image" content="/images/bad-actors-cover.jpg" />
    <meta property="og:url" content="https://osteen.wtpnews.org" />
    <meta property="og:type" content="website" />
    
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Osteen Evidence Hub" />
    <meta name="twitter:description" content="Constitutional violations documentation platform" />
    <meta name="twitter:image" content="/images/bad-actors-cover.jpg" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
EOF

# Main React entry
echo "⚛️  Creating main.tsx..."
cat > src/main.tsx << 'EOF'
import React from 'react'
import ReactDOM from 'react-dom/client'
import OsteenEvidenceHub from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <OsteenEvidenceHub />
  </React.StrictMode>,
)
EOF

# CSS styles
echo "🎨 Creating index.css..."
cat > src/index.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  
  body {
    @apply antialiased bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100;
  }
}

@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 font-medium;
  }
  
  .card {
    @apply bg-white dark:bg-gray-800 rounded-xl border dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-200;
  }
  
  .evidence-card {
    @apply card p-6 hover:shadow-lg border-l-4 border-blue-500;
  }
  
  .violation-card {
    @apply card p-6 hover:shadow-lg border-l-4 border-red-500;
  }
}

@layer utilities {
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideInRight {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}

.animate-slide-in-right {
  animation: slideInRight 0.3s ease-out;
}

*:focus-visible {
  @apply outline-2 outline-blue-500 outline-offset-2;
}

canvas {
  @apply transition-all duration-200 rounded;
}

canvas:hover {
  @apply brightness-110 shadow-md;
}

.legal-document {
  @apply font-mono text-sm leading-relaxed;
}

.legal-citation {
  @apply font-semibold text-blue-700 dark:text-blue-400;
}

@media print {
  .no-print {
    display: none !important;
  }
  
  body {
    @apply bg-white text-black;
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
EOF

# GitIgnore
echo "🚫 Creating .gitignore..."
cat > .gitignore << 'EOF'
node_modules/
dist/
build/
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
.vscode/
.idea/
*.swp
*.swo
.DS_Store
Thumbs.db
logs/
*.log
pids/
*.pid
*.seed
*.pid.lock
tmp/
temp/
coverage/
*.lcov
.eslintcache
*.tsbuildinfo
.vite/
EOF

# Environment example
echo "🌍 Creating .env.example..."
cat > .env.example << 'EOF'
VITE_PLATFORM_TITLE="Osteen Evidence Hub - Constitutional Violations Documentation"
VITE_ORGANIZATION="Outlawed Productions"
VITE_CONTACT_EMAIL="contact@wtpnews.org"
EOF

# README
echo "📚 Creating README.md..."
cat > README.md << 'EOF'
# Osteen Evidence Hub - Constitutional Violations Documentation Platform

## Platform Mission
Comprehensive digital repository documenting systematic constitutional rights violations through detailed examination of procedural irregularities, evidence manipulation, and coordinated inter-agency actions.

## Features
- Interactive Timeline Visualization
- Document Comparison Tools
- Evidence Repository with Cross-References
- Musical Narrative Integration ("Bad Actors" Album)
- Advanced Search and Filtering
- Dark Mode Support
- Mobile Responsive Design

## Installation
```bash
chmod +x setup.sh
./setup.sh
npm run dev
```

## Deployment
```bash
npm run build
npm run deploy
```

## Legal Documentation Standards
- Source Material Preservation
- Chain of Custody Documentation
- Cross-Referencing Protocol
- Temporal Accuracy

Platform URL: https://osteen.wtpnews.org
EOF

echo ""
echo "✅ CONSTITUTIONAL VIOLATIONS DOCUMENTATION PLATFORM - SETUP COMPLETE"
echo ""
echo "═══════════════════════════════════════════════════════════════════════════════"
echo "📋 DEPLOYMENT CHECKLIST"
echo "═══════════════════════════════════════════════════════════════════════════════"
echo ""
echo "1. 📄 Copy legal documents to public/docs/:"
echo "   cp 'motion-for-a-franks-hearing_ocr1-compressed.pdf' public/docs/Motion-for-Franks-Hearing.pdf"
echo "   cp 'Galveston DWI documents.pdf' public/docs/Galveston-DWI-Documents.pdf"
echo "   # Plus your other 4 PDFs"
echo ""
echo "2. 🖼️  Add album cover:"
echo "   # Copy bad-actors-cover.jpg to public/images/"
echo ""
echo "3. 📁 Copy React components from artifacts:"
echo "   # src/data/badActors.ts"
echo "   # src/data/osteenEvidence.ts"
echo "   # src/App.tsx"
echo ""
echo "4. 🧪 Test locally:"
echo "   npm run dev"
echo ""
echo "5. 🚀 Deploy:"
echo "   npm run deploy"
echo ""
echo "🌐 LIVE URL: https://osteen.wtpnews.org"
echo ""
echo "🏛️  CONSTITUTIONAL ACCOUNTABILITY PLATFORM READY FOR DEPLOYMENT"