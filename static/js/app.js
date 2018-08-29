//from data.js
var tableData = data;
// //testing
// var table = '';
// var rows = 2;
// for (var r = 0; r<rows;r++)


// Get a reference to the table body
var tbody = d3.select("tbody");
//
// Set variable to  date and time
var ufoDate = new data();
ufoDate;


console.log(data);
//
// d3.js('data', function (error,data) {
//
  // function tabulate(data, columns) {
	// 	var table = d3.select('body').append('table')
	// 	var thead = table.append('thead')
	// 	var	tbody = table.append('tbody');
//

function tableCreate(){
  var table = document.createElement('table');
//  var tbl = d3.select('plot');
//  var tbl = document.select

  for (var i = 0; i < data.length; i++)
  console.log(i);

  var row = document.createElement('tr');
  //tbl.append(row);
  var keys = Object.keys(data[i]);
  console.log(keys);
  keys.forEach(function(k){
    var td = document.createElement('td');
    td.textContent(data[i][k]);
    tr.appendChild(td);
  });
  //tr.appendChild(td);

  //tbl.appendChild(tr);
}
tableCreate();
