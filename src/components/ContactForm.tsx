"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        alert("✅ Message sent!");
        form.current?.reset();
      })
      .catch((error) => {
        alert("❌ Failed to send email: " + error.text);
      });
  };

  return (
    <section id="contact" className="px-4 scroll-mt-3 md:scroll-mt-50 max-w-5xl mx-auto py-12">
      <form
      ref={form}
      onSubmit={sendEmail}
      className="max-w-xl mx-auto p-6 bg-white shadow-xl rounded-2xl space-y-4 mt-16"
      >
        <h2 className="text-2xl font-bold text-[#5e3b1b]">🤎 Contact dotori</h2>
        <p className="text-[#5e3b1b] text-black">We are always open to any questions. Feel free to contact us anytime!</p>
        
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="w-full border p-2 rounded"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full border p-2 rounded h-32"
          required
        />

        <Button
          type="submit"
          className="bg-[#5e3b1b] text-white hover:bg-[#b47938] transition"
        >
          Send Email
        </Button>
      </form>
    </section>

  );
}
