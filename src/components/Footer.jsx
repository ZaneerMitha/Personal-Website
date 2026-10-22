import zmLogoWhite from "../../images/ZMLogoWhite.png";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="brand brand-image" href="/index.html#home" aria-label="Back to home page">
          <img src={zmLogoWhite} alt="" />
        </a>
        <p>Designed and built by Zaneer Mitha</p>
        <a href="/index.html#home">Back to home ↑</a>
      </div>
    </footer>
  );
}
