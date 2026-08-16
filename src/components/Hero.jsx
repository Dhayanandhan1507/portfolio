import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/resumeData";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-dotfield" aria-hidden="true">
        {Array.from({ length: 48 }).map((_, i) => (
          <span key={i} style={{ animationDelay: `${(i % 8) * 0.3}s` }} />
        ))}
      </div>

      <div className="container hero-inner">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="hero-copy"
        >
          
          <h1 className="hero-title">
            {profile.name}
          </h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-summary">{profile.summary}</p>

          <div className="hero-actions">
            <a href="#work" className="btn btn-primary">
              View my work
            </a>
            <a href="/resume.pdf" className="btn btn-ghost" download>
              <Download size={16} /> Download Resume
            </a>
            <a href={`mailto:${profile.email}`} className="btn btn-ghost">
              <Mail size={16} /> Say hello
            </a>
          </div>

          <div className="hero-social">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <span className="hero-social-divider" />
            <a href="tel:+919361500141" className="hero-social-text" aria-label="Call +91 93615 00141">
              {profile.phone}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="hero-photo-panel"
        >
          <div className="hero-photo-card" aria-label="Profile portrait">
            <img src={profile.photo} alt={`${profile.name} portrait`} />
          </div>
        </motion.div>
      </div>

      <a href="#work" className="hero-scroll" aria-label="Scroll to work">
        <ArrowDown size={16} />
      </a>

      <style>{`
        .hero {
          position: relative;
          padding: 168px 0 96px;
          overflow: hidden;
        }
        .hero-dotfield {
          position: absolute;
          inset: 0;
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          opacity: 0.35;
          pointer-events: none;
          z-index: 0;
        }
        .hero-dotfield span {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: var(--accent);
          margin: 60px auto;
          animation: kolam-pulse 3.2s ease-in-out infinite;
        }
        @keyframes kolam-pulse {
          0%, 100% { opacity: 0.25; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.4); }
        }
        .hero-inner {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr;
          gap: 56px;
          align-items: center;
        }
        @media (min-width: 980px) {
          .hero-inner {
            grid-template-columns: 1.05fr 0.95fr;
          }
        }
        .hero-title {
          font-size: clamp(38px, 6vw, 64px);
          font-weight: 700;
          line-height: 1.04;
          margin: 6px 0 14px;
        }
        .hero-role {
          font-family: var(--font-mono);
          color: var(--leaf);
          font-size: 15px;
          margin-bottom: 22px;
        }
        .hero-summary {
          color: var(--text-muted);
          font-size: 17px;
          line-height: 1.7;
          max-width: 520px;
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 32px;
        }
        @media (max-width: 560px) {
          .hero-actions {
            flex-direction: column;
            align-items: stretch;
          }
          .hero-actions a {
            width: 100%;
            justify-content: center;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .hero-inner {
            grid-template-columns: 1fr;
          }
          .hero-summary {
            max-width: 100%;
          }
        }
        .hero-social {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-top: 40px;
          color: var(--text-faint);
        }
        .hero-social a {
          color: var(--text-muted);
          transition: color 0.2s ease;
        }
        .hero-social a:hover {
          color: var(--accent);
        }
        .hero-social-divider {
          width: 1px;
          height: 16px;
          background: var(--line);
        }
        .hero-social-text {
          font-family: var(--font-mono);
          font-size: 13px;
        }
        .hero-photo-panel {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          min-height: 0;
          background: transparent;
        }
        .hero-photo-card {
          width: 320px;
          max-width: 72%;
          aspect-ratio: 4 / 5;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 14px 40px rgba(10, 15, 25, 0.12);
          background: #ffffff;
          display: block;
          margin: 0 auto; /* center inside the panel */
        }
        .hero-photo-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        @media (min-width: 980px) {
          .hero-photo-card {
            width: 360px;
          }
        }
        @media (max-width: 600px) {
          .hero-photo-card {
            width: 48%;
            max-width: 280px;
          }
        }
        .hero-scroll {
          position: absolute;
          left: 50%;
          bottom: 28px;
          transform: translateX(-50%);
          color: var(--text-faint);
          border: 1px solid var(--line);
          border-radius: 50%;
          width: 34px;
          height: 34px;
          display: none;
          align-items: center;
          justify-content: center;
        }
        @media (min-width: 860px) {
          .hero-scroll { display: flex; }
        }
      `}</style>
    </section>
  );
}
