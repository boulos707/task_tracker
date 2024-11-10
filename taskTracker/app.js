import fs from 'fs';
import path from 'path';

const taskFilePath = path.resolve('file.JSON');

// Read function
const readTask = () => {
  if (fs.existsSync(taskFilePath)) {
    const data = fs.readFileSync(taskFilePath, 'utf-8');
    return JSON.parse(data);
  }
  return [];
}

// Write function
const writeTask = (tasks) => {
  fs.writeFileSync(taskFilePath, JSON.stringify(tasks, null, 2), 'utf-8');
}

// Add function
const addTask = (description) => {
  const tasks = readTask();
  const newTask = {
    id: tasks.length + 1,
    description: description,
    status: "Not done!",
  };

  tasks.push(newTask);
  writeTask(tasks);
}

// Update task
const updateTask = (id, newDescription) => {
  const tasks = readTask();
  const task = tasks.find((ts) => ts.id === id);
  if (task) {
    task.description = newDescription;
    writeTask(tasks);
  } else {
    console.log("The ID is not found");
  }
}

// Delete task
const deleteTask = (id) => {
  const tasks = readTask();
  const updatedTasks = tasks.filter((ts) => ts.id !== id);

  if (updatedTasks.length < tasks.length) {
    writeTask(updatedTasks);
    console.log("Successfully deleted");
  } else {
    console.log("The ID not found to delete!");
  }
}

// Mark task
const markTask = (id, status) => {
  const tasks = readTask();
  const task = tasks.find((ts) => ts.id === id);

  if (task) {
    task.status = status;
    writeTask(tasks);
    console.log("Status updated");
  } else {
    console.log("The task not found to update status");
  }
}

// List task
const listTask = (status = "all") => {
  const tasks = readTask();
  let filteredTasks = tasks;

  if (status !== "all") {
    filteredTasks = tasks.filter((ts) => ts.status === status);
  }

  if (filteredTasks.length > 0) {
    console.log("Tasks:", filteredTasks);
  } else {
    console.log("No tasks found with the specified status.");
  }
}

// Command line argument
const args = process.argv.slice(2);
const command = args[0];

// Switch menu
switch(command) {
  case 'add':
    const taskDescription = args.slice(1).join(" ");
    addTask(taskDescription);
    break;

  case 'update':
    const id = parseInt(args[1]);
    const update = args.slice(2).join(" ");
    updateTask(id, update);
    break;

  case 'delete':
    const idDelete = parseInt(args[1]);
    deleteTask(idDelete);
    break;

  case 'mark':
    const idMark = parseInt(args[1]);
    const statusMark = args[2] || "Not done!"; 
    markTask(idMark, statusMark);
    break;

  case 'list':
    const status = args[1] || "all";
    listTask(status);
    break;

  default:
    console.log("Unknown command. Please use 'add', 'update', 'delete', 'mark', or 'list'.");
    break;
}
