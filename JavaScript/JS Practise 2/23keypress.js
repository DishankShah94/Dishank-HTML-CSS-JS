const body = document.body;
body.addEventListener("keypress", (e) => {
    console.log(e.key);
})
const button = document.querySelector(".btn-headline");
console.log(button);
button.addEventListener("mouseover", () => {
    alert("Mouseover event occured");
})
button.addEventListener("mouseleave", () => {
    alert("Mouseleave event occured");
})