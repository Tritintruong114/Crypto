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

const backToTopBtn = document.querySelector('.backToTopBtn')
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

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
    backToTopBtn.classList.add("showButton");
  } else {
    headerHeight.classList.remove("bgblue");
    backToTopBtn.classList.remove("showButton");
  }
});

const menulist = document.querySelectorAll(".menu > li");

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
  arr.forEach((el, index) => {
    el.style.height = `${Math.max(...arrOfEl)}px`
  })

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

//tab changes
let tabArray = document.querySelectorAll('.--tab')
let postContainers = document.querySelectorAll('.posts__container')
tabArray.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    if (tab.classList.contains('--active')) {

    } else {
      tabArray.forEach((tab) => {
        tab.classList.remove('--active')
      })
      postContainers.forEach((container) => {
        container.classList.remove('--showpost')
        container.classList.add('--hide')
      })
      postContainers[index].classList.remove('--hide')
      postContainers[index].classList.add('--showPosts')
      tab.classList.add('--active')
    }
  })
})

window.addEventListener("scroll", () => {
  const scroll = document.body.scrollTop || document.documentElement.scrollTop;
  const progress =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (scroll / progress) * 100;
  document.querySelector(".progressbar").style.width = scrolled + "%";
  // document.querySelector(".progress").style.width = scrolled + "%";
});



imagesLoaded(document.querySelector("body"), function (instance) {
  if (instance) {
    let i = 0;
    let width = 0;
    let progress = document.querySelector(".loading__bar-inside");
    let percent = document.querySelector(".loading__percent");

    if (i == 0) {
      const frame = () => {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          progress.style.width = width++ + "%";
          percent.textContent = width + "%";
        }
      };
      let id = setInterval(frame, 3);
    }
  };
  document.querySelector(".loading").classList.add("--hiden")

})