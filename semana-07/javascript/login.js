window.onload = function () {
  var email = document.getElementById("emailInput");
  var password = document.getElementById("passwordInput");
  var errorEmail = document.getElementById("emailError");
  var errorPassword = document.getElementById("passwordError");

  email.addEventListener("focus", emailFocus, true);
  email.addEventListener("blur", emailBlur, true);
  password.addEventListener("focus", passwordFocus, true);
  password.addEventListener("blur", passwordBlur, true);

  function emailFocus() {
    document.getElementById("emailInput").style.backgroundColor = "";
    errorEmail.style.visibility = "hidden";
  }

  function emailBlur() {
    if (
      !/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
        email.value
      )
    ) {
      document.getElementById("emailInput").style.backgroundColor = "pink";
      errorEmail.style.visibility = "visible";
      errorEmail.style.color = "red";
    }
  }

  function passwordFocus() {
    document.getElementById("passwordInput").style.backgroundColor = "";
    errorPassword.style.visibility = "hidden";
  }
  function passwordBlur() {
    if (
      password == null ||
      password.value.length < 3 ||
      /^\s+$/.test(password.value)
    ) {
      document.getElementById("passwordInput").style.backgroundColor = "pink";
      errorPassword.style.visibility = "visible";
      errorPassword.style.color = "red";
    }
  }
};

function validationEmail() {
  emailValue = document.getElementById("emailInput").value;
  if (
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
      emailValue
    ) &&
    emailValue === "rose@radiumrocket.com"
  ) {
    sessionStorage.setItem("email", emailValue);
    return true;
  } else {
    return false;
  }
}

function validationPassword() {
  password = document.getElementById("passwordInput").value;
  if (password == null || password.length < 3 || password != "BaSP2022") {
    return false;
  } else {
    sessionStorage.setItem("password", password);
    return true;
  }
}

function alertLogin() {
  if (validationEmail() == true && validationPassword() == true) {
    alert("Access granted");
    var url = new URL("https://basp-m2022-api-rest-server.herokuapp.com/login");
    var params = {
      email: sessionStorage.getItem("email"),
      password: sessionStorage.getItem("password"),
    };
    url.search = new URLSearchParams(params).toString();
    fetch(url)
      .then(function (Response) {
        console.log(Response);
        return Response.json();
      })
      .then(function (jsonResponse) {
        console.log(jsonResponse);
      })
      .catch(function (error) {
        console.log("Error: " + error);
      });
  } else {
    alert("Wrong e-mail or password");
  }
}
