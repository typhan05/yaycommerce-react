import './App.css';
import {Route, Routes} from 'react-router-dom'
import Layout from "./layouts";
import Home from "./pages/Home";
import Shops from "./pages/Shops";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route exact path="/yaycommerce-react/" element={<Home/>}/>
          <Route exact path="/yaycommerce-react/shops" element={<Shops/>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
