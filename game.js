var score = 0; // Create a variable to store the score in

var title = new Title('Elysia Village'); // Create a title element
var moneybutton = new Button('Money');   
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

setInterval(btnPress, 1000);   // Set up a loop

function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score

  let mySection = new Section();
   var carrotsbutton = new Button('carrots');
  var strawberriesbutton = new Button('strawberries');
  var wheatbutton = new Button('wheat');
  var woolbutton = new Button('wool');

  var buttonSection = new Section();
  
  buttonSection.add(carrotsbutton);
  buttonSection.add(strawberriesbutton);
  buttonSection.add(wheatbutton);
  buttonSection.add(woolbutton);

}






