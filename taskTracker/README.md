# Task Tracker CLI

Task Tracker CLI is a command-line application built in Node.js that allows users to manage their tasks. Users can add, update, delete, mark tasks as done, and list tasks based on their status (done, not done, or all).

This app uses JSON to store tasks and allows easy task management via simple commands.

## Features
- Add new tasks.
- Update existing tasks.
- Delete tasks.
- Mark tasks as completed or "Not done".
- List tasks based on their status: `all`, `done`, `not done`.

## Installation

To set up the Task Tracker CLI locally, follow these steps:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/boulos707/task_tracker.git

## Usage

* Add a task:

node app.js add "Your task description"

* Update a task:

node app.js update <task_id> "New task description"

* Delete a task:

node app.js delete <task_id>

* Mark a task as done or not done:

node app.js mark <task_id> "done"   # or "not done"

* List tasks(filter by status):

node app.js list "done"  # or "not done", "all"
