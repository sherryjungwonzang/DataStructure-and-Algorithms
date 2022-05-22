//1.3 URLify
//to replace all spaces in a string with %20
//string has sufficient space at the end to hold the additional characters
//given the true length of the string

//O(n) time and O(n) space
function replaceSpaces(string, length) {
    const array = string.split('');
    let spaceCount = 0;
    
    for (let i = 0; i < length; i++) {
        if (array[i] === ' ') spaceCount++;
    }

    //total amount of space needed
    let idx = length + spaceCount * 2;

    for (let i = length - 1; i > -1; i--) {
        const char = array[i];

        if (char === ' ') {
            array[idx - 1] = '0';
            array[idx - 2] = '2';
            array[idx - 3] = '%';
            idx -= 3;
        } else {
            array[idx - 1] = char;
            idx --;
        }
    }
    return array.join('');
}

module.exports = replaceSpaces
