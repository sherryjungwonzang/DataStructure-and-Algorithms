//There are two strings: needle and haystack
//There should be three outputs:
//1. index: the index of the first occurence of needle in haystack
//2. -1: needle is not part of haystack
//3. 0: when needle is an empty string

//The first code
var strStr = (haystack, needle) => {
    if (needle === '') return 0

    if (needle.length > haystack.length) return -1

    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        if (haystack[i] !== needle[0]) continue
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i+j] !== needle[j]) break
            if (j === needle.length - 1) return i
        }
    }
    return -1
};



//The second version code
var strStr = (haystack, needle) => {
    if (needle === '') return 0

    for (let i = 0; i < haystack.length; i++) {
        if (haystack [i] === needle[0]) {
            let isMatch = true;

            for (let j = 1; j< needle.length; j++) {
                if (haystack[i+j] !== needle[j]) {
                    isMatch = false;
                }
            }
            if (isMatch) return i
        }
    }
    return -1
};
