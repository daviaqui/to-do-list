'use strict';

const newTask = document.querySelector('.task-input')
const btnAddTask = document.querySelector('.btn-add-task')
const taskList = document.querySelector('#task-list');



btnAddTask.addEventListener('click', function () {
    let taskText = newTask.value.trim();

    if (taskText === '') return;

    const li = document.createElement('li');

    // Criar o checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `task-${Date.now()}`; // id único, útil se quiser associar label

    // Criar o label para o texto da tarefa
    const label = document.createElement('label');
    label.htmlFor = checkbox.id;
    label.textContent = taskText;
    label.classList.add('task-checkbox');
    const taskCheckbox = document.querySelector('.task-checkbox')

    // Adicionar checkbox e label dentro do li
    li.appendChild(checkbox);
    li.appendChild(label);

    taskList.appendChild(li);

    taskText = ''; // limpa o campo após adicionar

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            console.log('Tarefa marcada como concluída:');
            taskCheckbox
            
        } else {
            console.log('Tarefa desmarcada');
        }
    });
});