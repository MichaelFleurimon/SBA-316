document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todo-input");
    const addTodoBtn = document.getElementById("add-todo");
    const todoList = document.getElementById("todo-list");
    const todoColor = document.getElementById("change-color");
    // Function to create a new to-do item
    function createTodoItem(taskText) {
      const li = document.createElement("li");
      li.classList.add("todo-item");
      const span = document.createElement("span");
      span.textContent = taskText;
      const buttonsDiv = document.createElement("div");
      buttonsDiv.classList.add("todo-buttons");
      // Remove button
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.classList.add("remove-btn");
      removeBtn.addEventListener("click", () => {
        li.remove();
      });
      // Move up button
      const moveUpBtn = document.createElement("button");
      moveUpBtn.textContent = "up";
      moveUpBtn.classList.add("move-up-btn");
      moveUpBtn.addEventListener("click", () => {
        if (li.previousElementSibling) {
          todoList.insertBefore(li, li.previousElementSibling);
        }
      });
      // Move down button
      const moveDownBtn = document.createElement("button");
      moveDownBtn.textContent = "down";
      moveDownBtn.classList.add("move-down-btn");
      moveDownBtn.addEventListener("click", () => {
        if (li.nextElementSibling) {
          todoList.insertBefore(li.nextElementSibling, li);
        }
      });
      // change the color of the header add butons
      function changeColor(){
        head = document.getElementById("header");
        head.style.background = read;
        
      }
      // Append buttons to the container
      buttonsDiv.appendChild(moveUpBtn);
      buttonsDiv.appendChild(moveDownBtn);
      buttonsDiv.appendChild(removeBtn);
      li.appendChild(span);
      li.appendChild(buttonsDiv);
     return li;
    }
    // Add new task
    addTodoBtn.addEventListener("click", () => {
      const taskText = todoInput.value.trim();
      if (taskText) {
        const todoItem = createTodoItem(taskText);
        todoList.appendChild(todoItem);
        todoInput.value = "";
      }
    });
    // Enter to add a task
    todoInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        addTodoBtn.click();
      }
    });
    todoColor.addEventListener("click",changeColor());
  });