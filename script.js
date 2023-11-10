
//dropdown
$(document).ready(function(){
  $('.languageSection .dropdown-toggle').click(function(){
      $('.languageSection .dropdown-menu').toggle();
  });

  $('.languageSection .dropdown-menu a1').click(function(){
      var selectedLanguage = $(this).attr('language');
      // ทำตามต้องการเมื่อเลือกภาษา
      console.log('Selected language:', selectedLanguage);
  });
});


//navbar transparent
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navb');
  if (window.scrollY > 0) {
    nav.classList.add('scroll');
  } else {
    nav.classList.remove('scroll');
  }
});
