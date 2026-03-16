import { FaBox, FaWarehouse, FaShoppingCart } from "react-icons/fa";

function Dashboard() {

  return (
    <div className="dashboard">

      <h1 className="dashboard-title">Inventory Dashboard</h1>

      <div className="dashboard-cards">

        <div className="dashboard-card">
          <FaBox className="card-icon"/>
          <h3>Total Products</h3>
          <h2>25</h2>
        </div>

        <div className="dashboard-card">
          <FaWarehouse className="card-icon"/>
          <h3>Total Items in Stock</h3>
          <h2>320</h2>
        </div>

        <div className="dashboard-card">
          <FaShoppingCart className="card-icon"/>
          <h3>Total Items Sold</h3>
          <h2>120</h2>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;