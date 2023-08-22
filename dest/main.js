// Toggle Hambuger
const toggleBurger = document.querySelector(".header__burger");

toggleBurger.addEventListener("click", (e) => {
  e.stopPropagation();
  document.querySelector(".header__burger-line").classList.toggle("--active");
});

//Slider 

const carousel = document.querySelector('.scuserfeedback__wrapper')
// const flck = carousel.data('flickity')

$(".scuserfeedback__wrapper").flickity({
  cellAlign: "center",
  prevNextButtons: true,
  pageDots: true,
  wrapAround: true,
  autoPlay: 3000,
  groupCells: 2,
  wrapAround: true,
})

