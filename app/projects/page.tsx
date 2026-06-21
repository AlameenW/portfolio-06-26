import type { Metadata } from "next";
import PageEffects from "../PageEffects";
import ProjectRow from "../ProjectRow";
import { projectsData } from "../data/projects";

export const metadata: Metadata = {
  title: "All Projects — Alameen Adeku",
  description: "The complete list of projects built by Alameen Adeku.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageEffects />
      <nav id="nav">
        <a href="/" className="logo" aria-label="Alameen Adeku — home">
          <span className="a-mark">A</span>
        </a>
        <div className="nav-links">
          <a href="/#about">About</a>
          <a href="/#skills">Skills</a>
          <a href="/projects">Work</a>
          <a href="/#contact">Contact</a>
          <a
            href="/Alameen-Adeku-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-resume"
          >
            Resume ↗
          </a>
        </div>
      </nav>

      <main>
        <section style={{ paddingTop: "calc(clamp(86px,12vh,138px) + 56px)" }}>
          <div className="sec-head reveal">
            <div className="eyebrow"><b>03</b> / Selected Work</div>
            <h2 className="section-title">
              All <span className="hl">Projects</span>
            </h2>
            <p className="section-sub">
              Every project I&apos;ve shipped, from hackathon builds to full-stack apps — the
              complete record, not just the highlights.
            </p>
          </div>
          <div className="projects-list">
            {projectsData.map((project, index) => (
              <ProjectRow key={project.id} project={project} index={index} />
            ))}
          </div>
          <div className="projects-cta reveal">
            <a href="/#projects" className="btn btn-ghost">
              Back to Home <span className="arr">→</span>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <a href="/" className="logo" aria-label="Home"><span className="a-mark">A</span></a>
        <span className="copy">© 2026 Alameen Adeku — designed &amp; built with care</span>
      </footer>
    </>
  );
}
