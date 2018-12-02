// Make your own here: https://eternicode.github.io/bootstrap-datepicker
$(document).ready(function () {
  var dateSelect = $('#period-datepicker');
  var startDate = $('#start-date');
  var endDate = $('#end-date');
  var spanStart = $('.date-depart');
  var spanEnd = $('.date-return');
  var spanDateFormat = 'YYYY, MM, DD';

  dateSelect.datepicker({
    autoclose: true,
    format: "yyyy/mm/dd",
    maxViewMode: 0,
    startDate: "now"
  }).on('change', function () {
    var start = $.format.date(startDate.datepicker('getDate'), spanDateFormat);
    var end = $.format.date(endDate.datepicker('getDate'), spanDateFormat);
    spanStart.text(start);
    spanEnd.text(end);
  })
});

// ***** VALIDATE THE REGISTER FORM ***** //

function isCorrectValidatedNewUser() {
  var name = isWellFormattedName();
  var login = isAvailableUser();
  var email = isAvailableEmail();
  var password = isWellFormattedPassword();

  if ((name == true) && (login == true) && (email == true) && (password == true)) {
    return true;
  }
  else
    return false;
}

function isWellFormattedName() {
  if (document.getElementById('register-form').name.value.length < 1) {
    document.getElementById('user-name').style.border = '2px solid #ff4d4d';
    return false;
  } else {
    document.getElementById('user-name').style.border = '2px solid #ddd';
    return true;
  }
}

function isAvailableUser() {
  if (document.getElementById('register-form').login.value.length < 1) {
    document.getElementById('user-login-register').style.border = '2px solid #ff4d4d';
    return false;
  } else {
    document.getElementById('user-login-register').style.border = '2px solid #ddd';
    return true;
  }
}

function isAvailableEmail() {
  var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var email = document.getElementById('register-form').email.value;

  if (reg.test(email)) {
    document.getElementById('user-email').style.border = '2px solid #ddd';
    return true;
  } else {
    document.getElementById('user-email').style.border = '2px solid #ff4d4d';
    return false;
  }
}

function isWellFormattedPassword() {
  if (document.getElementById('register-form').password.value.length < 1) {
    document.getElementById('user-password-register').style.border = '2px solid #ff4d4d';
    return false;
  } else {
    document.getElementById('user-password-register').style.border = '2px solid #ddd';
    return true;
  }
}


// ***** VALIDATE THE LOGIN FORM ***** //

function isAccessToUserAccount() {
  var login = isCorrectLogin();
  var password = isCorrectPassword();

  if ((login == true) && (password == true)) {
    return true;
  }
  else
    return false;
}

function isCorrectLogin() {
  if (document.getElementById('login-form').login.value.length < 1) {
    document.getElementById('user-login').style.border = '2px solid #ff4d4d';
    return false;
  } else {
    document.getElementById('user-login').style.border = '2px solid #ddd';
    return true;
  }
}

function isCorrectPassword() {
  if (document.getElementById('login-form').password.value.length < 1) {
    document.getElementById('user-password').style.border = '2px solid #ff4d4d';
    return false;
  } else {
    document.getElementById('user-password').style.border = '2px solid #ddd';
    return true;
  }
}