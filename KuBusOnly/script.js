
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

//-------------------- Auto-font ---------------------//

  var typed = new Typed(".auto-type", {
    strings: ["Reliable","Convenience"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})

//-------------------- Move the bus based on scroll position ---------------------//

$(document).ready(function () {
  // Check scroll position when the user scrolls
  $(window).scroll(function () {
      moveBusOnScroll();
  });

  // Function to move the bus based on scroll position
  function moveBusOnScroll() {
      // Get the offset of Page3 from the top of the document
      var page3Offset = $('#Page3').offset().top;
      // Get the current scroll position
      var windowScroll = $(window).scrollTop();
      // Get the height of the window
      var windowHeight = $(window).height();

      // Adjust these values based on your layout and requirements
      if (windowScroll + windowHeight > page3Offset + 100) {
          // User has scrolled to Page 3, move the bus to the right
          $('#Page3 .bus-2').css('transform', 'translateX(0)');
      } else {
          // User has not scrolled to Page 3, move the bus off-screen to the left
          $('#Page3 .bus-2').css('transform', 'translateX(-100%)');
      }
  }
});

