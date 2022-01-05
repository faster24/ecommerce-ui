import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import {
    BrowserRouter as Router,
    Routes ,
    Route,
    Link
} from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Router>
          <Routes>
          <Route path="/" element={<Home />}/>
            
            <Route path="products" element={<ProductList />} />
              <Route path="products/:category" element={<ProductList />} />
            
                <Route path="product" element={<Product />}/>
                <Route path="product/:id" element={<Product />}/>

                <Route path="cart" element={<Cart />}/>
                <Route path="cart/:id" element={<Cart />}/>

                <Route path="login" element={<Login />}/>
                <Route path="register" element={<Register />}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
