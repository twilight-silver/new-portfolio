import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import StoriesSection from "./components/StoriesSection"
import AboutMeSection from "./components/AboutMeSection" 
import ContactSection from "./components/ContactSection" 
import BackToTopButton from "./components/backtotop"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className="appcontainer">
      <Header scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection}/>
      <StoriesSection id= "portfolio" />
      <AboutMeSection id= "about" scrollToSection={scrollToSection} />
      <ContactSection id= "contact" />
      <BackToTopButton />
      <Footer />
    </div>
  )
}

export default App
