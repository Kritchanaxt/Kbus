
//--------------------- Dropdown --------------------------//
$(document).ready(function(){

    // When the dropdown-toggle inside languageSection is clicked
    $('.language-section .dropdown-toggle').click(function(){

        // Toggle the display of the dropdown-menu
        $('.language-section .dropdown-menu').toggle();
    });

    // When an element with class 'a1' inside the dropdown-menu of languageSection is clicked
    $('.language-section .dropdown-menu a1').click(function(){

        // Get the 'language' attribute value from the clicked element
        var selectedLanguage = $(this).attr('language');
        console.log('selected language:', selectedLanguage);
    });
});


//--------------------- Navbar --------------------------//
// Get the element with the id "navbar" and store it in the variable 'nav'
var nav = document.getElementById("navbar");

// Get the offsetTop (vertical distance from the top of the offsetParent node) of the navbar
var sticky = nav.offsetTop;

// Function to handle the scroll event
function handleScroll() {

    // Check if the vertical scroll position is greater than the offsetTop of the navbar
    if (window.pageYOffset > sticky) {

        // If true, add the "solid" class to the navbar
        nav.classList.add("solid");
    } else {

        // If false, remove the "solid" class from the navbar
        nav.classList.remove("solid");
    }
}

// Attach the handleScroll function to the "scroll" event on the window
window.addEventListener("scroll", handleScroll);

//------------------------------------------------//

  function toggleMenu() {
    var section = document.querySelector('.section');
    var logoNavOpen = document.getElementById('logoNavOpen');
    var logoNavClose = document.getElementById('logoNavClose');
  
    if (section.style.right === '0px' || section.style.right === '') {
      section.style.right = '-200px';
      section.style.display = 'none';
      logoNavOpen.style.display = 'block';
      logoNavClose.style.display = 'none';
    } else {
      section.style.right = '0';
      section.style.display = 'flex';
      logoNavOpen.style.display = 'none';
      logoNavClose.style.display = 'block';
    }
  }  

