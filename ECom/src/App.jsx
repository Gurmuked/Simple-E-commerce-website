import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Product from './components/singleProdcut/Product';
import ComparisonHome from './components/ProductComparison/ComparisonHome';
import Cart from './components/Cart/Cart';
import CheckOut from './components/CheckOut/CheckOut';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/compare" element={<ComparisonHome />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </Router>
  );
}


export default App;