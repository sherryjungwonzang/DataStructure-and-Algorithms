//1.2 Check permutation
//given two strings, wrtie a method to decide if one is a permutation of the other

var checkPermutation = (string1, string2) => {
    //if different lengths, return false
    if (string1.length !== string2.length) {
        return false;
    } else {
        //sort and compare
        var sortedString1 = string1.split('').sort().join('');
        var sortedString2 = string2.split('').sort().join('');
        
        return sortedString1 === sortedString2;
    }
};

console.log(checkPermutation('aba', 'aab')); //true
console.log(checkPermutation('aba', 'aaba')); //false
console.log(checkPermutation('aba', 'aa')); //false
