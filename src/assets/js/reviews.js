const clientWidth = window.innerWidth;

const slidesToShow = getSlidesToShow(clientWidth);

slider(".review__item", 1, 2.5);

window.addEventListener("resize", () => {
  const newSlidesToShow = getSlidesToShow(window.innerWidth);
  slider(".review__item", 1, newSlidesToShow);
});
