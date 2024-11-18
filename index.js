// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards


let cards = []

let sum = 0

let hasBlackJack = false
let isAlive= false
let message= ""

let messageEl = document.getElementById("message-el")
let sumEl= document.getElementById("sum-el")
let cardsEl= document.getElementById("cards-el")

function getRandomCard () {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if ( randomNumber > 10) {
        return 10
    } else if (randomNumber === 1 ) {
        return 11
    } else {
        return randomNumber
    }

}

function startGame() {
    let firstCard = getRandomCard ()
    let secondCard = getRandomCard ()
    cards= [firstCard, secondCard]
    sum = firstCrad + secondCard

    renderGame()
}
function renderGame() {
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {

       cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {

        message = "Do you want to draw a new card?"
    
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    
    } else {
        message= "You're out of the game!" 
        isAlive=false
    }

 messageEl.textContent = message
}

function newCard() {
console.log("Drawing a new card from the deck!")

let cardDrawn= getRandomCard ()

sum += cardDrawn

cards.push(cardDrawn)
console.log(cards)

renderGame ()

}


