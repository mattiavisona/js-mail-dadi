


/*

Fare una lista delle email ammesse

Chiedere all'utente la sua email

- SE l'email corrisponde 
l'utente può iniziare a giocare

ALTRIMENTI non può giocare

*/


let textEmailElement = document.getElementById("textEmail");

let buttonEmailElement = document.getElementById("buttonEmail");

let welcomeOrNotElement = document.getElementById("welcomeornot");



// Fare una lista delle email ammesse

const email = ["mattia@gmail.com", "marco@gmail.com", "luca@gmail.com", "matteo@gmail.com"];


buttonEmailElement.addEventListener("click", function () {
    
    let mailFound = false;
    
    for (let index = 0; index < email.length; index++) {

        if (textEmailElement.value == email[index] ) {

            mailFound = true;
            
        }
        
    }

    // Se l'email è corretta do il benvenuto altrimenti do errore

    if (mailFound) {
        
        welcomeOrNotElement.innerText = "Welcome";
    
    } else {
        
        welcomeOrNotElement.innerText = "Error";
    }

})

// Inizio gioco dei dadi

/*

---- L'utente inizia il gioco e il computer gli genera un numero a caso da 1 a 6
---- Viene generato un numero random al computer da 1 a 6
? SE il numero dell'utente è maggiore del numero del computer
--> Stampo hai vinto
ALTRIMENTI
--> Hai perso

*/

let diceFaceImg = ["dice-img/dice-face-1.jpeg", "dice-img/dice-face-2.webp", "dice-img/dice-face-3.png", "dice-img/dice-face-4.jpg", "dice-img/dice-face-5.jpg", "dice-img/dice-face-6.png"];

const diceImg1Element = document.getElementById("diceImg1")

const diceImg2Element = document.getElementById("diceImg2");

// L'utente inizia il gioco e il computer gli genera un numero a caso da 1 a 6

let generateUserNumberElement = Math.floor(Math.random() * 6 + 1);

console.log(generateUserNumberElement);

// Viene generato un numero random al computer da 1 a 6

let generateComputerNumberElement = Math.floor(Math.random() * 6 + 1);

console.log(generateComputerNumberElement);
// ? SE il numero dell'utente è maggiore del numero del computer

if (generateUserNumberElement > generateComputerNumberElement) {

    console.log("Hai vinto");

} else {
    if (generateComputerNumberElement > generateUserNumberElement) {

        console.log("hai perso");
    }

} if (generateComputerNumberElement == generateUserNumberElement) {
    console.log("Pareggio");
    
}

diceImg1Element.src = diceFaceImg [generateUserNumberElement - 1];

diceImg2Element.src = diceFaceImg [generateComputerNumberElement - 1]


