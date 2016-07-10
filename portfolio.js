//Quote of the Day Code:

var day = (new Date().getDay());

// var day = 4
var msg = "";
var author = "";

switch (day){
  case 0:
    msg = "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.";
    author = "Marie Curie"
    break;
  case 1:
    msg = "The highest point of yesterday should be the lowest point of today.";
    author = "B.K.S. Iyengar"
    break
  case 2:    
    msg = "This above all: to thine own self be true.";
    author = "William Shakespeare"
    break;
  case 3:    
    msg = "You are a child of the universe, no less than the trees and the stars; you have a right to be here. And whether or not it is clear to you, no doubt the universe is unfolding as it should.";
    author = "Max Ehrmann"
    break; 
  case 4:    
    msg = "It’s the age-old concept of like attracts like, or the law of attraction. You get back what you put out, so you might as well think positively, focus on visualizing what you want instead of getting distracted by what you don’t want, and send the universe your good intentions so that it can send them right back.";
    author = "Sophia Amoruso"
    break;
  case 5:    
    msg = "My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.";
    author = "Maya Angelou"
    break;
  case 6:    
    msg = "What lies behind us and what lies before us are tiny matters compared to what lies within us.";
    author = "Ralph Waldo Emerson"
    break;
}

var element1 = document.getElementById("test").innerHTML = msg
var element2 = document.getElementById("auth").innerHTML = author


//Copyright Code:

var y = (new Date().getFullYear());
var element3 = document.getElementById("year").innerHTML = y




