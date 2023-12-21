// Check if we're in a browser environment
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function () {
    // Your code that interacts with the DOM goes here

    // For example, you can add your task lister code here:
    const form = document.getElementById('create-task-form');

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const taskDescriptionInput = document.getElementById('new-task-description');
      const taskList = document.getElementById('tasks');

      // Create a new task item
      const newTask = document.createElement('li');
      newTask.textContent = taskDescriptionInput.value;

      // Append the new task to the task list
      taskList.appendChild(newTask);

      // Clear the input field
      taskDescriptionInput.value = '';
    });
  });
} else {
  console.log('This code requires a browser environment.');
}
