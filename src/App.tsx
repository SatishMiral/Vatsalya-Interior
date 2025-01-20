import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Footer from './components/Footer';

const App = () => {

  return (
    <div className="min-h-screen bg-gray-50">

    <Nav/>
  
    <Hero/>

    <Services/>

    <Portfolio/>

    <Testimonial/>

    <Contact/>
      
    <Footer/>
      
    </div>
  );
};

export default App;