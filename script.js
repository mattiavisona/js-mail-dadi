


/*

Fare una lista delle email ammesse

Chiedere all'utente la sua email

- SE l'email corrisponde 
l'utente può iniziare a giocare

ALTRIMENTI non può giocare

*/


let textEmailElement = document.getElementById("textEmail")
let buttonEmailElement = document.getElementById("buttonEmail")



// Fare una lista delle email ammesse

let email = ["mattia@gmail.com", "marco@gmail.com", "luca@gmail.com", "matteo@gmail.com"];


buttonEmailElement.addEventListener("click", function () {
    
    for (let index = 0; index < email.length; index++) {

        if (textEmailElement.value == email[index] ) {

            console.log("trovata");
            
        }
        
        
    }
})
 