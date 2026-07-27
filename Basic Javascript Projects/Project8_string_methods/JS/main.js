// Javascript Project 8 //
function full_Sentence() { // Utilize the Concat() Method to to connect strings //
    var part_1 ="This is "; // Utilize variable called part_1 partial string //
    var part_2 = "my version "; // Utilize variable called part_2 partial string //
    var part_3 = "of a full sentence "; // Utilize variable called part_3 partial string //
    var part_4 = "for my assignment "; // Utilize variable called part_4 partial string //
    var Whole_sentence = part_1.concat(part_2, part_3, part_4); // Call concat() methood on first string (part_1) and pass remaining parts inside parentheses //
    document.getElementById("Concatenate") .innerHTML = Whole_sentence; // Javascript line finds HTML element with ID Concatenate and changes its inside content to match value stored in whole sentence //
}

function slice_Method() { // Utilize the Slice() Method to extract a section of a string and then returns the extracted section in a new string //
    var Sentence = "Spread your wings and fly as high as you can" // Utilize variable called Sentence with a value //
    var Section = Sentence.slice(12,18); // Utilize variable called section. Value indicated which characters in your string will be cut out and displayed //
    document.getElementById("Slice") .innerHTML = Section; // Javascript command that changes the HTML inside an element //
}

function string_Method() { // Utilize The toString() Method to return a number as a string //
    var X = 300; // Utilize the variable X and assigns a value //
    document.getElementById("Numbers_to_string") .innerHTML = X.toString(); // Javascript command that returns a number as a string //
}

function precision_Method() { // Utilize The Precision() Method to return a number as a string //
    var X = 12.3417;  // Utilize the variable X and assigns a value //
    document.getElementById("Precision") .innerHTML = X.toPrecision(3); // Javascript command that formats a number to a specified length. In this case its (3) //
}