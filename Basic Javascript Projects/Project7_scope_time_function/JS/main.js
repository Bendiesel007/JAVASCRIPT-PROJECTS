// Javascript global and local variables //
function Height_Function() { // Create function with a tool called Height_Function //
    Height = document.getElementById("Height") .value; // Extracts the the text value entered into the HTML input element with the ID of height //
    if (Height >= 48) { // Statement checks if a numeric variable is >= 48 //
        Ride = "You are tall enough to ride!";
    }
    else{
        Ride = "You are not tall enough to ride!"; // Else statement handles the case  where the height condition is false //
    }
    document.getElementById("How_tall_are_you?") .innerHTML = Ride; //Method in Javascript used to select an HTML element with the specific ID "How_tall_are_you" //
}

var X = 35 // Declares a variable named X and assigns it a numeric value //
function Add_numbers_1() { // Call function to add two numbers //
    document.write(35 + X + "<br>"); // Utilize document.write to add a variable and mathematic sum //
}
function Add_numbers_2() { // Call function to add two numbers //
    document.write(X + 58 + "<br>"); // Utilize document.write to add a variable and mathematic sum //
}
Add_numbers_1(); // Return sum of two pre defined variables or values //
Add_numbers_2();  

function Add_numbers_3() { // Call function to add two numbers //
    var W = 10; // Declares a variable named X and assigns it a numeric value //
    document.write(10 + W + "<br>"); // Utilize document.write to add a variable and mathematic sum //
}
function Add_numbers_4() { // Call function to add two numbers //
    document.write(W + 5); // Utilize document.write to add a variable and mathematic sum //
}
Add_numbers_3(); // Return sum of two pre defined variables or values //
Add_numbers_4();

function get_Date() { //Utilize get_Date function to retrieve current date and time //
    if (new Date() .getHours() < 23) { //Javascript conditional checks whether the current local time is before 11pm (23:00) local time //
        document.getElementById("Message") .innerHTML = "Good luck on your assignment!"; // Extracts the the text value entered into the HTML input element with the ID of Message //
    }
}

function Add_numbers_5() { // Call function to add two numbers //
    var A = 100; // Declares a variable named X and assigns it a numeric value //
    console.log(30 + A); // Final results to be shown on the developer console //
}
function Add_numbers_6() { // Call function to add two numbers //
    console.log(A + 50); // Final results to be shown on the developer console //
}
Add_numbers_5(); // Call function to add two numbers //
Add_numbers_6();

