alert("Hello, world!");

var year = 2011;

if ( year < 2011 ) {
    alert("It's not yet 2011!")
}

if ( year == 2011 ) {
    // does the year equal 2011?
    alert("It's 2011!")
}

score += 10; // add 10 to score

var a = 5;
var b = "5";

if (a === b) {
  alert("Equal!"); // equal value and identical -- both a string or numeric
} else {
  alert("NOT equal!")
}

if (a === b && c === d) {
  // logical and
}

if (a === b || c === d) {
  // logical or
}

a++; add 1 to a

var playerOne = 500;
var playerTwo = 600;

//sometime later
var highScore;

if ( playerOne > playerTwo ) {
    highScore = playerOne;
}
else {
    highScore = playerTwo;
}

// or rewritten as 
// condition ? true : false ;

var highScore = (playerOne > playerTwo) ? playerOne : playerTwo ;

var a = 100;

while ( a < 10 ) {
    console.log(a);
    a++;   
}

do {
    console.log(a);
    a++;  
} while ( a < 10 );

for ( var i = 1 ; i < 10 ; i++ ) {
    //do stuff
    if (i ==101) {
        break; // get out of the loop
    }
}

for ( var i = 1 ; i < 5000 ; i++ ) {
    //do stuff
    if (i % 5 == 0) {
        continue; // done with this time around, go back to for statement
    }
}

// () means no data passed through it
function eliotOrtlieb() {
    console.log("Eliot!");
    // more code
}

// later
eliotOrtlieb();


function eliotOrtlieb2(x,y) {
    var myVar - x * y;
    console.log(myVar);
}

eliotOrtlieb2(5,2);