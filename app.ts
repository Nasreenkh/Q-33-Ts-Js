// Store the numbers 1 through 9 in an array
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array
numbers.forEach(number => {
    let ordinal: string;

    // Determine the proper ordinal ending based on the number
    if (number === 1) {
        ordinal = "st";
    } else if (number === 2) {
        ordinal = "nd";
    } else if (number === 3) {
        ordinal = "rd";
    } else {
        ordinal = "th";
    }

    // Print the number with its ordinal ending
    console.log(`${number}${ordinal}`);
});