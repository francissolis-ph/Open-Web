// // Utility function to deactivate all toggles
// function deactivateAll() {
//   const ids = [
//     "topBarMenuIcon",
//     "navBarListHome",
//     "navBarListTransaction",
//     "navBarListQuery",
//     "navBarListReference",
//     "navBarListSystem",
//     "navBarListReport",
//   ];

//   ids.forEach((id) => {
//     document.getElementById(id).classList.remove("iconToggle");
//   });
// }

// function hideSlides() {
//   const hideIds = [
//     "contentAreaMenu",
//     "contentAreaTransaction",
//     "contentAreaReport",
//     "contentAreaQuery",
//     "contentAreaReference",
//     "contentAreaSystem",
//   ];

//   hideIds.forEach((id) => {
//     document.getElementById(id).classList.remove("showSlides");
//   });
// }

// function disableContent() {
//   const disableContent = document.querySelector("#contentAreaForm");
//   disableContent.setAttribute("inert", "");
//   disableContent.classList.add("contentAreaDisable");
// }
// function enableContent() {
//   const disableContent = document.querySelector("#contentAreaForm");
//   disableContent.removeAttribute("inert");
//   disableContent.classList.remove("contentAreaDisable");
// }

// function toggleNav(id, contentId) {
//   deactivateAll();
//   hideSlides();
//   disableContent();
//   document.getElementById(contentId).classList.toggle("showSlides");
//   document.getElementById(id).classList.toggle("iconToggle");
// }

// document.getElementById("navBarListHome").classList.toggle("iconToggle");

// // Example: topBarMenuIcon click
// function navBarListHome() {
//   // deactivate others
//   deactivateAll();
//   hideSlides();
//   enableContent();
//   document.getElementById("navBarListHome").classList.toggle("iconToggle");
// }

// function windowTopBarMenu() {
//   const menuElement = document.getElementById("contentAreaMenu");

//   if (window.matchMedia("(min-width: 1023px)").matches) {
//     menuElement.classList.remove("contentAreaSlides");
//     menuElement.classList.add("contentAreaSlidesMenu");
//   } else {
//     menuElement.classList.remove("contentAreaSlidesMenu");
//     menuElement.classList.add("contentAreaSlides");
//   }
// }

// function topBarMenuIcon() {
//   toggleNav("topBarMenuIcon", "contentAreaMenu");
// }

// // Add this to handle responsiveness
// // isama mo to parati incase na need mo ng loading or resizing sa mga web system function, fe: si doctor, nagsave, load, and nasa same state parin ng page, dapat ito nakakabit sa javascript.
// window.addEventListener("resize", windowTopBarMenu);
// window.addEventListener("load", windowTopBarMenu);

// function navBarListTransaction() {
//   toggleNav("navBarListTransaction", "contentAreaTransaction");
// }

// function navBarListQuery() {
//   toggleNav("navBarListQuery", "contentAreaQuery");
// }

// function navBarListReference() {
//   toggleNav("navBarListReference", "contentAreaReference");
// }

// function navBarListSystem() {
//   toggleNav("navBarListSystem", "contentAreaSystem");
// }

// function navBarListReport() {
//   toggleNav("navBarListReport", "contentAreaReport");
// }

// function getPhilippinesTimeFormatted() {
//   const options = {
//     timeZone: "Asia/Manila",
//     weekday: "long", // e.g. Tuesday
//     year: "numeric",
//     month: "2-digit",
//     day: "2-digit",
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//     hour12: true, // AM/PM format
//   };

//   const formatter = new Intl.DateTimeFormat("en-US", options);
//   const parts = formatter.formatToParts(new Date());

//   // Build custom format: Tuesday, MM/dd/yyyy HH:mm:ss AM/PM
//   const weekday = parts.find((p) => p.type === "weekday").value;
//   const month = parts.find((p) => p.type === "month").value;
//   const day = parts.find((p) => p.type === "day").value;
//   const year = parts.find((p) => p.type === "year").value;
//   const hour = parts.find((p) => p.type === "hour").value;
//   const minute = parts.find((p) => p.type === "minute").value;
//   const second = parts.find((p) => p.type === "second").value;
//   const dayPeriod = parts.find((p) => p.type === "dayPeriod").value;

//   return `${weekday}, ${month}/${day}/${year} ${hour}:${minute}:${second} ${dayPeriod}`;
// }

// function showTime() {
//   document.getElementById("phTime").textContent = getPhilippinesTimeFormatted();
// }

// setInterval(showTime, 1000);

//  === TEST AREA ===   //

// ito yung part na kukunin mo yung container ID para magamit mo sya kapag maglagay ka ng mga elements.
// const contentAreaForm = document.getElementById("contentAreaForm");
// contentAreaForm.append("Hello there,", " World!");

//==========================================================//
//                                                          //
//==========================================================//

// maliban sa div, pwede ka maglagay ng mga iba't ibang elements mo dito.
// const div = document.createElement("div");
//hindi mo makita tong append div, kasi sa console mo sya makikita na na-create.
// contentAreaForm.append(div);

//==========================================================//
//                                                          //
//==========================================================//

// kinuha ko yung ID ng div container para ma-specify ko yung kukunin kong text content/inner text, kasi kung hindi ko i-specify, hindi saakin ibibigay yung exact need kong output na ilabas.
// const divContent = document.querySelector("#contentAreaItem");
// console.log(divContent.textContent)
// console.log(divContent.innerText)

// let divContentTextContent;
// divContentTextContent = divContent.textContent;

// contentAreaForm.append(divContentTextContent);

//==========================================================//
//                                                          //
//==========================================================//

// function contentAreaSubmit() {
//  most powerful tool! pwede ka mag-select ng kahit anong element dito, best case is select mo yung ID and pwede mo i-manipulate sa lahat ng pwedeng capability ni JS.
//   const fullName = document.querySelector("#fullName").value;

//   if (fullName === "Francis L. Solis") {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
//}

//==========================================================//
//                                                          //
//==========================================================//

//  dito pwede mo i-select yung gusto mong attributes based sa pinili mong query, sa makita mo ang pinili ko ay yung ID which is #fullName.
// const fullName = document.querySelector("#fullName");

// console.log(fullName.className);
//  kapag palitan mo ng ID/Class/Name/Title OR mag lagay ng attribute name.
//  console.log(fullName.setAttribute('name', 'id-change'))
//  OR
//  fullName.id = 'id-change'

//  ternary, shortcut ng if and else.
// let age = 20;
// console.log(age >= 18 ? "Adult" : "Minor");

// const programLang = ["Javascript", "CSS", "HTML", "PHP"];

// let langResult;

// programLang.forEach((id) => {
//   id === "Javascript" ? (langResult = "For Gays") : (langResult = id);

//   console.log(langResult);
// });

//==========================================================//
//                                                          //
//==========================================================//

// Example dataset (like dw_1 in PowerBuilder)
// const dw_1 = [
//   { checkbox: "1", userID: "U001" },
//   { checkbox: "0", userID: "U002" },
//   { checkbox: "1", userID: "U003" },
// ];

// // Get row count
// const ll_rowCount = dw_1.length;

// // Loop through rows
// for (let i = 0; i < ll_rowCount; i++) {
//   const ls_checkBox = dw_1[i].checkbox;

//   if (ls_checkBox === "1") {
//     const ls_userID = dw_1[i].userID;
//     alert(`User ID: ${ls_userID}`); // Equivalent of messageBox
//   }
// }

//==========================================================//
//                                                          //
//==========================================================//

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

//==========================================================//
//                                                          //
//==========================================================//

// const contentArea = document.getElementById("content-area");

//gamitin mo pang-hanap ng mga class sa mga element-- best use for ternary/ifelse
// console.log(contentArea.classList.contains("sample-class-name")); //false
// console.log(contentArea.classList.contains("content-area")); //true

//==========================================================//
//                                                          //
//==========================================================//

// const isContent = contentArea.classList.contains("sample-class-name");
// isContent ? console.log("true!") : console.log("false!");

//==========================================================//
//                                                          //
//==========================================================//

//  VERY IMPORTANT!! get click ID...
// document.querySelector("#nav-bar").addEventListener("click", function (e) {
//   console.log(e.target.getAttribute("id") + " was clicked");

//   const target = e.target;
//   //  "matches" must match to element you want to be clicked.
//   target.matches("i") ? console.log(true) : console.log(false);
// });

//==========================================================//
//                                                          //
//==========================================================//

//  generate random array value to DOM Elements.
// // Get DOM elements
// let quoteElement = document.getElementsByClassName("quote")[0];
// let personElement = document.getElementsByClassName("person")[0];
// let button = document.getElementById("quoteButton");

// // Array of quotes as objects
// const quoteArray = [
//   { quote: "I gave you all I had.", person: "Arthur Morgan" },
//   { quote: "I had a goddamn plan!", person: "Dutch van der Linde" },
//   {
//     quote: "Sad thing is good people do bad things.",
//     person: "Hosea Matthews",
//   },
// ];

// // Event listener for button
// button.addEventListener("click", function () {
//   let random = Math.floor(Math.random() * quoteArray.length);
//   quoteElement.textContent = quoteArray[random].quote;
//   personElement.textContent = quoteArray[random].person;
// });

//==========================================================//
//                                                          //
//==========================================================//

//  validation notes.
// document.getElementById("registerForm").addEventListener("submit", function (e) {
//   e.preventDefault(); // stop form submission

//   const username = document.getElementById("username").value.trim();
//   const email = document.getElementById("email").value.trim();
//   const password = document.getElementById("password").value;
//   const age = document.getElementById("age").value;
//   const errorMsg = document.getElementById("errorMsg");

//   errorMsg.textContent = "";

//   if (username === "") {
//     errorMsg.textContent = "Username is required.";
//     return;
//   }

//   if (!validateEmail(email)) {
//     errorMsg.textContent = "Please enter a valid email address.";
//     return;
//   }

//   if (password.length < 6) {
//     errorMsg.textContent = "Password must be at least 6 characters.";
//     return;
//   }

//   if (age === "" || age < 18) {
//     errorMsg.textContent = "Age must be 18 or above.";
//     return;
//   }

//   alert("Form submitted successfully!");
// });


// function validateEmail(email) {
//   const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return pattern.test(email);
// }

// //==========================================================//
// //                                                          //
// //==========================================================//

// function validateForm() {
//   let username = document.getElementById("username").value.trim();
//   let email = document.getElementById("email").value.trim();

//   if (username === "") {
//     alert("Username is required");
//     return false;
//   }

//   if (email === "") {
//     alert("Email is required");
//     return false;
//   }

//   if (!email.includes("@")) {
//     alert("Invalid email format");
//     return false;
//   }

//   // validation passed → submit form
//   return true;
// }