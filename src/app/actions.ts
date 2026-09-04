"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "Veuillez remplir tous les champs obligatoires." };
  }

  try {
    await resend.emails.send({
      from: "Site CamilaDev <onboarding@resend.dev>",
      to: "potycamila@gmail.com",
      replyTo: email,
      subject: `Nouveau message de ${name}`,
      text: `Nom: ${name}\nTéléphone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return { success: true };
  } catch (error) {
    console.error("Erreur d'envoi:", error);
    return { success: false, error: "Une erreur est survenue. Veuillez réessayer." };
  }
}