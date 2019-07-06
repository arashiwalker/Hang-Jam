//array of players 
// var players = ['kobe', 'shaq', 'jordan', 'damian', 'zion', 'kawhi', 'durant', 'curry'];
//choosing words randomly 
var choosenWord = word [randNum];
var rightWord = [];
var wrongWord = [];
var underScore = [];
//Dom Manipulation
var docUnderScore = document.getElementsbyClassName('underscore');
var docRightGuess = document.getElementsbyClassName('rightGuess');
var docWrongGuess = document.getElementsbyClassName('wrongGuess');

//Game Functions 
//

//Creating underscores based on length of words 
var generateUnderScore = () => {
  for(var i=0; i< choosenWord.length; i++){
    underScore.push('_');
  }
  return underScore;
}

//getting users guess 
document.addEventListener('keypress',(event) => {
  var keyword = String.fromCharCode(event.keyCode);
  if(chosenWord.indexOf(keyword) > -1){
    rightWord.push(keyword);
    underScore[chosenWord.indexOf(keyword)] = keyword;
    docUnderScore[0].innerHTML = underScore.join(' ');
    docRightGuess[0].innerHTML = rightWord;
    if(underScore.join(' ') == choosenWord) {
      alert('You Win');
    }
  }
  else {
      wrongWord.push(keyword);
      docWrongGuess[0].innerHTML = wrongWord;
  }
});

docUnderScore[0].innerHTML =generateUnderScore().join(' ');


 