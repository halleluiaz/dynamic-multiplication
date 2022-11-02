/*
File: js/script.js
GUI Assignment: Creating an Interative Dynamic Table
Halleluia Zeyohannes, UMass Lowell Computer Science, 
halleluia_zeyohannes@student.uml.edu
Copyright (c) 2022 by Halleluia Zeyohannes. All rights reserved. May be freely
copied or excerpted for educational purposes with credit to the author.
updated by HZ on November 1, 2022 at 11PM

Purpose: This scripts contains the functions that builds the dynamic multiplication
table from user input and validates the user input.
*/

/*
validate(..) takes in 4 parameters, containing the user input from the HTML form. These
are then compared with each other/against the critera for the input. If the input
meets all the requirements, true is returned. Otherwise, validate(..) will return
false.
*/
function validate(multiplierMin, multiplierMax, multiplicandMin, multiplicandMax)
{
    var valid = true;  // keeps track of whether or not input is valid
    var multiplierError = document.getElementById('multiplier-error');  // access span by id so that text can be changed for error messages
    var multiplicandError = document.getElementById('multiplicand-error');  // access span by id for errors
    multiplierError.textContent = "";  // ensures that errors from prior input will be cleared
    multiplicandError.textContent = "";

    /*
    The following if statements are largely self explanitary due to their error messages.
    In short, each condition checks if the user input has violated the rules defined by the
    following critera:
        1. Inputs are integers between -50 and 50
        2. No empty inputs
        3. Min values are <= max values
    */
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

/*
buildTable() gets the user input from the HTML form and gives the task of validation
to validate(..). If validate(..) returns true, the structure of the multiplciation
table is built cell by cell and filled out.
*/
function buildTable()
{
    // get user input from HTML form, and use parseInt(..) to get a number or NaN
    var minX = parseInt(document.getElementById('multiplier-min').value, 10);
    var maxX = parseInt(document.getElementById('multiplier-max').value, 10);
    var minY = parseInt(document.getElementById('multiplicand-min').value, 10);
    var maxY = parseInt(document.getElementById('multiplicand-max').value, 10);

    var accept = validate(minX, maxX, minY, maxY);  // determine if user input is valid
    if(accept == true)  // if valid, build table
    {
        var table = "";  // will contain a string of the HTML structure of the table
        table += "<table>";  // insert starting tag for the table
        var headerX = true;  // use to track when in the first row of table
        var headerY = true;  // use to track when in ther first column

        for(var row = minY - 1; row<= maxY; row++)  // # rows = # of cells in a column
        {
            table += "<tr>"; // insert starting tag for a row
            for(var column = minX - 1; column <= maxX; column++)  // # colums = # cells in a row
            {
                if(headerX == true)  // in the horizontal header
                {
                    table += "<th class='xHeader'>";  // insert starting tag for header with class to identify first row
                    if(headerY == false)
                    {
                        table += column + "</th>"; // insert value of cell and closing tag
                    }
                }
                else
                {
                    if(headerY == true)  // in vertical header
                    {
                        table += "<th class='yHeader'>" + row + "</th>";  // insert element for header with class to identify first column
                        
                    }
                    else
                    {
                        table += "<td class='table-body'>" + (row*column) + "</td>"; // insert element for data with class to identify non-header cells
                    }
                }
                headerY = false;
            }
            table += "</tr>"; // insert closing tag for the row
            headerX = false;
            headerY = true;
        }
        table += "</table>"; // insert closing tag for the table
        document.getElementById('multiplication-table').innerHTML = table; // insert table into the HTML structure to display it
    }

    event.preventDefault();  // ensures that page won't reload onclick
}