//131. Palindrome partitioning
//given a string 's', partition 's' such that every substring of the partition is a palindrome
//return all possible palindrome partitioning of s

//Approach:
//using backtracking
var palindromePartition = (s) => {
    let res = [];

    //checking palindrome
    function isPalindrome(str) {
        let left = 0;
        let right = str.length - 1;

        //two pointers
        while (left < right) {
            //not palindrome
            if (str[left] !== str[right]) return false;

            left++;

            right--;
        }

        return true;
    };

    //partitioning
    function partition(start, arr, res) {
        //base case
        if (start === s.length) {
            res.push([...arr]);

            return;
        }

        for (let end = start + 1; end <= s.length; end++) {
            let subStr = s.substring(start, end);

            if (isPalindrome(subStr)) {
                arr.push(subStr);

                //recursive calls
                partition(end, arr, res);

                //backtracking
                arr.pop();
            }
        }
    };

    partition(0, [], res);

    return res;
}
//TC: O(2^n)
palindromePartition("aab"); //[["a", "a", "b"], ["aa", "b"]]

palindromePartition("a"); //[["a"]]
