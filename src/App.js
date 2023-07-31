import './App.css';
import Cards from './components/Cards';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Services from './components/Services';
import Team from './components/Team';
import Footer from './components/Footer';

 
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Team />
      <Cards />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
