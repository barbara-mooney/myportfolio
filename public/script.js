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

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}