import { About } from './components/About';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

export default function App() {
  return (
    <>
      <div className="bg-orb orb-1" aria-hidden="true" />
      <div className="bg-orb orb-2" aria-hidden="true" />

      <Header />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="footer">
        <div className="container">
          <p>© 2026 Moon Sunghoon. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
