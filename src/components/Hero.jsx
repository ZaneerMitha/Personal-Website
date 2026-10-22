export function Hero() {
  return (
    <section className="hero container" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" aria-hidden="true" /> Software engineer · New York</p>
        <h1 id="hero-title">Building user experiences with <span>care and curiosity.</span></h1>
        <p className="hero-intro">
          I’m Zaneer Mitha, a software engineer at Priceline and a Northeastern graduate in Computer Science and Design. Professionally, I focus on front-end and web development. Personally, I have a passion for user experiences, stand-up comedy, and community building.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore my work <span aria-hidden="true">↓</span></a>
          <a className="text-link" href="#contact">Get in touch</a>
        </div>
      </div>
      <div className="hero-portrait-wrap">
        <img className="hero-portrait" src="/images/ISNPortrait-cutout.png" alt="Portrait of Zaneer Mitha" />
      </div>
    </section>
  );
}
