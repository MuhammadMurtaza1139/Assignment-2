/*******************   Data Types       ****************************/
 //string data type
var name = "Rizwan"; 
name = "Saleem";
var name = "Mansoor bhai";
var nationality = 'Pakistani';
var message = "What is your father's number";

 // Variable for Numbers
 var age = 25;
var weight = 150.5; //float
var newWeight = weight + 20;
var originalNumber = 12  ;

 // Variable for Boolean
 var isFeePaid = true;
var examPassed = false;

//Undefiend
var name;
var age;

//Null
var name = null;
var nationality = "Basit";
nationality = null;


/*******************   Javascript Data Types are Dynamic      ****************************/

var name = "Basit"; // It’s String
name = 25; // Now changed to Number
name = true; // Now changed to Boolean


/*******************   Typeof operator       ****************************/
typeof "Hello"// Returns "string" 
var a = 45;
typeof a; // Returns "number"
typeof true; // Returns "boolean"

/*******************   Statments       ****************************/
var a = 4; // Statement 1
var b = 2; // Statement 2
var c = 0; // Statement 3
c = a + b; // Statement 4
alert(a); // Statement 5
console.log(c); // Statement 6



/*******************   Increment Decrement operator   ****************************/
var age = 12;
++age;
alert(age); //Result 13
--age;
alert(age); //Result 12

var age = 12;
age++;
alert(age); //Result 13, same as prefix
age--;
alert(age); //Result 12, same as postfix

//practice question 1
var a =4;
var b =2;
var c = a++ - b; // first value of a placed here which is 4 then increase 1 in a so will become 5
alert(a); // 5
alert(b); // 2
alert(c); // 2

//practice question 2
var a=4;
var b=2;
var c = ++a + b; // first value of a increased so will become 5 then value of a will be placed here, 5
alert(a); // 5
alert(b); // 2
alert(c); // 7


//practice question 3
var a = 4;
var b = 3;
var c = a++ + --b - --a;
alert(a); // 4
alert(b); // 2
alert(c); // 2


//practice question 4
var a = 4;
var b = 3;
var c = ++a + b++ - a + --b;
alert(a); // 5
alert(b); // 3
alert(c); // 6


/************** Concatenating Text strings ************/
var firstName = "Shahbaz";
var lastName = "Hussain";
//concatenate firstName, space character and lastName
var fullName = firstName + " " + lastName;
alert(fullName);

var a = "6" + 2; // "62"
var b = 3 + "6"; // "36"
var c = "Hello " + 2; // "Hello 2"
var d = 2 + "Hello "; // "2 Hello"
