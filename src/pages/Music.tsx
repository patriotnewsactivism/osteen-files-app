import React from "react";
import { albumInfo as badActors } from "@/data/badActors";
import { Link } from "react-router-dom";

const albums = [
  {
    slug: badActors.slug,
    title: badActors.title,
    artist: badActors.artist,
    year: badActors.year,
    cover: badActors.cover,
    href: `/album/${badActors.slug}`,
  },
  // add more albums here as you create them
];

export default function MusicHub() {
  return (
    <main className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <header className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold dark:text-white">Music</h1>
        <p className="text-gray-700 dark:text-gray-300">Albums, singles, and soundtracks—streamed right here.</p>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {albums.map(a => (
          <Link key={a.slug} to={a.href} className="group rounded-2xl border overflow-hidden bg-white/70 dark:bg-gray-700/70 backdrop-blur hover:shadow-md transition-shadow">
            <div className="aspect-square overflow-hidden">
              <img src={a.cover} alt={`${a.title} cover`} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform" />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold dark:text-white">{a.title}</h2>
              <div className="text-sm text-gray-600 dark:text-gray-300">{a.artist} · {a.year}</div>
            </div>
          </Link>
        ))}
      </section>
      
      <div className="mt-8">
        <Link to="/album/comparison" className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
          Compare album tracks →
        </Link>
      </div>
    </main>
  );
}