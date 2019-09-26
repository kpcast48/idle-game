var score = 0; // Create a variable to store the score in

var title = new Title('Elysia Village'); // Create a title element
var moneybutton = new Button('Money: ' + score);   
var Sellbutton = new Button('Sell');   
var carrotsbutton = new Button('carrots',btnPress);
var carrots = 0;
var carrotscount 

var strawberriesbutton = new Button('strawberries', btnPress);
var strawberry = 0;
var strawberriescount 

var wheatbutton = new Button('wheat',btnPress);
var wheat= 0;
var wheatcount 

var woodbutton = new Button('wood',btnPress);
var wood= 0;
var woodcount

var woolbutton = new Button('wool',btnPress);
var wool= 0;
var woolcount
var scr = new Text(score); // Create a text element

setInterval(btnPress, 1000);// Set up a loop

function btnPress() {
  score++;         // Increase the score
  moneybutton.edit("Money: " + score); // Update the page with the new score
//materials section

let score = 0; //Declare the data structure before using it!

let Sellbutton = new Button('Click me to sell!', scoreIncrease); // Run the "score" function when you click the button

// Don't forget to define the function!
function scoreIncrease() {
  score++;
}

  let mySection = new Section();
   var carrotsbutton = new Button('carrots');
  var strawberriesbutton = new Button('strawberries');
  var wheatbutton = new Button('wheat');
  var wheatbutton = new Button('wheat')
  var woodbutton = new Button('wood');

  var buttonSection = new Section();





}






