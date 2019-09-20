var cards = [
{
rank: "queen",
suit: "heaarts",
cardImage:"images/queen-of-hearts.png",
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png",
},
{
rank:"king",
suit: "heaarts",
cardImage:"images/king-of-hearts.png",
},
{
rank: "king",
suit: "diamaonds",
cardImage:"images/king-of-diamonds.png",
},
];
const cardsInPlay = [];
function createBoard (){
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute( 'data-id', i);
    cardElement.setAttribute('src', "images/back.png");
    cardElement.addEventListener('click', flipCard);
    document.getElementById("game-board").appendChild(cardElement);
  }

}


function checkForMatch(){
if (cardsInPlay.length === 2) {

if ( cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
}

else{
  alert("sorry try again");
}
}
}
function flipCard(cardId){
  var cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImage);
  checkForMatch();
}
createBoard();
