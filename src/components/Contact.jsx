import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { profile } from "../data/resumeData";
import KolamMotif from "./KolamMotif";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const mailtoHref = () => {
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message || ""}\n\n— ${form.name || ""} (${form.email || ""})`
    );
    return `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <KolamMotif flip className="contact-motif-top" />

        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow">get in touch</span>
            <h2 className="section-title">Let's build something together</h2>
            <p className="section-sub" style={{ marginBottom: 32 }}>
              Open to internships, junior front-end roles and freelance React
              work. I usually reply within a day.
            </p>

            <div className="contact-details">
              <a href={`mailto:${profile.email}`} className="contact-detail">
                <Mail size={16} />
                {profile.email}
              </a>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="contact-detail">
                <Phone size={16} />
                {profile.phone}
              </a>
              <span className="contact-detail">
                <MapPin size={16} />
                {profile.location}
              </span>
              <a href={profile.github} target="_blank" rel="noreferrer" className="contact-detail">
                <Github size={16} />
                github.com/Dhayanandhan1507
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-detail">
                <Linkedin size={16} />
                linkedin.com/in/dhayanandhan-r2006
              </a>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = mailtoHref();
            }}
          >
            <label>
              Name
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
              />
            </label>
            <label>
              Email
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
              />
            </label>
            <label>
              Message
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about the role or project"
              />
            </label>
            <button type="submit" className="btn btn-primary">
              Send message <Send size={15} />
            </button>
          </motion.form>
        </div>
      </div>

      <style>{`
        .contact-motif-top {
          margin-bottom: 40px;
          opacity: 0.8;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
        }
        @media (min-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .contact-detail {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14.5px;
          color: var(--text-muted);
          transition: color 0.2s ease;
        }
        .contact-detail:hover {
          color: var(--accent);
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: var(--radius);
          padding: 26px;
        }
        .contact-form label {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 12.5px;
          font-family: var(--font-mono);
          color: var(--text-faint);
        }
        .contact-form input,
        .contact-form textarea {
          font-family: var(--font-body);
          background: var(--bg-alt);
          border: 1px solid var(--line);
          border-radius: 10px;
          padding: 11px 13px;
          color: var(--text);
          font-size: 14px;
          resize: vertical;
        }
        .contact-form input:focus,
        .contact-form textarea:focus {
          outline: 2px solid var(--accent);
          outline-offset: 1px;
        }
        .contact-form button {
          margin-top: 4px;
          align-self: flex-start;
        }
      `}</style>
    </section>
  );
}
