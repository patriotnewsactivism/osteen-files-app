import React from "react";
import { NavLink } from "react-router-dom";

/**
 * Simple site-wide header with navigation links. The active link is
 * highlighted. Adjust the paths as needed when adding more pages.
 */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function SiteHeader() {
  const base = "px-3 py-2 rounded-lg border hover:bg-gray-50";
  const active = "bg-gray-900 text-white hover:bg-gray-900 border-gray-900";
  return /*#__PURE__*/_jsx("header", {
    className: "sticky top-0 z-50 bg-white/80 backdrop-blur border-b",
    children: /*#__PURE__*/_jsxs("div", {
      className: "max-w-6xl mx-auto px-4 md:px-6 h-14 flex items-center gap-2",
      children: [/*#__PURE__*/_jsx(NavLink, {
        to: "/",
        className: "mr-2 font-semibold",
        children: "WTPNews"
      }), /*#__PURE__*/_jsxs("nav", {
        className: "flex items-center gap-2",
        children: [/*#__PURE__*/_jsx(NavLink, {
          to: "/evidence",
          className: ({
            isActive
          }) => `${base} ${isActive ? active : ""}`,
          children: "Evidence"
        }), /*#__PURE__*/_jsx(NavLink, {
          to: "/music",
          className: ({
            isActive
          }) => `${base} ${isActive ? active : ""}`,
          children: "Music"
        }), /*#__PURE__*/_jsx(NavLink, {
          to: "/album/bad-actors",
          className: ({
            isActive
          }) => `${base} ${isActive ? active : ""}`,
          children: "Bad Actors"
        })]
      })]
    })
  });
}