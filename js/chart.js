 // Load google charts
 google.charts.load('current', { 'packages': ['corechart'] });
 google.charts.setOnLoadCallback(drawExpensesChart);
 google.charts.setOnLoadCallback(drawBudgetChart);

 // Draw the chart and set the chart values
 function drawExpensesChart() {
     var dataExpenses = google.visualization.arrayToDataTable([
         ['Expense', 'amount'],
         ['Rachunki', 1543.45],
         ['Paliwo', 675.45],
         ['Wydatki podstawowe', 1785.33],
         ['Rozrywka', 326.78],
         ['Inwestycje', 789.56]
     ]);

     // Optional; add a title and set the width and height of the chart
     var options1 = {
         'title': 'Wydatki', 'titleTextStyle': {
             color: '#385623', fontSize: 18, bold: true
         }, 'legend': 'none', 'backgroundColor': '#f2f2f2'
     };

     // Display the chart inside the <div> element with id="piechart"
     var chart = new google.visualization.PieChart(document.getElementById('piechart1'));
     chart.draw(dataExpenses, options1);

     $(window).resize(function () {
        drawExpensesChart();
    });
 }

 function drawBudgetChart() {
     var dataBudget = google.visualization.arrayToDataTable([
         ['Budget', 'amount'],
         ['Pozostały budżet', 250.00],
         ['Wydatki', 3750.00],
     ]);

     // Optional; add a title and set the width and height of the chart
     var options2 = {
         'title': 'Budżet miesięczny', 'titleTextStyle': {
             color: '#385623', fontSize: 18, bold: true
         }, 'legend': 'none', 'backgroundColor': '#f2f2f2'
     };

     // Display the chart inside the <div> element with id="piechart"
     var chart = new google.visualization.PieChart(document.getElementById('piechart2'));
     chart.draw(dataBudget, options2);

     $(window).resize(function () {
        drawBudgetChart();
    });
 }