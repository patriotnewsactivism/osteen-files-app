import React, { useState } from "react";
import AudioPlayer from "../components/AudioPlayer";
import { albumInfo, badActorsTracks } from "../data/badActors";
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
export default function BadActorsPage() {
  // The ID of the track to start playing when the user clicks a play button.
  const [startId, setStartId] = useState(undefined);
  return /*#__PURE__*/_jsxs("main", {
    className: "max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12",
    children: [/*#__PURE__*/_jsxs("div", {
      className: "flex items-start gap-6",
      children: [/*#__PURE__*/_jsx("img", {
        src: albumInfo.cover,
        alt: `${albumInfo.title} cover`,
        className: "w-40 h-40 rounded-xl object-cover border",
        onError: e => {
          // Fallback to a gray block if the cover image fails to load.
          e.target.src = "/public/images/bad-actors-cover.jpg";
        }
      }), /*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("h1", {
          className: "text-3xl md:text-4xl font-bold",
          children: albumInfo.title
        }), /*#__PURE__*/_jsxs("p", {
          className: "text-gray-700",
          children: [albumInfo.artist, " \xB7 ", albumInfo.year]
        }), /*#__PURE__*/_jsx("p", {
          className: "mt-2 text-gray-600",
          children: "Stream the full album right here. Headphones recommended."
        })]
      })]
    }), /*#__PURE__*/_jsx("div", {
      className: "mt-6",
      children: /*#__PURE__*/_jsx("iframe", {
        src: `https://www.bandlab.com/embed/collection/?id=${albumInfo.bandlabId ?? albumInfo.bandlabUrl.split("/").pop()}`,
        width: "100%",
        height: "720",
        allow: "autoplay; encrypted-media; clipboard-write; fullscreen",
        sandbox: "allow-scripts allow-same-origin allow-popups",
        title: "BandLab Album Embed",
        className: "rounded-xl border"
      })
    }), /*#__PURE__*/_jsx("ol", {
      className: "mt-6 divide-y rounded-xl border bg-white/70 backdrop-blur",
      children: badActorsTracks.map((t, i) => /*#__PURE__*/_jsxs("li", {
        className: "flex items-center justify-between gap-4 p-3",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "min-w-0",
          children: [/*#__PURE__*/_jsx("div", {
            className: "text-sm text-gray-500",
            children: String(i + 1).padStart(2, "0")
          }), /*#__PURE__*/_jsx("div", {
            className: "font-medium truncate",
            children: t.title
          }), t.explicit && /*#__PURE__*/_jsx("span", {
            className: "text-[10px] rounded px-1.5 py-0.5 border",
            children: "Explicit"
          })]
        }), /*#__PURE__*/_jsx("button", {
          className: "shrink-0 px-3 py-1.5 rounded-lg border hover:bg-gray-50",
          onClick: () => setStartId(t.id),
          "aria-label": `Play ${t.title}`,
          children: "\u25B6\uFE0F Play"
        })]
      }, t.id))
    }), /*#__PURE__*/_jsx(AudioPlayer, {
      tracks: badActorsTracks,
      startId: startId
    }), /*#__PURE__*/_jsx("div", {
      className: "h-20"
    })]
  });
}