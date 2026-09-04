"use client"
import { Mail } from "lucide-react";
import { useState } from "react";
import { sendContactEmail } from "@/app/actions";
import { toast } from "sonner";

export default function Contact(){
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    async function handleSubmit(formData: FormData) {
        setStatus("loading");
        const result = await sendContactEmail(formData);

        if (result.success) {
            setStatus("success");
            toast.success("Message envoyé avec succès ! Je vous répondrai bientôt.")
        }else{
            setStatus("error");
            toast.error(result.error ?? "Une erreur est survenue.")
        }
    }
    return(
        <section id="contact" className="scroll-mt-24 mb-20 p-5 flex flex-col items-center mx-auto drop-shadow-sombra">
            <h2 className="font-awe text-center text-4xl drop-shadow-sombra mb-2">Contactez-moi</h2>
            <p className="font-roboto text-sm text-rosa/70 mb-5">* Champs obligatoires</p>
            <form 
                action={handleSubmit}
                className="border border-rosa rounded-3xl p-8 flex flex-col gap-5 w-full md:max-w-2xl mx-auto"
            >
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-bobo text-rosa text-xl">
                        Nom *
                    </label>
                    <input
                        id="name"
                        name="name" 
                        type="text"
                        required
                        className="rounded-lg border border-rosa px-4 py-2 text-rosa placeholder:text-rosa/50 outline-none font-roboto text-lg bg-vinho/40"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="font-bobo text-rosa text-xl">
                        Téléphone
                    </label>
                    <input
                        id="phone"
                        name="phone" 
                        type="tel"
                        className="rounded-lg border border-rosa px-4 py-2 text-rosa placeholder:text-rosa/50 outline-none font-roboto text-lg bg-vinho/40"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-bobo text-rosa text-xl">
                        E-mail *
                    </label>
                    <input
                        id="email"
                        name="email" 
                        type="email"
                        required
                        className="rounded-lg border border-rosa px-4 py-2 text-rosa placeholder:text-rosa/50 outline-none font-roboto text-lg bg-vinho/40"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-bobo text-rosa text-xl">
                        Message *
                    </label>
                    <textarea
                        id="message"
                        name="message" 
                        required
                        rows={5}
                        className="rounded-lg border border-rosa px-4 py-2 text-rosa placeholder:text-rosa/50 outline-none font-roboto text-lg bg-vinho/40"
                    />
                </div>
                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="mt-2 rounded-2xl bg-rosa px-8 py-2 text-vinho font-bobo text-lg transition-opacity duration-150 hover:opacity-80 disabled:opacity-50 cursor-pointer"
                >
                    {status === "loading" ? "Envoi..." : "Envoyer"}
                </button>
            </form>
            <div>
                <p className="font-roboto text-lg mt-5 drop-shadow-sombra text-center">
                    Vous pouvez aussi me contacter directement :
                </p>
                <div className="flex flex-row items-center justify-center gap-5 mt-5">
                    <Mail
                        size={32}
                        strokeWidth={1.5}
                        aria-hidden="true"
                        className="text-rosa drop-shadow-sombra"
                    />
                    <a href="mailto:potycamila@gmail.com" className="drop-shadow-sombra">
                        potycamila@gmail.com
                    </a>
                </div>
            </div>
        </section>
    )
}