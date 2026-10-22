export function SectionHeading({ eyebrow, title, description, id, layout = "default" }) {
  return (
    <div className={`section-heading ${layout === "row" ? "section-heading-row" : ""}`}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={id}>{title}</h2>
      </div>
      {description && <p>{description}</p>}
    </div>
  );
}
