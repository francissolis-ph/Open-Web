<?php
include_once "connection.php";

if (isset($_POST["insert"])) {
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $employeeNo = $_POST["employee-no"];
    $lastName = $_POST["last-name"];
    $firstName = $_POST["first-name"];
    $middleName = $_POST["middle-name"];
    $suffix = $_POST["suffix"];
    $userMail = $_POST["user-mail"];
    $userNumber = $_POST["user-number"];
    $birthDate = $_POST["birth-date"];
    $userSex = $_POST["user-sex"];
    $userName = $_POST["user-name"];
    $userPass = $_POST["user-pass"];
    $userPassConf = $_POST["user-pass-confirm"];
    $userStat = $_POST["user-stat"];

    $currentDateTime = (new DateTime())->format("Y-m-d H:i:s");

    $sql = $conn->query("SELECT COUNT(*) AS total FROM user_acc");
    $row = $sql->fetch_assoc();
    $userCount = intval($row['total']);

    $userId = str_pad($userCount, 11, "0", STR_PAD_LEFT);

    $hashPass = password_hash($userPass, PASSWORD_DEFAULT);

    if (!$userName || !$userPass || !$lastName || !$firstName || !$birthDate || !$userSex || !$userStat) {
      die("Missing required fields!");
    }

    if (!filter_var($userMail, FILTER_VALIDATE_EMAIL)) {
      die("Invalid email format.");
    }

    if ($userPass !== $userPassConf) {
      die("Password is not match!");
    }

    $stmt = $conn->prepare("INSERT INTO user_acc (userid, lastname, firstname, middlename, suffix, useremail, phonenumber, birthdate, usersex, datelog, timelog, username, userpass, userstat) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssssssssss", $userId, $lastName, $firstName, $middleName, $suffix, $userMail, $userNumber, $birthDate, $userSex, $currentDateTime, $currentDateTime, $userName, $hashPass, $userStat);

    $stmt->execute();
    $stmt->close();

    header("Location: " . $_SERVER['PHP_SELF']);
    exit;
  }
}

?>

<?php
if (isset($_POST["update"])) {

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $employeeNo = $_POST["user-edit-id"];

    $sql = $conn->query("SELECT * FROM user_acc WHERE userid=" . $employeeNo . "");
    $updateValue = $sql->fetch_assoc();

    Header("Location: " . $_SERVER['PHP_SELF']);
    exit;
  }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Open Web</title>
  <link rel="stylesheet" href="index.css" />
  <link rel="stylesheet" href="w-hos-employee-record.css" />
  <script src="w-hos-employee-record.js" defer></script>
  <script src="index.js" defer></script>
  <!-- <script src="jsCheatSheet.js" defer></script> -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
</head>

<body>
  <header class="master-header" id="master-header">
    <div class="mh-top">
      <a href="">HOME</a>
      <div class="mh-top-right">
        <p>
          Welcome! <mark><em>PASTE USER NAME!</em></mark>
        </p>
        <a href="">LOGOUT</a>
      </div>
    </div>
    <div class="mh-bottom">
      <div class="mh-bottom-left">
        <p>
          An open source web information system by:
          <strong><a class="mh-bottom-left-name" href="">Francis L. Solis</a></strong>
        </p>
        <h1 class="mh-bottom-title">Open Web Information System</h1>
        <p>Feel free to use my template and maybe learn something about it</p>
      </div>
      <div class="mh-bottom-right">
        <p>Philippines Standard Time:</p>
        <p id="ph-time"></p>

        <script></script>
      </div>
    </div>
  </header>
  <nav class="nav-bar" id="nav-bar">
    <i title="Home" id="fa-home" class="fas fa-home nav-button"></i>
    <i title="Transactions" id="fa-exchange-alt" class="fas fa-exchange-alt nav-button"></i>
    <i title="Reference Tables" id="fa-table" class="fas fa-table nav-button"></i>
    <i title="Settings" id="fa-gear" class="fas fa-gear nav-button"></i>
  </nav>
  <main class="content-area" id="content-area">
    <div id="ca-home" class="ca-home">
      <form id="employee-record-form" action="" method="post" onsubmit="return validateForm();" autocomplete="off">
        <div id="form-slide-card" class="form-slide-card">
          <div class="form-top">
            <fieldset class="form-top-inputs">
              <legend>Create Employee Record</legend>
              <div class="form-top-inputs-groups">
                <div class="input-box" id="input-box">
                  <span>User ID</span>
                  <input type="text" class="form-input-text" name="employee-no" value="" readonly />
                </div>
                <div class="input-box-col-2" style="display: grid; grid-template-columns: 67% 30%">
                  <div class="input-box" id="input-box">
                    <span>Last Name</span>
                    <input type="text" class="form-input-text" name="last-name" id="last-name" placeholder="e.g., Doe"
                      maxlength="50" autocomplete="off" />

                  </div>
                  <div class="input-box" id="input-box">
                    <span>Suffix</span>
                    <input type="text" class="form-input-text" name="suffix" id="suffix" maxlength="10"
                      autocomplete="off" />
                  </div>
                </div>
                <div class="input-box" id="input-box">
                  <span>First Name</span>
                  <input type="text" class="form-input-text" name="first-name" id="first-name" placeholder="e.g., John"
                    maxlength="50" autocomplete="off" />
                </div>
                <div class="input-box" id="input-box">
                  <span>Middle Name</span>
                  <input type="text" class="form-input-text" name="middle-name" id="middle-name" maxlength="50"
                    autocomplete="off" />
                </div>
              </div>
              <div class="form-top-inputs-groups">
                <div class="input-box" id="input-box">
                  <span>Email Address</span>
                  <input type="email" class="form-input-text" name="user-mail" id="user-mail"
                    placeholder="e.g., sample-email@gmail.com" maxlength="250" autocomplete="off" />
                </div>
                <div class="input-box" id="input-box">
                  <span>Phone Number</span>
                  <input type="number" class="form-input-text" name="user-number" id="user-number"
                    placeholder="####-###-####" maxlength="11" />
                </div>
                <div class="input-box" id="input-box">
                  <span>Date of Birth</span>
                  <input type="date" class="form-input-text" name="birth-date" id="birth-date" />
                </div>
                <div class="input-box" id="input-box">
                  <span>Gender</span>
                  <div class="input-box-col-2">
                    <span>Male</span>
                    <div class="input-box-radio-sex" id="user-sex-male" data-sex="male">
                      <i class="fa fa-mars" id="fa-mars" aria-hidden="true" data-sex="Male"></i>
                    </div>
                    <span>Female</span>
                    <div class="input-box-radio-sex" id="user-sex-female" data-sex="female">
                      <i class="fa fa-venus" id="fa-venus" aria-hidden="true" data-sex="Female"></i>
                    </div>
                  </div>
                  <span id="radio-sex-error" class="radio-sex-error">Please Select Gender!<i
                      class="fa fa-exclamation-circle" aria-hidden="true"></i></span>
                  <div style="display: none">
                    <input type="radio" class="form-input-radio" id="form-input-radio-male" name="user-sex" value="M" />
                    <input type="radio" class="form-input-radio" id="form-input-radio-female" name="user-sex"
                      value="F" />
                  </div>
                </div>
              </div>
              <div class="form-top-inputs-groups">
                <div class="input-box" id="input-box">
                  <span>Username</span>
                  <input type="text" class="form-input-text" id="user-name" name="user-name" maxlength="50"
                    autocomplete="off" />
                </div>
                <div class="input-box" id="input-box">
                  <span>Password</span>
                  <input type="password" class="form-input-text" id="user-pass" name="user-pass"
                    autocomplete="new-password" />
                </div>
                <div style="display: flex; justify-content: end;" id="pass-val-mess">

                </div>
                <div class="input-box" id="input-box">
                  <span>Confirm Password</span>
                  <input type="password" class="form-input-text" id="user-pass-confirm" name="user-pass-confirm" />
                </div>
                <div class="input-box" id="input-box">
                  <span>Employment Status</span>
                  <div class="input-box-col-2">
                    <span>Active</span>
                    <div class="input-box-radio-stat" id="user-stat-active" data-sex="male">
                      <i class="fa-solid fa-check" id="fa-check"></i>
                    </div>
                    <span>Inactive</span>
                    <div class="input-box-radio-stat" id="user-stat-inactive" data-sex="female">
                      <i class="fa-solid fa-x" id="fa-x"></i>
                    </div>
                  </div>
                  <span id="radio-stat-error" class="radio-stat-error">Please Select Status!<i
                      class="fa fa-exclamation-circle" aria-hidden="true"></i></span>
                  <div style="display: none">
                    <input type="radio" class="form-input-radio" name="user-stat" id="radio-user-stat-active"
                      value="A" />
                    <input type="radio" class="form-input-radio" name="user-stat" id="radio-user-stat-inactive"
                      value="I" />
                  </div>
                </div>
              </div>
              <div class="form-buttons">
                <button type="submit" class="submit" name="insert">
                  Submit
                </button>
                <button type="reset" class="reset">Reset</button>
              </div>
            </fieldset>
          </div>
          <div class="form-bottom">
            <div>
              <i class="fa-solid fa-users"></i>
              <h2>Employee Record</h2>
            </div>
            <div id="form-bottom-toggle-container" class="form-bottom-toggle-container">
              <div id="form-bottom-toggle-bg" class="form-bottom-toggle-bg"></div>
              <div id="form-bottom-toggle-dot" class="form-bottom-toggle-dot"></div>
            </div>
          </div>
        </div>
      </form>
      <div id="table-card" class="table-card">
        <div id="table-card-top" class="table-card-top">
          <div class="table-card-top-left">
            <span>Search Employee</span>
            <div>
              <select name="" id="" type="text" class="form-input-text" id="search-input-select">
                <option value="1">Employee No.</option>
                <option value="2">Last Name</option>
                <option value="3">First Name</option>
                <option value="4">Middle Name</option>
              </select>
              <input type="text" class="form-input-text" id="search-input">
            </div>
          </div>
          <div class="table-card-top-right">
          </div>
        </div>
        <div id="table-card-bottom" class="table-card-bottom">
          <table id="table-card-bottom-table" class="table-card-bottom-table">
            <tr>
              <th style="width: 120px;">Employee No. <i class="fa fa-arrow-circle-down" aria-hidden="true"></i></th>
              <th style="width: 120px;">Last Name <i class="fa fa-arrow-circle-up" aria-hidden="true"></i></th>
              <th style="width: 120px;">First Name <i class="fa fa-arrow-circle-up" aria-hidden="true"></i></th>
              <th style="width: 120px;">Middle Name <i class="fa fa-arrow-circle-up" aria-hidden="true"></i></th>
              <th style="width: 50px;">Suffix</th>
              <th style="width: 50px;">Sex</th>
              <th style="width: 100px;">Birth Date</th>
              <th style="width: 150px">Email Address</th>
              <th style="width: 100px;">Phone No.</th>
              <th style="width: 100px;">Username</th>
              <th style="width: 100px;">Status</th>
              <th style="width: 100px;">Actions</th>
            </tr>

            <?php

            $result = $conn->query("SELECT *, (CASE WHEN usersex = 'M' THEN 'Male' ELSE 'Female' END) as sql_user_sex, (CASE WHEN userstat = 'A' THEN 'Active' ELSE 'Inactive' END) as sql_user_stat FROM user_acc ORDER BY userid ASC");

            while ($row = $result->fetch_assoc()) {

              echo "
            
             <tr>
              <td class='table-employee-number'>" . $row["userid"] . "</td>
              <td>" . $row["lastname"] . "</td>
              <td>" . $row["firstname"] . "</td>
              <td>" . $row["middlename"] . "</td>
              <td>" . $row["suffix"] . "</td>
              <td>" . $row["sql_user_sex"] . "</td>
              <td>" . $row["birthdate"] . "</td>
              <td>" . $row["useremail"] . "</td>
              <td>" . $row["phonenumber"] . "</td>
              <td>" . $row["username"] . "</td>
              <td>
                <p class='table-data-stat'>" . $row["sql_user_stat"] . "</p>
              </td>
              <td>
                <form class='table-action-buttons' action='' method='post'>
                  <input type='hidden' name='user-edit-id' value='" .  $row["userid"] . "'>
                  <button type='submit' class='table-action-edit' name='update'>
                    <i class='fa fa-pencil-square' aria-hidden='true'></i>
                  </button>
                  <button type='submit' class='table-action-inactive'>
                    <i class='fa fa-archive' aria-hidden='true'></i>
                  </button>
                  <button type='submit' class='table-action-delete'>
                    <i class='fa fa-trash' aria-hidden='true'></i>
                  </button>
                </form>
              </td>
            </tr>
            ";
            };

            ?>

            <!-- <tr>
              <td class="table-employee-number">00000000002</td>
              <td>Doe</td>
              <td>Jane</td>
              <td>Anonymous</td>
              <td></td>
              <td>Female</td>
              <td>01-20-2000</td>
              <td>jane.doe@gmail.com</td>
              <td>09**-***-****</td>
              <td>janedoe</td>
              <td>
                <p class="table-data-stat">Inactive</p>
              </td>
              <td>
                <form class="table-action-buttons" action="" method="post">
                  <input type="hidden" name="user-edit-id" value="">
                  <button type="submit" class="table-action-edit">
                    <i class="fa fa-pencil-square" aria-hidden="true"></i>
                  </button>
                  <button type="submit" class="table-action-inactive">
                    <i class="fa fa-archive" aria-hidden="true"></i>
                  </button>
                  <button type="submit" class="table-action-delete">
                    <i class="fa fa-trash" aria-hidden="true"></i>
                  </button>
                </form>
              </td>
            </tr> -->

          </table>
        </div>
      </div>
    </div>

    <div id="ca-transaction" class="ca-cards ca-transaction"></div>
    <div id="ca-table" class="ca-cards ca-table"></div>
    <div id="ca-setting" class="ca-cards ca-setting"></div>
  </main>
  <footer class="standard-footer" id="standard-footer">
    <p>&copy; 2026 Francis Solis. All rights reserved.</p>
  </footer>
</body>

</html>