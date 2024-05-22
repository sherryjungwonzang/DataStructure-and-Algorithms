//1781. Sum of beauty of all substrings
//the beauty of a string is the difference in frequencies between the most frequent and least freuquent characters
//for example, the beauty of "abaacc" is 3-1=2

//given a string 's'
//return the sum of beauty of all of its substrings
var beautySum = (s) => {
    let res = 0;

    for (let i = 0; i < s.length - 2; i++) { //need min 3 chars
        //to track letters frequencies
        let arr = new Array(26).fill(0);

        for (j = i; j < s.length; j++) {
            //a: 97, b: 98, c: 99...
            arr[s[j].charCodeAt(0) - 97]++;

            let min = Number.MAX_VALUE;
            let max = Number.MIN_VALUE;

            //traversing the Array
            for (let k = 0; k < 26; k++) {
                if (arr[k] !== 0) { //ignoring 0
                    min = Math.min(min, arr[k]);
                    max = Math.max(max, arr[k]);
                } 
            }
            res += max - min;
        }
    }
    return res;
}
//TC: O(n^2)
//SC: O(1)
beautySum("aabcb"); //5

beautySum("aabcbaa"); //17
