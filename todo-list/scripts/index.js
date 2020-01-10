const input = document.getElementById("todo-input");
const btn = document.getElementById("todo-btn");
const todoList = document.getElementsByTagName("ul")[0];

btn.addEventListener("click", () => addItem());

function addItem() {
  const item = document.createElement("li");

  if (input.value.trim()) {
    item.innerHTML = input.value;

    const deleteBtn = document.createElement("button");
    deleteBtn.addEventListener("click", e => deleteItem(e));

    deleteBtn.innerHTML = "delete";
    item.appendChild(deleteBtn);
    todoList.appendChild(item);
  }
}

function deleteItem(event){
  const todoItem = event.target.parentElement;

  todoList.removeChild(todoItem);
}

// TODO - add button that strike's through text (que tacha el item)
function doneItem(){

}

// TODO - delete whole list
function deleteList(){

}