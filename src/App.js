import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import img from './assets/IMG_5043.jpeg';
import Products from './Components/Products';
import About from './Components/About';
import Social from './Components/Social';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Products />
      <About />
      <Social />
      <Contact />
      <Footer />
      {/* <div className='picture-div'>
        <img className='pic' src={img} alt='chacuterie' />
      </div> */}
    </div>
  );
}

export default App;
