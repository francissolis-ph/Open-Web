// Format current time in Philippines
function formatPhilippinesTime() {
  const options = {
    timeZone: "Asia/Manila",
    weekday: "long",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };

  const formatter = new Intl.DateTimeFormat("en-US", options);
  const parts = formatter.formatToParts(new Date());

  const weekday = parts.find((p) => p.type === "weekday").value;
  const month = parts.find((p) => p.type === "month").value;
  const day = parts.find((p) => p.type === "day").value;
  const year = parts.find((p) => p.type === "year").value;
  const hour = parts.find((p) => p.type === "hour").value;
  const minute = parts.find((p) => p.type === "minute").value;
  const second = parts.find((p) => p.type === "second").value;
  const period = parts.find((p) => p.type === "dayPeriod").value;

  return `${weekday}, ${month}/${day}/${year} ${hour}:${minute}:${second} ${period}`;
}

function updatePhilippinesTime() {
  document.getElementById("ph-time").textContent = formatPhilippinesTime();
}

setInterval(updatePhilippinesTime, 1000);

//=======================================================//

function toggleNavIcon(id) {
  const navIcon = document.getElementById(id);
  navIcon.classList.toggle("toggle-nav-icon");
}

toggleNavIcon("fa-home");

function clearNavIcons() {
  const navIconIds = ["fa-exchange-alt", "fa-table", "fa-gear", "fa-home"];
  navIconIds.forEach((id) => {
    document.getElementById(id).classList.remove("toggle-nav-icon");
  });
}

function setContentEnabled(isEnabled, id) {
  const contentElement = document.getElementById(id);

  if (isEnabled) {
    contentElement.classList.remove("disable-content");
    contentElement.removeAttribute("inert");
  } else {
    contentElement.classList.add("disable-content");
    contentElement.setAttribute("inert", "");
  }
}

function hideAllContentSlides() {
  const contentSlideIds = ["ca-transaction", "ca-table", "ca-setting"];
  contentSlideIds.forEach((id) => {
    document.getElementById(id).classList.remove("show-ca-cards");
  });
}

function toggleContentSlide(id) {
  const contentSlide = document.getElementById(id);
  contentSlide.classList.toggle("show-ca-cards");
}

//=======================================================//
// Navigation button event listeners
//=======================================================//

const navHomeButton = document.querySelector("#fa-home");
navHomeButton.addEventListener("click", function () {
  setContentEnabled(true, "ca-home");
  clearNavIcons();
  hideAllContentSlides();
  toggleNavIcon("fa-home");
});

const navTransactionButton = document.querySelector("#fa-exchange-alt");
navTransactionButton.addEventListener("click", function () {
  setContentEnabled(false, "ca-home");
  clearNavIcons();
  hideAllContentSlides();
  toggleNavIcon("fa-exchange-alt");
  toggleContentSlide("ca-transaction");
});

const navTableButton = document.querySelector("#fa-table");
navTableButton.addEventListener("click", function () {
  setContentEnabled(false, "ca-home");
  clearNavIcons();
  hideAllContentSlides();
  toggleNavIcon("fa-table");
  toggleContentSlide("ca-table");
});

const navSettingButton = document.querySelector("#fa-gear");
navSettingButton.addEventListener("click", function () {
  setContentEnabled(false, "ca-home");
  clearNavIcons();
  hideAllContentSlides();
  toggleNavIcon("fa-gear");
  toggleContentSlide("ca-setting");
});
