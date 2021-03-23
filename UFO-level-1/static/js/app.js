// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select('tbody');

// append data to columns and rows
tableData.forEach((sighting) => {
    var row = tbody.append('tr');

    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append('td');
        cell.text(value);
    })
});

var form = d3.select('.form-group');
var button = d3.select('#filter-btn')


button.on('click', runEnter);
form.on('change', runEnter);

function runEnter() {
    d3.event.preventDefault();
    var inputElement = d3.select('#datetime')
    var inputValue = inputElement.property('value');

    console.log(inputValue);
    // console.log(date);

};