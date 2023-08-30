// Toggle Hambuger
const toggleBurger = document.querySelector(".header__burger");

toggleBurger.addEventListener("click", (e) => {
  e.stopPropagation();
  document.querySelector(".header__burger-line").classList.toggle("--active");
  document.querySelector('.menu').classList.toggle('--show-menu')
});

//Slider 

const carousel = document.querySelector('.scuserfeedback__wrapper')
// const flck = carousel.data('flickity')



if (window.matchMedia("(max-width: 991px)").matches) {
  /* the viewport is at least 400 pixels wide */
  $(".scuserfeedback__wrapper").flickity({
    cellAlign: "center",
    prevNextButtons: true,
    pageDots: true,
    wrapAround: true,
    autoPlay: 3000,
    groupCells: 1,
    wrapAround: true,
  });
} else {

  $(".scuserfeedback__wrapper").flickity({
    cellAlign: "center",
    prevNextButtons: true,
    pageDots: true,
    wrapAround: true,
    autoPlay: 3000,
    groupCells: 2,
    wrapAround: true,
  })
  /* the viewport is less than 400 pixels wide */
}


//scroll change bg header
const headerHeight = document.querySelector(".header");

window.addEventListener("scroll", () => {
  let y = window.scrollY;
  // let heightOfHero = triggerButton.offsetHeight; //Height of sc Hero
  if (y !== 0) {
    headerHeight.classList.add("bgblue");
    // backToTop.classList.add("showButton");
  } else {
    headerHeight.classList.remove("bgblue");
    // backToTop.classList.remove("showButton");
  }
});

const menulist = document.querySelectorAll(".menu > li");

// console.log(menulist)
menulist.forEach((menu, index) => {

  menu.addEventListener('click', (e) => {
    // e.preventDefault();

    menulist.forEach((menu, i) => {
      menu.classList.remove('--active-menu')
    })
    menu.classList.add('--active-menu')
  })
})




//set height of userfeeadback

const arr = document.querySelectorAll('.scuserfeedback__wrapper-element')
let arrOfEl = [];
let height = arr.forEach((el, index) => {
  arrOfEl.push(el.offsetHeight);
  console.log(Math.max(...arrOfEl))
  arr.forEach((el, index) => {
    el.style.height = `${Math.max(...arrOfEl)}px`
  })

  console.log(arrOfEl)
})





window.addEventListener('resize', () => {
  if (screen.width === 991) {
    location.reload()
  }
})


//accordion
const faqArr = document.querySelectorAll(".scfaq__content-el")

faqArr.forEach((element, index) => {
  element.addEventListener('click', () => {
    if (element.classList.contains('--active')) {
      element.classList.toggle('--active')
    } else {
      faqArr.forEach((el) => {
        el.classList.remove('--active')
      })
      element.classList.add('--active')
    }
  }
  )
})