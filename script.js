"use strict";

const modal = document.querySelector(".modal");
const btnShowModal = document.querySelectorAll(".show-modal");
const btnCLoseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
console.log(btnShowModal);

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener("click", openModal);
}
btnCLoseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
