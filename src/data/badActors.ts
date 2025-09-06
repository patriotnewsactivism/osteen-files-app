export type Track = {
  id: string;
  /**
   * Displayable title of the track. Keep this succinct; any additional
   * descriptive text should live elsewhere (e.g. liner notes).
   */
  title: string;
  /**
   * Relative or absolute URL pointing to the audio file. Local paths
   * starting with `/public` reference files served from the `public` folder.
   */
  src: string;
  /**
   * Optional duration of the track in seconds. Useful for display but not
   * required for basic playback.
   */
  duration?: number;
  /**
   * Flag an explicit track. The UI can use this to show a small label.
   */
  explicit?: boolean;
};

export const albumInfo = {
  slug: "bad-actors",
  title: "Bad Actors",
  artist: "Outlawed Productions",
  year: 2025,
  // When using local assets, you can omit the `/public` prefix if your
  // bundler/asset pipeline rewrites URLs accordingly. Including it here
  // ensures that the raw file from `public/images` will be found when
  // viewed via static servers.
  cover: "/public/images/bad-actors-cover.jpg",
  /**
   * URL to the album on BandLab. This points to the band's album page and
   * is used for constructing embed URLs.
   */
  bandlabUrl: "https://www.bandlab.com/outlawedpro/albums/99c1bfc3-3a57-f011-8dc9-6045bd36a27a",
  /**
   * Optional: explicit BandLab collection ID extracted from the album URL. If present,
   * the BadActors page uses this to embed the official BandLab player.
   */
  bandlabId: "99c1bfc3-3a57-f011-8dc9-6045bd36a27a",
};

export const badActorsTracks: Track[] = [
  { id: "wolves-at-the-courthouse", title: "Wolves at the Courthouse", src: "/public/audio/bad-actors/01-wolves-at-the-courthouse.mp3" },
  { id: "morgan-county-blues", title: "Morgan County Blues", src: "/public/audio/bad-actors/02-morgan-county-blues.mp3" },
  { id: "exhibit-l", title: "Exhibit L", src: "/public/audio/bad-actors/03-exhibit-l.mp3" },
  { id: "silent-aint-consent", title: "Silent Ain’t Consent", src: "/public/audio/bad-actors/04-silent-aint-consent.mp3" },
  { id: "bad-actors", title: "Bad Actors", src: "/public/audio/bad-actors/05-bad-actors.mp3" },
  { id: "unbroken", title: "Unbroken", src: "/public/audio/bad-actors/06-unbroken.mp3" },
];