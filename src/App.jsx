import { Contact } from "./components/Contact.jsx";
import { Footer } from "./components/Footer.jsx";
import { Hero } from "./components/Hero.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Skills } from "./components/Skills.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
