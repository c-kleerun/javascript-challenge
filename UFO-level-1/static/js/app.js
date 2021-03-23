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

