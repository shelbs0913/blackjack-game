// const dealerHand = document.getElementById("dealer-hand");
// const playerHand = document.getElementById("player-hand");
// const ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];

const suits = ["hearts", "spades", "clubs", "diamonds"];
const ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let deck = [];
let playerHand = [];
let playerPoints = 0;
let dealerHand = [];
let dealerPoints = 0;

let dealButton = document.getElementById('deal-button');
dealButton.addEventListener('click', dealCards)

let standButton = document.getElementById('stand-button');
standButton.addEventListener('click', stand)

let hitButton = document.getElementById('hit-button');
hitButton.addEventListener('click', hitMe)

let playerHandContainer = document.getElementById('player-hand');
let dealerHandContainer = document.getElementById('dealer-hand');

function buildDeck(rank, suit) {

  const card = {
    rank: rank,
    suit: suit,
    image: rank > 1 || rank < 11 ? `./images/${rank}_of_${suit}.png` : null,
    pointValue: rank > 10 ? 10 : rank,
  };

  switch (card.rank) {
    case 1:
      card.rank = 'ace'; // card.rank accesses the card object and rank key
      card.image = `./images/ace_of_${suit}.png`;
      break; // exits the code when the condition is met

    case 11:
      card.rank = 'jack';
      card.image = `./images/jack_of_${suit}.png`;
      break; // exits the code when the condition is met

    case 12:
    card.rank = 'queen';
    card.image =`./images/queen_of_${suit}.png`;
    break; // exits the code when the condition is met

    case 13:
    card.rank = 'king';
    card.image = `./images/king_of_${suit}.png`;
    break; // exits the code when the condition is met
  
    default:
      break;
  };

  deck.push(card);
  
};

function buildSuits(suits, ranks){

  for (let suit of suits) { // outter loop 1 time at a time - for a total of 4 times

    for (let rank of ranks) { // inner loop 13 times at a time - for a total of 52 times
      buildDeck(rank, suit);
  
    };
  };
  shuffleArray(deck);
}

// shuffle the cards

function shuffleArray(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  };
};

function dealCards(){
  
  buildSuits(suits, ranks);
//deal 4 cards 1 at a time player to dealer
  for(let i=0; i < 2; i++) {

    let playerTempCard = [], dealerTempCard = [];
    //push cards to player 1 at a time
    playerTempCard = deck.pop();
    if(playerTempCard.rank === 'ace') {
      playerTempCard.pointValue = 11;
      playerHand.push(playerTempCard);
      playerHandContainer.innerHTML += `<img src=${playerHand[i].image} id=${playerHand[i].rank}_of_${playerHand[i].suits}>`
      calculatePoints('player')
    }
    
    dealerTempCard = deck.pop();
    if(dealerTempCard.rank === 'ace') {
      dealerTempCard.pointValue = 11;
      dealerHand.push(playerTempCard);
      dealerHandContainer.innerHTML += `<img src=${dealerrHand[i].image} id=${dealerHand[i].rank}_of_${dealerHand[i].suits}>`
      calculatePoints('dealer')
    }
  };

  showPoints('player', playerPoints);
  showPoints('dealer', dealerPoints);

};

//count points

function calculatePoints(){
  if(playerType === 'player'){
    playerPoints = playerPoints + playerHand[playerHand.length - 1].pointValue;
  }
  else if(playerType === 'dealer'){
    dealerPoints = dealerPoints + dealerHand[dealerHand.length - 1].pointValue;
  }
}

//display points
function showPoints(playerType,points){
  if(playerType === 'player'){
    let playerPointsUpdate = document.getElementById('player-points');
    playerPointsUpdate.innerHTML = `${points} Points`;
  }
  else if(playerType === 'dealer') {
    let dealerPointsUpdate = document.getElementById('dealer-points');
    dealerPointsUpdate.innerHTML = `${points} Points`;
  }


}

//hit me function

  function hitMe(){
    
  }


//stand function
function stand(){

}


