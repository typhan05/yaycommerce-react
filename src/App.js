import './App.css';
import {Route, Routes} from 'react-router-dom'
import Layout from "./layouts";
import Home from "./pages/Home";
import Shops from "./pages/Shops";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Complete from "./pages/Complete";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route exact path="/yaycommerce-react/" element={<Home/>}/>
          <Route exact path="/yaycommerce-react/shops" element={<Shops/>}/>
          <Route exact path="/yaycommerce-react/products" element={<Products/>}/>
          <Route exact path="/yaycommerce-react/categories" element={<Categories/>}/>
          <Route exact path="/yaycommerce-react/search" element={<Search/>}/>
          <Route exact path="/yaycommerce-react/cart" element={<Cart/>}/>
          <Route exact path="/yaycommerce-react/checkout" element={<Checkout/>}/>
          <Route exact path="/yaycommerce-react/complete" element={<Complete/>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
