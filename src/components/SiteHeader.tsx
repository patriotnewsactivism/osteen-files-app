import React from "react";
import { NavLink } from "react-router-dom";

/**
 * Simple site-wide header with navigation links. The active link is
 * highlighted. Adjust the paths as needed when adding more pages.
 */
export default function SiteHeader() {
  const base = "px-3 py-2 rounded-lg border hover:bg-gray-50";
  const active = "bg-gray-900 text-white hover:bg-gray-900 border-gray-900";
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-14 flex items-center gap-2">
        <NavLink to="/" className="mr-2 font-semibold">
          WTPNews
        </NavLink>
        <nav className="flex items-center gap-2">
          <NavLink
            to="/evidence"
            className={({ isActive }) => `${base} ${isActive ? active : ""}`}
          >
            Evidence
          </NavLink>
          <NavLink
            to="/music"
            className={({ isActive }) => `${base} ${isActive ? active : ""}`}
          >
            Music
          </NavLink>
          <NavLink
            to="/album/bad-actors"
            className={({ isActive }) => `${base} ${isActive ? active : ""}`}
          >
            Bad Actors
          </NavLink>
        </nav>
      </div>
    </header>
  );
}