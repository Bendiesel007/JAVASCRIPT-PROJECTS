function addition_Function() { //Creates a function and names function addition_Function//
    var Addition = 500 + 500; //Create a variable called Addition and pass it two numbers to add//
    document.getElementById("Addition") .innerHTML = "500 + 500 = " + Addition; //Utilize document.getElementById method which has an ID attribute (Addition) with a specific value assigned to it//
} 

function subtraction_Function() { //Creates a function and names the function subtraction_Function//
    var Subtraction = 350 - 33; //Create a variable called subtraction and pass it two numbers to subtract//
    document.getElementById("Subtraction") .innerHTML = "350 - 33 = " + Subtraction;  //Utilize document.getElementById method which has an ID attribute (Subtraction) with a specific value assigned to it//
}

function multiplication_Function() { //Creates a function and names the function multiplication_Function//
    var Multiplication = 500 *10; //Creates a variable called Multiplication and pass it two numbers to multiply//
    document.getElementById("Multiplication") .innerHTML = "500 * 10 = " + Multiplication; //Utilize document.getElementById method which has an ID attribute (Multiplication) with a specific value assigned to it//
}

function modulus_Operator_Function() { //Creates a function and names the function modulus_Operator_Function. Modulus is the remainder after the dividend is divided by the divisor//
    var Remainder = 36 % 7; //Creates a variable called Remainder and pass it two numbers to divide using operator function %//
    document.getElementById("Remainder") .innerHTML = "When you divide 36 by 7 you have a remainder of:" + Remainder; //Utilize document.getElementById method which has an ID attribute (Remainder) with a specific value assigned to it// 
}


function increment_Function() {  //Create a function and names the function increment_Function//   
var X = 25; //Create a variable (X) with a value of 25//
X++; //Use function operator ++ (increment operator) to increase variable value +1//  
document.write(X) //Utilize document.write method to return a value//
}


function decrement_Function() { //Create a function and name the function decrement_Function//
var Y = 55; //Create a variable (Y) with a value of 55//
Y--; //Use function operator -- (decrement operator) to decrease variable value -1// 
document.write(Y) //Utilize document.write method to return a value//
}

function alert_Function() { //Create a function and name the function alert_Function//
window.alert(Math.random()); //window.alert(Math.random()) which creates a window alert and displays a random number between 0 and 1//
}