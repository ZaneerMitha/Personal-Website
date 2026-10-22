import { experience } from "../data/portfolio.js";
import { SectionHeading } from "./SectionHeading.jsx";

function ExperienceCard({ item, index }) {
  return (
    <article className="experience-card">
      <div className="experience-meta">
        <span>{item.dates}</span>
        <span className="experience-mark">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3>{item.role}</h3>
      <a className="organization-link" href={item.href} target="_blank" rel="noreferrer">
        {item.organization}
      </a>
      <ul>
        {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
      </ul>
    </article>
  );
}

export function Experience() {
  return (
    <section className="section section-experience" id="experience" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading eyebrow="Where I’ve contributed" title="Experience" id="experience-title" layout="row" description="Teams and roles that have shaped the way I build." />
        <div className="experience-grid">
          {experience.map((item, index) => <ExperienceCard key={`${item.organization}-${item.role}`} item={item} index={index} />)}
        </div>
      </div>
    </section>
  );
}
