/* const battleship = () => {
  // initating our objects and creating players
  let player1 = {
    name: prompt("Player1, what's you name?"),
    shipCount: 4,
    // 2-dimensional array with 4 rows and 4 columns, filled with zeros
    gameBoard: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]
  };
  let player2 = {
    name: prompt("Player2, What's you name?"),
    shipCount: 4,
    gameBoard: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]
  };

  // Step 2: Randomly Add Ships to each Board

  let counter1 = 0;
  let counter2 = 0;

  // A :Create a loop that runs until 4 ships have been added to the board
  for (var i = 0; i < 4 ; i++) {
    //B : Inside the loop, generate a random `x` and a random `y` coordinate (must be between 0 and 3)
    if (player1.shipCounts>0) {
        var xPosP1 = Math.floor(Math.random() * 4);
        var yPosP1 = Math.floor(Math.random() * 4);
        while (player1.gameBoard[xPosP1][yPosP1] === 1 ) {
           xPosP1 = Math.floor(Math.random() * 4);
           yPosP1 = Math.floor(Math.random() * 4);
        }
        player1.gameBoard[xPosP1][yPosP1] = 1
        shipCount -=1;
    }
    if (player2.shipCounts>0) {
        var xPosP2 = Math.floor(Math.random() * 4);
        var yPosP2 = Math.floor(Math.random() * 4);
        while (player2.gameBoard[xPosP2][yPosP2] === 1 ) {
           xPosP2 = Math.floor(Math.random() * 4);
           yPosP2 = Math.floor(Math.random() * 4);
        }
        player2.gameBoard[xPosP2][yPosP2] = 1
        shipCount -=1;
    }



    //Check if the board space (array element) at those coordinates has a ship or not:
    //  - If not, "add a ship" (change the value from `0` to `1`) and increment the total added ships counter
    let shipRand1 = [xPosP1, yPosP1];
    let shipRand2 = [xPosP2, yPosP2];

    if (player1.gameBoard[xPosP1][yPosP1] === 0 && player2.gameBoard[xPosP2][yPosP2] === 0) {
      player1.gameBoard[xPosP1][yPosP1] = 1;
      player2.gameBoard[xPosP2][yPosP2] = 1
      counter1++;
      counter2++;
    }
  }

  // Step 3: Start the Game Play. looping through
  let currentPlayer = player1.name;
  while (player1.ships !== 0 || player2.ships !== 0) {
    if (currentPlayer = player1.name) {
      let coordinateX1 = parseInt(prompt("choose your `x` coordinate to strike. between 0-3".));
      let coordinateY1 = parseInt(prompt("choose your `y` coordinate to strike. between 0-3".));
    }
  }
  // Step 3b: Determine if the Player Sunk their Opponent's Ship
  //Using the `x` and `y` coordinates from the previous step, check the opponent's board to see
  // if the space (array element) at those indices is a ship (is equal to `1`).
  if (player2.gameBoard[coordinateX1][coordinateY1] === 1) {
    // If yes, "sink the ship" (change the value from `1` to `0`),
    //decrement the opponent's ship count, and show an alert that says "Hit!"
    player2.gameBoard[coordinateX1][coordinateY1] = 0
    // decrement the opponent's ship count, and show an alert that says "Hit!"
    player2.shipCount -= 1;
    alert("Hit!");
  } else if (player2.shipCount === 0) {
    alert(`Congratulations ${currentUser} you W0N!!!`)
    break;
  } else {
    alert(`You missed!`);
    currentUser = player2.name;
  }
}

if (currentUser === player2.name) {
  // Using the prompt() function, ask the current player to choose an x and y coordinate to strike.
  // You will need to store the user's input in a variable(s) for the next step.
  let coordinateX2 = parseInt(prompt("choose your `x` coordinate to strike. between 0-3".));
  let coordinateY2 = parseInt(prompt("choose your `y` coordinate to strike. between 0-3".));

  // Step 3b: Determine if the Player Sunk their Opponent's Ship
  // Using the x and y coordinates from the previous step,
  // check the opponent's board to see if the space (array element) at those indices is a ship (is equal to 1).
  if (player1.gameBoard[coordinateX2][coordinateY2] === 1) {
    // If yes, "sink the ship" (change the value from 1 to 0)
    player1.gameBoard[coordinateX2][coordinateY2] = 0;
    // decrement the opponent's ship count,
    player1.shipCount -= 1;
    console.log(player1.gameBoard);
    // and show an alert that says "Hit!"
    alert(`Hit!`)
  } else if (player1.shipCount === 0) {
    alert(`Congratulations ${currentUser} you WIN!!!`)
    break;
  } else {
    alert(`You missed!`);
    currentUser = player1.name;
  }
}
}




return `The winner is ${currentUser}!Congratulations!`
}

*/


let player1 = {
  name: prompt("Player1, what's you name?"),
  shipCount: 4,
  // 2-dimensional array with 4 rows and 4 columns, filled with zeros
  gameBoard: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
};
let player2 = {
  name: prompt("Player2, what's you name?"),
  shipCount: 4,
  gameBoard: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
};

for (var i = 0; i < 4; i++) {
  console.log("count+" + player1.shipCount);
  if (player1.shipCount > 0) {
    var xPosP1 = Math.floor(Math.random() * 4);
    var yPosP1 = Math.floor(Math.random() * 4);
    while (player1.gameBoard[xPosP1][yPosP1] === 1) {
      xPosP1 = Math.floor(Math.random() * 4);
      yPosP1 = Math.floor(Math.random() * 4);
    }

    // creating gameBoard
    player1.gameBoard[xPosP1][yPosP1] = 1;
    //delete the shipcount, does not need it there
  }
  if (player2.shipCount > 0) {
    var xPosP2 = Math.floor(Math.random() * 4);
    var yPosP2 = Math.floor(Math.random() * 4);
    // if that space has ship we do a while loop to assign a random number until we get an empty spot
    while (player2.gameBoard[xPosP2][yPosP2] === 1) {
      xPosP2 = Math.floor(Math.random() * 4);
      yPosP2 = Math.floor(Math.random() * 4);
    }
    // player 2 has its ship on this position
    player2.gameBoard[xPosP2][yPosP2] = 1;
  }
}


// this function asks for coordinates for player1.

function actionPlayer1() {
  // we ask for a guess.
  let x = prompt("player1 x:");
  let y = prompt("player1 y:");
  let xNum = parseInt(x);
  let yNum = parseInt(y);

  //

  if (player2.gameBoard[xNum][yNum] === 1) {

    // in here the players2's ship got hit
    player2.gameBoard[xNum][yNum] = 0;
    player2.shipCount -= 1;
    console.log("player2 " + player2.shipCount);

    alert("HIT! "
      player2.name " has " + player2.shipCount + " ships left.")
  } else {
    alert("Miss!")

    console.log("Miss!");
  }
}

function actionPlayer2() {
  let x = prompt("player2 x:");
  let y = prompt("player2 y:");
  let xNum = parseInt(x);
  let yNum = parseInt(y);
  if (player1.gameBoard[xNum][yNum] === 1) {
    player1.gameBoard[xNum][yNum] = 0;
    player1.shipCount -= 1;
    console.log("player1 " + player1.shipCount);
    alert("HIT! "
      player1.name " has " + player1.shipCount + " ships left.")

  } else {
    alert("Miss!")
    console.log("Miss!");
  }
}







const battleship = () => {
  var player = 0;
  //if one of the players has no ship the game ends
  while (player1.shipCount > 0 && player2.shipCount > 0) {
    // when the number is even
    if (player % 2 == 0) {
      // we want to player1 move.
      actionPlayer1();
      player++;
    } else {
      actionPlayer2();
      player++;
    }
  }
  if (player1.shipCount === 0) {
    return "The winner is " + player2.name + "!";
  } else {
    return "The winner is " + player1.name + "!";
  }

}




const gameResult = battleship()

const htmlTarget = document.getElementById('result')
htmlTarget.innerHTML = gameResult