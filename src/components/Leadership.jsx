import { leadershipGroups } from "../data/leadership.js";

function LeadershipSection({ group, index }) {
  return (
    <article className="leadership-story motion-reveal">
      <div className="leadership-story-copy">
        <p className="eyebrow">0{index + 1} / Leadership</p>
        <h3>{group.name}</h3>
        <p className="leadership-positions-label">Positions held</p>
        <ul className="leadership-positions" aria-label="Positions held">
          {group.positions.map((position) => <li key={position}>{position}</li>)}
        </ul>
        <p className="leadership-description">{group.description}</p>
      </div>
      <div className="leadership-gallery" aria-label={`${group.name} photo gallery`}>
        {group.photos.map((photo, photoIndex) => (
          <figure className={`leadership-photo leadership-photo-${photoIndex + 1}`} key={photo.src}>
            <img src={photo.src} alt={photo.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </article>
  );
}

export function Leadership() {
  return (
    <section className="leadership-page section" aria-labelledby="leadership-title">
      <div className="container">
        <header className="leadership-intro motion-reveal">
          <p className="eyebrow">Beyond the job title</p>
          <h2 id="leadership-title">Leadership</h2>
          <p>A few communities and teams I’ve had the chance to help lead.</p>
        </header>
        <div className="leadership-stories">
          {leadershipGroups.map((group, index) => (
            <LeadershipSection group={group} index={index} key={group.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
