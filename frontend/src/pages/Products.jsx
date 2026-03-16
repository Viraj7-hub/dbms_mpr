function Products(){

  return(
    <div className="page">

      <h1>Products</h1>

      <button className="add-btn">+ Add Product</button>

      <table className="table">

        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>1</td>
            <td>Keyboard</td>
            <td>20</td>
            <td>₹1500</td>
            <td>
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>Mouse</td>
            <td>15</td>
            <td>₹800</td>
            <td>
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </td>
          </tr>

        </tbody>

      </table>

    </div>
  )
}

export default Products