tasks = []
tNameElemt = document.getElementById("tname")
tDiscriElemt = document.getElementById("tDiscri")
showTasksElemt = document.getElementById("showTasks")

TEditNameElemt = document.getElementById("TEditName")
TEditDiscriElemt = document.getElementById("TEditDiscri")
TEditStatusElemt = document.getElementById("TEditStatus")
updateTaskBTNElemt = document.getElementById("updateTaskBTN")



function saveToLocalStorage(tasks1) {
    localStorage.setItem('b51', JSON.stringify(tasks1))
}
function getFromLocalStorage() {
    return JSON.parse(localStorage.getItem('b51'))
}

function addNewTask() {
    newTask = {
        id: Date.now(),
        name: tNameElemt.value,
        description: tDiscriElemt.value,
        isComplete: false,
    }
    tasksList = getFromLocalStorage()
    tasksList.push(newTask)
    tNameElemt.value = ''; tDiscriElemt.value = ''
    saveToLocalStorage(tasksList)
    renderTasks()
}

function deleteTask(ID) {
    tasksList1 = getFromLocalStorage()
    index = tasksList1.findIndex((t) => t.id == ID)
    tasksList1.splice(index, 1)
    saveToLocalStorage(tasksList1)
    renderTasks()
}

function updateTask(ID) {
    tasksList1 = getFromLocalStorage()
    index = tasksList1.findIndex((t) => t.id == ID)
    let tEdit = tasksList1[index]
    console.log(tEdit)
    TEditNameElemt.value = tEdit.name
    TEditDiscriElemt.value = tEdit.description
    TEditStatusElemt.value = tEdit.isComplete
}

function updateTaskStatus(ID) {
    updateTask(ID)

    index = tasksList1.findIndex((t) => t.id == ID)
    tEdit1 = tasksList1[index]

    updateTaskBTNElemt.addEventListener('click', ()=>{
    tEdit1.name = TEditNameElemt.value
    tEdit1.description = TEditDiscriElemt.value,
    tEdit1.isComplete = TEditStatusElemt.value

    saveToLocalStorage(tasksList1)
    renderTasks()
})
}

function renderTasks() {
    tasksList = getFromLocalStorage()
    showTasksElemt.innerHTML = tasksList.map((t, i) => `
                                 <tr>
      <th scope="row">${i + 1}</th>
      <td>${t.name}</td>
      <td>${t.description}</td>
      <td>${t.isComplete}</td>
      <td><button class="btn btn-success" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="updateTaskStatus(${t.id})">Edit</button>
      <button class="btn btn-danger" onclick="deleteTask(${t.id})">Delete</button></td>
    </tr>
     `).join('')

}



window.addEventListener('DOMContentLoaded', () => {
    saveToLocalStorage(tasks)
    renderTasks()
})
