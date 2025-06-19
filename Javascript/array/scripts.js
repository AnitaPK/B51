// assignment 1 
taskNameField = document.querySelector("#taskName")
tasksShowUL = document.querySelector("#tasksShow")

taskArray = []

function deleteTask(i){
    console.log(i)
    taskArray.splice(i, 1)
    displayTasks();
}

function displayTasks(){
    tasksShowUL.innerHTML = taskArray.map((t, index)=>`
                                    <li class="liClass">
                                    <span>${t}</span>
                                    <button class='btn btn-danger' onclick='deleteTask(${index})'>Delete</button>
                                    </li>
    `).join('')
}

function addNewTask(){
        newTask = taskNameField.value 
        taskArray.push(newTask);
        taskNameField.value = ''
        console.log(taskArray);
        displayTasks()
}



function clearAllTasks(){
    taskArray = [];
    console.log(taskArray);
    displayTasks()
}


// table 1-5  assignmnet 2
CreateRowField = document.querySelector('#CreateRow')

numArray = [2, 3 ,4 ,5, 6, 7, 8, 9,10]

function createTables(){
    CreateRowField.innerHTML = numArray.map((x,i)=>`
                                <tr>
                                <td>${x*1}</td>
                                <td>${x*2}</td>
                                <td>${x*3}</td>
                                <td>${x*4}</td>
                                <td>${x*5}</td>
                                <td>${x*6}</td>
                                <td>${x*7}</td>
                                <td>${x*8}</td>
                                <td>${x*9}</td>
                                <td>${x*10}</td>
                                </tr>
    `).join('')
}

createTables()