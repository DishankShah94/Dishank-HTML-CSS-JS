//In HtmlCollection for and for of loop are used but for-each loop is not possible
// let navitem = document.getElementsByTagName("a");
// console.log(navitem);
// for (let i = 0; i < navitem.length; i++) {
//     console.log(navitem[i]);
//     const navitems = navitem[i];
//     navitems.style.color = "green";
//     navitems.style.backgroundColor = "white"; 

// }
// for (navitems of navitem) {
//     // console.log(navitems);
//     navitems.style.color = "green";
//     navitems.style.backgroundColor = "white";
// }
// let navitems = Array.from(navitem);
// console.log(Array.isArray(navitems));
// navitems.forEach(navitem => {
//     console.log(navitem);
//     navitem.style.color = "green";
//     navitem.style.backgroundColor = "white";
// });
//In NodeList for, for of and for-each loop are possible 
let navitem = document.querySelectorAll("a");
// console.log(navitem);
// for (let i = 0; i < navitem.length; i++) {
//     console.log(navitem[i]);
//     const navitems = navitem[i];
//     navitems.style.color = "green";
//     navitems.style.backgroundColor = "white"; 

// }
// for (let navitems of navitem) {
//     console.log(navitems);
//     navitems.style.color = "green";
//     navitems.style.backgroundColor = "white";
// }
navitem.forEach((navitems) => {
    console.log(navitems);
    navitems.style.color = "green";
    navitems.style.backgroundColor = "white";
})