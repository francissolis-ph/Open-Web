<?php 

$svr = "localhost";
$userName = "root";
$passWord = '';
$db = 'test';

$conn = new mysqli($svr, $userName, $passWord, $db);

// if ($conn->connect_error) {
//     echo "connection error!" . $conn->connect_error; 
// } else {
//     echo "connection success!";
// }

?>