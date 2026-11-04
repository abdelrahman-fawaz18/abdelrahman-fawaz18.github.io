import { selectedPortrait, selectedPhotographs } from './photographs';

export const portrait = selectedPortrait;

export interface GalleryItem {
  title: string;
  image: string | null;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
  avif?: string;
  small?: string;
  avifSmall?: string;
  full?: string;
}

export const allPaintings: GalleryItem[] = [
  { title: 'Giraffe', image: 'images/personal/giraffe-1200.webp', small: 'images/personal/giraffe-640.webp', avif: 'images/personal/giraffe-1200.avif', avifSmall: 'images/personal/giraffe-640.avif', full: 'images/personal/giraffe-full.webp', alt: 'A colorful giraffe painted on canvas, displayed on a wooden shelf in sunlight.', caption: 'From my paintings', width: 1122, height: 1402 },
  { title: 'Small canvases', image: 'images/personal/small-canvases-1200.webp', small: 'images/personal/small-canvases-640.webp', avif: 'images/personal/small-canvases-1200.avif', avifSmall: 'images/personal/small-canvases-640.avif', full: 'images/personal/small-canvases-full.webp', alt: 'A wall display of small paintings featuring a crescent moon, cactus, flowers, cat, hippo, cow, sheep, and eggs.', caption: 'From my paintings', width: 1086, height: 1448 },
  { title: 'Night sky', image: 'images/personal/night-sky-1200.webp', small: 'images/personal/night-sky-640.webp', avif: 'images/personal/night-sky-1200.avif', avifSmall: 'images/personal/night-sky-640.avif', full: 'images/personal/night-sky-full.webp', alt: 'A canvas painting of dark pine trees beneath a star-filled blue night sky.', caption: 'From my paintings', width: 1254, height: 1254 },
  { title: 'Sunset', image: 'images/personal/sunset-city-1200.webp', small: 'images/personal/sunset-city-640.webp', avif: 'images/personal/sunset-city-1200.avif', avifSmall: 'images/personal/sunset-city-640.avif', full: 'images/personal/sunset-city-full.webp', alt: 'A painting of an orange and pink sunset over a city waterfront, with a small figure beside a railing.', caption: 'From my paintings', width: 1122, height: 1402 },
  { title: 'Daisies', image: 'images/personal/daisies-1200.webp', small: 'images/personal/daisies-640.webp', avif: 'images/personal/daisies-1200.avif', avifSmall: 'images/personal/daisies-640.avif', full: 'images/personal/daisies-full.webp', alt: 'A painting of white daisies against cream, orange, and dark blue geometric shapes.', caption: 'From my paintings', width: 1023, height: 1537 },
  { title: 'Curious cats', image: 'images/personal/cats-1200.webp', small: 'images/personal/cats-640.webp', avif: 'images/personal/cats-1200.avif', avifSmall: 'images/personal/cats-640.avif', full: 'images/personal/cats-full.webp', alt: 'A canvas of tall, colorful cats with wide eyes against a pale yellow background.', caption: 'From my paintings', width: 1086, height: 1448 },
  { title: 'Three panels', image: 'images/personal/triptych-1200.webp', small: 'images/personal/triptych-640.webp', avif: 'images/personal/triptych-1200.avif', avifSmall: 'images/personal/triptych-640.avif', full: 'images/personal/triptych-full.webp', alt: 'Three abstract canvas panels in green, pink, and orange displayed together on a wall.', caption: 'From my paintings', width: 1536, height: 1024 },
];

// The gallery uses all seven retained photographs at their natural proportions.
export const paintings = allPaintings;

export const photographs: GalleryItem[] = selectedPhotographs;

export interface Recommendation {
  title: string | null;
  creator: string;
  note: string;
  url: string | null;
  artwork?: string;
  artworkAlt?: string;
  artworkWidth?: number;
  artworkHeight?: number;
}

export const music: Recommendation[] = [
  { title: 'The Unforgiven', creator: 'Cage the Elephant', note: '', url: 'https://www.youtube.com/watch?v=cEejJGKIoOQ', artwork: 'images/recommendations/song-the-unforgiven.webp', artworkAlt: 'The Metallica Blacklist cover', artworkWidth: 160, artworkHeight: 160 },
  { title: 'Sugartown', creator: 'The Fratellis', note: '', url: 'https://www.youtube.com/watch?v=K8ji0HRMRMU', artwork: 'images/recommendations/song-sugartown.webp', artworkAlt: 'In Your Own Sweet Time cover', artworkWidth: 100, artworkHeight: 100 },
  { title: 'Written in the Water', creator: 'Gin Wigmore', note: '', url: 'https://www.youtube.com/watch?v=lMQofCndDAA', artwork: 'images/recommendations/song-written-in-the-water.webp', artworkAlt: 'Blood to Bone cover', artworkWidth: 100, artworkHeight: 100 },
  { title: 'Bones', creator: 'Alexandra Savior', note: '', url: 'https://www.youtube.com/watch?v=M9fo-o5OUpQ', artwork: 'images/recommendations/song-bones.webp', artworkAlt: 'Belladonna of Sadness cover', artworkWidth: 100, artworkHeight: 100 },
];
export const films: Recommendation[] = [
  { title: 'Incendies', creator: 'Denis Villeneuve · 2010', note: '', url: 'https://letterboxd.com/film/incendies/', artwork: 'images/recommendations/film-incendies.webp', artworkAlt: 'Incendies poster', artworkWidth: 160, artworkHeight: 240 },
  { title: 'Everything Everywhere All at Once', creator: 'Daniel Kwan & Daniel Scheinert · 2022', note: '', url: 'https://letterboxd.com/film/everything-everywhere-all-at-once/', artwork: 'images/recommendations/film-everything-everywhere-all-at-once.webp', artworkAlt: 'Everything Everywhere All at Once poster', artworkWidth: 160, artworkHeight: 240 },
  { title: 'Forrest Gump', creator: 'Robert Zemeckis · 1994', note: '', url: 'https://letterboxd.com/film/forrest-gump/', artwork: 'images/recommendations/film-forrest-gump.webp', artworkAlt: 'Forrest Gump poster', artworkWidth: 160, artworkHeight: 240 },
  { title: 'The President’s Cake', creator: 'Hasan Hadi · Iraq · 2025', note: '', url: 'https://letterboxd.com/film/the-presidents-cake/', artwork: 'images/recommendations/film-the-presidents-cake.webp', artworkAlt: 'The President’s Cake poster', artworkWidth: 160, artworkHeight: 240 },
];
