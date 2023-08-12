import './App.css';
import Cards from './components/Cards';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Services from './components/Services';
import Team from './components/Team';
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { animateScroll as scroll } from 'react-scroll';

 
function App() {
  const scrollToSection = (sectionId) => {
    scroll.scrollTo(sectionId, {
        duration: 800, // Adjust the duration as needed
        smooth: 'easeInOutQuart', // Add easing for smoother effect
    });
};

  return (
    <>
     <Router>
            <div className="App">
                <Navbar scrollToSection={scrollToSection} />
                <div className="Content">
                    <Hero />
                    <Services />
                    <Team />
                    <Cards />
                    <Newsletter />
                </div>
                <Footer scrollToSection={scrollToSection} />
            </div>
        </Router>
    
    </>

  );
}

export default App;
