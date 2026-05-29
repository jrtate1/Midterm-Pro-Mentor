<?php
// Database connection
$servername = "your_server_name_here";
$username = "your_database_username_here";
$password = "your_database_password_here";
$database = "your_database_name_here";

$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL Query
$sql = "SELECT Users.username, Users.email, Orders.product_name, Orders.order_date
        FROM Users
        JOIN Orders ON Users.user_id = Orders.user_id";

$result = $conn->query($sql);

// Display in HTML table
echo "<table border='1'>
<tr>
<th>Username</th>
<th>Email</th>
<th>Product Name</th>
<th>Order Date</th>
</tr>";

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "<tr>
        <td>" . htmlspecialchars($row["username"]) . "</td>
        <td>" . htmlspecialchars($row["email"]) . "</td>
        <td>" . htmlspecialchars($row["product_name"]) . "</td>
        <td>" . htmlspecialchars($row["order_date"]) . "</td>
        </tr>";
    }
} else {
    echo "<tr><td colspan='4'>No results</td></tr>";
}
echo "</table>";

$conn->close();
?>
