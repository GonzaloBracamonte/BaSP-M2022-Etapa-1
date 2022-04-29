window.onload = function(){
  var fName = document.getElementById("firstName");
  var lName = document.getElementById("lastName");
  var dni = document.getElementById("dni");
  // var dOfBirth = document.getElementById("dateOfBirth");
  var pNumber = document.getElementById("phone");
  var address = document.getElementById("address");
  var city = document.getElementById("city");
  var pCode = document.getElementById("pc");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var rePassword = document.getElementById("reCheckPassword");

  var fNameError = document.getElementById("fNameP");
  var lNameError= document.getElementById("lNameP");
  var dniError= document.getElementById("dniP");
  // var  dOfBirthError= document.getElementById("dateOfBirth");
  var pNumberError= document.getElementById("pNumberP");
  var addressError= document.getElementById("addressP");
  var cityError= document.getElementById("cityP");
  var pCodeError= document.getElementById("pcP");
  var emailError= document.getElementById("emailP");
  var passwordError= document.getElementById("passwordP");
  var rePasswordError = document.getElementById("rePasswordP");

  fName.addEventListener('focus', fNameFocus, true);
  fName.addEventListener('blur', fNameBlur, true);

  lName.addEventListener('focus', lNameFocus, true);
  lName.addEventListener('blur', lNameBlur, true);

  dni.addEventListener('focus', dniFocus, true);
  dni.addEventListener('blur', dniBlur, true);
  
  // dOfBirth.addEventListener('focus', dOfBirthFocus, true);
  // dOfBirth.addEventListener('blur', dOfBirthBlur, true);

  pNumber.addEventListener('focus', pNumberFocus, true);
  pNumber.addEventListener('blur', pNumberBlur, true);

  address.addEventListener('focus', addressFocus, true);
  address.addEventListener('blur', addressBlur, true);

  city.addEventListener('focus', cityFocus, true);
  city.addEventListener('blur', cityBlur, true);

  pCode.addEventListener('focus', pCodeFocus, true);
  pCode.addEventListener('blur', pCodeBlur, true);

  email.addEventListener('focus', emailFocus, true);
  email.addEventListener('blur', emailBlur, true);

  password.addEventListener('focus', passwordFocus, true);
  password.addEventListener('blur', passwordBlur, true);

  rePassword.addEventListener('focus', rePasswordFocus, true);
  rePassword.addEventListener('blur', rePasswordBlur, true);

  function fNameFocus(){
    document.getElementById("firstName").style.backgroundColor = "";
    fNameError.style.visibility = "hidden";
  }
  function fNameBlur(){
    if (fName == null || fName.value.length < 3 || /^\s+$/.test(fName.value)) {
      document.getElementById("firstName").style.backgroundColor = "pink";  
      fNameError.style.visibility = "visible";
      fNameError.style.color = "red"
    }
  }  

  function lNameFocus(){
    document.getElementById("lastName").style.backgroundColor = "";
    lNameError.style.visibility = "hidden";
  }
  function lNameBlur(){
    if (lName == null || lName.value.length < 3 || /^\s+$/.test(lName.value)) {
      document.getElementById("lastName").style.backgroundColor = "pink";  
      lNameError.style.visibility = "visible";
      lNameError.style.color = "red"
    }
  }  

  function dniFocus(){
    document.getElementById("dni").style.backgroundColor = "";
    dniError.style.visibility = "hidden";
  }

  function dniBlur(){
    if( !(/^\d{8,12}$/.test(dni.value)) || isNaN(dni.value) ) {
      document.getElementById("dni").style.backgroundColor = "pink";  
      dniError.style.visibility = "visible";
      dniError.style.color = "red"
    }
  }  
  // function dOfBirthFocus(){
  //   document.getElementById("dateOfBirth").style.backgroundColor = "";
  //   dOfBirthError.style.visibility = "hidden";
  // }

  // function dOfBirthBlur(){

  // }  

  function pNumberFocus(){
    document.getElementById("phone").style.backgroundColor = "";
    pNumberError.style.visibility = "hidden";
  }

  function pNumberBlur(){
    if( !(/^\d{10}$/.test(pNumber.value)) || isNaN(pNumber.value) ) {
      document.getElementById("phone").style.backgroundColor = "pink";  
      pNumberError.style.visibility = "visible";
      pNumberError.style.color = "red"
    }
  }  

  function addressFocus(){
    document.getElementById("address").style.backgroundColor = "";
    addressError.style.visibility = "hidden";
  }

  function addressBlur(){
    if (address == null || address.value.length < 3 || /^\s+$/.test(address.value)) {
      document.getElementById("address").style.backgroundColor = "pink";  
      addressError.style.visibility = "visible";
      addressError.style.color = "red"
    }
  }  
  function cityFocus(){
    document.getElementById("city").style.backgroundColor = "";
    cityError.style.visibility = "hidden";
  }

  function cityBlur(){
    if (city == null || city.value.length < 3 || /^\s+$/.test(city.value)) {
      document.getElementById("city").style.backgroundColor = "pink";  
      cityError.style.visibility = "visible";
      cityError.style.color = "red"
    }
  }  
  function pCodeFocus(){
    document.getElementById("pc").style.backgroundColor = "";
    pCodeError.style.visibility = "hidden";
  }

  function pCodeBlur(){
    if( !(/^\d{4,5}$/.test(pCode.value)) || isNaN(pCode.value) ) {
      document.getElementById("pc").style.backgroundColor = "pink";  
      pCodeError.style.visibility = "visible";
      pCodeError.style.color = "red"
    }
  } 

  function emailFocus(){
    document.getElementById("email").style.backgroundColor = "";
    emailError.style.visibility = "hidden";
  }

  function emailBlur(){
    if (!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email.value)) {
      document.getElementById("email").style.backgroundColor = "pink";  
      emailError.style.visibility = "visible";
      emailError.style.color = "red"
    }
  }  

  function passwordFocus(){
    document.getElementById("password").style.backgroundColor = "";
    passwordError.style.visibility = "hidden";
  }
  function passwordBlur(){
    if (password == null || password.value.length < 3 || /^\s+$/.test(password.value)) {
      document.getElementById("password").style.backgroundColor = "pink";  
      passwordError.style.visibility = "visible";
      passwordError.style.color = "red"
    }
  }  
  function rePasswordFocus(){
    document.getElementById("reCheckPassword").style.backgroundColor = "";
    rePasswordError.style.visibility = "hidden";
  }
  function rePasswordBlur(){
    if (rePassword == null || rePassword.value.length < 3 || /^\s+$/.test(rePassword.value)) {
      document.getElementById("reCheckPassword").style.backgroundColor = "pink";  
      rePasswordError.style.visibility = "visible";
      rePasswordError.style.color = "red"
    }
  }  

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
    // var [year, month, day] = dateToCheck.split("-");
    // var isoFormattedStr = `${day}/${month}/${year}`;
    // var date = new Date(isoFormattedStr);
    // var timestamp = date.getTime();
    // if (typeof timestamp !== "number" || Number.isNaN(timestamp))
    // {
    //     return false;
    // }
    // return  isoFormattedStr;
  return true;
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
  if (address == null || address.length < 5 || /^\s*$/.test(address)) {
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
    alert("Sing Up Complete! Your email registered is " + emailLog )
    return true;
  }
}
