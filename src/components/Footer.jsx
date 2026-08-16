import { profile } from "../data/resumeData";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
       <center> <p class="footer-tag">© Developed by {profile.name}</p></center>
        
      </div>

      <style>{`
        .footer {
          border-top: 1px solid var(--line);
          padding: 28px 0;
        }
        .footer-inner {
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 12.5px;
          color: var(--text-faint);
        }
        @media (min-width: 640px) {
          .footer-inner {
            flex-direction: row;
            justify-content: center;
          }
        }
        .footer-tag {
          font-family: var(--font-mono);
        }
        
      `}</style>
    </footer>
  );
}
