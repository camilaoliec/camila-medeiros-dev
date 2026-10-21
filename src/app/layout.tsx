import type { Metadata } from "next";
import { Roboto, Big_Shoulders } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import { Toaster } from "sonner";

const awe = localFont({
    src: "../fonts/AwesomeW.woff2",
    variable: "--font-awe",
    display: "swap",
});

const bobo = localFont({
    src: "../fonts/Bobogie-Groovy.otf",
    variable: "--font-bobo",
    display: "swap",
});

export const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-roboto",
});

export const bigS = Big_Shoulders({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-bigS",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://camila-medeiros-dev.vercel.app/"),
    title: "Camila Medeiros | Développeuse Front-end",
    description:
        "Développeuse front-end basée en France. Je crée des sites web modernes, rapides et performants pour valoriser votre entreprise.",
    icons: {
        icon: [
            { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            {
                url: "/images/android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                url: "/images/android-chrome-512x512.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
        apple: "/images/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    openGraph: {
        url: "https://camila-medeiros-dev.vercel.app/",
        title: "Camila Medeiros | Développeuse Front-End",
        description:
            "Développeuse front-end basée en France. Je crée des sites web modernes, rapides et performants pour valoriser votre entreprise.",
        siteName: "Camila Medeiros",
        images: [
            {
                url: "/images/og-image.png",
                width: 1200,
                height: 630,
                alt: "Camila Medeiros, développeuse front-end",
            },
        ],
        locale: "fr_FR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Camila Medeiros | Développeuse Front-End",
        description:
            "Développeuse front-end basée en France. Je crée des sites web modernes, rapides et performants pour valoriser votre entreprise.",
        images: ["/images/og-image.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="fr"
            className={`${roboto.variable} ${awe.variable} ${bobo.variable} ${bigS.variable} antialiased`}
        >
            <body className="min-h-dvh flex flex-col">
                {children}
                <Toaster position="top-center" richColors />
            </body>
        </html>
    );
}
