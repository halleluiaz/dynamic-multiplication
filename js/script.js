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

function validate()
{
    validForm = false;

    multiplierMin = document.getElementById("multiplier-min").value;
    multiplierMax = document.getElementById("multiplier-max").value;
    if(multiplierMin > multiplierMax)
    {
        error = document.getElementById("multiplier-error");
        error.textContent = "ERROR: The minimum must be less than or equal to the maximum";
        console.log(multiplierMin, " ,", multiplierMax);
    }

    return false;
}
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
}