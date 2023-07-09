const todoList = document.querySelector(".todo-list");
const li = document.querySelector("li");
li.textContent = "new todo";
const li2 = li.cloneNode(true);
todoList.append(li);
todoList.prepend(li2);