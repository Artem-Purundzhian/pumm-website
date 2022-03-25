document.addEventListener("DOMContentLoaded", () => {
  const colors = document.querySelectorAll(".custom__color");
  const sofaDyer = document.querySelectorAll(".sofa__absolute");
  colors.forEach((item) => {
    item.addEventListener("click", (event) => {
      colors.forEach((color) => {
        color.parentNode.classList.remove("color__active");
      });
      event.target.parentNode.classList.toggle("color__active");
      sofaDyer.forEach((sofa) => {
          sofa.style.fill = (`#${item.getAttribute('data')}`)
      });
    });
  });
});
