import React from "react";
import { NavLink } from "react-router-dom";
import DarkModeToggle from "@/components/DarkModeToggle";

const base = "px-3 py-2 rounded-lg border hover:bg-gray-50 dark:hover:bg-gray-700";
const active = "bg-gray-900 text-white hover:bg-gray-900 border-gray-900 dark:bg-gray-700 dark:border-gray-700";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur border-b dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-14 flex items-center justify-between">
        <NavLink to="/" className="mr-2 font-semibold text-gray-900 dark:text-white">WTPNews</NavLink>
        <div className="flex items-center gap-2">
          <nav className="flex items-center gap-2">
            <NavLink to="/evidence" className={({isActive}) => `${base} ${isActive ? active : ""}`}>Evidence</NavLink>
            <NavLink to="/music"    className={({isActive}) => `${base} ${isActive ? active : ""}`}>Music</NavLink>
          </nav>
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}