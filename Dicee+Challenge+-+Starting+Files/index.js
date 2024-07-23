var randomNumber1=Math.floor(Math.random()*6)+1;
var string="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",string);
var randomNumber2=Math.floor(Math.random()*6)+1;
var string="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",string);
if(randomNumber1>randomNumber2)
    document.querySelector("h1").textContent="Player 1 wins";
else
document.querySelector("h1").textContent="Player 2 wins";
