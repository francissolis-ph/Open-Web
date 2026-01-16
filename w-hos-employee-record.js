const toggleButton = document.querySelector("#form-bottom-toggle-dot");
const toggleButtonBg = document.querySelector("#form-bottom-toggle-bg");
const slideCard = document.querySelector("#form-slide-card");
toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("enable");
  toggleButtonBg.classList.toggle("enable");
  slideCard.classList.toggle("enable");
});
