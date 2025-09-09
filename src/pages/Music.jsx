// src/pages/Music.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export function Music() {
  return (
    <>
      <Helmet>
        <title>Music | Osteen Case</title>
        <meta name="description" content="Musical documentation and albums related to the Osteen case." />
      </Helmet>
      
      <main className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold">Music</h1>
          <p className="text-gray-700">
            Albums, singles and soundtracks—streamed right here.
          </p>
        </header>
        
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            to="/album/bad-actors"
            className="group rounded-2xl border overflow-hidden bg-white/70 backdrop-blur hover:shadow-md transition-shadow"
          >
            <div className="aspect-square overflow-hidden bg-gray-200">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                Album Cover
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold">Bad Actors</h2>
              <div className="text-sm text-gray-600">
                Outlawed Productions · 2025
              </div>
            </div>
          </Link>
        </section>
      </main>
    </>
  );
}