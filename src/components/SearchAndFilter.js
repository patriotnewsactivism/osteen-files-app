import React, { useState } from "react";
import { osteenEvidence } from "@/data/osteenEvidence";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function SearchAndFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filteredEvidence, setFilteredEvidence] = useState(osteenEvidence);
  const handleSearch = e => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    filterEvidence(term, filterType);
  };
  const handleFilter = e => {
    const type = e.target.value;
    setFilterType(type);
    filterEvidence(searchTerm, type);
  };
  const filterEvidence = (term, type) => {
    let results = osteenEvidence;
    if (term) {
      results = results.filter(item => item.title.toLowerCase().includes(term) || item.highlights.some(h => h.toLowerCase().includes(term)));
    }
    if (type) {
      results = results.filter(item => item.kind === type);
    }
    setFilteredEvidence(results);
  };
  const evidenceTypes = Array.from(new Set(osteenEvidence.map(item => item.kind)));
  return /*#__PURE__*/_jsxs("div", {
    className: "mt-8",
    children: [/*#__PURE__*/_jsx("h2", {
      className: "text-2xl font-bold mb-4",
      children: "Search Evidence"
    }), /*#__PURE__*/_jsxs("div", {
      className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",
      children: [/*#__PURE__*/_jsx("input", {
        type: "text",
        placeholder: "Search by keyword...",
        value: searchTerm,
        onChange: handleSearch,
        className: "p-3 border rounded-lg bg-white/70 backdrop-blur shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
      }), /*#__PURE__*/_jsxs("select", {
        value: filterType,
        onChange: handleFilter,
        className: "p-3 border rounded-lg bg-white/70 backdrop-blur shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none",
        children: [/*#__PURE__*/_jsx("option", {
          value: "",
          children: "All Document Types"
        }), evidenceTypes.map(type => /*#__PURE__*/_jsx("option", {
          value: type,
          children: type
        }, type))]
      })]
    }), /*#__PURE__*/_jsxs("div", {
      className: "text-sm text-gray-600 mb-4",
      children: ["Found ", filteredEvidence.length, " document", filteredEvidence.length !== 1 ? 's' : '']
    }), /*#__PURE__*/_jsx("div", {
      className: "grid gap-4 md:gap-6",
      children: filteredEvidence.map(item => /*#__PURE__*/_jsxs("article", {
        className: "rounded-2xl border p-4 md:p-6 shadow-sm bg-white/70 backdrop-blur",
        children: [/*#__PURE__*/_jsxs("header", {
          className: "mb-3",
          children: [/*#__PURE__*/_jsx("h3", {
            className: "text-xl font-semibold",
            children: item.title
          }), /*#__PURE__*/_jsxs("div", {
            className: "text-sm text-gray-600",
            children: [item.date, " \xB7 ", item.kind]
          })]
        }), /*#__PURE__*/_jsx("ul", {
          className: "list-disc pl-5 space-y-1 mb-3",
          children: item.highlights.map((h, i) => /*#__PURE__*/_jsx("li", {
            children: h
          }, i))
        }), /*#__PURE__*/_jsx("div", {
          className: "flex flex-wrap gap-2 mb-3",
          children: item.citationTags?.map((c, i) => /*#__PURE__*/_jsx("span", {
            className: "text-[12px] rounded-full bg-gray-100 px-2 py-1 border",
            children: c
          }, i))
        }), /*#__PURE__*/_jsxs("div", {
          className: "flex flex-wrap gap-2",
          children: [item.externalLinks?.map((l, i) => /*#__PURE__*/_jsxs("a", {
            href: l.url,
            target: "_blank",
            rel: "noreferrer",
            className: "text-sm underline underline-offset-2 decoration-slate-400 hover:decoration-slate-800",
            children: [l.label, " \u2197"]
          }, i)), item.docPath && /*#__PURE__*/_jsx("a", {
            href: item.docPath,
            target: "_blank",
            rel: "noreferrer",
            className: "text-sm px-3 py-1 border rounded-lg hover:bg-gray-50",
            children: "View PDF"
          })]
        })]
      }, item.id))
    })]
  });
}