// //from data.js
// var tableData = data;
// // //testing
// // var table = '';
// // var rows = 2;
// // for (var r = 0; r<rows;r++)
//
//
// // Get a reference to the table body
// var tbody = d3.select("tbody");
// //
// // Set variable to  date and time
// var ufoDate = new data();
// ufoDate;
//
//
// console.log(data);

// Get a reference to the table body
var tbody = d3.select("tbody");
// // Assign the data from `data.js` to a descriptive variable
var tableData = data;

// Console.log the ufo data from data.js
console.log(data);

//Loop Through 'data` and console.log each ufo sighting object
data.forEach(function(data) {
  console.log(data);
});

//Use d3 to append one table row `tr` for each weather report object
data.forEach(function(data) {
  console.log(data);
  var row = tbody.append("tr");
});

// Use `Object.entries` to console.log each ufo sighting value
data.forEach(function(data) {
  console.log(data);
  var row = tbody.append("tr");

  Object.entries(data).forEach(function([key, value]) {
    console.log(key, value);
  });
});

//Use d3 to append 1 cell per ufo sighting
data.forEach(function(data) {
  console.log(data);
  var row = tbody.append("tr");

  Object.entries(data).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value in the ufo sightings object
    var cell = tbody.append("td");
  });
});

//Use d3 to update each cell's text with ufo sightings values
function buildTable(data){
tbody.html("");
data.forEach(function(data) {
  //
  console.log(data);
  var row = tbody.append("tr");
  Object.entries(data).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the ufo sightings object
    var cell = tbody.append("td");
    cell.text(value);
  });
});
}
function handleClick() {

  // Prevent the form from refreshing the page
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime").property("value");
  let filteredData = tableData;

  // Check to see if a date was entered and filter the
  // data using that date.
  if (inputElement) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === inputElement);
  }
buildTable(filteredData);
}

console.log(tableData);
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
// // //Refactor to use Arrow Functions
// data.forEach((data) => {
//   var row = tbody.append("tr");
//   Object.entries(data).forEach(([key, value]) => {
//     var cell = tbody.append("td");
//     cell.text(value);
//   });
