let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    var offsetTop = $(".specialties-section").offset().top;
    var windowHeight = $(this).height();
  
    if (scrollTop > offsetTop - windowHeight + 200) {
      $(".specialties-section").css({
        opacity: "1",
        visibility: "visible"
      });
    } else {
      $(".specialties-section").css({
        opacity: "0",
        visibility: "hidden"
      });
    }
  });
  
