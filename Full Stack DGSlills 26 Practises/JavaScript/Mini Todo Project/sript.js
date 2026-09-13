let input = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList")

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
// console.log(tasks);

renderTasks();
addBtn.addEventListener("click", addTask);

function addTask () {
    console.log(input.value);
    const taskText = input.value.trim();// .trim speces ko remove krta he
    if (taskText === ""){
        alert("Pleae Enter a Task");
        return;
    }
    const task = {
        text: taskText,
        completed: false,

    };

    tasks.push(task);
    input.value = "";
    
    saveTasks();
    renderTasks();
}

function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach(function(item, index){
    const li = document.createElement("li");
    const taskText = document.createElement("span");
    taskText.textContent = item.text;

    if(item.completed){
        taskText.classList.add("completed");
    }
    const buttonsDiv = document.createElement("div");
    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";

    doneBtn.addEventListener("click", function(){
        tasks[index].completed = !tasks[index].completed;
        saveTasks();
        renderTasks();
    });
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function(){
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
    });
    
    buttonsDiv.appendChild(doneBtn);
    buttonsDiv.appendChild(deleteBtn);
    li.appendChild(taskText);
    li.appendChild(buttonsDiv);
    taskList.appendChild(li);

    });
}

function saveTasks() {
    const data = JSON.stringify(tasks);
    localStorage.setItem("tasks", data);
}