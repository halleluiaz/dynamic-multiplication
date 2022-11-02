/*
File: js/script.js
GUI Assignment: Creating an Interative Dynamic Table
Halleluia Zeyohannes, UMass Lowell Computer Science, 
halleluia_zeyohannes@student.uml.edu
Copyright (c) 2022 by Halleluia Zeyohannes. All rights reserved. May be freely
copied or excerpted for educational purposes with credit to the author.
updated by HZ on October 31, 2022 at 11PM

Purpose:
*/
function validate(multiplierMin, multiplierMax, multiplicandMin, multiplicandMax)
{
    var valid = true;
    var multiplierError = document.getElementById('multiplier-error');
    var multiplicandError = document.getElementById('multiplicand-error');
    multiplierError.textContent = "";
    multiplicandError.textContent = "";

    if(isNaN(multiplierMin) || isNaN(multiplierMax))
    {
        multiplierError.textContent += "\nERROR: The inputs must be a whole, numerical value.";
        valid = false;
    }

    if(isNaN(multiplicandMin) || isNaN(multiplicandMax))
    {
        multiplicandError.textContent += "\nERROR: The inputs must be a whole, numerical value.";
        valid = false;
    }

    if(multiplierMin > 50 || multiplierMin < -50)
    {
        multiplierError.textContent += "\nERROR: Minimum must be from -50 to 50."
        valid = false;
    }

    if(multiplierMax > 50 || multiplierMax < -50)
    {
        multiplierError.textContent += "\nERROR: Maximum must be from -50 to 50."
        valid = false;
    }

    if(multiplicandMin > 50 || multiplicandMin < -50)
    {
        multiplicandError.textContent += "\nERROR: Minimum must be from -50 to 50."
        valid = false;
    }

    if(multiplicandMax > 50 || multiplicandMax < -50)
    {
        multiplicandError.textContent += "\nERROR: Maximum must be from -50 to 50."
        valid = false;
    }

    if(multiplierMin > multiplierMax)
    {
        multiplierError.textContent = "\nERROR: The minimum must be less than or equal to the maximum.";
        valid = false
    }

    if(multiplicandMin > multiplicandMax)
    {
        multiplicandError.textContent += "\nERROR: The minimum must be less than or equal to the maximum.";
        valid = false
    }

    return valid;
}

function buildTable()
{
    var minX = parseInt(document.getElementById('multiplier-min').value, 10);
    var maxX = parseInt(document.getElementById('multiplier-max').value);
    var minY = parseInt(document.getElementById('multiplicand-min').value, 10);
    var maxY = parseInt(document.getElementById('multiplicand-max').value, 10);

    var accept = validate(minX, maxX, minY, maxY);
    console.log(accept);
    if(accept == true)
    {
        //event.preventDefault();
    var table = "";
    table += "<table>";
    var headerX = true;
    var headerY = true;

    for(var row = minY - 1; row<= maxY; row++)
    {
        table += "<tr>";
        for(var column = minX - 1; column <= maxX; column++)
        {
            if(headerX == true)
            {
                table += "<th class='xHeader'>";
                if(headerY == false)
                {
                    table += column + "</th>";
                }
            }
            else
            {
                if(headerY == true)
                {
                    table += "<th class='yHeader'>" + row + "</th>";
                    
                }
                else
                {
                    table += "<td class='table-body'>" + (row*column) + "</td>";
                }
            }
            headerY = false;
        }
        table += "</tr>";
        headerX = false;
        headerY = true;
    }
    table += "</table>";
    document.getElementById('multiplication-table').innerHTML = table;
    }



    event.preventDefault();
}