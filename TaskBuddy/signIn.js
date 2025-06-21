let userEmail = document.getElementById("email")
let userPassword = document.getElementById("pword")
let signInButton = document.getElementById("submit")

let accounts = [

]

let loadAccount = [
    //push the account here
]



for(let i = 0; i < localStorage.length; i++){
    let key = localStorage.key(i)
    let value = localStorage.getItem(key)

    try {
        let parsedValue = JSON.parse(value);
        accounts.unshift(parsedValue);
        keysToRemove.push(key); // collect keys to delete later
    } catch (e) {
        console.warn(`Skipping invalid JSON at key: ${key}`);
    }
}


signInButton.onclick = function login(event){
    event.preventDefault()
        for(let i = 0; i < accounts.length; i++){
            if(userEmail.value == accounts[i].email && userPassword.value == accounts[i].password){
                console.log(accounts[i])
                loadAccount.push(accounts[i])
                console.log(loadAccount)

                localStorage.setItem("loggedInUser", JSON.stringify(loadAccount))
                
                location.replace("profileDashboard.html")
                
                
                return
            } else if(userEmail.value == accounts[i].email && userPassword.value != accounts[i].password){
                alert("Incorrect Password!")
            } else if(userEmail.value != accounts[i].email || userPassword.value != accounts[i].password){
                alert("Account Doesn't Exist!")
            }
        }
    }