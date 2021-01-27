import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import img from './assets/IMG_5043.jpeg';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='picture-div'>
        <img className='pic' src={img} alt='chacuterie' />
      </div>
      <p>Get your Charcuterie here!</p>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Maria's Charcuterie
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Footer />
    </div>
  );
}

export default App;
