//386. Lexicographical Numbers
//given an integer n
//return all the numbers in the range [1, n] sorted in lexicographical order
//must write an algorithm that runs in O(n) time and uses O(1) extra space

//Approach:
//using DFS
var lexicographicalNum = (n) => {
    let res = [];

    //DFS
    function dfs(start, end) {
        while (start <= end && start <= n) {
            res.push(start);

            //recursive call
            dfs(start * 10, start * 10 + 9);

            start++;
        }
    }

    dfs(1, 9);

    return res;
}
lexicographicalNum(13); //[1,10,11,12,13,2,3,4,5,6,7,8,9]
//starting with dfs(1, 9)
//res = [ 1, ]
//dfs(1 * 10, 1 * 10 + 9) = dfs(10, 19)

//10 <= 13 -> dfs(10, 19)
//res = [ 1, 10, ]
//dfs(10 * 10, 10 * 10 + 9) = dfs(100, 109)

//100 > 13 -> break

//back to dfs(2, 9)
//res = [ 1, 10, 2, ]
//dfs(2 * 10, 2 * 10 + 9) = dfs(20, 29) -> 20 > 13 -> break

//back to dfs(3, 9)
//res = [ 1, 10, 2, 3, ]
//dfs(3 * 10, 3 * 10 + 9) = dfs(30, 39) -> 30 > 13 -> break
//...
//res = [ 1, 10, 2, 3, 4, 5, 6, 7, 8, 9 ]

lexicographicalNum(2); //[1,2]
