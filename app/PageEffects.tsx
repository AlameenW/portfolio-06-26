"use client";

import { useEffect } from "react";

export default function PageEffects() {
  useEffect(() => {
    const nav = document.getElementById("nav");
    const onScroll = () => nav?.classList.toggle("scrolled", window.scrollY > 20);
    addEventListener("scroll", onScroll, { passive: true });

    const heroEls = document.querySelectorAll(".hero .reveal, .reveal-up");
    heroEls.forEach((el, i) => {
      setTimeout(() => el.classList.add("in"), 60 + i * 70);
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );
    document.querySelectorAll("section:not(.hero) .reveal").forEach((el) => io.observe(el));

    return () => {
      removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return null;
}
