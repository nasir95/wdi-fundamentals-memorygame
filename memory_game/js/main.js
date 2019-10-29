var cards = [
{
rank: "queen",
suit: "hearts",
cardImage:"images/queen-of-hearts.png",
},
{
rank: "queen",
suit: "diamonds",
cardImage:"images/queen-of-diamonds.png",
},
{
rank: "king",
suit: "hearts",
cardImage:"images/king-of-hearts.png",
},
{
rank: "king",
suit: "diamonds",
cardImage:"images/king-of-diamonds.png",
},
];
const cardsInPlay = [];

function checkforMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}

	function flipCard(){
	this.getAttribute(i);
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	this.getAttribute('src', cards[cardId].cardImage);
if(cardsInPlay.length === 2){
	if (cardsInPlay === cardsInPlay) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
	 checkforMatch();
	}


	function createBoard(){
		for(var i = 0; i < cards.length; i++){
			var cardElement = document.createElement('img');
			cardElement = document.createElement('img');
			cardElement = document.createElement('img');
			cardElement = document.createElement('img');
			cardElement.setAttribute('src', "images/back.png");
			cardElement.setAttribute('data-id', i);
			cardElement.addEventListener('click', flipcard);
		}
		createBoard();
	}
}

