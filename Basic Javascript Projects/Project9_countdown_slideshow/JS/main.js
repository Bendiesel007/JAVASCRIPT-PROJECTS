let slideIndex = 0; // Creates a variable to track current picture number starting at zero
showSlides(); // Runs the main function that hides the old pictures, shows the new one, 
              //  and sets timer for the next one 
 
function showSlides() { // Utilize showSlides function to control image gallery or slider by hiding 
                        // hiding inactive and displaying active slide index
    let i; // Create a new variable named i            
    let slides = document.getElementsByClassName("mySlides"); // Create a variable named mySlides
    for (i = 0; i < slides.length; i++) { // Creates a loop used to go through a list of elements called slides
        slides[i].style.display = "none";  
    }
    slideIndex++; // Expression increments the slideIndex variable by 1 moving next item forward in the programming
    if (slideIndex > slides.length) {slideIndex = 1} // Create a looping effect for image gallery
    slides[slideIndex - 1].style.display = "block"; // Make image or slide visible in a custom webpage 
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}
