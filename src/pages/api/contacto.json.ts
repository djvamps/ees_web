import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
      })[character]!
  );

export const POST: APIRoute = async ({ request }) => {
  try {
    const { name, email, phone, message } = await request.json();

    if (
      ![name, email, phone, message].every((value) => typeof value === 'string' && value.trim())
    ) {
      return new Response(JSON.stringify({ message: 'Completa todos los campos.' }), {
        status: 400,
      });
    }

    const { error } = await resend.emails.send({
      // Reemplaza por un email de TU dominio verificado en Resend:
      from: 'Web E.E.S. <contacto@ecoescuelaser.com>',

      // Reemplaza por el correo donde quieres recibir los mensajes:
      to: ['dalopeza.dev@gmail.com'],

      // Al responder el correo, responderás directamente al visitante:
      replyTo: email.trim(),

      subject: `Nuevo contacto: ${name.trim()} — ${phone.trim()}`,

      html: `
        <h2>Nuevo mensaje desde la página web</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(name.trim())}</p>
        <p><strong>Correo:</strong> ${escapeHtml(email.trim())}</p>
        <p><strong>Teléfono:</strong> ${escapeHtml(phone.trim())}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${escapeHtml(message.trim()).replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error(error);
      return new Response(JSON.stringify({ message: 'No se pudo enviar el correo.' }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Ocurrió un error al enviar el formulario.' }), {
      status: 500,
    });
  }
};
