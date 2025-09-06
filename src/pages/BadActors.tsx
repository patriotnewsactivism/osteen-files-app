export type Track = {
  id: string;
  title: string;
  artist: string;
  duration: number; // in seconds
  bandlabUrl?: string;
  explicit?: boolean;
  description?: string;
};

export const albumInfo = {
  slug: "bad-actors",
  title: "Bad Actors",
  artist: "Outlawed Productions", 
  year: 2025,
  cover: "/images/bad-actors-cover.jpg",
  bandlabUrl: "https://www.bandlab.com/outlawedpro/albums/99c1bfc3-3a57-f011-8dc9-6045bd36a27a",
  description: "A powerful chronicle of justice, corruption, and the fight for truth in the American legal system."
};

export const badActorsTracks: Track[] = [
  {
    id: "silence-aint-consent",
    title: "Silence Ain't Consent (North Mississippi's Warning)",
    artist: "Outlawed Productions",
    duration: 210, // 03:30
    description: "A warning about the dangers of staying silent in the face of injustice."
  },
  {
    id: "unbroken", 
    title: "Unbroken",
    artist: "Outlawed Productions",
    duration: 303, // 05:03
    description: "A testament to resilience and the unbreakable spirit of truth."
  },
  {
    id: "in-the-shadows-tonight",
    title: "In The Shadows Tonight (The Reckoning)",
    artist: "Outlawed Productions", 
    duration: 199, // 03:19
    description: "The reckoning comes for those who hide in shadows."
  },
  {
    id: "double-dipped",
    title: "Double Dipped",
    artist: "Outlawed Productions",
    duration: 338, // 05:38
    description: "Exposing the double standards in the system."
  },
  {
    id: "morgan-county-blues",
    title: "Morgan County Blues", 
    artist: "Outlawed Productions",
    duration: 243, // 04:03
    description: "The story of Morgan County's judicial system."
  },
  {
    id: "warrant-for-a-lie",
    title: "A Warrant For A Lie",
    artist: "Outlawed Productions",
    duration: 211, // 03:31
    description: "When law enforcement fabricates evidence for warrants."
  },
  {
    id: "osteen-files-exhibit-l", 
    title: "The Osteen Files- Exhibit L",
    artist: "Outlawed Productions",
    duration: 229, // 03:49
    description: "Deep dive into the Osteen case evidence."
  },
  {
    id: "crowder-files",
    title: "The Crowder Files",
    artist: "Outlawed Productions", 
    duration: 212, // 03:32
    description: "Uncovering the Crowder case corruption."
  },
  {
    id: "eleven-months-too-long",
    title: "Eleven Months Too Long",
    artist: "Outlawed Productions",
    duration: 226, // 03:46
    description: "The cost of delayed justice."
  },
  {
    id: "the-last-straw",
    title: "The Last Straw", 
    artist: "Outlawed Productions",
    duration: 159, // 02:39
    description: "When enough is enough."
  },
  {
    id: "caught-red-handed",
    title: "Caught Red Handed",
    artist: "Outlawed Productions",
    duration: 239, // 03:59
    description: "Exposing corruption in real time."
  },
  {
    id: "she-called-the-state",
    title: "She Called The State",
    artist: "Outlawed Productions",
    duration: 234, // 03:54
    description: "When whistleblowers speak truth to power."
  },
  {
    id: "osteen-lied",
    title: "Osteen Lied", 
    artist: "Outlawed Productions",
    duration: 281, // 04:41
    description: "The lies that started it all."
  },
  {
    id: "gaslight-anthem",
    title: "The Gaslight Anthem",
    artist: "Outlawed Productions",
    duration: 147, // 02:27
    description: "Anthem against manipulation and gaslighting."
  },
  {
    id: "governors-gone-too-far",
    title: "Governor's Gone Too Far",
    artist: "Outlawed Productions", 
    duration: 196, // 03:16
    description: "When executive power overreaches."
  }
];

// Timeline events for visualization
export type TimelineEvent = {
  id: string;
  date: string;
  title: string;
  description: string;
  type: "arrest" | "filing" | "hearing" | "investigation" | "music";
  relatedEvidence?: string[];
  relatedTracks?: string[];
};

export const timelineEvents: TimelineEvent[] = [
  {
    id: "osteen-arrest",
    date: "2023-08-11",
    title: "Traffic Stop & Arrest",
    description: "Initial traffic stop by Officer Osteen leads to DWI arrest",
    type: "arrest",
    relatedEvidence: ["bwc-timeline"],
    relatedTracks: ["osteen-files-exhibit-l", "osteen-lied"]
  },
  {
    id: "petition-to-revoke", 
    date: "2023-08-17",
    title: "Petition to Revoke Filed",
    description: "Mississippi files petition to revoke probation based on Texas arrest",
    type: "filing",
    relatedEvidence: ["galveston-dwi-packet"],
    relatedTracks: ["morgan-county-blues"]
  },
  {
    id: "franks-motion-filed",
    date: "2024-03-15", 
    title: "Franks Motion Filed",
    description: "Motion challenges warrant affidavit for perjury",
    type: "filing", 
    relatedEvidence: ["franks-motion"],
    relatedTracks: ["warrant-for-a-lie"]
  },
  {
    id: "revocation-hearing",
    date: "2024-07-18",
    title: "Revocation Hearing",
    description: "Lafayette County holds revocation hearing",
    type: "hearing",
    relatedEvidence: ["ms-revocation-hearing"],
    relatedTracks: ["eleven-months-too-long"]
  },
  {
    id: "pcr-motion",
    date: "2024-11-26", 
    title: "Post-Conviction Relief Motion",
    description: "Motion for PCR filed in Mississippi",
    type: "filing",
    relatedEvidence: ["pcr-motion"],
    relatedTracks: ["the-last-straw"]
  },
  {
    id: "civil-complaint",
    date: "2025-05-27",
    title: "Federal Civil Rights Complaint",
    description: "Civil rights lawsuit filed in Texas Southern District",
    type: "filing", 
    relatedEvidence: ["sdtix-complaint"],
    relatedTracks: ["silence-aint-consent", "unbroken"]
  },
  {
    id: "bad-actors-release",
    date: "2025-09-01",
    title: "Bad Actors Album Release", 
    description: "Full album documenting the case released on BandLab",
    type: "music",
    relatedTracks: badActorsTracks.map(t => t.id)
  }
];