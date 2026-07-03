function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    li.onclick = function () {
        li.classList.toggle("done");
        saveTasks();
    };

    li.innerHTML = `${task}
    <button class="delete"
    onclick="this.parentElement.remove(); saveTasks()">🗑️</button>`;

    document.getElementById("taskList").appendChild(li);

    saveTasks();

    input.value = "";
}

function saveTasks() {
    let list = document.getElementById("taskList");
    localStorage.setItem("tasks", list.innerHTML);
}

let input = document.getElementById("taskInput");

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addTask();
    }
});

window.onload = function () {
    let savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
        document.getElementById("taskList").innerHTML = savedTasks;
    }
};