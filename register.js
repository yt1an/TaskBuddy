let registerButton = document.getElementById("submit")

let account = {
    email: "",
    username: "",
    password: "",
    tasks: [{
        loadedName: "",
        loadedDescription: "",
        loadedPriority: "",
        loadedDeadline: "",
        loadedFolder: ""
    }]
}

registerButton.onclick = function register(){
    
    event.preventDefault()

    let email = document.getElementById("email")
    let username = document.getElementById("username")
    let password = document.getElementById("password")
    let confirmPassword = document.getElementById("confirmPassword")

    if(password.value.length < 8){
        if(document.getElementById("tooShort")){
            tooShort.remove()
        }
        tooShort = document.createElement("p")
        tooShort.id = "tooShort"
        tooShort.innerText = "Password is too short"
        tooShort.style.color = "red"
        tooShort.style.fontSize = "10px"
        document.getElementById("passForm").appendChild(tooShort)
    }

    if(confirmPassword.value != password.value){
        if(document.getElementById("dontMatch")){
            dontMatch.remove()
        }
        dontMatch = document.createElement("p")
        dontMatch.id = "dontMatch"
        dontMatch.innerText = "Passwords do not match."
        dontMatch.style.color = "red"
        dontMatch.style.fontSize = "10px"
        document.getElementById("passForm").appendChild(dontMatch)
    }
        account.email = email.value
        account.username = username.value
        account.password = password.value

        localStorage.setItem("loggedInUser", JSON.stringify(account))

        location.replace("profileDashboard.html")
}