import React from "react";
import { osteenEvidence } from "@/data/osteenEvidence";

// Sort evidence items by date
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const sortedEvidence = [...osteenEvidence].sort((a, b) => {
  if (!a.date || !b.date) return 0;
  return new Date(a.date).getTime() - new Date(b.date).getTime();
});
export default function TimelineVisualization() {
  return /*#__PURE__*/_jsxs("div", {
    className: "mt-8 mb-12",
    children: [/*#__PURE__*/_jsx("h2", {
      className: "text-2xl font-bold mb-6",
      children: "Case Timeline"
    }), /*#__PURE__*/_jsxs("div", {
      className: "relative",
      children: [/*#__PURE__*/_jsx("div", {
        className: "absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"
      }), /*#__PURE__*/_jsx("div", {
        className: "space-y-8 pl-12",
        children: sortedEvidence.map((item, index) => /*#__PURE__*/_jsxs("div", {
          className: "relative",
          children: [/*#__PURE__*/_jsx("div", {
            className: "absolute left-[-28px] top-2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white"
          }), /*#__PURE__*/_jsxs("div", {
            className: "bg-white/70 backdrop-blur rounded-xl border p-4 shadow-sm hover:shadow-md transition-shadow",
            children: [/*#__PURE__*/_jsxs("div", {
              className: "flex justify-between items-start",
              children: [/*#__PURE__*/_jsx("h3", {
                className: "text-lg font-semibold",
                children: item.title
              }), /*#__PURE__*/_jsx("span", {
                className: "text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded-full",
                children: item.date
              })]
            }), /*#__PURE__*/_jsx("div", {
              className: "mt-2 text-sm text-gray-700",
              children: item.kind
            }), /*#__PURE__*/_jsx("ul", {
              className: "mt-3 list-disc pl-5 space-y-1",
              children: item.highlights.slice(0, 2).map((h, i) => /*#__PURE__*/_jsx("li", {
                className: "text-sm",
                children: h
              }, i))
            }), /*#__PURE__*/_jsxs("div", {
              className: "mt-4 flex flex-wrap gap-2",
              children: [/*#__PURE__*/_jsx("a", {
                href: `#${item.id}`,
                className: "text-sm px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors",
                children: "View Details"
              }), item.docPath && /*#__PURE__*/_jsx("a", {
                href: item.docPath,
                target: "_blank",
                rel: "noreferrer",
                className: "text-sm px-3 py-1 border rounded-lg hover:bg-gray-50 transition-colors",
                children: "Download PDF"
              })]
            })]
          })]
        }, item.id))
      })]
    })]
  });
}