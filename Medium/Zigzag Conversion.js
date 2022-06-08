//Zigzag Conversion
//given a strings and int numRows
/*
'ABCDEF', numRows: 3
row1-> A       E
row2->   B   D   F
row3->     C
*/

//Approach: making a matrix
var convert = (s, numRows) => {
    //we go down row by row and come back up row by row
    //repeat this process until we have visited all letters
    let matrix = new Array(numRows).fill("");
    let idx = 0;

    while(idx < s.length) {
        //appends the vertical letters
        for (let i = 0; i < numRows; i++) {
            if (idx >= s.length) break;
            matrix[i] += s[idx];
            idx++;
        }
    
        //append the letters in diagonal except the top and bottomw
        for (let i = numRows-2; i > 0; i--) {
            if (idx >= s.length) break;
            matrix[i] += s[idx];
            idx++;
        }
    }
    return matrix.join("");
}
//Time Complexity: O(n) n-> length of s
//Space Complexity: O(n), matrix contains n elements


//approach: to break down the input string in zigzag fashion and recompose row by row
var convert = (s, numRows) => {
    //return the original string if cannot zigzag
    if (numRows === 1 || s.length < numRows) return s;

    let rows = [];
    let converted = '';
    let reverse = false;
    let count = 0;

    //prepare rows
    for (let i = 0; i < numRows; i++) {
        rows[i] = [];
    }

    //reverse the push flow when reaching turning points
    for (let i = 0; i < s.length; i++) {
        rows[count].push(s[i]);
        reverse ? count--: count++;
        if (count === numRows - 1 || count === 0) reverse = !reverse;
    }

    //putting together converted string
    return rows.reduce((converted, cur) => converted + cur.join(''), '');
};


//another solution
var convert = (s, numRows) => {
    const len = s.length;

    if (numRows < 2 || len < numRows) return s;
    
    const rows = new Array(numRows).fill('');
    let reverse = false;
    let count = 0;
    
    for (let i = 0; i < len; i++) {
        rows[count] += s[i];
        reverse ? count--: count++;

        if (count === numRows - 1 || count === 0) reverse = !reverse;
    }
    return rows.join('');
}
