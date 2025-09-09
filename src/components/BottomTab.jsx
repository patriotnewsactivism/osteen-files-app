// src/components/BottomTab.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * A simple bottom navigation bar intended for small screens. The bar is
 * hidden on larger viewports.
 */
export default function BottomTab() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-30 bg-white/90 backdrop-blur border-t sm:hidden">
      <nav className="max-w-xl mx-auto grid grid-cols-3 text-sm">
        <NavLink to="/evidence" className="p-3 text-center">
          Evidence
        </NavLink>
        <NavLink to="/music" className="p-3 text-center font-medium">
          Music
        </NavLink>
        <NavLink to="/album/bad-actors" className="p-3 text-center">
          Bad Actors
        </NavLink>
      </nav>
    </div>
  );
}