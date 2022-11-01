/*
File: js/script.js
GUI Assignment: Creating an Interative Dynamic Table
Halleluia Zeyohannes, UMass Lowell Computer Science, 
halleluia_zeyohannes@student.uml.edu
Copyright (c) 2022 by Halleluia Zeyohannes. All rights reserved. May be freely
copied or excerpted for educational purposes with credit to the author.
updated by HZ on October 19, 2022 at 2PM

Purpose:
*/
function alwaysFalse()
{
    return false;
}

function validate(multiplierMin, multiplierMax, multiplicandMin, multiplicandMax)
{
    console.log("Multiplier: ", multiplierMin, " to ", multiplierMax);
    console.log("Multiplicand: ", multiplicandMin, " to ", multiplicandMax);

    var valid = true;
    var multiplierError = document.getElementById('multiplier-error');
    var multiplicandError = document.getElementById('multiplicand-error');

    if(multiplierMin > multiplierMax)
    {
        multiplierError.textContent = "ERROR: The minimum must be less than or equal to the maximum";
        valid = false
    }
    else
    {
        multiplierError.textContent = "";
        valid = true;
    }
    if(multiplicandMin > multiplicandMax)
    {
        multiplicandError.textContent = "ERROR: The minimum must be less than or equal to the maximum";
        valid = false
    }
    else
    {
        multiplicandError.textContent = "";
        valid = true;
    }
    return valid;
}

function buildTable()
{
    var horizMin = Number(document.getElementById('multiplier-min').value);
    var horizMax = Number(document.getElementById('multiplier-max').value);
    var vertMin = Number(document.getElementById('multiplicand-min').value);
    var vertMax = Number(document.getElementById('multiplicand-max').value);

    validate(horizMin, horizMax, vertMin, vertMax);
}
/*
function generateTable(multiplierMin, multiplierMax, multiplicandMin, multiplicandMax)
{
    
    var table = document.createElement('table');
    table.id = 'table';
    var headerX = true;  //  keeps track of table cells in first row
    var headerY = true;  //  keeps track of table cells in first column

    for(var row = multiplicandMin - 1; row <= multiplicandMax; row++)
    {
        var tableRow = document.createElement('tr');  // create new table row
        for(var column = multiplierMin - 1; column <= multiplierMax; column++)
        {
            var cell;  // to contain the element of the cells in the table
            var content;  // to contain the contents of each cell
            if(headerX)
            {
                cell = document.createElement('th');
                if(headerY == false)
                {
                    content = document.createTextNode(column);
                    cell.appendChild(content);
                }
            }
            else
            {
                if(headerY)
                {
                    cell = document.createElement('th');
                    content = document.createTextNode(row);
                    cell.appendChild(content);
                }
                else{
                    cell = document.createElement('td');
                    content = document.createTextNode(row*column);
                    cell.appendChild(content);
                }
            }
            tableRow.appendChild(cell);
            headerY = false;
        }
        table.appendChild(tableRow);
        headerX = false;
        headerY = true;
    }

    return table
}*/