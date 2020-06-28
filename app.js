//Selectors 
    const todoInput = document.querySelector('.todo-input');
    const todoButton = document.querySelector('.todo-button');
    const todoList = document.querySelector('.todo-list');
    const filterOption = document.querySelector('.filter-todo')
    


//Listeners
document.addEventListener('DOMContentLoaded',getTodos)
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
// filterOption.addEventListener('change',filterTodo,false)


//functions

 var todosarr = []

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
    //add to local stoarage
    saveLocalTodo(todoInput.value)
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
function deleteCheck(e){
    const item = e.target
    
    //delete the todo
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        //add animation
        todo.classList.add("fall");
        removeLocalTodos(todo)
        todo.addEventListener('transitionend',function(){
            todo.remove();
        })
        

    }
    //checkmark
    if(item.classList[0] === 'completed-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e){
const todos = todoList.childNodes;
todos.forEach(function(todo){
    
    
    switch(filterOption.value){
        case "all":
            todo.style.display = "flex"
            break;
        case "Completed":
            
            if(todo.classList.contains("completed")){
            
                todo.style.display = "flex";
                
                
            }else{
                todo.style.display = "none";
            
            }
            break;
            case "Uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex"
                }else{
                    todo.style.display = "none"
                }
                break;
        
    }
})
}

function saveLocalTodo(todo){
    //check for is any todos all ready saved
    let todos;
    if(localStorage.getItem('todos')=== null){
        todos = []
        
        
    }else {
        todoInput.innerHTML = ""
        todos = JSON.parse(localStorage.getItem('todos'));
    }
     todos.push(todo)
    localStorage.setItem('todos',JSON.stringify(todos));

}

function getTodos(){
    console.log('hello')
    let todos;
    if(localStorage.getItem('todos')=== null){
        todos = [];
        
    }else {
        todos = JSON.parse(localStorage.getItem('todos'));
        console.log(todos)
    }
    todos.forEach(function(todo){
        const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    const newTodo = document.createElement('li'); 
    newTodo.innerText = todo;
    
    
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //add to local stoarage
    // saveLocalTodo(todoInput.value)
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
    })
}

function removeLocalTodos(todo){
    if(localStorage.getItem('todos')=== null){
        todos = [];
        
    }else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    console.log (todoIndex)
    todos.splice(todos.indexOf(todoIndex),1);
    console.log(todos)
    // localStorage.setItem('todos',JSON.stringify(todo));
    localStorage.setItem('todos',JSON.stringify(todos));
}