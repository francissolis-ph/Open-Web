const toggleButton = document.querySelector("#form-bottom-toggle-dot");
const toggleButtonBg = document.querySelector("#form-bottom-toggle-bg");
const slideCard = document.querySelector("#form-slide-card");
toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("enable");
  toggleButtonBg.classList.toggle("enable");
  slideCard.classList.toggle("enable");
});

const radioButtons = document.querySelectorAll(".input-box-radio-sex");

radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("click", (e) => {
    const button = e.currentTarget; // always the .input-box-radio-sex div

    if (button.id === "user-sex-female") {
      const currentColor = getComputedStyle(button).backgroundColor;

      if (currentColor === "rgb(70, 130, 180)") { // steelblue
        button.style.backgroundColor = "white";
      } else {
        button.style.backgroundColor = "steelblue";
      }
    } else {
      console.log("male");
    }
  });
});

