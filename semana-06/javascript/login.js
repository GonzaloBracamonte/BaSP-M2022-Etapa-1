var truePassword = "26abril"
var trueEmail = "braca95gonza@gmail.com"

function validationEmail() {
  emailValue = document.getElementById("emailInput").value;
  if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(emailValue)) {
    console.log("The user is valid")
    if (emailValue == trueEmail) {
      return true
    } else {
      return false
    }
  }
  else{
    console.log("The user is invalid")
    return false
  }
}

function validationPassword(){
  password = document.getElementById("passwordInput").value;
  if (password == null || password.length < 3 || /^\s+$/.test(password)) {
    console.log("The password is invalid")
    return false
  } else {
    console.log("The password is valid")
    if (password == truePassword) {
      console.log("Acceso concedido")
      return true
    } else{
      alert("Contraseña incorrecta")
      return false
    }
  } 
}

function alertLogin(){
  if (validationEmail() == true && validationPassword() == true) {
    alert("Access granted")
  }
}

window.onload = function(){
  var email = document.getElementById("emailInput");
  var password = document.getElementById("passwordInput");
  var errorEmail = document.getElementById("emailError")
  var errorPassword = document.getElementById("passwordError")

  email.addEventListener("focus", emailFocus, true);
  email.addEventListener("blur", emailBlur, true);
  password.addEventListener("focus", passwordFocus, true);
  password.addEventListener("blur", passwordBlur, true);

  function emailFocus() {
    document.getElementById("emailInput").style.backgroundColor = "";
    errorEmail.style.visibility = "hidden";
  }

  function emailBlur() {
    if (!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email.value)) {
      document.getElementById("emailInput").style.backgroundColor = "pink";  
      errorEmail.style.visibility = "visible";
      errorEmail.style.color = "red"
    } 
  }
  
  function passwordFocus(){
    document.getElementById("passwordInput").style.backgroundColor = "";
    errorPassword.style.visibility = "hidden";
  }
  function passwordBlur(){
    if (password == null || password.value.length < 3 || /^\s+$/.test(password.value)) {
      document.getElementById("passwordInput").style.backgroundColor = "pink";  
      errorPassword.style.visibility = "visible";
      errorPassword.style.color = "red"
    }
  }
  
}