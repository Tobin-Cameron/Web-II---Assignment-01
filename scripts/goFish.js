function Card(_suit, _rank, _faceUp) {
  this.suit = _suit;
  // this.colour = getColourFromSuit(_suit); // TODO
  this.rank = _rank;
  this.faceUp = _faceUp;
  this.turnOver = function() {
    // if it's face down, turn face up
    // if it's face up, turn face down
    !this.faceUp ? (this.faceUp = true) : (this.faceUp = false);
  }; //turnOver()
} //Card

function Deck() {
  // new empty array size 52
  this.cards = new Array(52);

  // loop over the suits
  for (let suitsIndex = 0; suitsIndex < suitsArray.length; suitsIndex++) {
    // loop over the ranks
    for (let ranksIndex = 0; ranksIndex < rankArray.length; ranksIndex++) {
      // for each card,
      // "make" a card of each suit going through ace 2, 3, ..., Queen, king.
      const currentSuit = suitsArray[suitsIndex];
      const thisCard = new Card(currentSuit, rankArray[ranksIndex], false);
      // add to the this.cards in the deck
      this.cards.push(thisCard);
    }
  }
  console.table(this.cards);
}

const suitsArray = ["Hearts", "Diamonds", "Clubs", "Spades"];
const rankArray = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];

const testDeck = new Deck();
const testCard = new Card("Hearts", "Ace", false);
