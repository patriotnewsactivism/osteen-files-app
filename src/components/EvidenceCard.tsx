import React from "react";
import type { EvidenceItem } from "../data/osteenEvidence";

/**
 * Registry mapping evidence IDs to basic metadata. This allows the card to
 * display friendly titles when rendering related links. The registry is
 * passed in from the page and not imported here directly to avoid circular
 * dependencies.
 */
export type EvidenceRegistry = Record<string, { title: string }>;

export default function EvidenceCard({
  item,
  registry,
}: {
  item: EvidenceItem;
  registry: EvidenceRegistry;
}) {
  return (
    <article
      id={item.id}
      className="scroll-mt-24 rounded-2xl border p-4 md:p-6 shadow-sm bg-white/70 backdrop-blur"
    >
      <header className="mb-3">
        <h3 className="text-xl font-semibold">{item.title}</h3>
        {item.date && (
          <div className="text-sm text-gray-600">
            {item.date} · {item.kind}
          </div>
        )}
      </header>

      {item.highlights.length > 0 && (
        <ul className="list-disc pl-5 space-y-1 mb-3">
          {item.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      )}

      {item.citationTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {item.citationTags.map((c, i) => (
            <span
              key={i}
              className="text-[12px] rounded-full bg-gray-100 px-2 py-1 border"
            >
              {c}
            </span>
          ))}
        </div>
      )}

      {item.externalLinks && item.externalLinks.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {item.externalLinks.map((l, i) => (
            <a
              key={i}
              href={l.url}
              target="_blank"
              rel="noreferrer"
              className="text-sm underline underline-offset-2 decoration-slate-400 hover:decoration-slate-800"
            >
              {l.label} ↗
            </a>
          ))}
        </div>
      )}

      {item.docPath && (
        <details className="mt-2">
          <summary className="cursor-pointer text-sm underline underline-offset-2 decoration-slate-400 hover:decoration-slate-800">
            Preview PDF
          </summary>
          <div className="mt-2 aspect-[4/3] w-full">
            <iframe
              title={item.title}
              src={item.docPath}
              className="w-full h-full rounded-lg border"
            />
          </div>
        </details>
      )}

      {item.relatedIds && item.relatedIds.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {item.relatedIds.map((rid) => (
            <a
              key={rid}
              href={`#${rid}`}
              className="text-[12px] px-2 py-1 rounded-full border hover:bg-gray-50"
              title={registry[rid]?.title ?? rid}
            >
              Related: {registry[rid]?.title ?? rid}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}