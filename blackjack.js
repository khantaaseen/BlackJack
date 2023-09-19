
function getBetandName(){
    let bettingAmount = document.getElementById("betting-amount").value;
    let playerName = document.getElementById("player-name").value;
    let playerEl = document.getElementById("player-el")
    playerEl.textContent = playerName + ": $" + bettingAmount
}

let message = ""
let cards = []
let Dcards = []
let sum = 0
let Dsum = 0
let hasBlackJack = false
let isAlive = false
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
//or use let sumEl = document.querySelector("#sum-el")
let bettingEl = document.getElementById("betting-el")
let DcardsEl = document.getElementById("Dcards-el")
let DsumEl = document.getElementById("Dsum-el")




function startGame(){

    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    let thirdCard = getRandomCard()
    let fourthCard = getRandomCard()
    cards = [firstCard, secondCard]
    Dcards = [thirdCard, fourthCard]
    sum = firstCard + secondCard
    Dsum = thirdCard + fourthCard
    renderGame()
}

function renderGame(){
    isAlive = true
    hasBlackJack = false
    cardsEl.textContent = "User Cards: "
    // loop to iterate all cards
    DcardsEl.textContent = "Dealer's Cards: "

    //user
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    for(let i = 0; i < Dcards.length; i++){
        DcardsEl.textContent += Dcards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    DsumEl.textContent = "Sum: " + Dsum

    if(sum <= 20 && Dsum <= 20) {
        message = "Draw?"
    } else if(sum === 21 || Dsum === 21){
        message = "Blackjack!"
        hasBlackJack = true
    } else {
        message = "Bust!"
        isAlive = false
    }

    messageEl.textContent = message

    //dealer


}

function standPosition(){
    if(isAlive === true && hasBlackJack === false){
        console.log("position stand")
        let Dcard = getRandomCard()
        Dsum += Dcard
        Dcards.push(Dcard)
        console.log(Dcard)
        if(Dsum > sum){
            messageEl.textContent = "Dealer Blackjack!"
            isAlive === false && hasBlackJack === true
        }else{
            messageEl.textContent = "User Blackjack!"
        }
    }renderGame()
}


function newcard(){
    if(isAlive === true && hasBlackJack === false){
    console.log("drawing a new card")
    let card = getRandomCard()
    let Dcard = getRandomCard()
    sum += card
    Dsum += Dcard
    cards.push(card)
    Dcards.push(Dcard)
    renderGame()
    }
}

function getRandomCard(){
    card = Math.floor(Math.random() * 13) + 1;
    if(card == 1){
        return 11
    }else if(card > 10 ){
        return 10
    }else {
        return card
    }

}