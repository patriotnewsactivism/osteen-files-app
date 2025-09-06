import React, { useState } from "react";
import WaveformVisualizer from "@/components/WaveformVisualizer";
import { badActorsTracks } from "@/data/badActors";
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
export default function AlbumComparison() {
  const [selectedTrack1, setSelectedTrack1] = useState(badActorsTracks[0]);
  const [selectedTrack2, setSelectedTrack2] = useState(badActorsTracks[1]);
  return /*#__PURE__*/_jsxs("main", {
    className: "max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12",
    children: [/*#__PURE__*/_jsx("h1", {
      className: "text-3xl md:text-4xl font-bold mb-6 dark:text-white",
      children: "Album Track Comparison"
    }), /*#__PURE__*/_jsxs("div", {
      className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",
      children: [/*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("label", {
          className: "block text-sm font-medium mb-2 dark:text-gray-300",
          children: "Select First Track"
        }), /*#__PURE__*/_jsx("select", {
          value: selectedTrack1.id,
          onChange: e => setSelectedTrack1(badActorsTracks.find(t => t.id === e.target.value) || badActorsTracks[0]),
          className: "w-full p-2 border rounded-lg bg-white/70 dark:bg-gray-700/70 backdrop-blur dark:text-white",
          children: badActorsTracks.map(track => /*#__PURE__*/_jsx("option", {
            value: track.id,
            children: track.title
          }, track.id))
        })]
      }), /*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("label", {
          className: "block text-sm font-medium mb-2 dark:text-gray-300",
          children: "Select Second Track"
        }), /*#__PURE__*/_jsx("select", {
          value: selectedTrack2.id,
          onChange: e => setSelectedTrack2(badActorsTracks.find(t => t.id === e.target.value) || badActorsTracks[1]),
          className: "w-full p-2 border rounded-lg bg-white/70 dark:bg-gray-700/70 backdrop-blur dark:text-white",
          children: badActorsTracks.map(track => /*#__PURE__*/_jsx("option", {
            value: track.id,
            children: track.title
          }, track.id))
        })]
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: "grid grid-cols-1 md:grid-cols-2 gap-8",
      children: [/*#__PURE__*/_jsx(WaveformVisualizer, {
        audioSrc: selectedTrack1.src,
        title: selectedTrack1.title
      }), /*#__PURE__*/_jsx(WaveformVisualizer, {
        audioSrc: selectedTrack2.src,
        title: selectedTrack2.title
      })]
    })]
  });
}