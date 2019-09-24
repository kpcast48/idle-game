var score = 0; // Create a variable to store the score in

var title = new Title('Welcome to the Game'); // Create a title element
var woodbutton = new Button('Wood', btnPress);   
var wood = 0;
var woodcount 

var carrotsbutton = new Button('carrots',btnPress);
var carrots = 0;
var carrotscount 

var Strawberriesbutton = new Button('strawberries', btnPress);
var strawberry = 0;
var strawberriescount 

var wheatbutton = new Button('wheat',btnPress);
var wheat= 0;
var wheatcount 
var scr = new Text(score); // Create a text element

setInterval(btnPress, 1000);   // Set up a loop

function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score

  var text1 = new Text('I will go in column 1');
  var rowSection = new Section('row'); // Create the row to store the columns in
var column1 = new Section('col');    // Create the first column
column1.add(text1);

var text2 = new Text('I will go in column 2');
var column2 = new Section('col');    // Create the first column
column2.add(text2);
  
 


  
}






