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

if (window.matchMedia("(max-width: 1199.98px)").matches) {
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


window.addEventListener("resize", () => {
  const widthAbove1000 = window.innerWidth > 1180;


  const viewPort = document.querySelector('.flickity-viewport')

  if (widthAbove1000)
    window.setInterval(function () {
      window.top.location = window.top.location
    }, 600)
  if (!widthAbove1000) return;
});



window.addEventListener('resize', () => {
  if (screen.width === 1199) {
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
    let width = 0;
    let progress = document.querySelector(".loading__bar-inside");
    let percent = document.querySelector(".loading__percent");

    if (width == 0) {
      const frame = () => {
        if (width >= 100) {
          clearInterval(id);
          document.querySelector(".loading").classList.add("--hiden")

        } else {
          width++;
          progress.style.width = width + "%";
          percent.textContent = width + "%";
        }
      };
      let id = setInterval(frame, 7);
    }
  };

})

const userName = document.querySelector('#username')
const userEmail = document.querySelector('#email')
const userCompany = document.querySelector('#companyname')
const userHow = document.querySelector('#how')
const form = document.querySelector('.form-field')

form?.addEventListener('submit', function (e) {
  // prevent the form from submitting
  e.preventDefault();
  if (!form.Name.value && !form.Email.value && !form.Subject.value && !form.Company.value) {
    userName.classList.add('--required')
    userEmail.classList.add('--required')
    document.querySelector('.--name').style.display = 'block'
    document.querySelector('.--email').style.display = 'block'
    document.querySelector('.--subject').style.display = 'block'
    userHow.classList.add('--required')
    document.querySelector('.--company').style.display = 'block'
    userCompany.classList.add('--required')
  } else if (!form.Name.value && form.Email.value) {
    userName.classList.add('--required')
    document.querySelector('.--name').style.display = 'block'
  } else if (form.Name.value && !form.Email.value) {
    userEmail.classList.add('--required')
    document.querySelector('.--email').style.display = 'block'
  } else if (form.Name.value && form.Email.value && !form.Subject.value && !form.Company.value) {
    document.querySelector('.--subject').style.display = 'block'
    userHow.classList.add('--required')
    document.querySelector('.--company').style.display = 'block'
    userCompany.classList.add('--required')
  } else if (form.Name.value && form.Email.value && form.Subject.value && form.Company.value) {
    document.querySelector('.--company').style.display = 'block'
    userCompany.classList.add('--required')
  }
  else if (form.Name.value && form.Email.value && form.Company.value && !form.Subject.value) {
    document.querySelector('.--subject').style.display = 'block'
    userHow.classList.add('--required')
  } else if (form.Name.value && form.Email.value && form.Company.value && form.Subject.value) {
    // userName.classList.remove('--required')
    // userEmail.classList.remove('--required')
    // userCompany.classList.remove('--required')
    // userHow.classList.remove('--required')
    form.Name.value = ''
    form.Email.value = ''
    form.Company.value = ''
    form.Textarea.value = ''
    // document.querySelector('.--name').style.display = 'none'
    // document.querySelector('.--company').style.display = 'none'
    // document.querySelector('.--subject').style.display = 'none'
    // document.querySelector('.--email').style.display = 'none'
  }
});

const validateUsername = (value) => {
  e.preventDefault();
  if (!value) {
    userName.classList.add('--required')
  } else {
    alert(value)
  }
}

const isEmailValid = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const isRequired = value => value === '' ? false : true;


const xButton = document.querySelector(".x-icon");
const popUpVideo = document.querySelector(".popup");
const showVideo = document.querySelectorAll(".playicon");
const watchButton = document.querySelector(".scvideo__video");
const videoContainer = document.querySelector(".video__cointainer");

xButton.addEventListener("click", () => {
  popUpVideo.classList.remove("--showPopup");
  videoContainer.innerHTML = ``;
});

watchButton.addEventListener("click", () => {
  popUpVideo.classList.add("--showPopup");
  videoContainer.innerHTML = `
             <iframe
                src="https://www.youtube.com/embed/LYMSE3BDjEA?&autoplay=1"
                title="YouTube video player"
                frameborder="0"
                style="overflow: hidden; height: 100%; width: 100%"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>
              </iframe>
    `;
});