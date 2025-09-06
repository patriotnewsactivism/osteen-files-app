import React from "react";

/**
 * Registry mapping evidence IDs to basic metadata. This allows the card to
 * display friendly titles when rendering related links. The registry is
 * passed in from the page and not imported here directly to avoid circular
 * dependencies.
 */
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function EvidenceCard({
  item,
  registry
}) {
  return /*#__PURE__*/_jsxs("article", {
    id: item.id,
    className: "scroll-mt-24 rounded-2xl border p-4 md:p-6 shadow-sm bg-white/70 backdrop-blur",
    children: [/*#__PURE__*/_jsxs("header", {
      className: "mb-3",
      children: [/*#__PURE__*/_jsx("h3", {
        className: "text-xl font-semibold",
        children: item.title
      }), item.date && /*#__PURE__*/_jsxs("div", {
        className: "text-sm text-gray-600",
        children: [item.date, " \xB7 ", item.kind]
      })]
    }), item.highlights.length > 0 && /*#__PURE__*/_jsx("ul", {
      className: "list-disc pl-5 space-y-1 mb-3",
      children: item.highlights.map((h, i) => /*#__PURE__*/_jsx("li", {
        children: h
      }, i))
    }), item.citationTags.length > 0 && /*#__PURE__*/_jsx("div", {
      className: "flex flex-wrap gap-2 mb-3",
      children: item.citationTags.map((c, i) => /*#__PURE__*/_jsx("span", {
        className: "text-[12px] rounded-full bg-gray-100 px-2 py-1 border",
        children: c
      }, i))
    }), item.externalLinks && item.externalLinks.length > 0 && /*#__PURE__*/_jsx("div", {
      className: "flex flex-wrap gap-2 mb-3",
      children: item.externalLinks.map((l, i) => /*#__PURE__*/_jsxs("a", {
        href: l.url,
        target: "_blank",
        rel: "noreferrer",
        className: "text-sm underline underline-offset-2 decoration-slate-400 hover:decoration-slate-800",
        children: [l.label, " \u2197"]
      }, i))
    }), item.docPath && /*#__PURE__*/_jsxs("details", {
      className: "mt-2",
      children: [/*#__PURE__*/_jsx("summary", {
        className: "cursor-pointer text-sm underline underline-offset-2 decoration-slate-400 hover:decoration-slate-800",
        children: "Preview PDF"
      }), /*#__PURE__*/_jsx("div", {
        className: "mt-2 aspect-[4/3] w-full",
        children: /*#__PURE__*/_jsx("iframe", {
          title: item.title,
          src: item.docPath,
          className: "w-full h-full rounded-lg border"
        })
      })]
    }), item.relatedIds && item.relatedIds.length > 0 && /*#__PURE__*/_jsx("div", {
      className: "mt-4 flex flex-wrap gap-2",
      children: item.relatedIds.map(rid => /*#__PURE__*/_jsxs("a", {
        href: `#${rid}`,
        className: "text-[12px] px-2 py-1 rounded-full border hover:bg-gray-50",
        title: registry[rid]?.title ?? rid,
        children: ["Related: ", registry[rid]?.title ?? rid]
      }, rid))
    })]
  });
}