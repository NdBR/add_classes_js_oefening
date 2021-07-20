const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");



const boldButton = document.querySelector(".makeBold");
const bigButton = document.querySelector(".makeBig");
const errorButton = document.querySelector(".makeError");
const italicButton = document.querySelector(".toggleItalic");


const makeParagraph2Bold = () => {
    p2.classList.remove("big-font");
    p2.classList.remove("error");
    p2.classList.add("bold");
};
boldButton.addEventListener("click", makeParagraph2Bold);
