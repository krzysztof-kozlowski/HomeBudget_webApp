/*$(document).ready(function () {
  var date_input = $('input[name="date"]'); //our date input has the name "date"
  var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
  date_input.datepicker({
      format: 'mm/dd/yyyy',
      container: container,
      todayHighlight: true,
      autoclose: true,
  })
})*/

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