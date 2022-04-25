function getFocusEmail() {
  document.getElementById("email-input").focus();
}
// function getFocusPassword(){
//   document.getElementById("password-input").focus();
// }
function loseFocus(){
  document.getElementsById("email-input").blur();
}
function validationEmail() {
  emailValue = document.getElementById("email-input").value;
  if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(emailValue)) {
    console.log("The user is valid")
    return true
  }
  else{
    console.log("The user is invalid")
    getFocusEmail();
    return false
  }
}
function validationPassword(){
  password = document.getElementById("password-input").value;
  if (password == null || password.length < 3 || /^\s+$/.test(password)) {
    // getFocusPassword();
    console.log("The password is invalid")
    return false
  } else{
    console.log("The password is valid")
    return true
  }
}