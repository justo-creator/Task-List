document.addEventListener('DOMContentLoaded', () => {

  const InputTask = document.getElementById('Input-Task');
  const BtnTask = document.getElementById('Btn-Task');
  const ListTask = document.getElementById('List-Task');

  const addTask = () => {
    const InputText = InputTask.value.trim();
    if (InputText === '') return;

    const CreateLi = document.createElement('li');
    const CreateSpan = document.createElement('span');

    CreateSpan.textContent = InputText;
    CreateSpan.classList.add('task-text');

    // Button Edit
    const editButtom = document.createElement('button');
    editButtom.textContent = 'Edit';
    editButtom.classList.add('edit-buttom');
    editButtom.onclick = () => editTask(CreateSpan);

    // Button Delete
    const deleteButtom = document.createElement('button');
    deleteButtom.textContent = 'Delete';
    deleteButtom.classList.add('delete-buttom');
    deleteButtom.onclick = () => removeTask(CreateLi);

    CreateLi.appendChild(CreateSpan);
    CreateLi.appendChild(editButtom);
    CreateLi.appendChild(deleteButtom);
    ListTask.appendChild(CreateLi);

    InputTask.value = ''; // Clear the input after adding task
  };

  // Edit Task
  const editTask = (CreateSpan) => {
    const newTask = prompt('New Task', CreateSpan.textContent);
    if (newTask !== null && newTask.trim() !== '') {
      CreateSpan.textContent = newTask;
    }
  };

  // Remove Task
  const removeTask = (CreateLi) => {
    ListTask.removeChild(CreateLi);
  };

  BtnTask.addEventListener('click', addTask);

});
