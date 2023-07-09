//beforebegin
//afterbegin
//beforeend
//afterend

const todoList = document.querySelector(".todo-list");
todoList.insertAdjacentHTML("beforeend", "<li>beforeend</li>");
todoList.insertAdjacentHTML("afterbegin", "<li>afterbegin</li>");
todoList.insertAdjacentHTML("beforebegin", "<li>beforebegin</li>");
todoList.insertAdjacentHTML("afterend", "<li>afterend</li>");
