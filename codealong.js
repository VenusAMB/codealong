function printPrimes (){
    for(var i = 0; i < 1000; i++){
        if (i <=3 || i == 2){
        console.log (i);
    } else if (i % 2 != 0 || i % 3 !=0){
     var j = 5
    while (j*j <= i){
        if(i%j === 0 || i%(j+2) === 0){
            return false;
        }
        j += 6;
        console.log(i);
    }
    //the number is less than 3 and is odd and is odd

        }
    }
}
printPrimes();
//Homework Exercise Math

function userInput (number1, number2){
    var result = number1 < number2;
    console.log (result);
}
userInput(5,7);

//*Math notes
var math ={
    PI: 3.14,
    Eulers: 7.71,

round: Function(){

}
}
Math.PI;
Math.round(
    PI * Eulers
);

//* Math note 
var <object names>={
//Properties
<key>:<value> (key value pair)
    //methods</value>
    key:<function compoosition>,
    </function name>

}


//Exercise array
//var food = dryGoods 
//var food1 = dairy
//var food2 = meat 
//var food3 = grain 
//var food4 = greenbeans
//var food5 = squash 
//var food6 = peach
//var food7 = apple 
//var food8 = pie 
//var food9 = beans
//var food10 = yogurt 
//need list of 10 then put in array
var food = ["dryGoods", "dairy", "meat", "grain", "greenbeans", "squash", "peach", "apple", "pie", "beans", "yogurt"];
var foodlist = food[4]



//JS Testing Mocha
let calcArea = {;}
calcArea.findAreaTriangle = base, height);{
    return .5 * base * height;
} 

module.exports = calcArea;

//test file
var assert = require ('index.js');
var assert = require ('assert');
describe('Area Calculations', function (){
    instanceof('the area of a traingle b-10 h-5 should be ')
})

//homework</key>

<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>Homework</title>
  <meta name="description" content="homework">
  <meta name="author" content="me">

 <!-- <link rel="stylesheet" href="css/styles.css?v=1.0"> -->

</head>

<body>
<!--CHANGE THIS  NEXT LINE --> 
  <script src="js/scripts.js"></script>
</body>
</html>
