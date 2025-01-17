
const CardSuits = {
    1: "Hearts",
    2: "Diamonds",
    3: "Clubs",
    4: "Spades"
}

class Card {
    constructor(number, suit) {
        this.number = number;
        this.suit = suit;
    }

    toString(){
        return this.number + " of " + CardSuits[this.suit];
    }
}


function calculateHandValue(hand){
    let total = 0;
    let hasAce = false;
    for(let i = 0; i < hand.length; i++){
        if (hand[i].number > 10) {
            total += 10;
        } else if (hand[i].number === 1){
            hasAce = true;
        } else {
            total += hand[i].number;
        }
    }

    if (hasAce){
        if (total + 11 <= 21){
            total += 11;
        } else {
            total += 1;
        }
    }
    return total;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function luckyShuffle(isLucky){
    let goodCards = [];
    let remainingCards = [];

    // get the 10 + face cards
    for(let i = 9; i < 13; i++){
        for (let j = 0; j < 4; j++){
            goodCards.push(new Card(i + 1, j + 1));
        }
    }

    // get the aces
    for (let j = 0; j < 4; j++){
        goodCards.push(new Card(1, j + 1));
    }

    // get the 2-9 cards
    for(let i = 2; i < 10; i++){
        for (let j = 0; j < 4; j++){
            remainingCards.push(new Card(i, j + 1));
        }
    }

    shuffleArray(goodCards);
    shuffleArray(remainingCards);

    if (isLucky){
        deck = [...remainingCards, ...goodCards];
    } else {
        deck = [...goodCards, ...remainingCards];
    }
}


function initializeDeck(){
    for(let i = 0; i < 13; i++){
        for (let j = 0; j < 4; j++){
            deck.push(new Card(i + 1, j + 1));
        }
    }

    if (luckStat === 6){
        // neutral luck = true shuffle
        shuffleArray(deck);
    } else if (luckStat > 6) {
        luckyShuffle(true);
    } else {
        luckyShuffle(false);
    }
}


function dealCard(hand){
    hand.push(deck.pop());
}

function startGame(){
    initializeDeck();
    player_hand = [];
    dealer_hand = [];

    dealCard(player_hand);
    dealCard(player_hand);

    dealCard(dealer_hand);
    dealCard(dealer_hand);

    document.getElementById("player").textContent = printHandToString(player_hand);
    document.getElementById("dealer").textContent = dealer_hand[0].toString();
    document.getElementById("playerTotal").textContent = calculateHandValue(player_hand).toString();
    document.getElementById("dealerTotal").textContent = "";
    document.getElementById("winner").textContent = "";
    document.getElementById("hit").disabled = false;
    document.getElementById("stay").disabled = false;
}


function printHandToString(hand){
    let result = "";
    for(let i = 0; i < hand.length; i++){
        result += hand[i].toString() + ", ";
    }
    return result;
}

const hitButton = document.getElementById("hit");
const stayButton = document.getElementById("stay");
const dealButton = document.getElementById("deal");

hitButton.addEventListener("click", function() {
    dealCard(player_hand);
    document.getElementById("player").textContent = printHandToString(player_hand);
    document.getElementById("playerTotal").textContent = calculateHandValue(player_hand).toString();

    if (calculateHandValue(player_hand) > 21){
        document.getElementById("winner").textContent = "Dealer wins";
        document.getElementById("hit").disabled = true;
        document.getElementById("stay").disabled = true;

        playerMoney -= betValue;
        document.getElementById("playerMoney").textContent = playerMoney.toString();
    }

});

stayButton.addEventListener("click", function() {
    // loop through the dealers hand until it hits a 17
    while (calculateHandValue(dealer_hand) < 17){
        dealCard(dealer_hand);
    }

    document.getElementById("dealer").textContent = printHandToString(dealer_hand);
    document.getElementById("dealerTotal").textContent = calculateHandValue(dealer_hand).toString();

    if (calculateHandValue(dealer_hand) > 21){
        document.getElementById("winner").textContent = "Player wins";
        playerMoney += betValue;
    } else {
        if (calculateHandValue(dealer_hand) < calculateHandValue(player_hand)){
            document.getElementById("winner").textContent = "Player wins";
            playerMoney += betValue;
        } else if (calculateHandValue(dealer_hand) > calculateHandValue(player_hand)){
            document.getElementById("winner").textContent = "Dealer wins";
            playerMoney -= betValue;
        } else {
            document.getElementById("winner").textContent = "Tie";
        }
    }
    document.getElementById("playerMoney").textContent = playerMoney.toString();
    document.getElementById("hit").disabled = true;
    document.getElementById("stay").disabled = true;
});

dealButton.addEventListener("click", function() {
    if (playerMoney > 0){
        deck = [];
        startGame();
        document.getElementById("playerMoney").textContent = playerMoney.toString();
    } else {
        dealButton.disabled = true;
    }

});

const betSlider = document.getElementById("betSlider");

betSlider.addEventListener("input", function() {
    betValue = parseInt(betSlider.value);
    document.getElementById("betValue").textContent = betValue.toString();

    dealButton.disabled = (betValue > playerMoney);
});

const luckSlider = document.getElementById("luckSlider");

luckSlider.addEventListener("input", function() {
    luckStat = parseInt(luckSlider.value);
    document.getElementById("luckValue").textContent = luckStat.toString();
});


let luckStat = 6;
let deck = [];
let player_hand;
let dealer_hand;
let betValue = 50;
let playerMoney = 100;
document.getElementById("playerMoney").textContent = playerMoney.toString();
document.getElementById("hit").disabled = true;
document.getElementById("stay").disabled = true;
// startGame();