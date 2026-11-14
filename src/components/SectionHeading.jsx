export function SectionHeading({ eyebrow, title, description, id, layout = "default", reveal = true }) {
  return (
    <div className={`section-heading${reveal ? " motion-reveal" : ""} ${layout === "row" ? "section-heading-row" : ""}`}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={id}>{title}</h2>
      </div>
      {description && <p>{description}</p>}
    </div>
  );
}
