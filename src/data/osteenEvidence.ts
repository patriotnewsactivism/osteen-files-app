export type EvidenceItem = {
  id: string;
  title: string;
  date?: string;
  kind: "PDF" | "Transcript" | "Court Filing" | "Summary" | "Video Evidence";
  docPath?: string;
  externalLinks?: { label: string; url: string }[];
  highlights: string[];
  citationTags: string[];
  relatedIds?: string[];
  keywords: string[]; // for search functionality
  jurisdiction: string; // for filtering
  significance: "high" | "medium" | "low"; // for prioritization
  summary: string; // detailed summary for search
};

export const osteenEvidence: EvidenceItem[] = [
  {
    id: "bwc-timeline",
    title: "Body-Worn Camera Timeline (Osteen & Murph)",
    date: "2023-08-11",
    kind: "Video Evidence",
    externalLinks: [
      { label: "01:50 – Osteen (18m)", url: "https://www.dropbox.com/scl/fi/oq31x6ynckhuvcsxt0dqq/WilliamOsteen_202308110150_WFC1134313_62678861.mp4?dl=0" },
      { label: "02:09 – Osteen (1m)",  url: "https://www.dropbox.com/scl/fi/oq31x6ynckhuvcsxt0dqq/WilliamOsteen_202308110150_WFC1134313_62678861.mp4?dl=0" },
      { label: "02:11 – Osteen (2m)",  url: "https://www.dropbox.com/scl/fi/0wsvasxtce3iomhzpzgrg/WilliamOsteen_202308110211_WFC1134313_62678863.mp4?dl=0" },
      { label: "02:14 – Osteen (27m)", url: "https://www.dropbox.com/scl/fi/q52yytndtkej615bvs1t1/WilliamOsteen_202308110214_WFC1134313_62678864.mp4?dl=0" },
      { label: "02:56 – Osteen (34m)", url: "https://www.dropbox.com/scl/fi/2urgmy68njw0aoskxyibd/WilliamOsteen_202308110256_WFC1134313_62686528.mp4?dl=0" },
      { label: "01:50 – Murph",         url: "https://www.dropbox.com/scl/fi/nu9n33mx24ez4wz3zxhg1/LarryMurph_202308110150_WFC1041809_135787002.mp4?dl=0" },
      { label: "02:09 – Murph",         url: "https://www.dropbox.com/scl/fi/87ao6lcjszgga38flfp05/LarryMurph_202308110209_WFC1041809_135787003.mp4?dl=0" },
      { label: "02:18 – Murph",         url: "https://www.dropbox.com/scl/fi/87ao6lcjszgga38flfp05/LarryMurph_202308110218_WFC1041809_135790399.mp4?dl=0" }
    ],
    highlights: [
      "Audio is cut/covered at key moments; resumes later in clips.",
      "Driver requests breath test; officers say PBT unavailable; arrest ensues.",
      "Hospital trip, warrant, restrained blood draw, and upload sequence recorded."
    ],
    citationTags: ["Video Evidence", "Body Camera"],
    relatedIds: ["franks-motion", "sdtix-complaint"],
    keywords: ["body camera", "audio gaps", "breath test", "PBT", "blood draw", "warrant", "Osteen", "Murph"],
    jurisdiction: "Texas - Galveston County",
    significance: "high",
    summary: "Complete body-worn camera footage from Officers Osteen and Murph during the August 11, 2023 traffic stop. Shows critical audio gaps, refusal to provide breath test equipment, forced blood draw at hospital, and warrant execution. Key evidence for constitutional violations."
  },
  {
    id: "ms-revocation-hearing",
    title: "Transcript – Revocation Hearing (Lafayette Co., MS)",
    date: "2024-07-18",
    kind: "Transcript",
    docPath: "/docs/07-18-24-Reardon.pdf",
    highlights: [
      "Court describes status as unsupervised probation and overrules 47-7-37 objection.",
      "Defense notes petition inconsistencies (post-release vs. unsupervised).",
      "State's proof ties alleged Texas 'felony DUI' to probation violation."
    ],
    citationTags: ["Court Transcript", "Probation Revocation"],
    relatedIds: ["galveston-dwi-packet", "pcr-motion", "sdtix-complaint"],
    keywords: ["probation", "revocation", "unsupervised", "47-7-37", "felony DUI", "Lafayette County"],
    jurisdiction: "Mississippi - Lafayette County",
    significance: "high", 
    summary: "Official court transcript of probation revocation hearing. Shows court's treatment of unsupervised probation status, defense objections under Mississippi Code 47-7-37, and state's reliance on alleged Texas felony DUI charge that forms basis for interstate legal coordination."
  },
  {
    id: "sdtix-complaint",
    title: "Civil Rights Complaint – Reardon v. Osteen et al. (TXSD)",
    date: "2025-05-27",
    kind: "Court Filing",
    docPath: "/docs/SDTX-3-25-cv-00159-Complaint.pdf",
    highlights: [
      "Alleges perjury in blood-draw warrant and suppression under Franks/Wong Sun.",
      "Asserts coordinated, interstate scheme and First/Fourth/Fourteenth violations.",
      "Names Osteen, Doraty, McDougle, GPD, UTMB, and MS officials."
    ],
    citationTags: ["Federal Complaint", "Civil Rights", "§1983"],
    relatedIds: ["franks-motion", "galveston-dwi-packet", "bwc-timeline", "pcr-motion"],
    keywords: ["civil rights", "Franks", "Wong Sun", "perjury", "warrant", "interstate", "conspiracy", "1983"],
    jurisdiction: "Federal - Texas Southern District",
    significance: "high",
    summary: "Federal civil rights complaint alleging coordinated interstate scheme involving perjured warrant affidavits, constitutional violations, and conspiracy between Texas and Mississippi officials. Claims violations of First, Fourth, and Fourteenth Amendments under 42 U.S.C. § 1983."
  },
  {
    id: "pcr-motion",
    title: "Motion for Post-Conviction Relief (Mississippi)",
    date: "2024-11-26",
    kind: "Court Filing", 
    docPath: "/docs/2024-11-26-Motion-for-PCR.pdf",
    highlights: [
      "Argues any Texas DUI would be a misdemeanor → 'technical violation'.",
      "Second technical revocation capped at 120 days; requests vacatur/re-sentencing.",
      "Cites Knight v. State and multiple circuit precedents on technical violations."
    ],
    citationTags: ["Post-Conviction Relief", "Technical Violation"],
    relatedIds: ["ms-revocation-hearing", "sdtix-complaint"],
    keywords: ["post-conviction", "technical violation", "120 days", "Knight v State", "misdemeanor", "revocation"],
    jurisdiction: "Mississippi - Lafayette County",
    significance: "high",
    summary: "Motion for post-conviction relief arguing that any Texas DUI charge would constitute only a misdemeanor and therefore a 'technical violation' under Mississippi law, limiting sentence to 120 days for second technical revocation."
  },
  {
    id: "franks-motion",
    title: "Motion for a Franks Hearing (TX DWI Case)",
    date: "2023-2024",
    kind: "Court Filing",
    docPath: "/docs/Motion-for-Franks-Hearing.pdf", 
    highlights: [
      "Challenges Osteen's warrant affidavit as containing knowingly false statements.",
      "Invokes Franks v. Delaware, requiring suppression where perjury taints the warrant.",
      "Contradictions noted between affidavit claims and toxicology/body-cam evidence."
    ],
    citationTags: ["Franks Motion", "Warrant Challenge", "Perjury"],
    relatedIds: ["bwc-timeline", "sdtix-complaint"],
    keywords: ["Franks", "warrant", "perjury", "false statements", "suppression", "toxicology", "affidavit"],
    jurisdiction: "Texas - Galveston County", 
    significance: "high",
    summary: "Motion under Franks v. Delaware challenging the warrant affidavit for blood draw, alleging Officer Osteen made knowingly false statements. Seeks suppression of evidence obtained through perjured warrant, with contradictions between sworn affidavit and body camera footage."
  },
  {
    id: "galveston-dwi-packet",
    title: "Compiled Galveston DWI Documents",
    date: "2023-08 – 2024-06",
    kind: "Court Filing",
    docPath: "/docs/Galveston-DWI-Documents.pdf",
    highlights: [
      "Petition to Revoke (Aug 17, 2023) cites a Galveston 'felony DUI' charge.",
      "Bench warrant and revocation order inconsistently reference probation bases.", 
      "Governor Tate Reeves' rendition request labels Reardon a 'fugitive'.",
      "Galveston County booking reports log arrests, charges, and detainers."
    ],
    citationTags: ["DWI Documents", "Interstate Coordination"],
    relatedIds: ["ms-revocation-hearing", "franks-motion", "sdtix-complaint"],
    keywords: ["DWI", "felony", "petition", "revoke", "fugitive", "Tate Reeves", "rendition", "booking", "detainer"],
    jurisdiction: "Texas - Galveston County / Mississippi",
    significance: "high",
    summary: "Comprehensive packet of documents from the Galveston DWI case including petition to revoke probation, bench warrants, Governor Reeves' rendition request labeling defendant as fugitive, and booking records showing interstate coordination between Texas and Mississippi authorities."
  }
];

// Filter and search utilities
export const evidenceKeywords = Array.from(
  new Set(osteenEvidence.flatMap(item => item.keywords))
).sort();

export const evidenceJurisdictions = Array.from(
  new Set(osteenEvidence.map(item => item.jurisdiction))
).sort();

export const evidenceTypes = Array.from(
  new Set(osteenEvidence.map(item => item.kind))
).sort();