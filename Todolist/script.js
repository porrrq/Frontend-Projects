//Variables
const taskInput = document.querySelector('.task-input');
const addTaskBtn = document.querySelector('.add-task-btn');
const todoList = document.querySelector('.todolist-container');
let checkBtn = Array.from(document.querySelectorAll('.tash-checkbox'))
let deleteTaskBtn = Array.from(document.querySelectorAll('.del-task-btn'));
let taskTitle = Array.from(document.querySelectorAll('.task-title'));


function deleteTask(button) {
    button.parentNode.remove()
}

function addTask() {
    //Prevent no task name
    if (taskInput.value === "") {
        alert("Please enter the task title");
        return;
    }
    else {
        //Append new task
        // <div class="todo">
        //     <input type="checkbox" class="task-checkbox">
        //     <input readonly value="${taskInput.value}" class="task-title">
        //     <button type="button" class="del-task-btn">x</button>
        // </div>
        const newTodo = document.createElement("div");
        newTodo.classList.add("todo");
        const newCheckbox = document.createElement("input");
        newCheckbox.setAttribute("type","checkbox");
        newCheckbox.classList.add("task-checkbox");
        const newTaskTitle = document.createElement("input");
        newTaskTitle.readOnly = true;
        newTaskTitle.setAttribute("value",taskInput.value)
        newTaskTitle.setAttribute("class","task-title")
        const newDelButton = 
        
       
        todoList.appendChild(newTodo) 
        //Clear input field
        taskInput.value = "";
        taskInput.blur();

        //Updating task-title list
        taskTitle = Array.from(document.querySelectorAll('.task-title'));
        //Make it Editable if double click
        taskTitle.forEach(title => {
            const parent = title.parentElement;
            const checkBox  = parent.querySelector('.task-checkbox')
            
            title.addEventListener('click',()=>{
                if (checkBox.checked == false) {title.readOnly=false}})
            title.addEventListener("keydown",(event) => {
                if (event.key === "Enter"){
                event.preventDefault();
                title.blur();
                title.readOnly=true;
                }
            })
        })

        //Updating delete button list
        deleteTaskBtn = Array.from(document.querySelectorAll('.del-task-btn'));
        //Assign deleteTask to each button
        deleteTaskBtn.forEach((button) => {button.addEventListener('click',()=>{deleteTask(button)})})

        //Updating Checkbox
        checkBtn = Array.from(document.querySelectorAll('.task-checkbox'))
        checkBtn.forEach(btn => {
            const parent = btn.parentElement;
            const titleBox  = parent.querySelector('.task-title')
            btn.addEventListener('click',()=>{
                console.log(titleBox)
                titleBox.classList.toggle('done');
                titleBox.readOnly = true;
            })
        })
    }
}
taskInput.addEventListener("keydown",(event)=>{
    if (event.key === "Enter") {
        event.preventDefault();
        addTask();
    }
})
addTaskBtn.addEventListener("click",addTask)