import React, { useEffect } from "react";
import EvidenceCard from "../components/EvidenceCard";
import { osteenEvidence } from "../data/osteenEvidence";
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
export default function OsteenEvidencePage() {
  // Build a lookup table of evidence IDs to their titles for the related chips.
  const registry = Object.fromEntries(osteenEvidence.map(item => [item.id, {
    title: item.title
  }]));

  // Smoothly scroll to the anchor in the hash when the page loads or when
  // the hash changes. Without this effect the browser may jump abruptly.
  useEffect(() => {
    const scrollToHash = () => {
      const id = decodeURIComponent(window.location.hash.replace("#", ""));
      if (!id) return;
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    };
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);
  return /*#__PURE__*/_jsxs("main", {
    className: "max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12",
    children: [/*#__PURE__*/_jsx("h1", {
      className: "text-3xl md:text-4xl font-bold mb-2",
      children: "Osteen Case Evidence"
    }), /*#__PURE__*/_jsx("p", {
      className: "text-gray-700 mb-6",
      children: "Primary\u2011source records and filings tied to the August 11, 2023 stop, the Mississippi revocation hearing and subsequent litigation. Each card contains a short synopsis, citation chips and a PDF preview when available. Use the \u201CRelated\u201D chips to navigate between connected documents."
    }), /*#__PURE__*/_jsx("section", {
      className: "grid gap-4 md:gap-6",
      children: osteenEvidence.map(item => /*#__PURE__*/_jsx(EvidenceCard, {
        item: item,
        registry: registry
      }, item.id))
    })]
  });
}