window.onload = function(){
  var form = document.getElementById("singUpForm");
  form.addEventListener("blur", function( event ) {
  event.target.style.background = "pink";
  }, true);
  form.addEventListener("focus", function( event ) {
  event.target.style.background = "";
  }, true);
}

function validationName() {
  firstName = document.getElementById("firstName").value;
  if ( !isNaN(firstName) || firstName == null || firstName.length < 3 || 
    /^\s+$/.test(firstName) ) {
    return false
  } else{
    return true
  }
}

function validationLastName() {
  lastName = document.getElementById("lastName").value;
  if (lastName == null || lastName.length < 3 || 
    /^\s+$/.test(lastName) || !isNaN(lastName)) {
    return false
  } else{
    return true
  }
}

function validationDni() {
  dni = document.getElementById("dni").value;
  if( !(/^\d{8,12}$/.test(dni)) || isNaN(dni) ) {
    return false;
  } else{
    return true
  }
}

function validationDateOfBirth(){
  document.getElementById("dateOfBirth")
  .addEventListener("input", function(evt) {
    var dateOfBirth = evt.target.value;
    if (dateOfBirth) {
        document.getElementById("salida")
        .innerText = dateOfBirth;
        return true
    } else {
        document.getElementById("salida")
        .innerText = "Fecha Inválida";
        return false
    }
  });
}

function validationPhoneNumber() {
  phone = document.getElementById("phone").value;
  if( !(/^\d{10}$/.test(phone)) || isNaN(phone) ) {
    return false;
  } else{
    return true
  }
}

function validationAddress() {
  address = document.getElementById("address").value;
  if (address == null || address.length < 5 || /^\s+$/.test(address)) {
    return false
  } else{
    return true
  }
}

function validationCity() {
  city = document.getElementById("city").value;
  if (city == null || city.length < 3 || /^\s+$/.test(city)) {
    return false
  } else{
    return true
  }
}

function validationPostalCode() {
  postalCode = document.getElementById("pc").value;
  if( !(/^\d{4,5}$/.test(postalCode)) || isNaN(phone)) {
    return false;
  } else{
    return true
  }
}

function validationEmail() {
  emailLog = document.getElementById("email").value;
  if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(emailLog)) {
    return true
  }
  else{
    return false
  }
}

function passwordCheck() {
  password = document.getElementById("password").value;
  if (password == null || password.length < 3 || /^\s+$/.test(password)) {
    return false
  } else {
    return true
  }
}

function passwordComparison() {
  rePassword = document.getElementById("reCheckPassword").value;
  if (passwordCheck() === true) {
    if (password === rePassword) {
      return true
    }
    else{
      return false
    }
  } else {
    return false
  }
}

function validationForm() {
  if (validationName() == false) {
    console.log("First name error")
    return false;
  } 
  else if (validationLastName() == false) {
    console.log("Last name error")
    return false;
  } 
  else if(validationDni() == false) {
    console.log("Dni error")
    return false
  } 
  else if(validationDateOfBirth() == false) {
    console.log("Date error")
    return false
  } 
  else if (validationPhoneNumber() == false) {
    console.log("Phone number error")
    return false;
  } 
  else if (validationAddress() == false) {
    console.log("Address error")
    return false;
  } 
  else if (validationCity() == false) {
    console.log("City error")
    return false;
  } 
  else if (validationPostalCode() == false) {
    console.log("Postal Code error")
    return false;
  } 
  else if (validationEmail() == false) {
    console.log("Email error")
    return false;
  } 
  else if (passwordCheck() == false) {
    console.log("Password error")
    return false
  } 
  else if (passwordComparison() == false) {
    console.log("Passwords dont match")
    return false
  } 
  else{
    alert("Sing Up Complete!")
    return true;
  }
}
