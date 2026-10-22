import { Experience } from "./components/Experience.jsx";
import { Footer } from "./components/Footer.jsx";
import { Navbar } from "./components/Navbar.jsx";

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main><Experience /></main>
      <Footer />
    </>
  );
}
