//PROFILE
const user = localStorage.getItem("loggedInUser")
const userName = JSON.parse(user).username
const profile = document.getElementById("userName")
profile.innerText = userName

console.log()

console.log(JSON.parse(user).username)

let account = {
    email: JSON.parse(localStorage.getItem("loggedInUser")).email,
    username: JSON.parse(localStorage.getItem("loggedInUser")).username,
    password: JSON.parse(localStorage.getItem("loggedInUser")).password,
    tasks: tasks
}

//LOGOUT
const logOut = document.getElementById("logOut")

logOut.onclick = function logOutButton(){
    location.replace("signInPage.html")
}