import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden selection:bg-[#8b5cf6] selection:text-white">
      <Navbar />

      {/* Placeholder for sections */}
      <main className="p-0">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
        {/* Sections will be added here */}
      </main>
    </div>
  );
}

export default App;
