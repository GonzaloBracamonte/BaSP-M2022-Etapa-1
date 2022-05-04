window.onload = function () {
  var fName = document.getElementById("firstName");
  var lName = document.getElementById("lastName");
  var dni = document.getElementById("dni");
  var dOfBirth = document.getElementById("dateOfBirth");
  var pNumber = document.getElementById("phone");
  var address = document.getElementById("address");
  var city = document.getElementById("city");
  var pCode = document.getElementById("pc");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var rePassword = document.getElementById("reCheckPassword");
  var storage = localStorage;

  var fNameError = document.getElementById("fNameP");
  var lNameError = document.getElementById("lNameP");
  var dniError = document.getElementById("dniP");
  var pNumberError = document.getElementById("pNumberP");
  var addressError = document.getElementById("addressP");
  var cityError = document.getElementById("cityP");
  var pCodeError = document.getElementById("pcP");
  var emailError = document.getElementById("emailP");
  var passwordError = document.getElementById("passwordP");
  var rePasswordError = document.getElementById("rePasswordP");

  fName.addEventListener("focus", fNameFocus, true);
  fName.addEventListener("blur", fNameBlur, true);
  fName.addEventListener("focusout", function () {
    storage.setItem("name", fName.value);
  });

  lName.addEventListener("focus", lNameFocus, true);
  lName.addEventListener("blur", lNameBlur, true);
  lName.addEventListener("focusout", function () {
    storage.setItem("lastName", lName.value);
  });

  dni.addEventListener("focus", dniFocus, true);
  dni.addEventListener("blur", dniBlur, true);
  dni.addEventListener("focusout", function () {
    storage.setItem("dni", dni.value);
  });
  dOfBirth.addEventListener("focusout", function () {
    storage.setItem("dob", dOfBirth.value);
  });
  function toMonthDayYear(dateToConv) {
    [year, month, day] = dateToConv.split("-");
    var dateMDY = [month, day, year].join("/");
    return dateMDY;
  }
  toMonthDayYear(dOfBirth.value);

  pNumber.addEventListener("focus", pNumberFocus, true);
  pNumber.addEventListener("blur", pNumberBlur, true);
  pNumber.addEventListener("focusout", function () {
    storage.setItem("phone", pNumber.value);
  });

  address.addEventListener("focus", addressFocus, true);
  address.addEventListener("blur", addressBlur, true);
  address.addEventListener("focusout", function () {
    storage.setItem("address", address.value);
  });

  city.addEventListener("focus", cityFocus, true);
  city.addEventListener("blur", cityBlur, true);
  city.addEventListener("focusout", function () {
    storage.setItem("city", city.value);
  });

  pCode.addEventListener("focus", pCodeFocus, true);
  pCode.addEventListener("blur", pCodeBlur, true);
  pCode.addEventListener("focusout", function () {
    storage.setItem("zip", pCode.value);
  });

  email.addEventListener("focus", emailFocus, true);
  email.addEventListener("blur", emailBlur, true);
  email.addEventListener("focusout", function () {
    storage.setItem("email", email.value);
  });

  password.addEventListener("focus", passwordFocus, true);
  password.addEventListener("blur", passwordBlur, true);
  password.addEventListener("focusout", function () {
    storage.setItem("password", password.value);
  });

  rePassword.addEventListener("focus", rePasswordFocus, true);
  rePassword.addEventListener("blur", rePasswordBlur, true);

  function fNameFocus() {
    document.getElementById("firstName").style.backgroundColor = "";
    fNameError.style.visibility = "hidden";
  }
  function fNameBlur() {
    if (fName == null || fName.value.length < 3 || !isNaN(fName)) {
      document.getElementById("firstName").style.backgroundColor = "pink";
      fNameError.style.visibility = "visible";
      fNameError.style.color = "red";
    }
  }

  function lNameFocus() {
    document.getElementById("lastName").style.backgroundColor = "";
    lNameError.style.visibility = "hidden";
  }
  function lNameBlur() {
    if (lName == null || lName.value.length < 3 || !isNaN(lName.value)) {
      document.getElementById("lastName").style.backgroundColor = "pink";
      lNameError.style.visibility = "visible";
      lNameError.style.color = "red";
    }
  }

  function dniFocus() {
    document.getElementById("dni").style.backgroundColor = "";
    dniError.style.visibility = "hidden";
  }

  function dniBlur() {
    if (isNaN(dni)) {
      document.getElementById("dni").style.backgroundColor = "pink";
      dniError.style.visibility = "visible";
      dniError.style.color = "red";
    }
  }

  function pNumberFocus() {
    document.getElementById("phone").style.backgroundColor = "";
    pNumberError.style.visibility = "hidden";
  }

  function pNumberBlur() {
    if (!/^\d{10}$/.test(pNumber.value) || isNaN(pNumber.value)) {
      document.getElementById("phone").style.backgroundColor = "pink";
      pNumberError.style.visibility = "visible";
      pNumberError.style.color = "red";
    }
  }

  function addressFocus() {
    document.getElementById("address").style.backgroundColor = "";
    addressError.style.visibility = "hidden";
  }

  function addressBlur() {
    if (
      address == null ||
      address.value.length < 3 ||
      /^\s+$/.test(address.value)
    ) {
      document.getElementById("address").style.backgroundColor = "pink";
      addressError.style.visibility = "visible";
      addressError.style.color = "red";
    }
  }
  function cityFocus() {
    document.getElementById("city").style.backgroundColor = "";
    cityError.style.visibility = "hidden";
  }

  function cityBlur() {
    if (city == null || city.value.length < 3 || /^\s+$/.test(city.value)) {
      document.getElementById("city").style.backgroundColor = "pink";
      cityError.style.visibility = "visible";
      cityError.style.color = "red";
    }
  }
  function pCodeFocus() {
    document.getElementById("pc").style.backgroundColor = "";
    pCodeError.style.visibility = "hidden";
  }

  function pCodeBlur() {
    if (!/^\d{4,5}$/.test(pCode.value) || isNaN(pCode.value)) {
      document.getElementById("pc").style.backgroundColor = "pink";
      pCodeError.style.visibility = "visible";
      pCodeError.style.color = "red";
    }
  }

  function emailFocus() {
    document.getElementById("email").style.backgroundColor = "";
    emailError.style.visibility = "hidden";
  }

  function emailBlur() {
    if (
      !/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
        email.value
      )
    ) {
      document.getElementById("email").style.backgroundColor = "pink";
      emailError.style.visibility = "visible";
      emailError.style.color = "red";
    }
  }

  function passwordFocus() {
    document.getElementById("password").style.backgroundColor = "";
    passwordError.style.visibility = "hidden";
  }
  function passwordBlur() {
    if (
      password == null ||
      password.value.length < 3 ||
      /^\s+$/.test(password.value)
    ) {
      document.getElementById("password").style.backgroundColor = "pink";
      passwordError.style.visibility = "visible";
      passwordError.style.color = "red";
    }
  }
  function rePasswordFocus() {
    document.getElementById("reCheckPassword").style.backgroundColor = "";
    rePasswordError.style.visibility = "hidden";
  }
  function rePasswordBlur() {
    if (
      rePassword == null ||
      rePassword.value.length < 3 ||
      /^\s+$/.test(rePassword.value)
    ) {
      document.getElementById("reCheckPassword").style.backgroundColor = "pink";
      rePasswordError.style.visibility = "visible";
      rePasswordError.style.color = "red";
    }
  }
  function getValues() {
    fName.value = storage.getItem("name");
    lName.value = storage.getItem("lastName");
    dni.value = storage.getItem("dni");
    dOfBirth.value = storage.getItem("dob");
    pNumber.value = storage.getItem("phone");
    address.value = storage.getItem("address");
    city.value = storage.getItem("city");
    pCode.value = storage.getItem("zip");
    email.value = storage.getItem("email");
    password.value = storage.getItem("password");
  }
  document.addEventListener("DOMContentLoaded", getValues);
};

function validationName() {
  firstName = document.getElementById("firstName").value;
  if (!isNaN(firstName) || firstName == null || firstName.length < 3) {
    return false;
  } else {
    return true;
  }
}

function validationLastName() {
  lastName = document.getElementById("lastName").value;
  if (lastName == null || lastName.length < 5 || !isNaN(lastName)) {
    return false;
  } else {
    return true;
  }
}

function validationDni() {
  dni = document.getElementById("dni").value;
  if (dni.length > 9 || isNaN(dni)) {
    return false;
  } else {
    return true;
  }
}

function validationDateOfBirth() {
  var dOfBirth = document.getElementById("dateOfBirth").value;
  var [year, month, day] = dOfBirth.split("-");
  var isoFormattedStr = `${year}/${month}/${day}`;
  var date = new Date(isoFormattedStr);
  var currentDate = new Date(Date.now());
  console.log(dOfBirth);
  return currentDate >= date;
}

function validationPhoneNumber() {
  phone = document.getElementById("phone").value;
  if (phone < 10 || isNaN(phone)) {
    return false;
  } else {
    return true;
  }
}

function validationAddress() {
  address = document.getElementById("address").value;
  if (address == null || address.length < 5) {
    return false;
  } else {
    return true;
  }
}

function validationCity() {
  city = document.getElementById("city").value;
  if (city == null || city.length < 3) {
    return false;
  } else {
    return true;
  }
}

function validationPostalCode() {
  postalCode = document.getElementById("pc").value;
  if (postalCode < 5 || isNaN(postalCode)) {
    return false;
  } else {
    return true;
  }
}

function validationEmail() {
  emailLog = document.getElementById("email").value;
  if (
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(emailLog)
  ) {
    return true;
  } else {
    return false;
  }
}

function passwordCheck() {
  password = document.getElementById("password").value;
  if (password == null || password.length < 3) {
    return false;
  } else {
    return true;
  }
}

function passwordComparison() {
  rePassword = document.getElementById("reCheckPassword").value;
  if (passwordCheck() === true) {
    if (password === rePassword) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function validationForm() {
  var url = new URL("https://basp-m2022-api-rest-server.herokuapp.com/signup");
  var params = {
    name: localStorage.getItem("name"),
    lastName: localStorage.getItem("lastName"),
    dni: localStorage.getItem("dni"),
    dob: localStorage.getItem("dob"),
    phone: localStorage.getItem("phone"),
    address: localStorage.getItem("address"),
    city: localStorage.getItem("city"),
    zip: localStorage.getItem("zip"),
    email: localStorage.getItem("email"),
    password: localStorage.getItem("password"),
  };
  if (validationName() == false) {
    console.log("First name error");
    return false;
  } else if (validationLastName() == false) {
    console.log("Last name error");
    return false;
  } else if (validationDni() == false) {
    console.log("Dni error");
    return false;
  } else if (validationDateOfBirth() == false) {
    console.log("Date error");
    return false;
  } else if (validationPhoneNumber() == false) {
    console.log("Phone number error");
    return false;
  } else if (validationAddress() == false) {
    console.log("Address error");
    return false;
  } else if (validationCity() == false) {
    console.log("City error");
    return false;
  } else if (validationPostalCode() == false) {
    console.log("Postal Code error");
    return false;
  } else if (validationEmail() == false) {
    console.log("Email error");
    return false;
  } else if (passwordCheck() == false) {
    console.log("Password error");
    return false;
  } else if (passwordComparison() == false) {
    console.log("Passwords dont match");
    return false;
  } else {
    alert("Sing Up Complete! Your email registered is " + emailLog);
    url.search = new URLSearchParams(params).toString();
    fetch(url)
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (jsonResponse) {
        console.log(jsonResponse);
      })
      .catch(function (error) {
        console.log("Error: " + error);
      });
    return true;
  }
}
// +
//   "?name=" +
//   firstName.value +
//   "&lastName=" +
//   lastName.value +
//   "&dni=" +
//   dni.value +
//   "&dob=" +
//   validationDateOfBirth(toMonthDayYear.value) +
//   "&phone=" +
//   phone.value +
//   "&address=" +
//   address.value +
//   "&city=" +
//   city.value +
//   "&zip=" +
//   postalCode.value +
//   "&email=" +
//   emailLog.value +
//   "&password=" +
//   password.value
// function validateDate(dateToValidate){

//   var [year, month, day] = dateToValidate.split("-");
//   var isoFormattedStr = `${year}/${month}/${day}`;
//   var date = new Date(isoFormattedStr);
//   var currentDate = new Date(Date.now());

//   return currentDate >= date
// }
// var currentDate = new Date(Date.now());
// function toMonthDayYear(dateToConv){

//   [year, month, day] = dateToConv.split('-');
//   var dateMDY = [month, day, year].join('/')

//   return dateMDY
// }
