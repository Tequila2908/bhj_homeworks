const input = Array.from(document.getElementsByClassName('tasks__input'));
const addTask = Array.from(document.getElementsByClassName('tasks__add'));
const taskList = Array.from(document.getElementsByClassName('tasks__list'));

function addOneTask (e) {
	if (input[0].value) {
		let text = input[0].value;
		let task = document.createElement('div');
		let taskTitle = document.createElement('div');
		let taskDeleteButton = document.createElement('a');
		taskDeleteButton.classList.add('task__remove');
		taskDeleteButton.setAttribute('href', '#');
		taskDeleteButton.innerHTML = '&times;'
		taskList[0].appendChild(task);
		task.classList.add('task');
		task.appendChild(taskTitle);
		taskTitle.classList.add('task__title');
		taskTitle.textContent = text;
		task.appendChild(taskDeleteButton);
		taskDeleteButton.onclick = () => {
			task.remove();
			input[0].value = '';
		}
	}

}

addTask[0].addEventListener('click', addOneTask);
