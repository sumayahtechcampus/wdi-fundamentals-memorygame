const cards = ["queen","queen","king","king"];
const cardsInPlay = [];
var cardsOne = cards[0];
cardsInPlay.push (cardsOne);
console.log("User flipped " + cardsOne);
var cardsTwo = cards[2];
cardsInPlay.push (cardsTwo);
console.log("User flipped " + cardsTwo);

if (cardsInPlay.length === 2){

if ( cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
}

else{
  alert("sorry try again");
}
}
