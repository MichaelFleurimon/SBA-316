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
  
    // Add event listener to the Change Color button, no fr this time because it didn't work before
    todoColor.addEventListener("click",() =>{
      document.body.classList.toggle("dark")
      //console.log("and I ran"); made this to test the listener was actually working
    })
  });
  