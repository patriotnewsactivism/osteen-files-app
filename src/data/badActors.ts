export type Track = {
  id: string;
  title: string;
  src: string;        // MP3 URL (local /external)
  duration?: number;  // seconds (optional)
  explicit?: boolean;
};

export const albumInfo = {
  slug: "bad-actors",
  title: "Bad Actors",
  artist: "Outlawed Productions",
  year: 2025,
  cover: "https://www.bandlab.com/api/v1/covers/99c1bfc3-3a57-f011-8dc9-6045bd36a27a?version=1714152176835",
};

export const badActorsTracks: Track[] = [
  { id: "silence-aint-consent", title: "Silence Ain't Consent (North Mississippi's Warning)", src: "https://www.bandlab.com/api/v1/tracks/01-silence-aint-consent/audio", duration: 210 },
  { id: "unbroken", title: "Unbroken", src: "https://www.bandlab.com/api/v1/tracks/02-unbroken/audio", duration: 303 },
  { id: "in-the-shadows-tonight", title: "In The Shadows Tonight (The Reckoning)", src: "https://www.bandlab.com/api/v1/tracks/03-in-the-shadows-tonight/audio", duration: 199 },
  { id: "double-dipped", title: "Double Dipped", src: "https://www.bandlab.com/api/v1/tracks/04-double-dipped/audio", duration: 338, explicit: true },
  { id: "morgan-county-blues", title: "Morgan County Blues", src: "https://www.bandlab.com/api/v1/tracks/05-morgan-county-blues/audio", duration: 243 },
  { id: "a-warrant-for-a-lie", title: "A Warrant For A Lie", src: "https://www.bandlab.com/api/v1/tracks/06-a-warrant-for-a-lie/audio", duration: 211 },
  { id: "exhibit-l", title: "The Osteen Files- Exhibit L", src: "https://www.bandlab.com/api/v1/tracks/07-exhibit-l/audio", duration: 229 },
  { id: "the-crowder-files", title: "The Crowder Files", src: "https://www.bandlab.com/api/v1/tracks/08-the-crowder-files/audio", duration: 212 },
  { id: "eleven-months-too-long", title: "Eleven Months Too Long", src: "https://www.bandlab.com/api/v1/tracks/09-eleven-months-too-long/audio", duration: 226 },
  { id: "the-last-straw", title: "The Last Straw", src: "https://www.bandlab.com/api/v1/tracks/10-the-last-straw/audio", duration: 159 },
  { id: "caught-red-handed", title: "Caught Red Handed", src: "https://www.bandlab.com/api/v1/tracks/11-caught-red-handed/audio", duration: 239 },
  { id: "she-called-the-state", title: "She Called The State", src: "https://www.bandlab.com/api/v1/tracks/12-she-called-the-state/audio", duration: 234 },
  { id: "osteen-lied", title: "Osteen Lied", src: "https://www.bandlab.com/api/v1/tracks/13-osteen-lied/audio", duration: 281 },
  { id: "the-gaslight-anthem", title: "The Gaslight Anthem", src: "https://www.bandlab.com/api/v1/tracks/14-the-gaslight-anthem/audio", duration: 147 },
  { id: "governors-gone-too-far", title: "Governor's Gone Too Far", src: "https://www.bandlab.com/api/v1/tracks/15-governors-gone-too-far/audio", duration: 196 },
];