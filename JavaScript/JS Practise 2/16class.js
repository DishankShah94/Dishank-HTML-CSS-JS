const sectionTodo = document.querySelector(".section-todo");
console.log(sectionTodo.classList);
sectionTodo.classList.add("btn");
sectionTodo.classList.remove("btn");
const container = sectionTodo.classList.contains("container");
console.log(container);
const toggle = sectionTodo.classList.toggle("bg-dark");
// console.log(toggle);
sectionTodo.classList.remove("bg-dark");

