import { skills } from "../data/portfolio.js";
import { SectionHeading } from "./SectionHeading.jsx";

function SkillCard({ skill, index }) {
  return (
    <article className="skill-card">
      <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
      <h3>{skill.name}</h3>
      <p>{skill.detail}</p>
    </article>
  );
}

export function Skills() {
  return (
    <section className="section section-skills" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading eyebrow="The toolkit" title="Skills & strengths" id="skills-title" description="A mix of technical tools and the ways I like to work." />
        <div className="skills-grid">
          {skills.map((skill, index) => <SkillCard key={skill.name} skill={skill} index={index} />)}
        </div>
      </div>
    </section>
  );
}
