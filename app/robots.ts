import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://sukaku-fried-chicken-kopo.vercel.app/sitemap.xml",
    host: "https://sukaku-fried-chicken-kopo.vercel.app",
  };
}
