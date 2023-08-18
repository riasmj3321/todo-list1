const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const pendingCount = document.getElementById("pendingCount");
const completedCount = document.getElementById("completedCount");

let completedTasksCount = 0;
let tasksCount = 0; // Contador de tareas totales

function updateCounts() {
  const pendingTasksCount = tasksCount - completedTasksCount; // Calcula tareas pendientes
  pendingCount.textContent = pendingTasksCount;
  completedCount.textContent = completedTasksCount;
}

function createTaskItem(taskText) {
  tasksCount++; // Incrementa el contador de tareas totales

  const taskItem = document.createElement("li");

  const taskTextSpan = document.createElement("span");
  taskTextSpan.textContent = taskText; // Descripción sin enumeración

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Realizado";
  completeBtn.classList.add("complete-btn");

  completeBtn.addEventListener("click", () => {
    taskItem.classList.toggle("completed");
    if (taskItem.classList.contains("completed")) {
      completedTasksCount++;
    } else {
      completedTasksCount--;ds
    }
    updateCounts();
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Eliminar";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", () => {
    taskItem.remove();
    if (taskItem.classList.contains("completed")) {
      completedTasksCount--;
    }
    tasksCount--; // Decrementa el contador de tareas totales
    updateCounts();
  });

  taskItem.appendChild(taskTextSpan);
  
  const taskButtons = document.createElement("div");
  taskButtons.classList.add("task-buttons");
  taskButtons.appendChild(completeBtn);
  taskButtons.appendChild(deleteBtn);
  taskItem.appendChild(taskButtons);

  updateCounts();

  return taskItem;
}

document.getElementById("addTaskBtn").addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskItem = createTaskItem(taskText);
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
});

function createTaskItem(taskText) {
  tasksCount++; // Incrementa el contador de tareas totales

  const taskItem = document.createElement("li");
  taskItem.classList.add("task");

  const taskDescription = document.createElement("div");
  taskDescription.textContent = taskText;
  taskDescription.classList.add("task-description");

  const taskButtons = document.createElement("div");
  taskButtons.classList.add("task-buttons");

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Realizado";
  completeBtn.classList.add("complete-btn");

  completeBtn.addEventListener("click", () => {
    taskItem.classList.toggle("completed");
    if (taskItem.classList.contains("completed")) {
      completedTasksCount++;
    } else {
      completedTasksCount--;
    }
    updateCounts();
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Eliminar";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", () => {
    taskItem.remove();
    if (taskItem.classList.contains("completed")) {
      completedTasksCount--;
    }
    tasksCount--; // Decrementa el contador de tareas totales
    updateCounts();
  });

  taskButtons.appendChild(completeBtn);
  taskButtons.appendChild(deleteBtn);

  taskItem.appendChild(taskDescription);
  taskItem.appendChild(taskButtons);

  updateCounts();

  return taskItem;
}

