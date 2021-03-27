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

var form = d3.selectAll('.filter')

form.on('change', runEnter);
var values = {}

function runEnter() {
    d3.event.preventDefault();
    var filteredData = tableData
    var inputElement = d3.select(this).select('input');
    var inputValue = inputElement.property('value');
    var inputID = inputElement.attr('id')
    values[inputID] = inputValue

    console.log(values)
    Object.entries(values).forEach(([key, value]) => {
        filteredData = filteredData.filter(date => date[key] === value);
    })
    console.log(filteredData)

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
