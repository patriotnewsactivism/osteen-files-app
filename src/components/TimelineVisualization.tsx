import React from "react";
import { osteenEvidence } from "@/data/osteenEvidence";

// Sort evidence items by date
const sortedEvidence = [...osteenEvidence].sort((a, b) => {
  if (!a.date || !b.date) return 0;
  return new Date(a.date).getTime() - new Date(b.date).getTime();
});

export default function TimelineVisualization() {
  return (
    <div className="mt-8 mb-12">
      <h2 className="text-2xl font-bold mb-6">Case Timeline</h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
        
        <div className="space-y-8 pl-12">
          {sortedEvidence.map((item, index) => (
            <div key={item.id} className="relative">
              {/* Timeline dot */}
              <div className="absolute left-[-28px] top-2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white"></div>
              
              {/* Timeline card */}
              <div className="bg-white/70 backdrop-blur rounded-xl border p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded-full">{item.date}</span>
                </div>
                <div className="mt-2 text-sm text-gray-700">{item.kind}</div>
                <ul className="mt-3 list-disc pl-5 space-y-1">
                  {item.highlights.slice(0, 2).map((h, i) => (
                    <li key={i} className="text-sm">{h}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a href={`#${item.id}`} className="text-sm px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    View Details
                  </a>
                  {item.docPath && (
                    <a href={item.docPath} target="_blank" rel="noreferrer" className="text-sm px-3 py-1 border rounded-lg hover:bg-gray-50 transition-colors">
                      Download PDF
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}