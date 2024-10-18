
const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = " Your Growth"
    }, 0)
    setTimeout(() => {
        text.textContent = " WebDevelopment"
    }, 4000)
    setTimeout(() => {
        text.textContent = " Hackathon"
    }, 8000)
    setTimeout(() => {
        text.textContent = " Freelance"
    }, 12000)
}

textLoad();

setInterval(textLoad, 16000);