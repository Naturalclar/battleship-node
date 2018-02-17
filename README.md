# HTML Battle Ship

A Simple In-Browser Battleship Game.

This application is made with HTML, CSS, JS, without use of other frameworks or external libraries.

NodeJS is used to serve the application, however, most of the functions are done on the client's side.

You can see the demo app running [here](https://nc-simple-battleship.now.sh).

## Getting Started

### Prerequisite

You will need to have [Node.js](https://nodejs.org/) installed on your computer.

### Clone the repository

`git clone https://github.com/Naturalclar/battleship-node.git`

### Running the App

You can run the application by entering the following command.

`npm start`

The application will be running at `localhost:3000`.

## Flow of the App

This game is a simple game of battleship, designed for 2 players.

Each players will set up 5 different battleships on their grid.

Players will then take turns hitting each other's grid to try to sink their battleships.

When one person sinks all of opponent's battleships, that player will be victorious.

This game has 4 main states:

- Initial Screen
  - Where you will enter the name of participants
- SetUp Screen
  - Where each players will set up their battleships
  - As of current state, this game is meant to be played on a single window. You will need to kindly ask the other player to not look at your screen while setting up the board.
- Battle Screen
  - Where each players will take turns trying to hit the opponent's battleships.
- Win Screen
  - Where the winner is displayed, and you can chose to restart the game.

Enjoy!