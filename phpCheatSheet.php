<?php
include_once "connection.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userName  = $_POST["userName"] ?? null;
    $userPass  = $_POST["userPass"] ?? null;
    $userEmail = $_POST["userEmail"] ?? null;
    $birthDate = $_POST["birthDate"] ?? null;
    $userSex   = $_POST["userSex"] ?? null;
    $userStatus = $_POST["userStatus"] ?? 'A';

    //  count the user in user_acc
    $sql = $conn->query("SELECT COUNT(*) AS total FROM user_acc");
    $row = $sql->fetch_assoc();   // fetch result as associative array
    $userCount = intval($row['total']);  // convert to integer

    //  generate user id
    $userID = str_pad($userCount, 11, "0", STR_PAD_LEFT);

    //  validate missing input
    if (!$userName || !$userPass || !$userEmail || !$birthDate || !$userSex) {
        die("Missing required fields.");
    }

    //  validate random character email
    if (!filter_var($userEmail, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email format.");
    }

    //  filter password with hash
    //$hashedPass = password_hash($userPass, PASSWORD_DEFAULT);

    $stmt = $conn->prepare("INSERT INTO user_acc (userID, userName, userPass, userEmail, birthDate, userSex, userStatus) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssss", $userID, $userName, $userPass, $userEmail, $birthDate, $userSex, $userStatus);

    $stmt->execute();

    $stmt->close();

    //===  redirect to avoid resubmission!!
    //===  if insert in same location
    header("Location: " . $_SERVER['PHP_SELF']);
    //===  can you to go somewhere after function
    //  header("Location: " . 'index.html');
    exit;
}
?>

//==========================================================//

//==========================================================//

<?php
$conn = mysqli_connect("localhost", "root", "", "crud_db");

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>

//==========================================================//

//==========================================================//

<?php
$result = mysqli_query($conn, "SELECT * FROM users");
while ($row = mysqli_fetch_assoc($result)) {
?>
    <tr>
        <td><?= $row['name']; ?></td>
        <td><?= $row['email']; ?></td>
        <td>
            <a href="edit.php?id=<?= $row['id']; ?>">Edit</a> |
            <a href="delete.php?id=<?= $row['id']; ?>" onclick="return confirm('Delete this record?')">Delete</a>
        </td>
    </tr>
<?php } ?>

//==========================================================//

//==========================================================//

<?php
include 'db.php';

$id = $_GET['id'];
$result = mysqli_query($conn, "SELECT * FROM users WHERE id=$id");
$row = mysqli_fetch_assoc($result);
?>

<!DOCTYPE html>
<html>

<head>
    <title>Edit User</title>
</head>

<body>

    <form method="POST" action="update.php">
        <input type="hidden" name="id" value="<?= $row['id']; ?>">
        Name: <input type="text" name="name" value="<?= $row['name']; ?>">
        Email: <input type="email" name="email" value="<?= $row['email']; ?>">
        <button type="submit">Update</button>
    </form>

    //==========================================================//

    //==========================================================//

    <?php
    include 'db.php';

    $id    = $_POST['id'];
    $name  = $_POST['name'];
    $email = $_POST['email'];

    mysqli_query($conn, "UPDATE users SET name='$name', email='$email' WHERE id=$id");

    header("Location: index.php");

    ?>

    //==========================================================//

    //==========================================================//

    <?php
    include 'db.php';

    $id = $_GET['id'];
    mysqli_query($conn, "DELETE FROM users WHERE id=$id");

    header("Location: index.php");

    ?>

    //==========================================================//

    //==========================================================//

    <?php

    $result = $conn->query("SELECT * FROM user_acc");

    while ($row = $result->fetch_assoc()) {

        echo "
                <tr>
                    <td>" . $row["userID"] . "</td>
                    <td>" . $row["userName"] . "</td>
                    <td>" . $row["userEmail"] . "</td>
                    <td>" . $row["userPass"] . "</td>
                    <td>" . $row["birthDate"] . "</td>
                    <td>" . $row["userSex"] . "</td>
                    <td>" . $row["userStatus"] . "</td>
                </tr>
";
    };

    ?>


<!-- gamitin kapag retrieval ng radio ang gagamitin mo. -->
<?php echo (!empty($row) && $row['userstat'] === 'A') ? 'checked' : ''; ?> 

<!-- gamitin kapag text/string ang gagamitin mo. -->
<?= htmlspecialchars($row['userpass'] ?? '') ?>