import { projects } from "../data/portfolio.js";
import { SectionHeading } from "./SectionHeading.jsx";

const projectsByDate = [...projects].sort((a, b) => {
  const dateA = Date.parse(a.date);
  const dateB = Date.parse(b.date);
  const hasDateA = Number.isFinite(dateA);
  const hasDateB = Number.isFinite(dateB);

  if (hasDateA && hasDateB) return dateB - dateA;
  if (hasDateA) return 1;
  if (hasDateB) return -1;
  return 0;
});

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <span className="project-date">{project.date}</span>
        <span className="project-type">{project.type}</span>
      </div>
      <div className="project-card-body">
        {project.logo && (
          <img className="project-logo" src={project.logo} alt={`${project.name} logo`} loading="lazy" />
        )}
        <div className="project-card-content">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <ul className="tag-list">
            {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
          {project.href && (
            <a className="card-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.name} on GitHub`}>
              View project
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading eyebrow="Zaneer Mitha" title="Projects" id="projects-title" layout="row" description=""/>
        <div className="projects-grid">
          {projectsByDate.map((project) => <ProjectCard key={project.name} project={project} />)}
        </div>
      </div>
    </section>
  );
}
