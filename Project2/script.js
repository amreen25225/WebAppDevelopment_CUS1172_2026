let tasks = [];

document.getElementById("taskForm").addEventListener("submit", addTask);

function addTask(event){

event.preventDefault();

let title = document.getElementById("taskTitle").value;

let priority = document.getElementById("taskPriority").value;

let status = document.querySelector('input[name="status"]:checked').value;

let task = {
title: title,
priority: priority,
status: status
};

tasks.push(task);

displayTask(task, tasks.length - 1);

document.getElementById("taskForm").reset();

}

function displayTask(task, index){

let taskList = document.getElementById("taskList");

let li = document.createElement("li");

li.innerHTML =
task.title + " - Priority: " + task.priority + " - Status: " + task.status;

let removeBtn = document.createElement("button");
removeBtn.textContent = "Remove";

let completeBtn = document.createElement("button");
completeBtn.textContent = "Complete";

li.appendChild(removeBtn);
li.appendChild(completeBtn);

taskList.appendChild(li);

removeBtn.addEventListener("click", function(){

tasks.splice(index,1);
li.remove();

});

completeBtn.addEventListener("click", function(){

li.style.textDecoration = "line-through";

});

}
