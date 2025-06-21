//Popup Screen
const createButton = document.getElementById("create")
const createPopUp = document.getElementById("createPopUp")
const confirmCreate = document.getElementById("confirmCreate")
const cancelCreate = document.getElementById("cancelCreate")

createButton.onclick = function createOptions(){
    createPopUp.style.visibility = "visible"
}

cancelCreate.onclick = function cancel(){
    createPopUp.style.visibility = "hidden"
}

//Folder Form

let createFolderButton = document.getElementById("createFolder") // Open create folder panel
let cancelCreateFolder = document.getElementById("cancelFolder") // Cancels creation of folder

createFolderButton.onclick = function (){
    openFolderForm()
}

cancelCreateFolder.onclick = function (){
    closeFolderForm()
}

