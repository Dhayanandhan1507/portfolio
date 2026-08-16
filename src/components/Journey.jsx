import { motion } from "framer-motion";
import { GraduationCap, BriefcaseBusiness, Award } from "lucide-react";
import { education, experience, certifications } from "../data/resumeData";

export default function Journey() {
  return (
    <section id="journey" className="section journey-section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">journey</span>
          <h2 className="section-title">Education, experience &amp; certifications</h2>
          <p className="section-sub">
            From classroom fundamentals to a hands-on internship, with a
            steady habit of picking up certifications along the way.
          </p>
        </div>

        <div className="journey-grid">
          <motion.div
            className="journey-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="journey-block-head">
              <GraduationCap size={18} />
              <h3>Education</h3>
            </div>
            <div className="timeline">
              {education.map((e) => (
                <div className="timeline-item" key={e.school}>
                  <span className="timeline-dot" />
                  <div>
                    <div className="timeline-row">
                      <strong>{e.school}</strong>
                      <span className="timeline-metric">{e.metric}</span>
                    </div>
                    <p className="timeline-place">{e.place}</p>
                    <p className="timeline-detail">
                      {e.detail} <span className="timeline-period">· {e.period}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="journey-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <div className="journey-block-head">
              <BriefcaseBusiness size={18} />
              <h3>Experience</h3>
            </div>
            <div className="experience-card">
              <div className="timeline-row">
                <strong>{experience.role}</strong>
                <span className="timeline-metric">{experience.duration}</span>
              </div>
              <p className="timeline-place">{experience.company}</p>
              <ul className="experience-points">
                {experience.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="cert-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.12 }}
        >
          <div className="journey-block-head">
            <Award size={18} />
            <h3>Certifications</h3>
          </div>
          <div className="cert-grid">
            {certifications.map((c) => (
              <div className="cert-item" key={c.title}>
                <p className="cert-title">{c.title}</p>
                <p className="cert-issuer">{c.issuer}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .journey-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }
        @media (min-width: 860px) {
          .journey-grid {
            grid-template-columns: 1.2fr 1fr;
          }
        }
        .journey-block, .experience-card, .cert-block {
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: var(--radius);
          padding: 26px 24px;
        }
        .journey-block-head {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--accent);
          margin-bottom: 20px;
        }
        .journey-block-head h3 {
          font-size: 16px;
          color: var(--text);
          font-weight: 600;
        }
        .timeline {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }
        .timeline-item {
          display: flex;
          gap: 14px;
        }
        .timeline-dot {
          margin-top: 6px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--leaf);
          flex-shrink: 0;
        }
        .timeline-row {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 12px;
        }
        .timeline-row strong {
          font-size: 15px;
        }
        .timeline-metric {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--accent);
          white-space: nowrap;
        }
        .timeline-place {
          color: var(--text-muted);
          font-size: 13.5px;
          margin-top: 4px;
        }
        .timeline-detail {
          font-size: 13px;
          color: var(--text-faint);
          margin-top: 2px;
        }
        .timeline-period {
          font-family: var(--font-mono);
        }
        .experience-card {
          border: none;
          padding: 0;
          background: none;
        }
        .experience-points {
          margin: 14px 0 0;
          padding-left: 18px;
          color: var(--text-muted);
          font-size: 13.5px;
          line-height: 1.75;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .cert-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }
        @media (min-width: 700px) {
          .cert-grid { grid-template-columns: repeat(2, 1fr); }
        }
        .cert-item {
          border: 1px solid var(--line);
          border-radius: 10px;
          padding: 14px 16px;
          background: var(--bg-alt);
        }
        .cert-title {
          font-size: 13.5px;
          color: var(--text);
          line-height: 1.5;
        }
        .cert-issuer {
          margin-top: 6px;
          font-family: var(--font-mono);
          font-size: 11.5px;
          color: var(--accent);
        }
      `}</style>
    </section>
  );
}
