import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Product from './components/singleProdcut/Product';
import ComparisonHome from './components/ProductComparison/ComparisonHome';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/compare" element={<Product />} />
        <Route path="/compare1" element={<ComparisonHome />} />
        <Route path="/compare2" element={<Cart />} />
      </Routes>
    </Router>
  );
}


export default App;