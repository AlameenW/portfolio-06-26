"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    const form = e.currentTarget;
    setTimeout(() => {
      form.reset();
      setSent(false);
    }, 2200);
  }

  return (
    <form className="reveal" data-d="1" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Full Name</label>
        <input id="name" type="text" placeholder="Jane Doe" required />
      </div>
      <div className="field">
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" placeholder="jane@email.com" required />
      </div>
      <div className="field">
        <label htmlFor="msg">Message</label>
        <textarea id="msg" placeholder="Tell me about the opportunity…" required />
      </div>
      <button type="submit" className="btn btn-primary" style={{ opacity: sent ? 0.85 : 1 }}>
        {sent ? "Message Sent ✓" : (
          <>
            Send Message <span className="arr">→</span>
          </>
        )}
      </button>
    </form>
  );
}
