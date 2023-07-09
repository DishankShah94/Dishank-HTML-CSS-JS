const allbutton = document.querySelectorAll(".my-buttons button");
allbutton.forEach(button => {
    button.addEventListener("click", (e) => {
        e.target.style.backgroundColor = "yellow";
        e.target.style.color = "#333";
    })
})