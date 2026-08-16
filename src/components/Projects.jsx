import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/resumeData";

export default function Projects() {
  return (
    <section id="work" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">selected work</span>
          <h2 className="section-title">Things I've built</h2>
          <p className="section-sub">
            Three projects that shaped how I think about state, structure and
            interfaces people actually enjoy using.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              className="project-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
            >
              <div className="project-card-top">
                <span className="tag">{p.tag}</span>
                <ArrowUpRight size={16} className="project-card-icon" />
              </div>
              <h3 className="project-card-title">{p.title}</h3>
              <p className="project-card-desc">{p.description}</p>
              <ul className="project-card-points">
                {p.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="project-card-stack">
                {p.stack.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 22px;
        }
        @media (min-width: 760px) {
          .projects-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .project-card {
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: var(--radius);
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: border-color 0.25s ease, transform 0.25s ease;
        }
        .project-card:hover {
          border-color: var(--accent);
          transform: translateY(-4px);
        }
        .project-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .project-card-icon {
          color: var(--text-faint);
        }
        .project-card-title {
          font-size: 20px;
          font-weight: 600;
        }
        .project-card-desc {
          color: var(--text-muted);
          font-size: 14.5px;
          line-height: 1.65;
        }
        .project-card-points {
          margin: 0;
          padding-left: 18px;
          color: var(--text-muted);
          font-size: 13.5px;
          line-height: 1.7;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .project-card-stack {
          margin-top: auto;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          padding-top: 6px;
        }
      `}</style>
    </section>
  );
}
