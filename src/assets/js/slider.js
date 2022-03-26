/**

 * @param {string} card - slider item
//  * @param {string} prev - prev arrow
//  * @param {string} next - next arrow
//  * @param {number} slidesToSlide - count of slides to slide on arrow trigger
//  * @param {number} slidesToShow - count of slides to show
 */

function slider(card, slidesToSlide = 1, slidesToShow = 4) {
  const cards = document.querySelectorAll(card);
  const cardsWrapper = cards[0].parentElement;

  const cardsCount = cards.length - 1;
  let startingPoint = null;
  let endPoint = null;
  let counter = 0;
  slidesToShow = +slidesToShow;

  cards.forEach((card) => {
    const transform = 100 / slidesToShow;
    card.style.flex = `0 0 ${transform}%`;
  });

  ["mousedown", "touchstart"].forEach((event) => {
    cardsWrapper.addEventListener(event, (e) => {
      event === "mousedown"
        ? (startingPoint = e.screenX)
        : (startingPoint = e.touches[0].clientX);
    });
  });

  ["mouseup", "touchend"].forEach((event) => {
    cardsWrapper.addEventListener(event, (e) => {
      event === "mouseup"
        ? (endPoint = e.screenX)
        : (endPoint = e.changedTouches[0].clientX);
      const distance = endPoint - startingPoint;
      if (distance > 100) {
        if (counter >= 0) {
          return;
        }
        if (counter <= cardsCount) {
          counter++;

          cards.forEach((card) => {
            const transform = slidesToShow % 1 == 0 ? 100 : 150;
            card.style.transform = `translateX(${
              counter * slidesToSlide * transform
            }%)`;
          });
        }
      } else if (distance < -100) {
        if (-counter > cardsCount - slidesToShow) {
          return;
        }
        if (counter <= cardsCount) {
          counter--;

          // console.log(counter);
          cards.forEach((card) => {
            const transform = slidesToShow % 1 == 0 ? 100 : 150;
            card.style.transform = `translateX(${
              counter * slidesToSlide * transform
            }%)`;
          });
        }
      }
    });
  });

}
