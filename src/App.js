import About from "./components/About/About";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Project from "./components/Projects/Project";
import Qualification from "./components/Qualifications/Qualification";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Skills />
      <Qualification />
      <Project />
      <Footer />
    </>
  );
}

export default App;
