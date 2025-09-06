export type EvidenceItem = {
  id: string;
  title: string;
  date?: string;
  kind: "PDF" | "Transcript" | "Court Filing" | "Summary";
  docPath?: string;       // if served from /public/docs
  externalLinks?: { label: string; url: string }[];
  highlights: string[];   // short bullets shown on the card
  citationTags: string[]; // renders small "source" chips
  relatedIds?: string[]; // NEW: link to other evidence items by id
};

export const osteenEvidence: EvidenceItem[] = [
  {
    id: "bwc-timeline",
    title: "Body-Worn Camera Timeline (Osteen & Murph)",
    date: "Aug 11, 2023",
    kind: "Summary",
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
    citationTags: [ ":contentReference[oaicite:0]{index=0}" ] // scene footage summary doc
  },
  {
    id: "ms-revocation-hearing",
    title: "Transcript – Revocation Hearing (Lafayette Co., MS)",
    date: "Jul 18, 2024",
    kind: "Transcript",
    docPath: "/public/docs/07-18-24-Reardon.pdf",
    highlights: [
      "Court describes status as unsupervised probation and overrules 47-7-37 objection.",
      "Defense notes petition inconsistencies (post-release vs. unsupervised).",
      "State's proof ties alleged Texas 'felony DUI' to probation violation."
    ],
    citationTags: [ ":contentReference[oaicite:1]{index=1}" ],
    relatedIds: ["galveston-dwi-packet", "pcr-motion", "sdtix-complaint"]
  },
  {
    id: "sdtix-complaint",
    title: "Civil Rights Complaint – Reardon v. Osteen et al. (TXSD)",
    date: "May 27, 2025",
    kind: "Court Filing",
    docPath: "/public/docs/SDTX-3-25-cv-00159-Complaint.pdf",
    highlights: [
      "Alleges perjury in blood-draw warrant and suppression under Franks/Wong Sun.",
      "Asserts coordinated, interstate scheme and First/Fourth/Fourteenth violations.",
      "Names Osteen, Doraty, McDougle, GPD, UTMB, and MS officials."
    ],
    citationTags: [ ":contentReference[oaicite:2]{index=2}" ],
    relatedIds: ["franks-motion", "galveston-dwi-packet", "pcr-motion"]
  },
  {
    id: "pcr-motion",
    title: "Motion for Post-Conviction Relief (Mississippi)",
    date: "Nov 26, 2024",
    kind: "Court Filing",
    docPath: "/public/docs/2024-11-26-Motion-for-PCR.pdf",
    highlights: [
      "Argues any Texas DUI would be a misdemeanor → 'technical violation'.",
      "Second technical revocation capped at 120 days; requests vacatur/re-sentencing.",
      "Cites Knight v. State and multiple circuit precedents on technical violations."
    ],
    citationTags: [ ":contentReference[oaicite:3]{index=3}" ],
    relatedIds: ["ms-revocation-hearing", "sdtix-complaint"]
  },
  {
    id: "franks-motion",
    title: "Motion for a Franks Hearing (TX DWI Case)",
    date: "2023–2024",
    kind: "Court Filing",
    docPath: "/public/docs/Motion-for-Franks-Hearing.pdf",
    highlights: [
      "Challenges Osteen's warrant affidavit as containing knowingly false statements.",
      "Invokes Franks v. Delaware, requiring suppression where perjury taints the warrant.",
      "Contradictions noted between affidavit claims and toxicology/body-cam evidence."
    ],
    citationTags: [ "" ],
    relatedIds: ["sdtix-complaint", "ms-revocation-hearing"]
  },
  {
    id: "galveston-dwi-packet",
    title: "Compiled Galveston DWI Documents",
    date: "Aug 2023 – Jun 2024",
    kind: "Court Filing / Records",
    docPath: "/public/docs/Galveston-DWI-Documents.pdf",
    highlights: [
      "Petition to Revoke (Aug 17, 2023) cites a Galveston 'felony DWI' charge.",
      "Bench warrant and revocation order inconsistently reference probation bases.",
      "Governor Tate Reeves' rendition request labels Reardon a 'fugitive'.",
      "Galveston County booking reports log arrests, charges, and detainers."
    ],
    citationTags: [ "" ],
    relatedIds: ["franks-motion", "ms-revocation-hearing"]
  }
];

/** Helper: update an item by id without duplicating objects */
function updateItem(id: string, patch: Partial<EvidenceItem>) {
  const idx = osteenEvidence.findIndex(i => i.id === id);
  if (idx !== -1) osteenEvidence[idx] = { ...osteenEvidence[idx], ...patch };
}