import About from "./components/About/About";
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
      <Footer />
    </main>
  );
}

export default App;
