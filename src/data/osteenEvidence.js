// src/data/osteenEvidence.js
/**
 * Primary collection of evidence records for the Osteen case. Each entry
 * corresponds to either a document available in the `public/docs` folder,
 * a summary of video footage, or some other artifact. When adding new
 * evidence, follow the structure established here and remember to include
 * sensible highlights and citations.
 */
export const osteenEvidence = [
  {
    id: "bwc-timeline",
    title: "Body‑Worn Camera Timeline (Osteen & Murph)",
    date: "Aug 11, 2023",
    kind: "Summary",
    externalLinks: [
      {
        label: "01:50 – Osteen (18m)",
        url: "https://www.dropbox.com/scl/fi/oq31x6ynckhuvcsxt0dqq/WilliamOsteen_202308110150_WFC1134313_62678861.mp4?dl=0"
      },
      {
        label: "02:09 – Osteen (1m)",
        url: "https://www.dropbox.com/scl/fi/oq31x6ynckhuvcsxt0dqq/WilliamOsteen_202308110150_WFC1134313_62678861.mp4?dl=0"
      },
      {
        label: "02:11 – Osteen (2m)",
        url: "https://www.dropbox.com/scl/fi/0wsvasxtce3iomhzpzgrg/WilliamOsteen_202308110211_WFC1134313_62678863.mp4?dl=0"
      },
      {
        label: "02:14 – Osteen (27m)",
        url: "https://www.dropbox.com/scl/fi/q52yytndtkej615bvs1t1/WilliamOsteen_202308110214_WFC1134313_62678864.mp4?dl=0"
      },
      {
        label: "02:56 – Osteen (34m)",
        url: "https://www.dropbox.com/scl/fi/2urgmy68njw0aoskxyibd/WilliamOsteen_202308110256_WFC1134313_62686528.mp4?dl=0"
      },
      {
        label: "01:50 – Murph",
        url: "https://www.dropbox.com/scl/fi/nu9n33mx24ez4wz3zxhg1/LarryMurph_202308110150_WFC1041809_135787002.mp4?dl=0"
      },
      {
        label: "02:09 – Murph",
        url: "https://www.dropbox.com/scl/fi/87ao6lcjszgga38flfp05/LarryMurph_202308110209_WFC1041809_135787003.mp4?dl=0"
      },
      {
        label: "02:18 – Murph",
        url: "https://www.dropbox.com/scl/fi/87ao6lcjszgga38flfp05/LarryMurph_202308110218_WFC1041809_135790399.mp4?dl=0"
      }
    ],
    highlights: [
      "Audio is cut or covered at several moments then resumes later in the clips.",
      "Driver requests a breath test; officers indicate the PBT is unavailable; arrest follows.",
      "Footage includes the trip to the hospital, warrant service, restrained blood draw and video upload sequence."
    ],
    citationTags: ["bwc-log"],
    relatedIds: ["ms-revocation-hearing", "sdtix-complaint"]
  },
  {
    id: "ms-revocation-hearing",
    title: "Transcript – Revocation Hearing (Lafayette Co., MS)",
    date: "Jul 18, 2024",
    kind: "Transcript",
    docPath: "/docs/07-18-24-Reardon.pdf",
    highlights: [
      "Court describes the defendant as on unsupervised probation and overrules a 47‑7‑37 objection.",
      "Defense notes inconsistencies in the petition regarding post‑release versus unsupervised status.",
      "State's proof ties an alleged Texas 'felony DUI' to the claimed probation violation."
    ],
    citationTags: ["revocation-transcript"],
    relatedIds: ["galveston-dwi-packet", "pcr-motion", "sdtix-complaint"]
  },
  {
    id: "sdtix-complaint",
    title: "Civil Rights Complaint – Reardon v. Osteen et al. (TXSD)",
    date: "May 27, 2025",
    kind: "Court Filing",
    docPath: "/docs/SDTX-3-25-cv-00159-Complaint.pdf",
    highlights: [
      "Alleges perjury in the blood‑draw warrant affidavit and seeks suppression under Franks v. Delaware and Wong Sun.",
      "Asserts a coordinated interstate scheme and First/Fourth/Fourteenth Amendment violations.",
      "Names Osteen, Doraty, McDougle, GPD, UTMB and Mississippi officials as defendants."
    ],
    citationTags: ["civil-complaint"],
    relatedIds: ["franks-motion", "galveston-dwi-packet", "pcr-motion"]
  },
  {
    id: "pcr-motion",
    title: "Motion for Post‑Conviction Relief (Mississippi)",
    date: "Nov 26, 2024",
    kind: "Court Filing",
    docPath: "/docs/2024-11-26-Motion-for-PCR.pdf",
    highlights: [
      "Argues that any Texas DUI would be a misdemeanor and thus constitutes only a 'technical violation'.",
      "Notes that a second technical revocation is capped at 120 days and requests vacatur and re‑sentencing.",
      "Cites Knight v. State and multiple circuit precedents addressing technical violations."
    ],
    citationTags: ["pcr-motion"],
    relatedIds: ["ms-revocation-hearing", "sdtix-complaint"]
  },
  {
    id: "franks-motion",
    title: "Motion for a Franks Hearing (TX DWI Case)",
    date: "2023–2024",
    kind: "Court Filing",
    docPath: "/docs/Motion-for-Franks-Hearing.pdf",
    highlights: [
      "Challenges the blood‑draw warrant affidavit as containing knowingly false statements by Officer Osteen.",
      "Invokes Franks v. Delaware, arguing that perjury in the affidavit requires suppression of the evidence.",
      "Highlights contradictions between the affidavit's claims and toxicology results and body‑cam footage."
    ],
    citationTags: ["franks-motion"],
    relatedIds: ["sdtix-complaint", "ms-revocation-hearing"]
  },
  {
    id: "galveston-dwi-packet",
    title: "Compiled Galveston DWI Documents",
    date: "Aug 2023 – Jun 2024",
    kind: "Court Filing / Records",
    docPath: "/docs/Galveston-DWI-Documents.pdf",
    highlights: [
      "Includes the Aug. 17, 2023 petition to revoke probation citing a Galveston 'felony DWI' charge.",
      "Bench warrant and revocation order reference differing probation bases, creating inconsistencies.",
      "Contains Governor Tate Reeves' rendition request labeling Reardon a 'fugitive'.",
      "Appendices provide booking reports showing arrests, charges and detainers in Galveston County."
    ],
    citationTags: ["galveston-dwi"],
    relatedIds: ["franks-motion", "ms-revocation-hearing"]
  }
];