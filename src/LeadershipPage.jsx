import { Footer } from "./components/Footer.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { SectionHeading } from "./components/SectionHeading.jsx";

export default function LeadershipPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="section" aria-labelledby="leadership-title">
          <div className="container">
            <SectionHeading eyebrow="Leadership" title="Leadership" id="leadership-title" description="Leadership content will go here." />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
