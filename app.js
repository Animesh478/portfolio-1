const tabs = document.querySelectorAll(".tab");
const tabsContainer = document.querySelector(".tabs");
const aboutContent = document.querySelectorAll(".content");

// Smooth scrolling functionality
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// Tabbed component in the about section
// selecting each tab and attaching the same function to each of them is not a great idea.
// so we select their parent component and attach the event handler to it and do event delegation

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".tab"); // determining which button was clicked
  if (!clicked) return; // if we click anywhere other than the tabs then nothing happens
  tabs.forEach((tab) => {
    tab.classList.remove("tab--active");
  });
  clicked.classList.add("tab--active");

  aboutContent.forEach((content) =>
    content.classList.remove("content--active")
  );
  document
    .querySelector(`.content--${clicked.dataset.tab}`)
    .classList.add("content--active");
});
