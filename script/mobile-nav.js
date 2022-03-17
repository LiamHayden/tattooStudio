// change navbar
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

// form validaiton - form pag and footer
function validateForm() {
  // variables
  let email = document.forms["form"]["email"].value;

  // functionality
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
    alert("You have entered an invalid email address!")
    return (false)
}