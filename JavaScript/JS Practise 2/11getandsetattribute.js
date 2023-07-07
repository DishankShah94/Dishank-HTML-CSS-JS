const nav = document.querySelector(".nav-item a");
console.log(nav);
const ans = nav.getAttribute("href");
console.log(ans);
nav.setAttribute("href", "https://google.com");
const google = nav.getAttribute("href");
console.log(google);