// function scrollToProjects () {
//   window.scrollTo({
//     top: 750,
//     bottom: 0, 
//     behavior: 'smooth'
//   });

// projects.addEventListener('click', function() {
//   window.scrollTo({
//     top: 750,
//     bottom: 0, 
//     behavior: 'smooth'
//   });
// });

// $(document).ready(function() {
//   var url = window.location;
//   var alertStatus = new URLSearchParams(url.search).get('alert');
//   if (alertStatus) {
//     alert('Thank you for your message. I will get back to you soon!');
//   }
// });

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}