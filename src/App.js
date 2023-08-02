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

 
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/services" element={<Services />}/> 
        <Route path="/team" element={<Team />}/>
        <Route path="/cards" element={<Cards/>}/>
        <Route path="/newsletter" element={<Newsletter/>}/>
      </Routes>
      <Footer />
    </Router>
    
    </>

  );
}

export default App;
