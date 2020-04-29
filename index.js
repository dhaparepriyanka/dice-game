var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceSource1 = "images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",randomDiceSource1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceSource2 = "images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",randomDiceSource2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").textContent = "🚩Player 1 Wins!";
}else if (randomNumber2>randomNumber1) {
  document.querySelector("h1").textContent = "Player 2 Wins!🚩";
}else if (randomNumber1==randomNumber2) {
  document.querySelector("h1").textContent = "Draw!";
}

document.querySelector(".myButton").addEventListener("click", reset);
function reset(){
  document.querySelector("h1").textContent = "Refresh Me!";
  document.querySelector(".img1").setAttribute("src", "images/dice6.png");
  document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}



// if (randomNumber1 ==1){
//   document.querySelector(".img1").setAttribute("src", "images/dice1.png");
// }else if (randomNumber1 == 2) {
//   document.querySelector(".img1").setAttribute("src", "images/dice2.png");
// }else if (randomNumber1 == 3) {
//   document.querySelector(".img1").setAttribute("src", "images/dice3.png");
// }else if (randomNumber1 == 4) {
//   document.querySelector(".img1").setAttribute("src", "images/dice4.png");
// }else if (randomNumber1 == 5) {
//   document.querySelector(".img1").setAttribute("src", "images/dice5.png");
// }
