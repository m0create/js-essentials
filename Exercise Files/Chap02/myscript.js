var multipleValues = [1, 2, 3, 4, 5];

var multipleValues[6] = "Mouse";

var reversedValues = multipleValues.reverse();

alert("" + reversedValues.join + "!");

var x = 200.49999999;
var y = Math.round(x);

console.log(y);

var phrase = "Don't \"mix\" your quotes.";

console.log( phrase );

var words = phrase.split(" ");

console.log( words );

var position = phrase.indexOf("Don't");

console.log( position );

// if returns -1 if the term is not found 
if ( position == -1) {
  console.log("Can't find it. Sorry.");
}


// if returns -1 if the term is not found 
if ( phrase.indexOf("DDDD") == -1) {
  console.log("Not here, dude.");
}


var phrase = "Yet another phrase.";

var segment = phrase.slice(6, 11); // six characters in incl 0
var segment2 = phrase.substring(1, 4);
var segment3 = phrase.substr(7, 12);

console.log(segment);
console.log(segment2);
console.log(segment3);


// comparing dates

var date1 = new Date(2000,0,1);
var date2 = new Date(2000,0,1);

if ( date1 == date2 ) {
    // won't work -- must get more specific
}
    
if ( date1.getTime() == date2.getTime() ) {
  console.log("TRUE!");
}



// date items 

var today = new Date(); // current date and time

// year, month, day MONTHS start from 0
var y2k = new Date(2000,0,1);

// year, month, day, hours, minutes, seconds
var y2k = new Date(2000,0,1,0,0,0);

today.getMonth(); //returns 0 -11

today.getFullYear(); // YYYY not zero-based

today.getYear(); // deprecated

today.getDate(); // 1-31 day of month

today.getDay(); // 0 - 6 -- 0 = sunday

today.getHours(); // 0-23

today.getTime(); // milliseconds since 1/1/1970

var myDate = new Date(1906,11,9);

console.log( "Grace Hopper was born on: ", myDate.getDay() );

today.setMonth(5); // june
today.setFullYear(2012);
today.setDay(0); // sunday


var date1 = new Date(2000,0,1);
var date2 = new Date(2000,0,1);

if ( date1.getTime() == date2.getTime() ) {
  console.log("TRUE!")
}