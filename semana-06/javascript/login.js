var truePassword = "26abril"
var trueEmail = "braca95gonza@gmail.com"
// var emailParent = document.querySelector("label[name='emailLabel']");
// var errorEmail = document.createElement("label");

// errorEmail.innerText = "Lo siento, no pudimos encontrar tu cuenta";
// emailParent.parentNode.appendChild(errorEmail);

function getFocusEmail() {
  document.getElementById("email-input").focus();

}
function getFocusPassword(){
  document.getElementById("password-input").focus();
}

function loseFocus(){
  document.getElementsById("email-input").blur();
}
function validationEmail() {
  emailValue = document.getElementById("email-input").value;
  if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(emailValue)) {
    console.log("The user is valid")
    if (emailValue == trueEmail) {
      console.log("Usuario correcto")
      return true
    } else {
      console.log("usuario incorrecto")
      return false
    }
  }
  else{
    getFocusEmail();
    console.log("The user is invalid")
    return false
  }
}
function validationPassword(){
  password = document.getElementById("password-input").value;
  if (password == null || password.length < 3 || /^\s+$/.test(password)) {
    console.log("The password is invalid")
    getFocusPassword();
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
    alert("Ingreso concedido")
  }
}
