const toggleButton = document.querySelector("#form-bottom-toggle-dot");
const toggleButtonBg = document.querySelector("#form-bottom-toggle-bg");
const slideCard = document.querySelector("#form-slide-card");
toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("enable");
  toggleButtonBg.classList.toggle("enable");
  slideCard.classList.toggle("enable");
});

// this is for the update load, kapag nagload ka ng userid, kukunin nya ung data kung may laman, at kung mayroon, iloload nya yung slide.
const checkUpdate = document.querySelector("#checkEmployeeId");
//console.log(checkUpdate.value);

if (checkUpdate.value !== "") {
  toggleButton.classList.toggle("enable");
  toggleButtonBg.classList.toggle("enable");
  slideCard.classList.toggle("enable");
}

const checkSex = document.querySelector("#hidden-sex");
// console.log(checkSex.value);

const checkStat = document.querySelector("#hidden-stat");
// console.log(checkStat.value);

if (checkSex.value === "M") {
  document.getElementById("user-sex-male").style.backgroundColor = "#336699";
  document.getElementById("fa-mars").style.color = "#ffffff";
  document.getElementById("form-input-radio-male").checked = true;
} else {
  document.getElementById("user-sex-female").style.backgroundColor = "#ff6666";
  document.getElementById("fa-venus").style.color = "#ffffff";
  document.getElementById("form-input-radio-female").checked = true;
}

if (checkStat.value === "A") {
  document.getElementById("user-stat-active").style.backgroundColor = "#008000";
  document.getElementById("fa-check").style.color = "#ffffff";
  document.getElementById("radio-user-stat-active").checked = true;
} else {
  document.getElementById("user-stat-inactive").style.backgroundColor =
    "#b30000";
  document.getElementById("fa-x").style.color = "#ffffff";
  document.getElementById("radio-user-stat-inactive").checked = true;
}

// document.getElementById("user-sex-male").style.backgroundColor = "#336699";
// document.getElementById("fa-mars").style.color = "#ffffff";
// document.getElementById("form-input-radio-male").checked = true;

// const userSexMale = document.querySelector("#user-sex-male");
// userSexMale.addEventListener("click", () => {
//   const userSexId = document.getElementById(userSexMale.id);
//   const userSexMaleIcon = document.querySelector(".fa-mars");
//   if (userSexId.style.backgroundColor === "") {
//     userSexId.style.backgroundColor = "steelblue";
//     userSexMaleIcon.style.color = "white";
//   } else if (userSexId.style.backgroundColor === "steelblue") {
//     userSexId.style.backgroundColor = "";
//     userSexMaleIcon.style.color = "black";
//   }
// });

function resetInputs() {
  const textInputs = document.querySelectorAll(".form-input-text");
  textInputs.forEach((element) => {
    console.log(element.value);
  });
}
function resetRadioSex() {
  const textInputs = document.querySelectorAll(".input-box-radio-sex");
  textInputs.forEach((element) => {
    console.log(element.value);
  });
}
function resetRadioStat() {
  const textInputs = document.querySelectorAll(".input-box-radio-stat");
  textInputs.forEach((element) => {
    console.log(element.value);
  });
}

const resetButton = document
  .querySelector(".reset")
  .addEventListener("click", function () {
    disableSexRadio();
    disableStatRadio();
    resetInputs();
    resetRadioSex();
    resetRadioStat();
  });

function disableSexRadio() {
  document.getElementById("user-sex-male").style.backgroundColor = "#ffffff";
  document.getElementById("fa-mars").style.color = "#000000";
  document.getElementById("user-sex-female").style.backgroundColor = "#ffffff";
  document.getElementById("fa-venus").style.color = "#000000";
}

function disableStatRadio() {
  document.getElementById("user-stat-active").style.backgroundColor = "#ffffff";
  document.getElementById("fa-check").style.color = "#000000";
  document.getElementById("user-stat-inactive").style.backgroundColor =
    "#ffffff";
  document.getElementById("fa-x").style.color = "#000000";
}

const toggleRadioMale = document.querySelector("#user-sex-male");
toggleRadioMale.addEventListener("click", () => {
  disableSexRadio();
  document.getElementById("user-sex-male").style.backgroundColor = "#336699";
  document.getElementById("fa-mars").style.color = "#ffffff";
  document.getElementById("form-input-radio-male").checked = true;
});

const toggleRadioFemale = document.querySelector("#user-sex-female");
toggleRadioFemale.addEventListener("click", () => {
  disableSexRadio();
  document.getElementById("user-sex-female").style.backgroundColor = "#ff6666";
  document.getElementById("fa-venus").style.color = "#ffffff";
  document.getElementById("form-input-radio-female").checked = true;
});

const toggleRadioActive = document.querySelector("#user-stat-active");
toggleRadioActive.addEventListener("click", () => {
  disableStatRadio();
  document.getElementById("user-stat-active").style.backgroundColor = "#008000";
  document.getElementById("fa-check").style.color = "#ffffff";
  document.getElementById("radio-user-stat-active").checked = true;
});

const toggleRadioInactive = document.querySelector("#user-stat-inactive");
toggleRadioInactive.addEventListener("click", () => {
  disableStatRadio();
  document.getElementById("user-stat-inactive").style.backgroundColor =
    "#b30000";
  document.getElementById("fa-x").style.color = "#ffffff";
  document.getElementById("radio-user-stat-inactive").checked = true;
});

// input validation section.

function validateForm() {
  const lastName = document.getElementById("last-name").value.trim();
  const firstName = document.getElementById("first-name").value.trim();
  const birthDate = document.getElementById("birth-date").value;

  const userSexEl = document.querySelector('input[name="user-sex"]:checked');
  const userSex = userSexEl ? userSexEl.value : "";

  const userStatEl = document.querySelector('input[name="user-stat"]:checked');
  const userStat = userStatEl ? userStatEl.value : "";

  const userName = document.getElementById("user-name").value;
  const password = document.getElementById("user-pass").value;
  const confPass = document.getElementById("user-pass-confirm").value;

  const form = document.getElementById("employee-record-form");

  let isValidate = true;

  if (password !== confPass) {
    document.getElementById("pass-val-mess").innerHTML =
      "<span class='pass-val-mess'>Password doesn't Match! <i class='fa fa-exclamation-circle'aria-hidden='true'></i></span>";
    document.getElementById("user-pass").classList.add("enable");
    document.getElementById("user-pass-confirm").classList.add("enable");
    isValidate = false;
  } else if (password === "" && confPass === "") {
    const passDiv = document.querySelector(".pass-val-mess");
    !passDiv ? "" : passDiv.remove();
  } else if (password === confPass) {
    const passDiv = document.querySelector(".pass-val-mess");
    !passDiv ? "" : passDiv.remove();
  }

  if (!userName) {
    document.getElementById("user-name").classList.add("enable");
    isValidate = false;
  } else {
    document.getElementById("user-name").classList.remove("enable");
  }

  if (!password || confPass !== password) {
    document.getElementById("user-pass").classList.add("enable");
    isValidate = false;
  } else {
    document.getElementById("user-pass").classList.remove("enable");
  }

  if (!confPass || confPass !== password) {
    document.getElementById("user-pass-confirm").classList.add("enable");
    isValidate = false;
  } else {
    document.getElementById("user-pass-confirm").classList.remove("enable");
  }

  // Last name
  if (!lastName) {
    document.getElementById("last-name").classList.add("enable");
    isValidate = false;
  } else {
    document.getElementById("last-name").classList.remove("enable");
  }

  // First name
  if (!firstName) {
    document.getElementById("first-name").classList.add("enable");
    isValidate = false;
  } else {
    document.getElementById("first-name").classList.remove("enable");
  }

  // Birth date
  if (!birthDate || birthDate <= "1900-01-01" || birthDate >= "2100-01-01") {
    document.getElementById("birth-date").classList.add("enable");
    isValidate = false;
  } else {
    document.getElementById("birth-date").classList.remove("enable");
  }

  // Radio (sex)
  if (!userSex) {
    document.getElementById("radio-sex-error").classList.add("enable");
    isValidate = false;
  } else {
    document.getElementById("radio-sex-error").classList.remove("enable");
  }

  if (!userStat) {
    document.getElementById("radio-stat-error").classList.add("enable");
    isValidate = false;
  } else {
    document.getElementById("radio-stat-error").classList.remove("enable");
  }

  return isValidate;
}

// data row stat color change

const tableDataStat = document.querySelectorAll(".table-data-stat");

tableDataStat.forEach((element) => {
  const dataStat = element.textContent.trim();
  if (dataStat === "Active") {
    element.classList.remove("enable");
  } else if (dataStat === "Inactive") {
    element.classList.add("enable");
  }
});

//  checkbox - tick checker.
// function checkUsers() {
//   const contentAreaFormTable = document.querySelectorAll(
//     '#contentAreaFormTable input[type="checkbox"]'
//   );

//   contentAreaFormTable.forEach((cb) => {
//     const userID = cb.value;
//     cb.checked ? console.log("Number " + userID + " row was selected!") : "";
//   });
// }

// const tableButton = document.querySelector("#table-button");
// tableButton.addEventListener("click", function () {
//   console.clear();
//   checkUsers();
// });

const searchButtonId = document.querySelector("#search-input");
searchButtonId.addEventListener("keydown", (Event) => {
  if (Event.key === "Enter") {
    console.log("keydown!");
  }
});
