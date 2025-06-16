'use strict';

const newTask = document.querySelector('.task-input')
const btnAddTask = document.querySelector('.btn-add-task')
const taskList = document.querySelector('#task-list');



btnAddTask.addEventListener('click', function () {
    let taskText = newTask.value.trim();

    if (taskText === '') return;

    const li = document.createElement('li');

    // Checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `task-${Date.now()}`; // id único, útil se quiser associar label

    // Label
    const label = document.createElement('label');
    label.htmlFor = checkbox.id;
    label.textContent = taskText;
    label.classList.add('task-checkbox');
    const taskCheckbox = document.querySelector('.task-checkbox')

    // Ícone de lixeira
    const trashIcon = document.createElement('img');
    trashIcon.src = 'imgs/icon-lixo.svg';
    trashIcon.alt = 'Excluir tarefa';
    trashIcon.classList.add('remove-task');

    trashIcon.addEventListener('click', function () {
        li.remove();
    })

    // Adicionar ao li
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(trashIcon);

    taskList.appendChild(li);

    newTask.value = ''; // limpa o campo após adicionar

    // Marcar como concluída
    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            console.log('Tarefa marcada como concluída:');
            taskCheckbox
            
        } else {
            console.log('Tarefa desmarcada');
        }
    });
});