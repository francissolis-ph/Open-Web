const toggleButton = document.querySelector("#form-bottom-toggle-dot");
const toggleButtonBg = document.querySelector("#form-bottom-toggle-bg");
const slideCard = document.querySelector("#form-slide-card");
toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("enable");
  toggleButtonBg.classList.toggle("enable");
  slideCard.classList.toggle("enable");
});

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
