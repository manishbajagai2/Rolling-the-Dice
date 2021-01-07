
var randnum = Math.floor(Math.random() *6)+1;
var randimgsrc = "images/black"+randnum+".png";
document.querySelectorAll("img")[0].setAttribute("src",randimgsrc);


var randNum = Math.floor(Math.random() *6 )+ 1;
var randImgSrc = "images/red"+randNum+".png";
document.querySelectorAll("img")[1].setAttribute("src",randImgSrc);




if(randnum > randNum) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
}
else if(randNum > randnum){
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else{
  document.querySelector("h1").innerHTML = "Draw! Roll Again .."
}
