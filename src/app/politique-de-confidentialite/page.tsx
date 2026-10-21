import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Camila Medeiros",
  description:
    "Politique de confidentialité du site de Camila Medeiros, développeuse front-end.",
};

export default function PolitiqueDeConfidentialite() {
  return (
    <main className="px-6 py-20 max-w-3xl mx-auto text-rosa">
      <h1 className="font-awe text-4xl text-center mb-10 drop-shadow-sombra">
        Politique de confidentialité
      </h1>

      <section className="flex flex-col gap-6 font-roboto text-sm leading-relaxed">
        <div>
          <h2 className="font-bobo text-xl mb-2">Collecte des données</h2>
          <p>
            Ce site collecte uniquement les données que vous soumettez volontairement
            via le formulaire de contact, à savoir : votre nom, votre numéro de
            téléphone (facultatif), votre adresse email et le contenu de votre message.
          </p>
        </div>

        <div>
          <h2 className="font-bobo text-xl mb-2">Utilisation des données</h2>
          <p>
            Ces informations sont utilisées exclusivement pour répondre à votre demande
            de contact et échanger avec vous au sujet d&apos;un éventuel projet. Elles ne
            sont ni vendues, ni cédées, ni partagées avec des tiers à des fins commerciales.
          </p>
        </div>

        <div>
          <h2 className="font-bobo text-xl mb-2">Conservation des données</h2>
          <p>
            Vos données sont conservées le temps nécessaire au traitement de votre
            demande et à notre échange, puis supprimées si aucune suite n&apos;est
            donnée dans un délai raisonnable.
          </p>
        </div>

        <div>
          <h2 className="font-bobo text-xl mb-2">Vos droits</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD) et à
            la loi Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès,
            de rectification, de suppression et d&apos;opposition concernant vos données
            personnelles. Vous pouvez exercer ce droit en nous contactant à l&apos;adresse
            email suivante : potycamila@gmail.com.
          </p>
        </div>

        <div>
          <h2 className="font-bobo text-xl mb-2">Hébergement</h2>
          <p>
            Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789,
            États-Unis. Les données transitant par le formulaire de contact sont
            transmises via le service Resend pour l&apos;envoi d&apos;emails.
          </p>
        </div>

        <div>
          <h2 className="font-bobo text-xl mb-2">Cookies</h2>
          <p>
            Ce site n&apos;utilise pas de cookies de suivi ou de traceurs publicitaires.
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