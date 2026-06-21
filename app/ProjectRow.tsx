import { Project } from "./data/projects";

export default function ProjectRow({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <a
      href={project.repo}
      target="_blank"
      rel="noopener"
      className="project-row reveal"
      data-d={String((index % 3) + 1)}
    >
      <div className="pr-num">{String(index + 1).padStart(2, "0")}</div>
      <div className="pr-main">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="pr-stack">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="pr-go">
        View Code <span className="arr">↗</span>
      </div>
    </a>
  );
}
