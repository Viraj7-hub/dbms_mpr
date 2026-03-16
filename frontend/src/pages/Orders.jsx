function Orders(){

  return(
    <div>

      <h1>Sales Orders</h1>

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>101</td>
            <td>Keyboard</td>
            <td>2</td>
            <td>Delivered</td>
          </tr>

          <tr>
            <td>102</td>
            <td>Mouse</td>
            <td>1</td>
            <td>Processing</td>
          </tr>

        </tbody>

      </table>

    </div>
  )
}

export default Orders