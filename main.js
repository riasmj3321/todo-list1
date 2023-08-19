//se definene constantes
const taskInput = document.getElementById("taskInput"); // Campo de entrada de texto
const taskList = document.getElementById("taskList"); // Lista de tareas
const pendingCount = document.getElementById("pendingCount");// Contador de tareas pendientes
const completedCount = document.getElementById("completedCount"); // Contador de tareas completadas

//se establecen las variables para el contador de tareas completadas

let completedTasksCount = 0;
let tasksCount = 0; // Contador de tareas 


function updateCounts() { //se crear funcion para calcular y actualizar los contadores de tareas pendientes y completadas
  const pendingTasksCount = tasksCount - completedTasksCount; // Calcula tareas pendientes
  pendingCount.textContent = pendingTasksCount;
  completedCount.textContent = completedTasksCount;
}

function createTaskItem(taskText) { //se crea funcion para crear li que es la tarea
  tasksCount++;

  const taskItem = document.createElement("li");
  taskItem.classList.add("task");

  const taskDescription = document.createElement("div");
  taskDescription.textContent = taskText;
  taskDescription.classList.add("task-description");

  const taskButtons = document.createElement("div");
  taskButtons.classList.add("task-buttons");

  // Creación de botones y eventos a realizar

  taskButtons.appendChild(completeBtn);
  taskButtons.appendChild(deleteBtn);

  taskItem.appendChild(taskDescription);
  taskItem.appendChild(taskButtons);

  updateCounts();

  return taskItem;
}

function createTaskItem(taskText) {
  tasksCount++; // Aumenta el contador de tareas totales

  // Crea un nuevo elemento li y le asigna la clase "task"
  const taskItem = document.createElement("li");
  taskItem.classList.add("task");

  // Crea un nuevo elemento div para mostrar la descripción de la tarea
  const taskDescription = document.createElement("div");
  taskDescription.textContent = taskText;
  taskDescription.classList.add("task-description");// Asigna la clase "task-description"

  // Crea un nuevo elemento div para contener los botones de la tarea
  const taskButtons = document.createElement("div");
  taskButtons.classList.add("task-buttons"); // Asigna la clase "task-buttons"

// Crea un botón Realizado para completar la tarea
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Realizado"; //se establece el contenido del botn
  completeBtn.classList.add("complete-btn");// Asigna la clase "complete-btn"

 // Agrega un event listener al botón Realizado
  completeBtn.addEventListener("click", () => {
    taskItem.classList.toggle("completed"); // Alterna la clase "completed" en el elemento de tarea
    if (taskItem.classList.contains("completed")) {
      completedTasksCount++;
      taskDescription.style.color = "red";
    } else {
      completedTasksCount--;
      taskDescription.style.color = "black";
    }
    updateCounts(); // Actualiza los contadores de tareas pendientes y completadas
  });

  // Crea un botón Eliminar para eliminar la tarea
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Eliminar"; //se establece el contenido del botn
  deleteBtn.classList.add("delete-btn"); // Asigna la clase delete-btn


  // Agrega un event listener al botón Eliminar
  deleteBtn.addEventListener("click", () => {
    taskItem.remove(); // Elimina el elemento de tarea del DOM
    if (taskItem.classList.contains("completed")) {
      completedTasksCount--;
    }
    tasksCount--; // Disminuye el contador de tareas totales
    updateCounts();  
  });


 // Agrega los botones al contenedor de botones 
  taskButtons.appendChild(completeBtn);
  taskButtons.appendChild(deleteBtn);

  // Agrega la descripción y los botones al elemento de tarea
  taskItem.appendChild(taskDescription);
  taskItem.appendChild(taskButtons);

  updateCounts(); // Actualiza los contadores de tareas pendientes y completadas

  return taskItem; // Retorna el elemento de tarea completo
}

taskInput.addEventListener("keydown", (event) => { // el evento keydown es la que detecta si la tecla es Enter
  if (event.key === "Enter") {
    event.preventDefault(); // Evita que el formulario se envíe por defecto
    addTask(); // Llama a la función para agregar la tarea
  }
});

document.getElementById("addTaskBtn").addEventListener("click", addTask);

function addTask() { // esta funcion obtiene el texto ingresado en el campo de entrada, se verifica que no esté vacío y luego se crea y agrega el elemento de tarea utilizando la función createTaskItem
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskItem = createTaskItem(taskText);
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
}