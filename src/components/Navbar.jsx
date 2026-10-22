import { useEffect, useState } from "react";
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
