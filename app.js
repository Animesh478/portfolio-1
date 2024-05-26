const target = document.querySelector(".event-demo h3");
const modal = document.querySelector(".modal");
target.addEventListener("mouseover", () => {
  modal.classList.toggle("hidden");
});
