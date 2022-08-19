import './App.css';
import {Route, Routes} from 'react-router-dom'
import Layout from "./layouts";
import Home from "./pages/Home";
import Shops from "./pages/Shops";
import Products from "./pages/Products";
import Categories from "./pages/Categories";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route exact path="/yaycommerce-react/" element={<Home/>}/>
          <Route exact path="/yaycommerce-react/shops" element={<Shops/>}/>
          <Route exact path="/yaycommerce-react/products" element={<Products/>}/>
          <Route exact path="/yaycommerce-react/categories" element={<Categories/>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
