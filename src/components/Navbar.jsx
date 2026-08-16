import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { id: "work", label: "<Work />" },
  { id: "skills", label: "<Skills />" },
  { id: "journey", label: "<Journey />" },
  { id: "contact", label: "<Contact />" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container navbar-inner">
        <button className="navbar-brand" onClick={() => go("top")}>
          <span className="navbar-brand-mark">DR</span>
          <span className="navbar-brand-name">Dhayanandhan Portfolio</span>
        </button>

        <nav className="navbar-links">
          {links.map((l) => (
            <button key={l.id} onClick={() => go(l.id)}>
              {l.label}
            </button>
          ))}
        </nav>

        <button className="navbar-cta btn btn-primary" onClick={() => go("contact")}>
          Let's talk
        </button>

        <button className="navbar-burger" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="navbar-mobile">
          {links.map((l) => (
            <button key={l.id} onClick={() => go(l.id)}>
              {l.label}
            </button>
          ))}
          <button className="btn btn-primary" onClick={() => go("contact")}>
            Let's talk
          </button>
        </div>
      )}

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          padding: 22px 0;
          transition: background 0.3s ease, padding 0.3s ease, border-color 0.3s ease;
          border-bottom: 1px solid transparent;
        }
        .navbar.is-scrolled {
          background: rgba(18, 20, 27, 0.85);
          backdrop-filter: blur(10px);
          padding: 14px 0;
          border-color: var(--line);
        }
        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          background: none;
          border: none;
          color: var(--text);
          padding: 0;
          min-width: 0;
          flex: 1 1 auto;
        }
        .navbar-brand-mark {
          width: 34px;
          height: 34px;
          border-radius: 9px;
          background: var(--accent);
          color: var(--accent-ink);
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .navbar-brand-name {
          font-family: var(--font-mono);
          font-size: 14px;
          color: var(--text-muted);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          display: inline-block;
          min-width: 0;
        }
        @media (max-width: 559px) {
          .navbar-brand {
            justify-content: flex-start;
          }
          .navbar-brand-name {
            font-size: 12.5px;
            max-width: 150px;
          }
        }
        @media (min-width: 560px) {
          .navbar-brand-name { font-size: 14px; }
        }
        .navbar-links {
          display: none;
          gap: 28px;
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--text-muted);
        }
        .navbar-links button {
          background: none;
          border: none;
          color: inherit;
          padding: 0;
          transition: color 0.2s ease;
        }
        .navbar-links button:hover {
          color: var(--accent);
        }
        @media (min-width: 860px) {
          .navbar-links { display: flex; }
        }
        .navbar-cta {
          display: none;
        }
        @media (min-width: 860px) {
          .navbar-cta { display: inline-flex; }
        }
        .navbar-burger {
          background: none;
          border: 1px solid var(--line);
          color: var(--text);
          border-radius: 8px;
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        @media (min-width: 860px) {
          .navbar-burger { display: none; }
        }
        .navbar-mobile {
          display: flex;
          flex-direction: column;
          gap: 18px;
          padding: 24px 20px 28px;
          background: var(--bg-alt);
          border-bottom: 1px solid var(--line);
          font-family: var(--font-mono);
        }
        .navbar-mobile button {
          background: none;
          border: none;
          color: var(--text);
          text-align: left;
          font-size: 15px;
          padding: 4px 0;
        }
      `}</style>
    </header>
  );
}
