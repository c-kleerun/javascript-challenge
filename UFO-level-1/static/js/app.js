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

var button = d3.select('#filter-btn')
var form = d3.select('#form');

button.on('click', runEnter);
form.on('submit', runEnter);

function runEnter() {
    d3.event.preventDefault();
    var inputElement = d3.select('#datetime')
    var inputValue = inputElement.property('value');

    var filteredData = data.filter(date => date.datetime === inputValue);

    var table = d3.select('tbody')
    table.html('')

    filteredData.forEach((sighting) => {
        var row = tbody.append('tr');

        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append('td');
            cell.text(value);
        })
    });
};
