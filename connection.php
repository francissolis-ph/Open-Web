<?php
$serverName = "192.168.9.240"; // or "127.0.0.1\\SQLEXPRESS"
$connectionOptions = [
    "Database" => "nch",
    "Uid" => "sa",
    "PWD" => "R00t"
];

// Establish connection
$conn = sqlsrv_connect($serverName, $connectionOptions);

if ($conn) {
    return "Connection established.<br />";
} else {
    echo "Connection failed.<br />";
    die(print_r(sqlsrv_errors(), true));
}
