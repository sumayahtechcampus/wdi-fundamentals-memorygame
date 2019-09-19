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

function checkForMatch(){
if (cardsInPlay.length === 2) {

if ( cardsInPlay[0] === cardsInPlay[1]) {
  akert("You found a match!");
}

else{
  alert("sorry try again");
}
}
}
function flipCard(cardId){
  console.log("user flipped" + " " + cards[cardId].rank)
  console.log(cards[cardId].cardImage)
  console.log(cards[cardId].suit)
  cardsInPlay.push(cards[cardId].rank);
  checkForMatch();
}
flipCard(0);
flipCard(2);
