import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import TopNav from './Components/TopNav';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import MenuScreen from './screens/MenuScreen';
import ContactScreen from './screens/ContactScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

const App = () => {
  return (
    <Router>
      <TopNav />
      <Container>
        <main className='py3'>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/menu' component={MenuScreen} />
          <Route path='/menuItem/:id' component={ProductScreen} />
          <Route path='/about' component={AboutScreen} />
          <Route path='/contact' component={ContactScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Footer />
        </main>
      </Container>
    </Router>
  );
};

export default App;
