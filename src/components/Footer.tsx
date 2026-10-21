import { Heart } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="px-10 py-10 bg-vinho flex flex-col items-center">
            <p className="font-awe text-center text-4xl drop-shadow-sombra mt-10">
                Camila Medeiros
            </p>
            <p className="font-bobo text-center text-lg">
                Developpeuse front-end
            </p>
            <nav
                aria-label="Navigation du pied de page"
                className="flex flex-col items-center my-10 border-y-2 border-rosa py-10 w-50"
            >
                <a href="#services" className="font-bobo text-center text-2xl transition-opacity duration-150 hover:opacity-60">
                    Services
                </a>
                <span
                    aria-hidden="true"
                    className="font-bobo text-center font-bold text-3xl"
                >
                    .
                </span>
                <a href="#method" className="font-bobo text-center text-2xl transition-opacity duration-150 hover:opacity-60">
                    Méthode
                </a>
                <span
                    aria-hidden="true"
                    className="font-bobo text-center font-bold text-3xl"
                >
                    .
                </span>
                <a href="#a-propos" className="font-bobo text-center text-2xl transition-opacity duration-150 hover:opacity-60">
                    A propos
                </a>
                <span
                    aria-hidden="true"
                    className="font-bobo text-center font-bold text-3xl"
                >
                    .
                </span>
                <a href="#contact" className="font-bobo text-center text-2xl transition-opacity duration-150 hover:opacity-60">
                    Contactez-moi
                </a>
            </nav>
            <div className="flex flex-col md:flex-row justify-between border-b-2 border-rosa pb-10 mb-10 items-center md:gap-50">
                <Link
                    href="/politique-de-confidentialite"
                    className="font-roboto text-center text-lg font-bold cursor-pointer transition-opacity duration-150 hover:opacity-60"
                >
                    Politique de confidentialité
                </Link>
                <Link
                    href="/mentions-legales"
                    className="font-roboto text-center text-lg font-bold cursor-pointer transition-opacity duration-150 hover:opacity-60"
                >
                    Mentions légales
                </Link>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-3 pb-5 w-full lg:max-w-4xl">
                <p className="font-roboto text-center text-sm">
                    © 2026 Camila Medeiros.
                </p>
                <p className="font-roboto text-center text-sm">
                    Tous droits réservés.
                </p>
                <div className="flex flex-row gap-2">
                    <p className="font-roboto text-center text-sm">
                        Conçu avec passion
                    </p>
                    <Heart size={20} strokeWidth={1.5} aria-hidden="true" />
                </div>
            </div>
        </footer>
    );
}
