import React from "react";
import { Link } from "react-router-dom";
import { albumInfo as badActors } from "../data/badActors";
import { Helmet } from "react-helmet-async";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/*#__PURE__*/_jsxs(Helmet, {
  children: [/*#__PURE__*/_jsx("title", {
    children: "Evidence | Osteen Case"
  }), /*#__PURE__*/_jsx("meta", {
    name: "description",
    content: "Browse the Osteen case filings, transcripts, and videos."
  }), /*#__PURE__*/_jsx("meta", {
    property: "og:title",
    content: "Evidence | Osteen Case"
  }), /*#__PURE__*/_jsx("meta", {
    property: "og:description",
    content: "Browse the Osteen case filings, transcripts, and videos."
  }), /*#__PURE__*/_jsx("meta", {
    property: "og:image",
    content: "/images/social-card-evidence.jpg"
  }), /*#__PURE__*/_jsx("link", {
    rel: "canonical",
    href: "https://osteen.wtpnews.org/evidence"
  })]
});

/**
 * A simple hub listing all music releases. As more albums are added, push
 * additional entries onto the `albums` array below.
 */
const albums = [{
  slug: badActors.slug,
  title: badActors.title,
  artist: badActors.artist,
  year: badActors.year,
  cover: badActors.cover,
  href: `/album/${badActors.slug}`
}
// Additional albums can be listed here.
];
export default function MusicHub() {
  return /*#__PURE__*/_jsxs("main", {
    className: "max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12",
    children: [/*#__PURE__*/_jsxs("header", {
      className: "mb-6",
      children: [/*#__PURE__*/_jsx("h1", {
        className: "text-3xl md:text-4xl font-bold",
        children: "Music"
      }), /*#__PURE__*/_jsx("p", {
        className: "text-gray-700",
        children: "Albums, singles and soundtracks\u2014streamed right here."
      })]
    }), /*#__PURE__*/_jsx("section", {
      className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
      children: albums.map(a => /*#__PURE__*/_jsxs(Link, {
        to: a.href,
        className: "group rounded-2xl border overflow-hidden bg-white/70 backdrop-blur hover:shadow-md transition-shadow",
        children: [/*#__PURE__*/_jsx("div", {
          className: "aspect-square overflow-hidden",
          children: /*#__PURE__*/_jsx("img", {
            src: a.cover,
            alt: `${a.title} cover`,
            className: "w-full h-full object-cover group-hover:scale-[1.02] transition-transform"
          })
        }), /*#__PURE__*/_jsxs("div", {
          className: "p-4",
          children: [/*#__PURE__*/_jsx("h2", {
            className: "text-lg font-semibold",
            children: a.title
          }), /*#__PURE__*/_jsxs("div", {
            className: "text-sm text-gray-600",
            children: [a.artist, " \xB7 ", a.year]
          })]
        })]
      }, a.slug))
    })]
  });
}