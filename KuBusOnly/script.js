// Dropdown!!
$(document).ready(function(){
    // เมื่อคลิกที่ dropdown-toggle ใน languageSection
    $('.language-section .dropdown-toggle').click(function(){
        // สลับการแสดง/ซ่อน dropdown-menu
        $('.language-section .dropdown-menu').toggle();
    });
    // เมื่อคลิกที่องค์ประกอบ a1 ภายใน dropdown-menu ของ languageSection
    $('.language-section .dropdown-menu a1').click(function(){
        // ดึงค่า attribute 'language' จากองค์ประกอบ a1 ที่ถูกคลิก
        var selectedLanguage = $(this).attr('language');
        console.log('selected language:', selectedLanguage);
    });
  });

  // Navbar transparent!!
  var nav = document.getElementById("navbar"); 
  // รับอิลิเมนต์ nav
  var sticky = nav.offsetTop; 
  // รับตำแหน่งออฟเซตของ nav
  function handleScroll() {
      if (window.pageYOffset > sticky) {
          nav.classList.add("solid");
      } else {
          nav.classList.remove("solid");
      }
  }
  
  // ฟังก์ชันเพื่อเพิ่มหรือลบคลาส "solid" ขึ้นอยู่กับตำแหน่งการเลื่อน
  window.addEventListener("scroll", handleScroll);
  // ผูกฟังก์ชัน handleScroll กับเหตุการณ์การเลื่อน


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



  