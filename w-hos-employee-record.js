function showSlides(id) {
  const getSlidesID = document.getElementById(id);
  getSlidesID.classList.toggle("show-ca-home-form");
}

const buttonSlides = document.querySelector("#btn-slides");
buttonSlides.addEventListener("click", function () {
  showSlides("ca-home-form-card");
  buttonSlides.textContent === "Show Employee Form"
    ? (buttonSlides.textContent = "Hide Employee Form")
    : (buttonSlides.textContent = "Show Employee Form");
});
