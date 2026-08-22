import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mob Hub",
    short_name: "Mob Hub",
    description:
      "Mobile creative production for podcasts, film, voice-over, photography, video and travel documentation across Uganda.",
    start_url: "/",
    display: "standalone",
    background_color: "#f2eee4",
    theme_color: "#000000",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}