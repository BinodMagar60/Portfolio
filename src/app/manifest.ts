import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Binod Kaucha",
    short_name: "BinodDev",
    description: "Portfolio website of Binod Kaucha, aspiring web developer.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    icons: [
      {
        src: "https://res.cloudinary.com/dsssvg37w/image/upload/v1752375662/nobackgroundProfilePic_ngrzao.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
