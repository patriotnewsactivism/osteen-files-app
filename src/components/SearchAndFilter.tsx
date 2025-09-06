import React, { useState } from "react";
import { osteenEvidence } from "@/data/osteenEvidence";

export default function SearchAndFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filteredEvidence, setFilteredEvidence] = useState(osteenEvidence);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    filterEvidence(term, filterType);
  };

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const type = e.target.value;
    setFilterType(type);
    filterEvidence(searchTerm, type);
  };

  const filterEvidence = (term: string, type: string) => {
    let results = osteenEvidence;
    
    if (term) {
      results = results.filter(item => 
        item.title.toLowerCase().includes(term) || 
        item.highlights.some(h => h.toLowerCase().includes(term))
      );
    }
    
    if (type) {
      results = results.filter(item => item.kind === type);
    }
    
    setFilteredEvidence(results);
  };

  const evidenceTypes = Array.from(new Set(osteenEvidence.map(item => item.kind)));

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Search Evidence</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by keyword..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-3 border rounded-lg bg-white/70 backdrop-blur shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <select
          value={filterType}
          onChange={handleFilter}
          className="p-3 border rounded-lg bg-white/70 backdrop-blur shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="">All Document Types</option>
          {evidenceTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>
      
      <div className="text-sm text-gray-600 mb-4">
        Found {filteredEvidence.length} document{filteredEvidence.length !== 1 ? 's' : ''}
      </div>
      
      <div className="grid gap-4 md:gap-6">
        {filteredEvidence.map(item => (
          <article key={item.id} className="rounded-2xl border p-4 md:p-6 shadow-sm bg-white/70 backdrop-blur">
            <header className="mb-3">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <div className="text-sm text-gray-600">{item.date} · {item.kind}</div>
            </header>
            
            <ul className="list-disc pl-5 space-y-1 mb-3">
              {item.highlights.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
            
            <div className="flex flex-wrap gap-2 mb-3">
              {item.citationTags?.map((c, i) => (
                <span key={i} className="text-[12px] rounded-full bg-gray-100 px-2 py-1 border">
                  {c}
                </span>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {item.externalLinks?.map((l, i) => (
                <a key={i} href={l.url} target="_blank" rel="noreferrer"
                   className="text-sm underline underline-offset-2 decoration-slate-400 hover:decoration-slate-800">
                  {l.label} ↗
                </a>
              ))}
              {item.docPath && (
                <a href={item.docPath} target="_blank" rel="noreferrer"
                   className="text-sm px-3 py-1 border rounded-lg hover:bg-gray-50">
                  View PDF
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}