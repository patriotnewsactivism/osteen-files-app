import React, { useEffect } from "react";
import EvidenceCard from "@/components/EvidenceCard";
import { osteenEvidence } from "@/data/osteenEvidence";
import TimelineVisualization from "@/components/TimelineVisualization";
import DocumentComparison from "@/components/DocumentComparison";
import SearchAndFilter from "@/components/SearchAndFilter";

export default function OsteenEvidence() {
  // Build a registry: id -> title (for related chip labels)
  const registry = Object.fromEntries(osteenEvidence.map(i => [i.id, { title: i.title }]));

  // Smooth-scroll to hash on initial load or when hash changes
  useEffect(() => {
    const scrollToHash = () => {
      const id = decodeURIComponent(window.location.hash.replace("#", ""));
      if (!id) return;
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <main className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-2 dark:text-white">Osteen Case Evidence</h1>
      <p className="text-gray-700 mb-6 dark:text-gray-300">
        Primary-source records and filings. Use the "Related" chips to jump between connected documents.
      </p>

      {/* Timeline Visualization */}
      <TimelineVisualization />

      {/* Document Comparison Tool */}
      <DocumentComparison />

      {/* Search and Filter */}
      <SearchAndFilter />

      <section className="grid gap-4 md:gap-6 mt-8">
        {osteenEvidence.map((item) => (
          <EvidenceCard key={item.id} item={item} registry={registry} />
        ))}
      </section>
    </main>
  );
}