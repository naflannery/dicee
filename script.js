function roll() {
  var player1 = Math.floor(Math.random() * 6) + 1;
  console.log(player1);

  var player2 = Math.floor(Math.random() * 6) + 1;
  console.log(player2);

  switch (player1) {
    case 1:
      document.getElementById("dice1").src = "images/dice1.png";
      break;
    case 2:
      document.getElementById("dice1").src = "images/dice2.png";
      break;
    case 3:
      document.getElementById("dice1").src = "images/dice3.png";
      break;
    case 4:
      document.getElementById("dice1").src = "images/dice4.png";
      break;
    case 5:
      document.getElementById("dice1").src = "images/dice5.png";
      break;
    case 6:
      document.getElementById("dice1").src = "images/dice6.png";
      break;
  }

  switch (player2) {
    case 1:
      document.getElementById("dice2").src = "images/dice1.png";
      break;
    case 2:
      document.getElementById("dice2").src = "images/dice2.png";
      break;
    case 3:
      document.getElementById("dice2").src = "images/dice3.png";
      break;
    case 4:
      document.getElementById("dice2").src = "images/dice4.png";
      break;
    case 5:
      document.getElementById("dice2").src = "images/dice5.png";
      break;
    case 6:
      document.getElementById("dice2").src = "images/dice6.png";
      break;
  }

  if (player1 > player2) {
    document.getElementById("header").innerHTML = "Player 1 wins!!!"
  } else if (player2 > player1) {
    document.getElementById("header").innerHTML = "Player 2 wins!!!"
  } else {
    document.getElementById("header").innerHTML = "Its a Draw!"
  }
}
