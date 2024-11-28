import "./App.css";
import { Element } from "react-scroll";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Experience from "./pages/experience/Experience";
import Testimonials from "./pages/testimonials/Testimonials";
import Contact from "./pages/contact/Contact";
import FAQs from "./pages/faqs/FAQs";
import Footer from "./pages/footer/Footer";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="experience">
        <Experience />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Element name="faqs">
        <FAQs />
      </Element>
      <Footer />
    </>
  );
}

export default App;
