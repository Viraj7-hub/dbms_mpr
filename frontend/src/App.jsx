import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Delivery from "./pages/Delivery";
import LowStock from "./pages/LowStock";

function App() {
  return (
    <Router>

      <div style={{display:"flex"}}>

        {/* Sidebar */}
        <Sidebar />

        {/* Page Content */}
        <div style={{flex:1, padding:"20px"}}>

          <Routes>

            <Route path="/" element={<Dashboard />} />

            <Route path="/products" element={<Products />} />

            <Route path="/orders" element={<Orders />} />

            <Route path="/delivery" element={<Delivery />} />

            <Route path="/lowstock" element={<LowStock />} />

          </Routes>

        </div>

      </div>

    </Router>
  );
}

export default App;