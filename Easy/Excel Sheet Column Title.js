//Excel Sheet Column Title
//given an integer columnNumber
//return its corresponding column tile
/*
ex:
A->1, B->2, C->3...Z->26, AA->27, AB->28...
*/
var convertToTitle = (columnNumber) => {
    let result = '';

    while(columnNumber > 0) {
        //find modulus over 26 to find position of next letter in sequence
        //if modulus is 0, it evenly divides by 26, so should show "Z"
        const letter = columnNumber % 26 || 26;

        //since char codes start at 65, we can add modulus to 64
        //we are working backwards, so we should prepend this to the result
        result = String.fromCharCode(64 + letter) + result; //convert Unicode values to characters
        columnNumber = (columnNumber - letter) / 26;
    }
    return result;
}



//another solution
var convertToTitle = (columnNumber) => {
    //column letter = 26 * position of prev letter + position of currletter
    let letter = 0;
    let str = "";

    while(columnNumber > 0) {
        //position of current letter
        letter = columnNumber % 26;

        //to accommodate for letter Z, will have no remainder
        if (letter === 0) letter = 26;

        //find number before the current letter was added
        columnNumber = (columnNumber - letter) / 26;
        str = String.fromCharCode(letter + 64) + str;
    }
    return str;
}
