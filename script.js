


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

const email = ["mattia@gmail.com", "marco@gmail.com", "luca@gmail.com", "matteo@gmail.com"];


buttonEmailElement.addEventListener("click", function () {
    
    let mailFound = false;
    
    for (let index = 0; index < email.length; index++) {

        if (textEmailElement.value == email[index] ) {

            mailFound = true;
            
        }
        
    }

    // Se l'email è corretta do il benvenuto altrimenti no

    if (mailFound) {
        console.log("Welcome");
    
    } else {
        console.log("Error");
    }

})
