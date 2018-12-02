/*
The MIT License (MIT)
Copyright (c) 2012-2018 Dan Grossman
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
*/

// ***** DATE RANGE PICKER ***** //

$(function () {
  var start = moment().startOf('month');
  var end = moment().endOf('month');

  function cb(start, end) {
    $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
  }

  $('#reportrange').daterangepicker({
    startDate: start,
    endDate: end,
    ranges: {
      'Dzisiaj': [moment(), moment()],
      'Wczoraj': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Obecny miesiąc': [moment().startOf('month'), moment().endOf('month')],
      'Poprzedni miesiąc': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
      'Obecny rok': [moment().startOf('year'), moment().endOf('year')],
    }
  }, cb);

  cb(start, end);

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