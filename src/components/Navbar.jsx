import { useEffect, useLayoutEffect, useState } from "react";
import { socials } from "../data/portfolio.js";

const socialLogos = {
  LinkedIn: "/images/LinkedInLogo.png",
  GitHub: "/images/GithubLogo.png",
  Instagram: "/images/InstagramLogo.png",
};

const navItems = [
  ["Home", "/index.html#home"],
  ["Projects", "/projects.html"],
  ["Experience", "/experience.html"],
  ["Leadership", "/leadership.html"],
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return undefined;

    function closeOnEscape(event) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    const isHomePage = Boolean(document.querySelector("#home"));
    if (isHomePage) document.documentElement.classList.add("home-motion-ready");
    if (!("IntersectionObserver" in window)) {
      return () => document.documentElement.classList.remove("home-motion-ready");
    }

    const targets = document.querySelectorAll(".motion-reveal, .home-section-reveal");
    if (!targets.length) {
      return () => document.documentElement.classList.remove("home-motion-ready");
    }

    document.documentElement.classList.add("motion-ready");
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -32px 0px" });

    targets.forEach((target) => observer.observe(target));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
      document.documentElement.classList.remove("home-motion-ready");
    };
  }, []);

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand brand-image" href="/index.html#home" aria-label="Zaneer Mitha, home">
          <img src="/images/ZMLogoWhite.png" alt="" />
        </a>
        <div id="primary-navigation" className={`nav-links${menuOpen ? " nav-links-open" : ""}`}>
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </div>
        <div className="nav-actions">
          <div className="social-links header-social-links" aria-label="Social profiles">
            {socials.map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={`Visit ${label} (opens in a new tab)`}>
                <img src={socialLogos[label]} alt="" />
              </a>
            ))}
          </div>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  );
}
