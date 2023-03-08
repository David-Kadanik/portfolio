const scrollToSection2Btn = document.getElementById("scrollToSection2");
  const section2 = document.getElementById("section2");

  scrollToSection2Btn.addEventListener("click", () => {
    section2.scrollIntoView({ behavior: "smooth" });
  });

  section2.addEventListener("click", () => {
    scrollToSection2Btn.scrollIntoView({ behavior: "smooth" });
  });


  const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links a");
  
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
  
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.5
          }s `;
        }
      });
      burger.classList.toggle("toggle");
    });
    //
  };
  
  navSlide();