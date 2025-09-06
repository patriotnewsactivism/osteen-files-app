import React from "react";
import { Link } from "react-router-dom";
import { albumInfo as badActors } from "../data/badActors";

/**
 * A simple hub listing all music releases. As more albums are added, push
 * additional entries onto the `albums` array below.
 */
const albums = [
  {
    slug: badActors.slug,
    title: badActors.title,
    artist: badActors.artist,
    year: badActors.year,
    cover: badActors.cover,
    href: `/album/${badActors.slug}`,
  },
  // Additional albums can be listed here.
];

export default function MusicHub() {
  return (
    <main className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <header className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold">Music</h1>
        <p className="text-gray-700">
          Albums, singles and soundtracks—streamed right here.
        </p>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {albums.map((a) => (
          <Link
            key={a.slug}
            to={a.href}
            className="group rounded-2xl border overflow-hidden bg-white/70 backdrop-blur hover:shadow-md transition-shadow"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={a.cover}
                alt={`${a.title} cover`}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold">{a.title}</h2>
              <div className="text-sm text-gray-600">
                {a.artist} · {a.year}
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}