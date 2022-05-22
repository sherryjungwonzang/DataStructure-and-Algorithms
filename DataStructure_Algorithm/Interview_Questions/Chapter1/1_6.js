//1.6 String Compression
//to perform basic string compression using the counts of repeated characters


//O(n) time and O(n) space
function compressString(string) {
    const array = [];
    let freqCount = 0;

    for (let i = 0; i < string.length; i++) {
        freqCount++;
        if(string[i] !== string[i + 1] || i === string.length - 1) {
            array.push(string[i], freqCount)
            freqCount = 0;
        }
    }
    const compressed = array.join('');
    
    return string.length < compressed.length ? string : compressed
}


//another solution
var strComp = (string) => {
    var compressed = '';
    var currChar = '';
    var currCount = '';
    var maxCount = 1;

    for (var i = 0; i < string.length; i++) {
        if (currChar !== string[i]) {
            console.log(currChar, string[i], i);
            compressed = compressed + currChar + currCount;
            maxCount = Math.max(maxCount, currCount);
            currChar = string[i];
            currCount = 1;
        } else {
            currCount++;
        }
    }
    compressed = compressed + currChar + currCount;
    maxCount = Math.max(maxCount, currCount);

    return maxCount === 1 ? string: compressed;
};

console.log('aaaaaa', strComp('aaaaaa')); //a6
console.log('aabccccccaaa', strComp('aabccccccaaa')); //a2b1c6a3

