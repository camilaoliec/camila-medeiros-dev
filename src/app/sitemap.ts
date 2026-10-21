import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://camila-medeiros-dev.vercel.app",
            lastModified: new Date(),
        },
    ];
}