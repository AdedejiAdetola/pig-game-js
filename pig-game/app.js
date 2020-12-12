/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
//STEP 1: First Initialize all items to 0
var active = [0,1];
document.querySelector("#score-"+ active[0]).textContent = 0;
document.querySelector("#score-"+ active[1]).textContent = 0;
document.querySelector("#current-"+ active[0]).textContent = 0;
document.querySelector("#current-"+ active[1]).textContent = 0;
document.querySelector("img").style.display = "none";
var accumulatedScore = 0;
var globalScore = 0;
var globalScore1 = 0;
document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;




document.querySelector(".btn-roll").addEventListener("click", function(){
  // STEP 2: Onclick rollDice, display a random number on player one panel (check line 27)
  /*Random dice number*/
  var randn = Math.floor(Math.random() * 6) + 1;
  //document.querySelector("#current-"+ active[0]).textContent = randn;

  //STEP 3: Display random dice image
  /*display image*/
  document.querySelector("img").style.display = "block";
  document.querySelector("img").src = "dice-"+randn+".png";

  //STEP 4: Accumulate random numbers generated

  /*accumulate the result if its not == 1*/
  if (randn !== 1) {
    accumulatedScore += randn;
    document.querySelector("#current-"+ active[0]).textContent = accumulatedScore;
  } else {
  //STEP 5: If random generated number is 1, accumulated score becomes 0 and display:none,
  // player 2 panel has an  initial value of 0;
  //toggle occurs to display the active panel

    //if score is 1, accumulatedScore is 0 and active[0] = 0
    accumulatedScore = 0;
    document.querySelector("#current-"+ active[0]).textContent = 0;
    document.querySelector("#current-"+ active[1]).textContent = 0;
    document.querySelector("img").style.display = "none";
    //toggle the bg on active[0] to active[1]
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    //Next PLAYER

  //STEP 6: Onclick rollDice Display the accumulating score on panel 2
    active[0] === 0 ? active[0] = 1: active[0] = 0;
  }
})

/*STEP 7: Onclick hold;
- accumulate to global score
- toggle to next player
- set current scores to 0
- display:none
- if global score of any panel is 100 or more, declare Winner */

document.querySelector(".btn-hold").addEventListener('click', function(){

  if (active[0] === 0) {
    globalScore += accumulatedScore;
    document.querySelector("#score-0").textContent = globalScore;
  } else {
    globalScore1 += accumulatedScore;
    document.querySelector("#score-1").textContent = globalScore1;
  }
  active[0] === 0 ? active[0] = 1: active[0] = 0;

  accumulatedScore = 0;
  document.querySelector("img").style.display = "none";
  document.querySelector("#current-"+ active[0]).textContent = 0;
  document.querySelector("#current-"+ active[1]).textContent = 0;
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  if (globalScore > 100){
    document.querySelector("img").style.display = "none";
    document.querySelector("#name-0").textContent = "Winner!";
    document.querySelector(".player-0-panel").classList.add("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
  }else if (globalScore1 > 100){
    document.querySelector("img").style.display = "none";
    document.querySelector("#name-1").textContent = "Winner!";
    document.querySelector(".player-1-panel").classList.add("winner");
    document.querySelector(".player-1-panel").classList.remove("active");
  }
})

document.querySelector(".btn-new").addEventListener("click",function(){
  active = [0,1];
  accumulatedScore = 0;
  globalScore = 0;
  globalScore1 = 0;
  document.querySelector("#score-"+ active[0]).textContent = 0;
  document.querySelector("#score-"+ active[1]).textContent = 0;
  document.querySelector("#current-"+ active[0]).textContent = 0;
  document.querySelector("#current-"+ active[1]).textContent = 0;
  document.querySelector("img").style.display = "none";
  document.querySelector("#score-0").textContent = 0;
  document.querySelector("#score-1").textContent = 0;
  document.querySelector('.player-0-panel').classList.add('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector("#name-0").textContent = "Player 1";
  document.querySelector("#name-1").textContent = "Player 2";
})
