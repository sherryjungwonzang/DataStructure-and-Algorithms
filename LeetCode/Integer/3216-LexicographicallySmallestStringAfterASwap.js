//3216. Lexicographically Smallest String After A Swap
//given a string s containing only digits, return the lexicographically smallest string
//that can be obtained after swapping adjacent digits in s with the same parity at most once
//digits have the same parity if both are odd or both are even
//for example, 5 and 9, as well as 2 and 4, have the same parity, while 6 and 9 do not
var lexicographicallySmallestStr = (s) => {
    let arr = s.split('');
    let m = s.length;

    //traversing
    for (let i = 0; i < m - 1; i++) {
        //checking parity
        if(arr[i] % 2 === arr[i + 1] % 2) {
            //appears earlier
            if (arr[i + 1] < arr[i]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];

                break;
            }
        }
    }

    return arr.join('');
}
//TC: O(n)
//SC: O(n)
lexicographicallySmallestStr("45320"); //"43520"
//i = 0
//arr = [4, 5, 3, 2, 0]
//       ^
//4 % 2 = 0 != 5 % 2 = 1 -> not same parity

//i = 1
//arr = [4, 5, 3, 2, 0]
//          ^
//5 % 2 = 1 = 3 % 2 = 1 -> same parity
//arr[2] = 3 < arr[2] = 5 -> need swapping
//[4, 5, 3, 2, 0] -> [4, 3, 5, 2, 0]

//[4, 3, 5, 2, 0] -> "43520"

lexicographicallySmallestStr("001"); //"001"
