function showSlides(id) {
  const getSlidesID = document.getElementById(id);
  getSlidesID.classList.toggle("show-ca-home-form");
}

const buttonSlides = document.querySelector("#btn-slides");
buttonSlides.addEventListener("click", function () {
  showSlides("ca-home-form-card");

  const buttonName = buttonSlides.innerText;
  if (buttonName === "Show Employee Form") {
    buttonSlides.innerText = "Hide Employee Form";
  } else {
    buttonSlides.innerText = "Show Employee Form";
  }
});
