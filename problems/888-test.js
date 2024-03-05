function recVolume(height)
{
    let volume = height;

    // Define a function within the outer function (closure)
    function calculateVolume(side)
    {

        // Multiply the current volume by the new side
        volume *= side;

        // If all three dimensions are provided, return the calculated volume
        if (volume !== height)
        {
            return volume;
        } else
        {
            // If only the height is provided, return the function for the next dimension
            return calculateVolume;
        }
    }
    // Return the closure
    return calculateVolume;

}

let table1 = recVolume(5); // returns a function
table1(4); // returns a function
console.log(table1(3)); // prints 60
console.log(table1(145)); // STILL prints 60