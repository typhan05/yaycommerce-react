import { Route, Routes } from "react-router-dom";
import Layout from "./layouts";
import Home from "./pages/Home";
import Shops from "./pages/Shops";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Complete from "./pages/Complete";
import Faqs from "./pages/Faqs";
import Contact from "./pages/Contact";
import About from "./pages/About";
import BlogTwoCol from "./pages/Blog";
import BlogThreeCol from "./pages/Blog/blog-three-column";
import BlogThreeColNoSidebar from "./pages/Blog/blog-three-column-no-sidebar";
import BlogFourColNoSidebar from "./pages/Blog/blog-four-column-no-sidebar";
import BlogList from "./pages/Blog/blog-list";
import BlogDetail from "./pages/Blog/blog-detail";
import BlogDetailNoSidebar from "./pages/Blog/blog-detail-no-sidebar";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route exact path="/yaycommerce-react/" element={<Home />} />
          <Route exact path="/yaycommerce-react/shops" element={<Shops />} />
          <Route
            exact
            path="/yaycommerce-react/products"
            element={<Products />}
          />
          <Route
            exact
            path="/yaycommerce-react/categories"
            element={<Categories />}
          />
          <Route exact path="/yaycommerce-react/search" element={<Search />} />
          <Route exact path="/yaycommerce-react/cart" element={<Cart />} />
          <Route
            exact
            path="/yaycommerce-react/checkout"
            element={<Checkout />}
          />
          <Route
            exact
            path="/yaycommerce-react/complete"
            element={<Complete />}
          />
          <Route exact path="/yaycommerce-react/faqs" element={<Faqs />} />
          <Route
            exact
            path="/yaycommerce-react/contact"
            element={<Contact />}
          />
          <Route exact path="/yaycommerce-react/about-us" element={<About />} />
          <Route
            exact
            path="/yaycommerce-react/blog-2-column"
            element={<BlogTwoCol />}
          />
          <Route
            exact
            path="/yaycommerce-react/blog-3-column"
            element={<BlogThreeCol />}
          />
          <Route
            exact
            path="/yaycommerce-react/blog-3-column-no-sidebar"
            element={<BlogThreeColNoSidebar />}
          />
          <Route
            exact
            path="/yaycommerce-react/blog-4-column-no-sidebar"
            element={<BlogFourColNoSidebar />}
          />
          <Route
            exact
            path="/yaycommerce-react/blog-list"
            element={<BlogList />}
          />
          <Route
            exact
            path="/yaycommerce-react/blog-detail"
            element={<BlogDetail />}
          />
          <Route
            exact
            path="/yaycommerce-react/blog-detail-no-sidebar"
            element={<BlogDetailNoSidebar />}
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
