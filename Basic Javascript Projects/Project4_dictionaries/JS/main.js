function my_Dictionary() { //Create function and names function my_Dictionary//
    var Car = { //Assign a variable named car equal to KVP's below//
        Make: "Dodge",
        Model: "Ram",
        Color: "White",
        Motor: "V-8",
        Year: "2006"
    };
    delete Car.Make; //Use the delete operator for Car.Make. The boutput of this code will be undefined//
    document.getElementById("Dictionary") .innerHTML = Car.Make; //Utilize document.getElementById method which has an ID attribute and a specific value assigned//
}