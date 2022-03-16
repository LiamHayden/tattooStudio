// animation
function navBarAnimation(x) {
  // variables 
  let dropNavSquares = document.getElementById("mobileMenu");

  // functionality
  x.classList.toggle("change");

  // conditional
  if (dropNavSquares.style.display == "flex") {
    dropNavSquares.style.display = "none"
  } else {
    dropNavSquares.style.display = "flex";
  }
}