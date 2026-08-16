import { motion } from "framer-motion";
import { skills } from "../data/resumeData";
import KolamMotif from "./KolamMotif";

const groups = [
  { title: "Language", items: skills.language, note: "core" },
  { title: "Web Development", items: skills.web, note: "daily driver" },
  { title: "Tooling", items: skills.tools, note: "editors & IDEs" },
  { title: "Version Control", items: skills.versionControl, note: "shipping" },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">toolkit</span>
          <h2 className="section-title">What I build with</h2>
          <p className="section-sub">
            A React-first front-end toolkit, backed by Java fundamentals and
            the tools I use to ship and version real work.
          </p>
        </div>

        <div className="skills-grid">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              className="skills-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <div className="skills-card-head">
                <h3>{g.title}</h3>
                <span className="tag">{g.note}</span>
              </div>
              <div className="skills-card-items">
                {g.items.map((item) => (
                  <span key={item} className="skill-chip">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container">
        <KolamMotif />
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
        }
        @media (min-width: 700px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        .skills-card {
          background: var(--bg-alt);
          border: 1px solid var(--line);
          border-radius: var(--radius);
          padding: 24px;
        }
        .skills-card-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .skills-card-head h3 {
          font-size: 16px;
          font-weight: 600;
        }
        .skills-card-items {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .skill-chip {
          font-size: 13px;
          padding: 7px 13px;
          border-radius: 999px;
          background: var(--surface);
          border: 1px solid var(--line);
          color: var(--text-muted);
        }
      `}</style>
    </section>
  );
}
