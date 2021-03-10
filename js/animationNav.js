function navSlide() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav");

  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-active");
    //Burger Animation
    burger.classList.toggle("toggle");
  });
}

navSlide();
