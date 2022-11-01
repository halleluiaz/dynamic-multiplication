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
    //console.log("Multiplier: ", multiplierMin, " to ", multiplierMax);
    //console.log("Multiplicand: ", multiplicandMin, " to ", multiplicandMax);

    var valid = true;
    var multiplierError = document.getElementById('multiplier-error');
    var multiplicandError = document.getElementById('multiplicand-error');

    if(multiplierMin == "")
    {
        document.getElementById('multiplier-min').focus();
        multiplierError.textContent = "This field is required.";
        valid = false;
    }
    else
    {
        multiplierError.textContent = "";
        valid = true;   
    }
    if(isNaN(multiplierMin))
    {
        document.getElementById('multiplier-min').focus();
        multiplierError.textContent = "This field must be a numerical number &isin [-50, 50].";
        valid = false;
    }
    else
    {
        multiplierError.textContent = "";
        valid = true;   
    }
    if(multiplierMax == "")
    {
        multiplierError.textContent = "This field is required.";
        valid = false;
    }
    else
    {
        multiplierError.textContent = "";
        valid = true;   
    }
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
    var minX = document.getElementById('multiplier-min').value;
    var maxX = document.getElementById('multiplier-max').value;
    var minY = document.getElementById('multiplicand-min').value;
    var maxY = document.getElementById('multiplicand-max').value;

    /*var accept = validate(minX, maxX, minY, maxY);
    if(accept == false)
    {
        return;
    }*/

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
                table += "<th>";
                if(headerY == false)
                {
                    table += column + "</th>";
                }
            }
            else
            {
                if(headerY == true)
                {
                    table += "<th>" + row + "</th>";
                    
                }
                else
                {
                    table += "<td>" + (row*column) + "</td>";
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

    event.preventDefault();
}