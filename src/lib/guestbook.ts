export interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  createdAt: string;
}

// In-memory storage (will reset on server restart)
// For production, replace with a database
let entries: GuestbookEntry[] = [
  {
    id: "1",
    name: "~*CyberSurfer99*~",
    message: "OMG this site is SO cool!!! ⭐⭐⭐⭐⭐",
    createdAt: "2026-01-15T12:00:00Z",
  },
  {
    id: "2",
    name: "WebMaster2000",
    message: "Great portfolio! Bookmarked! 🔥",
    createdAt: "2026-01-10T15:30:00Z",
  },
  {
    id: "3",
    name: "xX_DarkAngel_Xx",
    message: "finally a site that gets it... 💀🖤",
    createdAt: "2026-01-05T20:45:00Z",
  },
  {
    id: "4",
    name: "RetroFan1985",
    message: "This brings back memories! Love the Windows 95 vibes 💾",
    createdAt: "2026-01-03T10:15:00Z",
  },
  {
    id: "5",
    name: "PixelPrincess",
    message: "Found this through the webring. SO happy I clicked! 🌈✨",
    createdAt: "2026-01-01T08:00:00Z",
  },
];

export function getEntries(): GuestbookEntry[] {
  return [...entries].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function addEntry(name: string, message: string): GuestbookEntry {
  const entry: GuestbookEntry = {
    id: Date.now().toString(),
    name,
    message,
    createdAt: new Date().toISOString(),
  };
  entries.unshift(entry);
  return entry;
}
