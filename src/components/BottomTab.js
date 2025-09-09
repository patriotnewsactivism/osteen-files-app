import React from "react";
import { NavLink } from "react-router-dom";

/**
 * A simple bottom navigation bar intended for small screens. The bar is
 * hidden on larger viewports. It lives above the sticky audio player
 * when present.
 */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function BottomTab() {
  return /*#__PURE__*/_jsx("div", {
    className: "fixed bottom-16 sm:bottom-0 inset-x-0 z-30 bg-white/90 backdrop-blur border-t sm:hidden",
    children: /*#__PURE__*/_jsxs("nav", {
      className: "max-w-xl mx-auto grid grid-cols-3 text-sm",
      children: [/*#__PURE__*/_jsx(NavLink, {
        to: "/evidence",
        className: "p-3 text-center",
        children: "Evidence"
      }), /*#__PURE__*/_jsx(NavLink, {
        to: "/music",
        className: "p-3 text-center font-medium",
        children: "Music"
      }), /*#__PURE__*/_jsx(NavLink, {
        to: "/album/bad-actors",
        className: "p-3 text-center",
        children: "Bad Actors"
      })]
    })
  });
}