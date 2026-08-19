//Project 10 loops and arrays
function count_To_Twenty(){ //Call the function count_to_twenty to create a loop//
    var Digit = ""; //Create a variable named digit//
    var X = 1; //Create a variable X and assign it a numerical value of 1//
    while (X < 21){ //Sets condition to keep the loop going//
        Digit += "<br>" + X; //Adds an HTML line break to the text inside the Digit variable//
        X++; //Adds 1 to the i counter so the loop can move forward and eventually stop//
    }
document.getElementById("Count_To_Twenty").innerHTML = Digit; //document.getElementById finds the exact HTML tag on the page that has id="count_to_twenty"//
}                                                            //.innerHTML targets the inner content or HTML inside that specific tag//

function call_Loop() { //Calls for loop function//
    let text = ""; //Utilizes the keywork let to declare block scoped variables//
    let i = 0; //Declares a block-scope variable named i and initializes it to 0//

    while (i < 10) { //Sets condition to keep the loop going//
        text += "The number is " + i + "<br>"; //Text Concatenate appends string to a variable text displaying//
        i++;                                   //displaying the current value of i followed by a line break//
    }
    document.getElementById("Call_Loop").innerHTML = text; //document.getElementById finds the exact HTML tag on the page that has id="Call_Loop"//
}                                                         //.innerHTML targets the inner content or HTML inside that specific tag//

                                                        
function array_Function() { //Calls a function that operates on arrays//
    var Fast_Car = []  //Declares variable named Fast_Car and initializes it as an empty array//
    Fast_Car[0] ="corvette"; //Declare variable and initialize the array//
    Fast_Car[1] = "ford gt"; //Declare variable and initialize the array//
    Fast_Car[2] = "ssc tuatara"; //Declare variable and initialize the array//
    Fast_Car[3] = "hennessey venom"; //Declare variable and initialize the array//
    Fast_Car[4] = "czinger"; //Declare variable and initialize the array//
    Fast_Car[5] = "saleen S7"; //Declare variable and initialize the array//
    document.getElementById("Array").innerHTML = "In this array, I choose fast car  " + //document.getElementById finds the exact HTML tag on the page that has id="Array"//
    Fast_Car[2] +" . ";
}


