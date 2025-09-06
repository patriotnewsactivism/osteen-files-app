import React, { useState } from "react";

export default function DocumentComparison() {
  const [doc1, setDoc1] = useState("");
  const [doc2, setDoc2] = useState("");
  const [comparison, setComparison] = useState<any[]>([]);

  // In a real implementation, this would use a diff library like diff2html
  // For now, we'll create a simple placeholder
  const compareDocuments = () => {
    // This is a simplified example - in practice, you'd use a proper diff algorithm
    const changes = [
      { type: "added", content: "This content was added in the second document" },
      { type: "removed", content: "This content was removed from the first document" },
      { type: "unchanged", content: "This content is unchanged between documents" }
    ];
    setComparison(changes);
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Document Comparison</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium mb-2">Select First Document</label>
          <select 
            value={doc1} 
            onChange={(e) => setDoc1(e.target.value)}
            className="w-full p-2 border rounded-lg bg-white/70 backdrop-blur"
          >
            <option value="">Choose a document</option>
            <option value="franks-motion">Franks Hearing Motion</option>
            <option value="sdtix-complaint">Civil Rights Complaint</option>
            <option value="pcr-motion">PCR Motion</option>
            <option value="ms-revocation-hearing">Revocation Hearing Transcript</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Select Second Document</label>
          <select 
            value={doc2} 
            onChange={(e) => setDoc2(e.target.value)}
            className="w-full p-2 border rounded-lg bg-white/70 backdrop-blur"
          >
            <option value="">Choose a document</option>
            <option value="franks-motion">Franks Hearing Motion</option>
            <option value="sdtix-complaint">Civil Rights Complaint</option>
            <option value="pcr-motion">PCR Motion</option>
            <option value="ms-revocation-hearing">Revocation Hearing Transcript</option>
          </select>
        </div>
      </div>
      <button 
        onClick={compareDocuments}
        disabled={!doc1 || !doc2 || doc1 === doc2}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
      >
        Compare Documents
      </button>

      {comparison.length > 0 && (
        <div className="mt-6 border rounded-xl bg-white/70 backdrop-blur p-4">
          <h3 className="text-lg font-semibold mb-3">Differences</h3>
          <div className="space-y-2">
            {comparison.map((change, index) => (
              <div 
                key={index} 
                className={`p-2 rounded ${
                  change.type === "added" ? "bg-green-100 border-l-4 border-green-500" : 
                  change.type === "removed" ? "bg-red-100 border-l-4 border-red-500" : 
                  "bg-gray-100"
                }`}
              >
                {change.content}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}