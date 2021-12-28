console.log('Lodash is loaded:', typeof _ !== 'undefined');

/* OPTIONAL: Define a function named 'playCards' which has two parameters: 'players'
and 'numberOfCards' */
// Create an empty array named 'cardDeck' to store a deck of 52 cards
// Iterate through 4 suits and 13 ranks to create a card deck and store each card in 'cardDeck'
// Shuffle the deck and stored the shuffled deck in a varaible called 'shuffledDeck'
/* Move the approprate number of cards, defined by 'numberOfCards' parameter from
the beginning of 'shuffledDeck' to each player's hand */
/* If a card's rank is a face value (value greater than 10), reassign that rank
value as 10 to keep accurate score */
/* If a card's rank is an ace (value less than 2), reassign that rank
value as 11 to keep accurate score */
// Sum up each player's score and assign the value to a score porperty of each player object
// Check to see whose score is the highest, and log the winner

function playCards(players, numberOfCards) {

  var cardDeck = [];

  /* Create a loop to easily make a card deck with 4 suits and 13 cards each
  (including ace, jack, king, and queen): */
  for (var suit = 1; suit < 5; suit++) {
    for (var rank = 1; rank < 14; rank++) {
      cardDeck.push({
        rank: rank,
        suit: suit
      });
    }
  }

  // Shuffle using Lodash shuffle function:
  var shuffledDeck = _.shuffle(cardDeck);

  // Deal cards to players:
  for (var i = 1; i <= numberOfCards; i++) {
    for (var player of players) {
      player.hand.push(shuffledDeck.shift());
    }
  }

  /* Iterate through players hands. If card rank is greater than 10, assign value
  of 10, if rank is lower than 2 assign value of 11: */
  for (player of players) {
    for (var card of player.hand) {
      if (card.rank > 10) {
        card.rank = 10;
      }
      if (card.rank < 2) {
        card.rank = 11;
      }
    }

    // Add each score to each player object:
    player.score = _.sumBy(player.hand, 'rank');
    console.log(`${player.name} scored ${player.score} this round.`);

    // See whose score is the highest:
    var winner = _.maxBy(players, 'score');
  }
  console.log(winner.name, 'won the round!');
}

// Test function with a collection of players:
var players = [{
  name: 'Samwise',
  hand: []
},
{
  name: 'Frodo',
  hand: []
},
{
  name: 'Pippin',
  hand: []
},
{
  name: 'Merry',
  hand: []
}
];

playCards(players, 2);
