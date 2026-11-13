// Placeholder photography sourced from Unsplash for demo purposes.
// Swap for the curated, licensed EVERAFTER photo set before launch.
function unsplash(id: string, params = "auto=format&fit=crop&q=80") {
  return `https://images.unsplash.com/photo-${id}?${params}`;
}

export const images = {
  savannaSunset: unsplash("1547471080-7cc2caa01a7e", "auto=format&fit=crop&q=80&w=2400"),
  editorialCouple: unsplash("1606216794074-735e91aa2c92", "auto=format&fit=crop&q=80&w=1600"),
  ceremonyKiss: unsplash("1583939003579-730e3918a45a", "auto=format&fit=crop&q=80&w=1600"),
  bouquetDetail: unsplash("1519741497674-611481863552", "auto=format&fit=crop&q=80&w=1600"),
  floralArbor: unsplash("1529636798458-92182e662485", "auto=format&fit=crop&q=80&w=1600"),
  tablescape: unsplash("1519225421980-715cb0215aed", "auto=format&fit=crop&q=80&w=1600"),
  lakeChairs: unsplash("1522673607200-164d1b6ce486", "auto=format&fit=crop&q=80&w=1600"),
} as const;
