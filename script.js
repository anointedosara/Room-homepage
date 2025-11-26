const slides = document.querySelector(".slides");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

const data = [
  {
    id: 1,
    desktopImg: "/images/desktop-image-hero-1.jpg",
    mobileImg: "/images/mobile-image-hero-1.jpg",
  },
  {
    id: 2,
    desktopImg: "/images/desktop-image-hero-2.jpg",
    mobileImg: "/images/mobile-image-hero-2.jpg",
  },
  {
    id: 3,
    desktopImg: "/images/desktop-image-hero-3.jpg",
    mobileImg: "/images/mobile-image-hero-3.jpg",
  },
];

let count = 0;

const getImage = item => {
  return window.innerWidth < 1000 ? item.mobileImg : item.desktopImg;
};

const showSlide = () => {
  const slide = document.querySelectorAll(".slide");
  slide.forEach(s => (s.style.opacity = "0"));
  slide[count].style.opacity = "1";
};

const updateSlides = () => {
  slides.innerHTML = data
    .map(item => {
      return `
        <div class="slide" id=${item.id}>
          <img src="${getImage(item)}" alt="">
        </div>
      `;
    })
    .join("");

  showSlide(); // 👈 Re-apply the correct slide after rebuilding the DOM
};

updateSlides();

right.addEventListener("click", () => {
  count = (count + 1) % data.length;
  showSlide();
});
left.addEventListener("click", () => {
  count = (count - 1 + data.length) % data.length;
  showSlide();
});

window.addEventListener("resize", updateSlides);

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    navbar.style.background = "black";
  } else {
    navbar.style.background = "transparent";
  }
});

const open = document.querySelector(".open");
const close = document.querySelector(".close");
const cover = document.querySelector(".cover");
const nav = document.querySelector("ul");

open.classList.add("show");

const handleOpenNav = () => {
  document.body.style.overflow = "hidden";
  cover.style.display = "block";
  nav.classList.add("showNav");
  open.classList.remove("show");
  close.classList.add("show");
};
open.addEventListener("click", handleOpenNav);

const handleCloseNav = () => {
  document.body.style.overflow = "scroll";
  cover.style.display = "none";
  nav.classList.remove("showNav");
  open.classList.add("show");
  close.classList.remove("show");
};
close.addEventListener("click", handleCloseNav);
