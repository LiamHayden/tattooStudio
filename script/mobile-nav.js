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

// Email validation
// Email regex
const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

// Validate email
const validate = () => {
  const $result = $('#result');
  const email = $('#email').val();
  $result.text('');

  if (validateEmail(email)) {
    $(".container").load("../html/formFilled.html" || "html/formFilled.html");
    return true;
  } else {
    $result.text(email + ' is not valid :(');
    $result.css('color', 'red');
    return false;
  }
}

$('#btnSubmit').on('click', validate);
