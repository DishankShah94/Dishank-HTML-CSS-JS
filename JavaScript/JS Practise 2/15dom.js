const rootNode = document.getRootNode();
// console.log(rootNode);
const htmlElementNode = rootNode.childNodes[0];
console.log(htmlElementNode.childNodes);
const headElementNode = htmlElementNode.childNodes[0];
const textNode = htmlElementNode.childNodes[1];
const bodyElementNode = htmlElementNode.childNodes[2];
// console.log(headElementNode);
// console.log(textNode);
// console.log(bodyElementNode);           
// console.log(headElementNode.nextSibling.nextSibling);
console.log(headElementNode.nextElementSibling);
const h1 = document.querySelector("h1");
const ans = h1.parentNode.parentNode;
ans.style.color = "blue";
ans.style.backgroundColor = "grey";
const container = document.querySelector(".container");
// console.log(container);
const children = container.children;
console.log(children);