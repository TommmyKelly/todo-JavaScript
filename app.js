//Selectors 
    const todoInput = document.querySelector('.todo-input');
    const todoButton = document.querySelector('.todo-button');
    const todoList = document.querySelector('.todo-list');


//Listeners
todoButton.addEventListener('click',addTodo);



//functions

function addTodo(event){
    event.preventDefault();
    if(todoInput.value == ""){
        return
    }else{
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //create complete button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add("completed-btn")
    todoDiv.appendChild(completedButton)
    //create delete button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add("trash-btn")
    todoDiv.appendChild(trashButton)
    //append to list
    todoList.append(todoDiv)
    //clear inputbox value
    todoInput.value = ""
    }

}