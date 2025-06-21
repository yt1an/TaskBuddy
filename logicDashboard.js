//Task ID

let i = 0 // Task IDs
let j = 0 // Folder IDs

let loadTasks = JSON.parse(localStorage.getItem("loggedInUser")).tasks

let tasks = loadTasks



//Load Task
function loadTask(){

    const savedTasks = loadTasks
    loadName = savedTasks[0].loadedName

    console.log(savedTasks)

    if(loadName == ""){
        console.log("No Tasks Saved")
    } else{
        for(let k = 0; k < savedTasks.length; k++){
        loadName = savedTasks[k].loadedName
        loadDescription = savedTasks[k].loadedDescription
        loadPriority = savedTasks[k].loadedPriority
        loadDeadline = savedTasks[k].loadedDeadline
        loadFolder = savedTasks[k].loadedFolder

        createTask(loadName,loadDescription,loadPriority,loadDeadline,loadFolder)
        }
    }
}

loadTask()

//Build Task

clear()

confirmCreate.onclick = function taskBuilder(){

    let userTaskName = document.getElementById("taskName").value
    let taskDescription = document.getElementById("description").value
    let setPriority = document.getElementById("setPriority").value
    let userDeadline = document.getElementById("deadline").value
    let selectFolder = document.getElementById("selectFolder").value

    if(userTaskName ==  "" ||
        taskDescription ==  "" ||
        setPriority ==  "" ||
        userDeadline  ==  ""
    ){
        createPopUp.style.visibility = "hidden"
        clear()
    } else {
        createTask(userTaskName,taskDescription,setPriority,userDeadline,selectFolder)
        createPopUp.style.visibility = "hidden"
        clear()
    }
}

//Clear Forms

function clear(){
    document.getElementById("taskName").value = ""
    document.getElementById("description").value = ""
    document.getElementById("setPriority").value = ""
    document.getElementById("deadline").value = ""
    document.getElementById("selectFolder").value = ""
}
//Confirms Create Task

function createTask(name,description,priority,deadline,folder){

    //Creation of Task

    let task = document.createElement("div")
    task.id = "taskID#" + i
    task.className = "task"
    document.getElementById(priority).appendChild(task)

    //Add to array

    tasks.push({
        loadedName: name,
        loadedDescription: description,
        loadedPriority: priority,
        loadedDeadline: deadline,
        loadedFolder: folder
    })

    localStorage.setItem("loggedInUser", JSON.stringify(account))

    //Deleting Task

    let deleteTask = document.createElement("button")
    deleteTask.innerText = "X"
    deleteTask.id = "deleteButton" + i
    deleteTask.className = "deleteButton"
    deleteTask.style.visibility = "hidden"
    task.appendChild(deleteTask)
    
    deleteTask.onclick = function (){
        task.remove()
        taskSummary.remove()
        }


    //Naming Task

    let taskName = document.createElement("h1")
    taskName.innerText = name
    task.appendChild(taskName)

    //Task Description

    let taskDescription = document.createElement("p")
    taskDescription.innerText = description
    task.appendChild(taskDescription)

    //Task Deadline

    let taskDeadline = document.createElement("p")
    taskDeadline.innerText = "Deadline: " + deadline
    task.appendChild(taskDeadline)

    //Create folder if folder is not existing
    try {
        if (!document.getElementById(folder)) {
            throw new Error("Folder not found");
        }
    } catch (err) {
        if(folder == ""){

        } else{
            createFolder(folder);
        }
    }

    //Task Folder
    let taskSummary = ""
    if(folder == ""){

    } else {
        taskSummary = document.createElement("div")
        document.getElementById(folder).appendChild(taskSummary)
        
        let taskSummaryName = document.createElement("h1")
        taskSummaryName.innerText = name

        let taskSummaryDescription = document.createElement("p")
        taskSummaryDescription.innerText = description

        let taskSummaryDeadline = document.createElement("p")
        taskSummaryDeadline.innerText = "Deadline: " + deadline

        taskSummary.appendChild(taskSummaryName)
        taskSummary.appendChild(taskSummaryDescription)
        taskSummary.appendChild(taskSummaryDeadline)

        let deleteTaskSummary = document.createElement("button")
        deleteTaskSummary.innerText = "X"
        deleteTaskSummary.id = "deleteTask" + i
        deleteTaskSummary.className = "deleteTask"
        taskSummary.appendChild(deleteTaskSummary)

        deleteTaskSummary.onclick = function (){
            task.remove()
            taskSummary.remove()
        }
    }

    i++ // Task ID Number

    }

//CREATE FOLDER

let confirmCreateFolder = document.getElementById("confirmFolder") // Confirm creation of folder

//FOLDER BUILDER

confirmCreateFolder.onclick = function folderBuilder(){
    let folderName = document.getElementById("folderName").value // Assigns name of folder
    if(folderName == ""){
        closeFolderForm()
    } else {
        createFolder(folderName)
    }
}

//Creates Folder
function createFolder(name){

    //Creates Folder Button
    let folder = document.createElement("button")
    folder.innerText = name
    folder.id = "folderID#" + j
    folder.className = "folder"
    document.getElementById("folders").appendChild(folder)
    closeFolderForm()

    //Creates Folder

    let folderPopUp = document.createElement("div")
    folderPopUp.innerText = name
    folderPopUp.id = name
    folderPopUp.className = "folderPopUp"
    folderPopUp.style.visibility = "hidden"
    document.getElementById("folderContainer").appendChild(folderPopUp)

    //Folder Selection
    let folderSelectionButton = document.createElement("option")
    folderSelectionButton.value = name
    folderSelectionButton.innerText = name
    document.getElementById("selectFolder").appendChild(folderSelectionButton)

    folder.onclick = function () {
        if(folderPopUp.style.visibility == "hidden"){
            folderPopUp.style.visibility = "visible"
            console.log("Open")
        } else if(folderPopUp.style.visibility == "visible"){
            folderPopUp.style.visibility = "hidden"
            console.log("Close")
        }
    }
}

function openFolderForm(){
    let createFolderPanel = document.getElementById("createFolderPanel")
    createFolderPanel.style.visibility = "visible"
}

function closeFolderForm(){
    createFolderPanel.style.visibility = "hidden"
}

let deleteTasks = document.getElementById("delete")

deleteTasks.onclick = function (){
    const buttons = document.getElementsByClassName("deleteButton")

    const isHidden = buttons[0]?.style.visibility == "hidden"

    for(let i = 0; i < buttons.length; i++){
        buttons[i].style.visibility = isHidden ? "visible" : "hidden"
    }
}