import React, { useState } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function DocumentComparison() {
  const [doc1, setDoc1] = useState("");
  const [doc2, setDoc2] = useState("");
  const [comparison, setComparison] = useState([]);

  // In a real implementation, this would use a diff library like diff2html
  // For now, we'll create a simple placeholder
  const compareDocuments = () => {
    // This is a simplified example - in practice, you'd use a proper diff algorithm
    const changes = [{
      type: "added",
      content: "This content was added in the second document"
    }, {
      type: "removed",
      content: "This content was removed from the first document"
    }, {
      type: "unchanged",
      content: "This content is unchanged between documents"
    }];
    setComparison(changes);
  };
  return /*#__PURE__*/_jsxs("div", {
    className: "mt-8",
    children: [/*#__PURE__*/_jsx("h2", {
      className: "text-2xl font-bold mb-4",
      children: "Document Comparison"
    }), /*#__PURE__*/_jsxs("div", {
      className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",
      children: [/*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("label", {
          className: "block text-sm font-medium mb-2",
          children: "Select First Document"
        }), /*#__PURE__*/_jsxs("select", {
          value: doc1,
          onChange: e => setDoc1(e.target.value),
          className: "w-full p-2 border rounded-lg bg-white/70 backdrop-blur",
          children: [/*#__PURE__*/_jsx("option", {
            value: "",
            children: "Choose a document"
          }), /*#__PURE__*/_jsx("option", {
            value: "franks-motion",
            children: "Franks Hearing Motion"
          }), /*#__PURE__*/_jsx("option", {
            value: "sdtix-complaint",
            children: "Civil Rights Complaint"
          }), /*#__PURE__*/_jsx("option", {
            value: "pcr-motion",
            children: "PCR Motion"
          }), /*#__PURE__*/_jsx("option", {
            value: "ms-revocation-hearing",
            children: "Revocation Hearing Transcript"
          })]
        })]
      }), /*#__PURE__*/_jsxs("div", {
        children: [/*#__PURE__*/_jsx("label", {
          className: "block text-sm font-medium mb-2",
          children: "Select Second Document"
        }), /*#__PURE__*/_jsxs("select", {
          value: doc2,
          onChange: e => setDoc2(e.target.value),
          className: "w-full p-2 border rounded-lg bg-white/70 backdrop-blur",
          children: [/*#__PURE__*/_jsx("option", {
            value: "",
            children: "Choose a document"
          }), /*#__PURE__*/_jsx("option", {
            value: "franks-motion",
            children: "Franks Hearing Motion"
          }), /*#__PURE__*/_jsx("option", {
            value: "sdtix-complaint",
            children: "Civil Rights Complaint"
          }), /*#__PURE__*/_jsx("option", {
            value: "pcr-motion",
            children: "PCR Motion"
          }), /*#__PURE__*/_jsx("option", {
            value: "ms-revocation-hearing",
            children: "Revocation Hearing Transcript"
          })]
        })]
      })]
    }), /*#__PURE__*/_jsx("button", {
      onClick: compareDocuments,
      disabled: !doc1 || !doc2 || doc1 === doc2,
      className: "px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors",
      children: "Compare Documents"
    }), comparison.length > 0 && /*#__PURE__*/_jsxs("div", {
      className: "mt-6 border rounded-xl bg-white/70 backdrop-blur p-4",
      children: [/*#__PURE__*/_jsx("h3", {
        className: "text-lg font-semibold mb-3",
        children: "Differences"
      }), /*#__PURE__*/_jsx("div", {
        className: "space-y-2",
        children: comparison.map((change, index) => /*#__PURE__*/_jsx("div", {
          className: `p-2 rounded ${change.type === "added" ? "bg-green-100 border-l-4 border-green-500" : change.type === "removed" ? "bg-red-100 border-l-4 border-red-500" : "bg-gray-100"}`,
          children: change.content
        }, index))
      })]
    })]
  });
}