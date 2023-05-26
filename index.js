//player 1 
let randomNum1=Math.floor(Math.random()*6)+1;
let diceImage="assets/images/dice"+randomNum1+".png";
let imgLoc=document.querySelectorAll("img")[0];
imgLoc.setAttribute("src",diceImage);

//player 2
let randomNum2=Math.floor(Math.random()*6)+1;
let diceImage2="assets/images/dice"+randomNum2+".png";
let imgLoc2=document.querySelectorAll("img")[1];
imgLoc2.setAttribute("src",diceImage2);

if(randomNum2>randomNum1){
    document.querySelector("h1").innerHTML="Player 2 win!";
} else if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML="Player 1 win!";
} else{
    document.querySelector("h1").innerHTML="It's a draw..!";}
