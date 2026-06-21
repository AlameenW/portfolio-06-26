import type { Metadata } from "next";
import Link from "next/link";
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
        <Link href="/" className="logo" aria-label="Alameen Adeku — home">
          <span className="a-mark">A</span>
        </Link>
        <div className="nav-links">
          <Link href="/#about">About</Link>
          <Link href="/#skills">Skills</Link>
          <Link href="/projects">Work</Link>
          <Link href="/#contact">Contact</Link>
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
              Every project I&apos;ve worked on from class projects, hackathon builds and personal full-stack apps — the
              complete record, not just the highlights.
            </p>
          </div>
          <div className="projects-list">
            {projectsData.map((project, index) => (
              <ProjectRow key={project.id} project={project} index={index} />
            ))}
          </div>
          <div className="projects-cta reveal">
            <Link href="/#projects" className="btn btn-ghost">
              Back to Home <span className="arr">→</span>
            </Link>
          </div>
        </section>
      </main>

      <footer>
        <Link href="/" className="logo" aria-label="Home"><span className="a-mark">A</span></Link>
        <span className="copy">© 2026 Alameen Adeku — designed &amp; built with care</span>
      </footer>
    </>
  );
}
