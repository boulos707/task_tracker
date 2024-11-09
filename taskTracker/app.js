import fs, { readFileSync } from 'fs';
import path from 'path';

// Read function
const taskFilePath = path.join(__dirname, 'file.JSON');

const readTask = () => {
  if(fs.existsSync(taskFilePath)) {
    const data = readFileSync(taskFilePath, 'utf-8');
    return JSON.parse(data);
 }
 return [];
}

// Write function
const writeTask = (tasks) => {
  fs.writeFileSync(taskFilePath, JSON.stringify(tasks, null, 2), 'utf-8');
}

// add function
const addTask = (description) => {
  const tasks = readTask();
  const newTasks = {
    id: tasks.length + 1,
    description: description,
    status: "Not done!",
  };
  
  tasks.push(newTasks);
  writeTask(tasks);
}

// update task
const updateTask = (id, newDescription) => {
  const tasks = readTask();
  const task = tasks.find((ts) => ts.id === id);
  if(task) {
    task.description = newDescription;
    writeTask(tasks);
  }
  else{
    console.log("The ID is not found");
  }
}