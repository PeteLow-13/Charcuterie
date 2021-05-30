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
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';

const App = () => {
  return (
    <Router>
      <TopNav />
      <Container>
        <main className='py3'>
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/about' component={AboutScreen} />
          <Route path='/contact' component={ContactScreen} />
          <Route path='/menu' component={MenuScreen} />
          <Route path='/menuItem/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/' component={HomeScreen} exact />
        </main>
        <Footer />
      </Container>
    </Router>
  );
};

export default App;
