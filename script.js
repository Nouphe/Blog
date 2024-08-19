var slides = document.querySelectorAll(".slide");
var buttons = document.querySelectorAll(".slider-btn");
let currentSlide = 1;

//Manual images slider
var manualNav = function (manual) {
  slides.forEach(function (slide) {
    slide.classList.remove("active");

    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });
  });

  slides[manual].classList.add("active");
  buttons[manual].classList.add("active");
};

buttons.forEach(function (btn, i) {
  btn.addEventListener("click", function () {
    manualNav(i);
    currentSlide = i;
  });
});


var codingProjects = document.querySelectorAll(".project");
  
codingProjects.forEach((project, index) => {
  project.dataset.aos = "fade-down";
  project.dataset.aosDuration = 1500;
  project.dataset.aosDelay = index * 300;
});
AOS.init();
