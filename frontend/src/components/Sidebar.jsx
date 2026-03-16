import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">

      <h2 className="logo">Inventory</h2>

      <Link to="/">Dashboard</Link>
      <Link to="/products">Products</Link>
      <Link to="/orders">Orders</Link>
      <Link to="/delivery">Delivery</Link>
      <Link to="/lowstock">Low Stock</Link>

    </div>
  );
}

export default Sidebar;