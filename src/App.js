import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

import Products from './Components/Products';
import About from './Components/About';
import Social from './Components/Social';
import Contact from './Components/Contact';
import Gallery from './Components/Gallery';

function App() {
  return (
    <div className="App">
      <Header />
      <Gallery />
      <Products />
      <About />
      <Social />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
