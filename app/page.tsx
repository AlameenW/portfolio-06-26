import Image from "next/image";
import PageEffects from "./PageEffects";
import ContactForm from "./ContactForm";
import ProjectRow from "./ProjectRow";
import { projectsData } from "./data/projects";

const featuredProjects = projectsData.filter((p) => p.featured);

export default function Home() {
  return (
    <>
      <PageEffects />
      <nav id="nav">
        <a href="#home" className="logo" aria-label="Alameen Adeku — home">
          <span className="a-mark">A</span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Work</a>
          <a href="#contact">Contact</a>
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
        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-status reveal">
            <span className="status-dot"></span> Open to internships &amp;
            new-grad roles
          </div>
          <h1 className="reveal-up">
            <span className="line">
              <span>Alameen</span>
            </span>
            <span className="line">
              <span className="hl">Adeku</span>
            </span>
          </h1>
          <p className="hero-role reveal" data-d="1">
            <b>Full&nbsp;Stack&nbsp;Developer</b> <span className="sep">/</span>{" "}
            <b>AI&nbsp;Engineer</b>
          </p>
          <p className="hero-bio reveal" data-d="2">
            CS senior at Southeastern Louisiana University building full-scale
            web applications from concept to deployment. Currently going deep on{" "}
            <b>Machine Learning &amp; AI</b>.
          </p>
          <div className="cta-row reveal" data-d="3">
            <a href="#projects" className="btn btn-primary">
              View My Work <span className="arr">→</span>
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get In Touch
            </a>
            <a
              href="/Alameen-Adeku-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Resume <span className="arr">↗</span>
            </a>
          </div>
          <div className="hero-scroll reveal" data-d="3">
            <span className="bar"></span> Scroll
          </div>
        </section>

        {/* ABOUT */}
        <section id="about">
          <div className="sec-head reveal">
            <div className="eyebrow">
              <b>01</b> / About
            </div>
            <h2 className="section-title">
              The person behind <span className="hl">the code</span>
            </h2>
          </div>
          <div className="about-grid">
            <div className="headshot reveal">
              <div className="block"></div>
              <Image
                src="/headshot.jpeg"
                alt="Alameen Adeku"
                width={1280}
                height={1600}
                style={{ width: "100%", height: "auto" }}
                priority
              />
            </div>
            <div className="about-body reveal" data-d="1">
              <p>
                Hi, I&apos;m Alameen — a Computer Science rising senior at{" "}
                <b>Southeastern Louisiana University</b>. I specialize in
                building websites with beautiful, modern, and user-friendly
                designs, taking products from first sketch to production
                deployment.
              </p>
              <p>
                Right now I&apos;m learning{" "}
                <b>AI engineering &amp; automation</b> and exploring{" "}
                <b>Machine Learning and AI.</b>These are areas I&apos;m deeply
                curious about and excited to grow into. I bring a solid
                foundation in modern web technologies paired with a genuine
                passion for continuous learning.
              </p>
              <p>
                I flourish in collaborative environments and am always excited
                to pick up new technologies to sharpen my craft.
              </p>
              <div className="stats-row">
                <div className="stat">
                  <div className="num">3+</div>
                  <div className="lbl">Years coding</div>
                </div>
                <div className="stat">
                  <div className="num">16+</div>
                  <div className="lbl">Technologies</div>
                </div>
                <div className="stat">
                  <div className="num">&apos;27</div>
                  <div className="lbl">Graduating</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <div className="sec-head reveal">
            <div className="eyebrow">
              <b>02</b> / Skills
            </div>
            <h2 className="section-title">
              A toolkit for the <span className="hl">full stack</span>
            </h2>
            <p className="section-sub">
              The technologies I reach for to ship complete products.
            </p>
          </div>
          <div className="skills-grid">
            <div className="skill-card reveal" data-d="1">
              <div className="skill-head">
                <span
                  className="skill-sq"
                  style={{ background: "var(--yellow)" }}
                ></span>
                <h3>Frontend</h3>
                <span className="ct">05</span>
              </div>
              <div className="badges">
                <span className="badge">React</span>
                <span className="badge">Next.js</span>
                <span className="badge">TypeScript</span>
                <span className="badge">Tailwind CSS</span>
                <span className="badge">Vanilla JS</span>
              </div>
            </div>
            <div className="skill-card reveal" data-d="2">
              <div className="skill-head">
                <span
                  className="skill-sq"
                  style={{ background: "var(--cobalt)" }}
                ></span>
                <h3>Backend</h3>
                <span className="ct">06</span>
              </div>
              <div className="badges">
                <span className="badge">Node.js</span>
                <span className="badge">Express</span>
                <span className="badge">Python</span>
                <span className="badge">Supabase</span>
                <span className="badge">PostgreSQL</span>
                <span className="badge">.NET</span>
              </div>
            </div>
            <div className="skill-card reveal" data-d="3">
              <div className="skill-head">
                <span
                  className="skill-sq"
                  style={{ background: "var(--bone)" }}
                ></span>
                <h3>Data Science</h3>
                <span className="ct">05</span>
              </div>
              <div className="badges">
                <span className="badge">Python</span>
                <span className="badge">Pandas</span>
                <span className="badge">Matplotlib</span>
                <span className="badge">NumPy</span>
                <span className="badge">Scikit-learn</span>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <div className="sec-head reveal">
            <div className="eyebrow">
              <b>03</b> / Selected Work
            </div>
            <h2 className="section-title">
              Things I&apos;ve <span className="hl">built</span>
            </h2>
          </div>
          <div className="projects-list">
            {featuredProjects.map((project, index) => (
              <ProjectRow key={project.id} project={project} index={index} />
            ))}
          </div>
          <div className="projects-cta reveal">
            <a href="/projects" className="btn btn-ghost">
              View All Projects <span className="arr">→</span>
            </a>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <div className="sec-head reveal">
            <div className="eyebrow">
              <b>04</b> / Contact
            </div>
          </div>
          <div className="contact-wrap">
            <div className="contact-left">
              <h2 className="section-title reveal">
                Let&apos;s build <span className="hl-c">something</span>
              </h2>
              <p className="section-sub reveal">
                Have a role, project, or idea in mind? My inbox is always open —
                I&apos;ll get back to you fast.
              </p>
              <div className="socials reveal" data-d="1">
                <a
                  href="https://github.com/AlameenW"
                  target="_blank"
                  rel="noopener"
                  className="social-link"
                >
                  <span className="si">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33s1.7.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.16.58.67.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
                    </svg>
                  </span>
                  <span className="meta">
                    <span className="t">GitHub</span>
                    <span className="h">@AlameenW</span>
                  </span>
                  <span className="ext">↗</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/alameen-adeku-2507492b6/"
                  target="_blank"
                  rel="noopener"
                  className="social-link"
                >
                  <span className="si">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.34 17V9.99H6v7.01h2.34zM7.17 8.95a1.36 1.36 0 100-2.72 1.36 1.36 0 000 2.72zM18 17v-3.85c0-2.05-1.1-3-2.56-3-1.18 0-1.71.65-2 1.11V9.99h-2.34V17h2.34v-3.9c0-.21.02-.42.08-.57.16-.42.54-.85 1.18-.85.83 0 1.16.63 1.16 1.56V17H18z" />
                    </svg>
                  </span>
                  <span className="meta">
                    <span className="t">LinkedIn</span>
                    <span className="h">in/alameen-adeku</span>
                  </span>
                  <span className="ext">↗</span>
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer>
        <a href="#home" className="logo" aria-label="Home">
          <span className="a-mark">A</span>
        </a>
        <span className="copy">
          © 2026 Alameen Adeku — designed &amp; built with care
        </span>
      </footer>
    </>
  );
}
