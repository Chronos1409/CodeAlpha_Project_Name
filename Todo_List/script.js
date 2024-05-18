
function addTask() {
    const taskInput = document.getElementById('newTask');
    const taskList = document.getElementById('taskList');
    
    if (taskInput.value.trim() !== '') {
        const taskItem = document.createElement('li');
        
        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.className = 'checkbox';
        checkBox.onclick = function() {
            if (checkBox.checked) {
                taskItem.classList.add('completed');
                alert('Task completed successfully!');
            } else {
                taskItem.classList.remove('completed');
            }
        };
        
        const taskText = document.createElement('span');
        taskText.textContent = taskInput.value;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            taskList.removeChild(taskItem);
        };
        
        taskItem.appendChild(checkBox);
        taskItem.appendChild(taskText);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
        
        taskInput.value = '';
    }
}
