function loadDoc() {
  //Setup the XML HTTP request object

  var xhttp = new XMLHttpRequest();
  //Instantiate a new XMLHttpRequest (XHR) object, which
  //allows web browsers to make HTTP requests to a server
  //without reloading the page

  //Defines an event listener for an Asynchronous and XML
  //(AJAX) request using XMLHttpRequest (XHR) object
  xhttp.onreadystatechange = function() {

    //Establishes whether the response was successful and 
    //where the data should be displayed
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
    //Prepare the type of request and what  
    //to request from the server
  xhttp.open("GET", "ajax_info.txt", true);

    //Send the request
  xhttp.send();
}