var randomNumber1=Math.floor(Math.random() * 6) + 1;

 var randomNumber1image = "./images/dice"+randomNumber1+".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomNumber1image );

var randomNumber2 =Math.floor(Math.random() * 6) + 1;

var randomNumber2image = "./images/dice"+randomNumber2+".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomNumber2image );

var h1 = document.querySelector("h1");
if (randomNumber1 > randomNumber2){
h1.innerText= "Player 1 WIN";
}else if (randomNumber1 < randomNumber2){
    h1.innerText="Player 2 WIN";
}else{
    h1.innerText="Tie";
}