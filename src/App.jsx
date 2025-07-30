import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";
import Terminal from "./sections/Terminal";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <FeatureCards />
    <Experience />
    <TechStack />
    {/* <Testimonials /> */}
    <Contact />
    <Footer />
    <Terminal />
  </>
);

export default App;
