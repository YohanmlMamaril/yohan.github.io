// Task Management
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', () => {
  const task = taskInput.value.trim();
  if (task) {
    const listItem = document.createElement('li');
    listItem.textContent = task;
    taskList.appendChild(listItem);
    taskInput.value = '';
  }
});

// Calendar Placeholder
const calendarView = document.getElementById('calendar-view');
calendarView.textContent = 'Calendar functionality coming soon!';