
const taskContainer = document.querySelector(".task-container");addTaskButton.addEventListener("click", function() {

    const taskText = taskInput.value;

    if (taskText !== "") {

        const task = document.createElement("div");
        task.classList.add("task");

       task.innerHTML = `
    <input type="checkbox">
    <span>${taskText}</span>
    <button class="delete-button">🗑️</button>
`;

const deleteButton = task.querySelector(".delete-button");

deleteButton.addEventListener("click", function() {
    task.remove();
});

        taskContainer.appendChild(task);

        taskInput.value = "";
    }

});

