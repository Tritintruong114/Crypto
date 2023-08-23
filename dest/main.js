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



if (window.matchMedia("(max-width: 769px)").matches) {
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



const about = document.querySelector('#about')
about.addEventListener('click', () => {
  document.querySelector('.home').classList.add('about');
  document.querySelector('.main').innerHTML = `
  <main class="about__main">
    <section class="scabout">
      <div class="container">
        <div class="textbox">
          <h1 class="heading --h1">About Finance Flow</h1>
          <p class="desc --body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse
            tortor
            aenean dis placerat.
            Scelerisque imperdiet vitae dolor non aliquam. Malesuada.</p>
        </div>

        <div class="scabout__content">
          <div class="textbox">
            <h2 class="heading --h2">What drives Finance Flow?</h2>
            <p class="desc --body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse
              tortor
              aene.</p>
          </div>

          <div class="scabout__content-wrapper">
            <div class="infobox --navi-cl --info">
              <img class="infobox__icon" src="./imgs/team.svg" alt="wallet" />
              <div>

                <h3 class="--lb">Open Source</h3>
                <p class="desc --body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum
                  cras.
                  Morbi cursus nunc.
                </p>
              </div>
            </div>

            <div class="infobox --navi-cl --info">
              <img class="infobox__icon" src="./imgs/worldwide.svg" alt="wallet" />
              <div>

                <h3 class="--lb">world wide</h3>
                <p class="desc --body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum
                  cras.
                  Morbi cursus nunc.
                </p>
              </div>
            </div>

            <div class="infobox --navi-cl --info">
              <img class="infobox__icon" src="./imgs/transparent.svg" alt="wallet" />
              <div>

                <h3 class="--lb">transparent</h3>
                <p class="desc --body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum
                  cras.
                  Morbi cursus nunc.
                </p>
              </div>
            </div>

            <div class="infobox --navi-cl --info">
              <img class="infobox__icon" src="./imgs/community.svg" alt="wallet" />
              <div>

                <h3 class="--lb">Community Driven</h3>
                <p class="desc --body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum
                  cras.
                  Morbi cursus nunc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="scmission">
      <div class="container">
        <div class="scmission__content">
          <div class="textbox">
            <h2 class="heading --h2">Our mission</h2>
            <p class="desc --body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient lorem purus
              justo,
              ultricies. Sollicitudin odio
              elementum urna placerat lacus, vulputate. Non malesuada viverra et ultrices cras. Tincidunt tempor,
              blandit
              augue ac
              feugiat. Praesent arcu tempus ullamcorper quisque in. Magna fermentum, lacus, fermentum arcu.
            </p>

            <p class="desc --body1">
              Vulputate pellentesque proin facilisis dignissim gravida sed faucibus nunc. Nunc eget pharetra, in vitae
              porta lacus.
              Elit in nisl, in quis nulla tellus suscipit id. Semper velit odio cras pretium tristique habitant. Elit eu
              penatibus
              congue orci turpis. Enim diam id.
            </p>
          </div>
          <div class="textbox">
            <h2 class="heading --h2">Our story</h2>
            <p class="desc --body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient lorem purus
              justo,
              ultricies. Sollicitudin odio
              elementum urna placerat lacus, vulputate. Non malesuada viverra et ultrices cras. Tincidunt tempor,
              blandit
              augue ac
              feugiat. Praesent arcu tempus ullamcorper quisque in. Magna fermentum, lacus, fermentum arcu.
            </p>

            <p class="desc --body1">
              Vulputate pellentesque proin facilisis dignissim gravida sed faucibus nunc. Nunc eget pharetra, in vitae
              porta lacus.
              Elit in nisl, in quis nulla tellus suscipit id. Semper velit odio cras pretium tristique habitant. Elit eu
              penatibus
              congue orci turpis. Enim diam id.
            </p>
          </div>
        </div>

        <div class="scmission__images">
          <picture>
            <source media="(max-width: 799px)" srcset="./imgs/planet-mobile.png" />
            <source media="(min-width: 800px)" srcset="./imgs/house.png" />
            <img src="./imgs/house.png" alt="Logo" />
          </picture>
        </div>
      </div>
    </section>

    <section class="sctimeline">
      <div class="container">
        <div class="textbox --sticky">
          <h2 class="heading --h2">Timeline</h2>
          <p class="desc --body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
            eros elementum tristique. Duis
            cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        </div>


        <div class="sctimeline__wrapper">
          <div class="sctimeline__wrapper-element">
            <span class="circle"></span>
            <div class="textbox">
              <h3 class="heading --h2">2014</h3>
              <p class="heading --lb">Announcement</p>
              <p class="desc --body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at
                mattis bibendum congue cras id interdum.
                Risus leo et.</p>
            </div>
          </div>

          <div class="sctimeline__wrapper-element">
            <span class="circle"></span>
            <div class="textbox">
              <h3 class="heading --h2">2016</h3>
              <p class="heading --lb">Announcement</p>
              <p class="desc --body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at
                mattis bibendum congue cras id interdum.
                Risus leo et.</p>
            </div>
          </div>

          <div class="sctimeline__wrapper-element">
            <span class="circle"></span>
            <div class="textbox">
              <h3 class="heading --h2">2018</h3>
              <p class="heading --lb">Announcement</p>
              <p class="desc --body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at
                mattis bibendum congue cras id interdum.
                Risus leo et.</p>
            </div>
          </div>

          <div class="sctimeline__wrapper-element">
            <span class="circle"></span>
            <div class="textbox">
              <h3 class="heading --h2">2022</h3>
              <p class="heading --lb">Announcement</p>
              <p class="desc --body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis vivamus at
                mattis bibendum congue cras id interdum.
                Risus leo et.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="scourteam">
      <div class="container">
        <div class="textbox">
          <h2 class="heading --h2">Our team</h2>
          <p class="desc --body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient lorem purus justo,
            ultricies.</p>
        </div>

        <div class="scourteam__wrapper">
          <div class="scourteam__wrapper-element">
            <img src="./imgs/john.png" />
            <div class="user__info">
              <div class="user__info-detail">
                <h3 class="--author">John Carter</h3>
                <p class="--body1">CEO, CO-FOUNDER</p>
              </div>
            </div>
          </div>


          <div class="scourteam__wrapper-element">
            <img src="./imgs/sophie.png" />
            <div class="user__info">
              <div class="user__info-detail">
                <h3 class="--author">Sophie Moore</h3>
                <p class="--body1">COMMUNITY LEAD</p>
              </div>
            </div>
          </div>

          <div class="scourteam__wrapper-element">
            <img src="./imgs/alex.png" />
            <div class="user__info">
              <div class="user__info-detail">
                <h3 class="--author">Alex turner</h3>
                <p class="--body1">OPERATIONS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="scinvestor">
      <div class="container">
        <div class="textbox">

          <h2 class="heading --h2">Investors</h2>
          <p class="desc --body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient lorem purus justo,
            ultricies.</p>
        </div>
        <div class="company__group">
          <img class="company" src="./imgs/company.svg" />
          <img class="company" src="./imgs/company2.svg" />
          <img class="company" src="./imgs/company4.svg" />
          <img class="company" src="./imgs/company3.svg" />
          <img class="company" src="./imgs/company5.svg" />
        </div>

      </div>
    </section>
  </main>
  
  `;
})