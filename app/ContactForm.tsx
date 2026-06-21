"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      );
      setStatus("sent");
      form.reset();
      setTimeout(() => setStatus("idle"), 2800);
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3200);
    }
  }

  return (
    <form className="reveal" data-d="1" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Full Name</label>
        <input id="name" name="from_name" type="text" placeholder="Jane Collins" required />
      </div>
      <div className="field">
        <label htmlFor="email">Email Address</label>
        <input id="email" name="from_email" type="email" placeholder="jane@email.com" required />
      </div>
      <div className="field">
        <label htmlFor="msg">Message</label>
        <textarea id="msg" name="message" placeholder="Tell me about the opportunity…" required />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        disabled={status === "sending"}
        style={{ opacity: status === "sending" ? 0.6 : status === "sent" ? 0.85 : 1 }}
      >
        {status === "sending" && "Sending…"}
        {status === "sent" && "Message Sent ✓"}
        {status === "error" && "Failed — try again"}
        {status === "idle" && (
          <>
            Send Message <span className="arr">→</span>
          </>
        )}
      </button>
    </form>
  );
}
