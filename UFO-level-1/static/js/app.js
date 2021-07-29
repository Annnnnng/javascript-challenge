// from data.js
var tableData = data;
// YOUR CODE HERE!

function makeTable(tableData) {
// Get a reference to the table body
var tbody = d3.select("tbody");
tbody.html("");
// Console.log the data from data.js
console.log(tableData);

// Loop Through `data` and console.log each UFO object
tableData.forEach(function(UFOdata) {
    console.log(UFOdata);
    // Use d3 to append one table row `tr` for each UFO object
    var row = tbody.append("tr");
    // Use `Object.entries` to console.log each UFO value
    Object.entries(UFOdata).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value in the UFO object
        var cell = row.append("td");
        //Use d3 to update each cell's text with UFO values
        cell.text(value);
    });
  });
};
// create event to search through date
// Select the button
var button = d3.select("#filter-btn");
// Select the form
var form = d3.select("#form");
// Create event handler
button.on("click", runEnter);
form.on("submit", runEnter);
// Complete the event handler function for the form
function runEnter() {
    // Prevent the page from refreshing
   // d3.event.preventDefault();
// Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    var inputElement = d3.selectAll("input");
// Get the value property of the input element
    var inputValue = inputElement.property("value");
    
// filter data by date input
    var filteredData;
    if (inputValue) {
        filteredData = tableData.filter(rowdata => rowdata["datetime"] == inputValue);  
     console.log(filteredData);
    }
    // Display the entire table if inputvalue does not match items in the table
    else {
        filteredData = tableData
    };
    // Call the makeTable function to display the filterred data
    makeTable(filteredData);
};
// Call the makeTable function to display the entire table
makeTable(tableData);

