// Zentrale Stelle fuer alle Platzhalter-Bildquellen.
// Alle Bilder sind Unsplash-Fotos, die der Branche entsprechen.
// Fuer den Live-Betrieb werden sie durch eigene Fotos ersetzt.

export const IMG = {
  hero:
    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=2400&q=80",
  verteiler:
    "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=2000&q=80",
  installation:
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=2000&q=80",
  photovoltaik:
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2400&q=80",
  wallbox:
    "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=2000&q=80",
  smartHome:
    "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=2000&q=80",
  kommunikation:
    "https://images.unsplash.com/photo-1551703599-6b3e8379aa8d?auto=format&fit=crop&w=2000&q=80",
  haushalt:
    "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=2000&q=80",
  team:
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=2400&q=80",
  stadt:
    "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=2400&q=80",
  werkbank:
    "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=2000&q=80",
} as const;

export type ImgKey = keyof typeof IMG;
