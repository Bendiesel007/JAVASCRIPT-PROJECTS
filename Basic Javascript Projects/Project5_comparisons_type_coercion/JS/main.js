
function not_Function() { //Utilize the not operator function to check whether something is true or false.//
    document.getElementById("Not") .innerHTML = ! (1 < 100); // Utilize the document.getById method to return a result of 1 not being less than 100. In this case, it is false.//
}


function and_Function() { //Utilize the and operator function to determine logic between two values to determine whether it is true or false.//
    document.write(25 > 8 && 4 > 1); //Utilize document.write method to return a true if both values are true or a false if one of the values is not true. In this case both are true.//
}


function or_Function() { //Utilize the or operator function to determine logic between two values to determine wheter it is true or false.//
    document.write(1 < 3 || 15 > 12); //Utilize document.write method to return a true if one or both values are true or a false if both values are not true. In this case it is true.//
}


function double_equal_Function() { // Utilize the double equal operator to show a comparison of between two values on the left and right side of the equal sign.//
    document.write(55 == 55); // Utilize document.write method to check for equality on each side of the equal sign to render a true or false condition. In this case it is true.//
}


function triple_equal_Function() { // Utilize the triple equal operator to show a comparison a comparison should be made on the left and right side of the equal sign.//
//In this case, the variable X is a number and the variable Y is a String. This will render a false comparison.//
    X = 100; // Variable X is a number.
    Y ="100"; // Variable Y is a string.
    document.write(X === Y); // Utilizing document.write method, the variable X is a number and the variable Y is a String. This will render a false comparison.//
}