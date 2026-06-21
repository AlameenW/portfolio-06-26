# Alameen Adeku — Portfolio

My updated portfolio website.

**Live nav sections:** Hero · About · Skills · Work (featured projects) · Contact
**Additional page:** `/projects` — full project list

## Tech Stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript
- **Styling:** Hand-written CSS (`app/globals.css`) — no Tailwind/CSS framework
- **Fonts:** Bricolage Grotesque, Archivo, Space Mono (via `next/font/google`)
- **Contact form:** [EmailJS](https://www.emailjs.com) (client-side, no backend route)


## Project Structure

```
app/
  page.tsx              Homepage (hero, about, skills, featured work, contact)
  projects/page.tsx     Full projects list
  data/projects.ts       Project data (shared by homepage + /projects)
  ContactForm.tsx        EmailJS-powered contact form
  ProjectRow.tsx          Shared project list-item component
  PageEffects.tsx         Scroll/reveal animation behavior
  icon.png / apple-icon.png   Favicons
public/
  Alameen-Adeku-Resume.pdf
  headshot.jpeg
```

