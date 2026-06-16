import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import ExperienceTimeline from "./components/ExperienceTimeline.jsx";
import Education from "./components/Education.jsx";
import FieldWork from "./components/FieldWork.jsx";
import GalleryCarousel from "./components/GalleryCarousel.jsx";
import Publications from "./components/Publications.jsx";
import AcademicInterests from "./components/AcademicInterests.jsx";
import Languages from "./components/Languages.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ExperienceTimeline />
        <Education />
        <FieldWork />
        <GalleryCarousel />
        <Publications />
        <AcademicInterests />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
