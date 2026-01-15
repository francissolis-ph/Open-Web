const toggleContainer = document.querySelector(".toggle-button-container");
toggleContainer.addEventListener("click", () => {
  toggleContainer.classList.toggle("enabled");
});

//===========================================================================//

const checkContainer = document.querySelector(".check-button-container");
const dotContainer = document.querySelector(".check-button-dot");
checkContainer.addEventListener("click", () => {
  dotContainer.classList.toggle("check-button-container-enabled");
});

//===========================================================================//

const draggables = document.querySelectorAll(".draggable");
const containers = document.querySelectorAll(".container");

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");
  });
});

draggables.forEach((draggable) => {
  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
  });
});

containers.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    const draggable = document.querySelector(".draggable");
    container.appendChild(draggable);
  });
});

function getDragAfterElement(container, y) {
  const draggableElements = [
    ...container.querySelectorAll("draggable:not(.draggable)"),
  ];
}
