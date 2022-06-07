//Excel Sheet Column Number
var titleToNumber = (columnTitle) => {
    let result = 0;
    let length = columnTitle.length;

    for (let i = 0; i < length; i++) {
        result = result * 26;
        result += (columnTitle.charCodeAt(i) - "A".charCodeAt(0) + 1);
    }
    return result;
}

//another solution
const titleToNumber = (columnTitle) => {
    let output = 0;

    for (let i = 0; i < columnTitle.length; i++) {
        const code = columnTitle[i].charCodeAt(0) - 64;
        output = output * 26 + code;
    }
    return output;
}
