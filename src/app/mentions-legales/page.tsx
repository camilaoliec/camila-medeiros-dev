import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mentions légales | Camila Medeiros",
    description:
        "Mentions légales du site de Camila Medeiros, développeuse front-end.",
};

export default function MentionsLegales() {
    return (
        <main className="px-6 py-20 max-w-3xl mx-auto text-rosa">
            <h1 className="font-awe text-4xl text-center mb-10 drop-shadow-sombra">
                Mentions légales
            </h1>

            <section className="flex flex-col gap-6 font-roboto text-sm leading-relaxed">
                <div>
                    <h2 className="font-bobo text-xl mb-2">Éditeur du site</h2>
                    <p>Nom et prénom : Ana Camila Oliveira de Medeiros</p>
                    <p>Statut : Micro-entrepreneur</p>
                    <p>Adresse : 92, Avenue du Général de Gaulle, 74200 Thonon-les-Bains</p>
                    <p>SIRET : 98993611700013</p>
                    <p>TVA non applicable, art. 293 B du CGI</p>
                    <p>Email : potycamila@gmail.com</p>
                </div>

                <div>
                    <h2 className="font-bobo text-xl mb-2">
                        Directeur de la publication
                    </h2>
                    <p>Ana Camila Oliveira de Medeiros</p>
                </div>

                <div>
                    <h2 className="font-bobo text-xl mb-2">Hébergement</h2>
                    <p>Vercel Inc.</p>
                    <p>340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
                    <p>Site web : vercel.com</p>
                    <p>Email : privacy@vercel.com</p>
                </div>

                <div>
                    <h2 className="font-bobo text-xl mb-2">
                        Propriété intellectuelle
                    </h2>
                    <p>
                        L&apos;ensemble des contenus présents sur ce site
                        (textes, images, graphismes, logo, icônes) est protégé
                        par le droit d&apos;auteur et demeure la propriété
                        exclusive de Ana Camila Oliveira de Medeiros, sauf
                        mention contraire. Toute reproduction sans autorisation
                        préalable est interdite.
                    </p>
                </div>

                <div>
                    <h2 className="font-bobo text-xl mb-2">
                        Données personnelles
                    </h2>
                    <p>
                        Les informations recueillies via le formulaire de
                        contact sont utilisées uniquement pour répondre à vos
                        demandes. Pour plus d&apos;informations, consultez notre{" "}
                        <Link
                            href="/politique-de-confidentialite"
                            className="underline"
                        >
                            politique de confidentialité
                        </Link>
                        .
                    </p>
                </div>
            </section>

            <Link
                href="/"
                className="inline-block mt-12 font-bobo text-lg underline"
            >
                ← Retour à l&apos;accueil
            </Link>
        </main>
    );
}
