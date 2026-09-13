let input = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
addBtn.addEventListener("click",addTask);
renderTasks();

function addTask () {
    let taskText = input.value.trim();
    if(taskText === "") {
        alert("write your Task!");
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

function renderTasks(){
    taskList.innerHTML = "";
    tasks.forEach(function(task, index){
    const li = document.createElement("li");
    const taskText = document.createElement("span");
    const buttonsDiv= document.createElement("div");
    const doneBtn = document.createElement("button");
    const deleteBtn = document.createElement("button")

    taskText.textContent = task.text;
    if(task.completed){
    taskText.classList.add("completed");

    }
    doneBtn.textContent = "Done"
    doneBtn.addEventListener("click",function(){
    tasks[index].completed = !tasks[index].completed;

    saveTasks();
    renderTasks();

    });

    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function(){
    tasks.splice(index,1);
    saveTasks();
    renderTasks();
    });
    buttonsDiv.appendChild(doneBtn);
    buttonsDiv.appendChild(deleteBtn);
    li.appendChild(taskText);
    li.appendChild(buttonsDiv);
    taskList.appendChild(li);

    })
    
    
}

function saveTasks(){
 const data = JSON.stringify(tasks);
 localStorage.setItem("tasks",data);
}