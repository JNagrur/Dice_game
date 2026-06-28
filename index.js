var randomNumber1=Math.floor(Math.random()*6) + 1;
var randomNumber2=Math.floor(Math.random()*6) + 1;

var randomeImageDice1=`./images/dice${randomNumber1}.png`
var randomeImageDice2=`./images/dice${randomNumber2}.png`

document.querySelector('.dice .img1').setAttribute('src', randomeImageDice1)
document.querySelector('.dice .img2').setAttribute('src', randomeImageDice2)

document.querySelector('h1').innerHTML=`${randomNumber1 === randomNumber2 ? 'Draw!' : randomNumber1 > randomNumber2 ? 'Player 1 Wins!!' : 'Player 2 Wins!!'}`