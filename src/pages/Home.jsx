// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="text-3xl font-bold mb-6">Osteen Evidence Hub</h1>
      <p className="text-lg text-gray-700 mb-8">
        Constitutional Violations Documentation Platform
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link 
          to="/evidence" 
          className="p-6 bg-white rounded-xl border hover:shadow-md transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Evidence</h2>
          <p className="text-gray-600">
            Browse case filings, transcripts, and legal documents
          </p>
        </Link>
        
        <Link 
          to="/music" 
          className="p-6 bg-white rounded-xl border hover:shadow-md transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Music</h2>
          <p className="text-gray-600">
            Musical documentation and artistic expression
          </p>
        </Link>
        
        <Link 
          to="/album/bad-actors" 
          className="p-6 bg-white rounded-xl border hover:shadow-md transition-shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Bad Actors Album</h2>
          <p className="text-gray-600">
            The complete musical narrative of systematic injustice
          </p>
        </Link>
      </div>
    </main>
  );
}
