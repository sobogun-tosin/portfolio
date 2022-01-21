import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Project from "./components/Projects/Project";
import Qualification from "./components/Qualifications/Qualification";
import Skills from "./components/Skills";

function App() {
  return (
    <main id="home">
      <Navbar />
      <Landing />
      <About id="about" />
      <Skills id="skills" />
      <Qualification id="qualification" />
      <Project id="projects" />
      <Contact id="contact" />
      <Footer />
    </main>
  );
}

export default App;
