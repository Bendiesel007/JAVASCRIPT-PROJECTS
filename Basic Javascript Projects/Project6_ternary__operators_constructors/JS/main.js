// Utilizes constructor function using keyword "this"//
function Person(first, last, age, eye) { //Declares a constructor function with parameters "first,last,age,eye" passed into the function//
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Utilize constructor function with keywords such as "new"//
var Dad = new Person ("Ben", "Dreher", 58, "Brown"); // Create variable called Dad and "new" keyword used to create a new object//
var Mom = new Person ("Nicole", "Bischke", 41, "Hazel");
function myFunction() { // Function declaration used to create a reusable block of code//
    document.getElementById("Keywords_and_Constructors") .innerHTML = // Finds a unique HTML element on the page using it's id attribute//
     "Dad is " + Dad.firstName + " " + Dad.lastName + ", Age: " + Dad.age + ", Eye Color: " + Dad.eyeColor;

}

// Utilize Ternary operator to assign a value to a variable based on a condition//
function Swim_Function() { // Create a function called swim function//
  var Age, Can_Swim; // Keyword var tells the computer to create a variable named "Age Can_Swim"//
  Age = document.getElementById("Age") .value // This searches the webpage and finds HTML tag with the matching Id//
  Can_Swim = (Age < 15) ? "You are not old enough to swim without supervision" : "You are old enough to swim without supervision";
  document.getElementById("Swim") .innerHTML = Can_Swim;
}

// Created a Nested Count Function//
let count = 0; // Declare and initialize variable named count//

function outerFunction() {
  function innerFunction() {
    count++; // Increments the outer variable//
    document.getElementById("count") .innerText = count;
  }
  document.getElementById("increment") .onclick = innerFunction;
}

outerFunction(); // Parent function//