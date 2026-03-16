function Delivery(){

  return(
    <div>

      <h1>Delivery Tracking</h1>

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>Order ID</th>
            <th>Delivery Person</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>101</td>
            <td>Rahul</td>
            <td>Delivered</td>
          </tr>

          <tr>
            <td>102</td>
            <td>Amit</td>
            <td>Out for Delivery</td>
          </tr>

        </tbody>

      </table>

    </div>
  )
}

export default Delivery