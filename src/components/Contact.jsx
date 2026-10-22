import { useState } from "react";
import { contact } from "../data/portfolio.js";

export function Contact() {
  const [copyStatus, setCopyStatus] = useState("");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopyStatus("Email copied to clipboard.");
    } catch {
      setCopyStatus("Could not copy automatically. Select the email address above to copy it.");
    }
  }

  async function copyPhone() {
    try {
      await navigator.clipboard.writeText(contact.phone);
      setCopyStatus("Phone number copied to clipboard.");
    } catch {
      setCopyStatus("Could not copy automatically. Select the phone number above to copy it.");
    }
  }

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="container contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">Want to chat?</p>
          <h2 id="contact-title">Let’s get connected!</h2>
          <p>I’m always glad to talk about product, design, software, comedy, leadership, or anything else!.</p>
        </div>
        <div className="contact-cards">
          <button className="contact-card" type="button" onClick={copyEmail} aria-label="Copy email address">
            <span className="contact-label">Email</span>
            <strong>{contact.email}</strong>
            <span className="contact-arrow" aria-hidden="true">⧉</span>
          </button>
          <button className="contact-card" type="button" onClick={copyPhone} aria-label="Copy phone number">
            <span className="contact-label">Phone</span>
            <strong>{contact.phone}</strong>
            <span className="contact-arrow" aria-hidden="true">⧉</span>
          </button>
          <p className="copy-status" role="status" aria-live="polite">{copyStatus}</p>
        </div>
      </div>
    </section>
  );
}
