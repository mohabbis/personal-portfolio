import type { CinematicItem } from "@/lib/types";

export const cinematicItems: CinematicItem[] = [
  {
    title: "Rolling Intro",
    location: "Cinematic 01",
    description: "A shorter opener that works well as the first motion study in the set.",
    video: "/videos/cinematics/rr-cinematic-01.mov",
    poster: "/images/gallery/rr-neighborhood-front.jpeg"
  },
  {
    title: "Detail Pass",
    location: "Cinematic 02",
    description: "A tighter clip that keeps the motion section from feeling like four copies of the same drive-by.",
    video: "/videos/cinematics/rr-cinematic-02.mov",
    poster: "/images/gallery/rr-side-profile.jpeg"
  },
  {
    title: "Street Movement",
    location: "Cinematic 03",
    description: "This cut adds a more active street feel without changing the overall tone of the gallery.",
    video: "/videos/cinematics/rr-cinematic-03.mov",
    poster: "/images/gallery/rr-district-front 2.jpeg"
  },
  {
    title: "Closing Pass",
    location: "Cinematic 04",
    description: "A darker finish that rounds out the set and gives the page a clearer motion ending.",
    video: "/videos/cinematics/rr-cinematic-04.mov",
    poster: "/images/gallery/rr-off-road.jpeg"
  }
];
