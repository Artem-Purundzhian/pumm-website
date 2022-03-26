const form = document.forms["input__container"];
const regExp = {
  email:
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
};

const modalRed = document.createElement("div");
modalRed.innerHTML = `
    <span>invalid email</span>
`;
modalRed.classList.add('modal__red');

const modalGreen = document.createElement("div");
modalGreen.innerHTML = `
    <span>successful</span>
`;
modalGreen.classList.add('modal__green');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = form.mail__input.value;
  if (regExp.email.test(message)) {
    document.body.appendChild(modalGreen);
    setTimeout(() => {modalGreen.classList.add('modal__active')}, 200);
    setTimeout(() => {modalGreen.classList.remove('modal__active')}, 3500);
    setTimeout(() => {document.body.removeChild(modalGreen)}, 4000);
    form.reset();
  } else {
    document.body.appendChild(modalRed);
    setTimeout(() => {modalRed.classList.add('modal__active')}, 200);
    setTimeout(() => {modalRed.classList.remove('modal__active')}, 3500);
    setTimeout(() => {document.body.removeChild(modalRed)}, 4000);
  }
});
