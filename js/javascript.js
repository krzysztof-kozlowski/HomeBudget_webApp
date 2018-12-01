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

function checkForm() {
  var isCorrectLogin = checkLogin();
  var isCorrectPassword = checkPassword();

  if ((isCorrectLogin == true) && (isCorrectPassword == true)) {
    return true;
  }
  else
    return false;
}

function checkLogin() {
  if (document.getElementById('login-form').login.value.length < 1) {
    document.getElementById('user-login').style.border = '2px solid #ff4d4d';
    return false;
  } else {
    document.getElementById('user-login').style.border = '2px solid #ddd';
    return true;
  }
}

function checkPassword() {
  if (document.getElementById('login-form').password.value.length < 1) {
    document.getElementById('user-password').style.border = '2px solid #ff4d4d';
    return false;
  } else {
    document.getElementById('user-password').style.border = '2px solid #ddd';
    return true;
  }
}