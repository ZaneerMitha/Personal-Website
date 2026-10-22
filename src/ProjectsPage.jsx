import { Footer } from "./components/Footer.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Projects } from "./components/Projects.jsx";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="projects-page"><Projects /></main>
      <Footer />
    </>
  );
}
