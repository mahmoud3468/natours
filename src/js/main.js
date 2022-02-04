const navigation = document.querySelector(".navigation");
const burgerBtn = document.querySelector(".navigation__button");

burgerBtn.addEventListener("click", () => {
  navigation.classList.toggle("nav-open");
  document.body.classList.toggle("stop-scrolling");
});

navigation.addEventListener("click", (e) => {
  if (e.target.closest("li")) {
    navigation.classList.remove("nav-open");
    document.body.classList.remove("stop-scrolling");
  }
});

const modal = document.querySelector(".modal");
const openModalBtns = document.querySelectorAll(".open-modal");
const closeModalBtns = document.querySelectorAll(".close-modal");

openModalBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    modal.classList.add("modal-open");
  })
);

closeModalBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    modal.classList.remove("modal-open");
  })
);
