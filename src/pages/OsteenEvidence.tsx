import React, { useEffect } from "react";
import EvidenceCard from "../components/EvidenceCard";
import { osteenEvidence } from "../data/osteenEvidence";

export default function OsteenEvidencePage() {
  // Build a lookup table of evidence IDs to their titles for the related chips.
  const registry = Object.fromEntries(
    osteenEvidence.map((item) => [item.id, { title: item.title }])
  );

  // Smoothly scroll to the anchor in the hash when the page loads or when
  // the hash changes. Without this effect the browser may jump abruptly.
  useEffect(() => {
    const scrollToHash = () => {
      const id = decodeURIComponent(window.location.hash.replace("#", ""));
      if (!id) return;
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <main className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">
        Osteen Case Evidence
      </h1>
      <p className="text-gray-700 mb-6">
        Primary‑source records and filings tied to the August 11, 2023 stop, the
        Mississippi revocation hearing and subsequent litigation. Each card
        contains a short synopsis, citation chips and a PDF preview when
        available. Use the “Related” chips to navigate between connected
        documents.
      </p>
      <section className="grid gap-4 md:gap-6">
        {osteenEvidence.map((item) => (
          <EvidenceCard key={item.id} item={item} registry={registry} />
        ))}
      </section>
    </main>
  );
}