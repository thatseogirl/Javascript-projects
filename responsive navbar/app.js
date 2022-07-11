const navSlides = () => {
  const burger = document.querySelector(".burger");
  const navList = document.querySelector(".list-item");
  const navLinks = document.querySelectorAll(".list-item li");
  //tggle links
  burger.addEventListener("click", () => {
    navList.classList.toggle("list-active");

    //animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `lightFade 0.5s ease forwards ${
          index / 7 + 1
        }s`;
      }
    });

    //burger animation
    burger.classList.toggle('toggle');
  });
};

navSlides();
