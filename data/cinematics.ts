import type { CinematicItem } from "@/lib/types";
import { photoAssetsByKey } from "@/data/photo-assets";

export const cinematicItems: CinematicItem[] = [
  {
    title: "Rolling Intro",
    location: "Cinematic 01",
    description: "A shorter opener that works well as the first motion study in the set.",
    video: "/videos/cinematics/rr-cinematic-01.mov",
    poster: photoAssetsByKey.rangeRoverNightStreet.src
  },
  {
    title: "Detail Pass",
    location: "Cinematic 02",
    description: "A tighter clip that keeps the motion section from feeling like four copies of the same drive-by.",
    video: "/videos/cinematics/rr-cinematic-02.mov",
    poster: photoAssetsByKey.rangeRoverGravel.src
  },
  {
    title: "Street Movement",
    location: "Cinematic 03",
    description: "This cut adds a more active street feel without changing the overall tone of the gallery.",
    video: "/videos/cinematics/rr-cinematic-03.mov",
    poster: photoAssetsByKey.roadCloudsMotion.src
  },
  {
    title: "Closing Pass",
    location: "Cinematic 04",
    description: "A darker finish that rounds out the set and gives the page a clearer motion ending.",
    video: "/videos/cinematics/rr-cinematic-04.mov",
    poster: photoAssetsByKey.greenLightNightRoad.src
  }
];
