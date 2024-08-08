//1306. Jump Game3
//given an array of non-negative integers 'arr'
//you are initially positioned at start index of the array
//when you are at index i - you can jump to i + arr[i] or i - arr[i]
//check if you can reach any index with value 0

//Approach:
//using BFS with queue
var jumpGame3 = (arr, start) => {
    let n = arr.length;
    let queue = [start];
    let visited = Array(n).fill(false); //to tack the possible ways to reach out to the index which is '0'

    //BFS
    while (queue.length) {
        let curr = queue.shift();
        let next = [];

        if (arr[curr] === 0) return true //base case
        //setting the next
        if (curr + arr[curr] < n) next.push(curr + arr[curr]);
        if (curr - arr[curr] >= 0) next.push(curr - arr[curr]);

        for (let n of next) {
            if (!visited[n]) {
                visited[n] = true;
                queue.push(n);
            }
        }
    }

    return false;
}
jumpGame3(arr = [4,2,3,0,3,1,2], start = 5); //true
//All possible ways to reach at index 3 with value 0 are: 
//index 5 -> index 4 -> index 1 -> index 3 
//index 5 -> index 6 -> index 4 -> index 1 -> index 3 

//visited = [F, F, F, F, F, F, F]
//queue = [ 5, ]
//curr = [ 5 ]
//5 + 1 = 6 < 7
//5 - 1 = 4 >= 0
//next = [6, 4]
//visited = [F, F, F, F, T, F, T]
//queue = [ 6, 4 ]

//queue = [ 6, 4 ]
//curr = [ 5 || 6 ]
//6 + 2 = 8 > 7
//6 - 2 >= 4 >= 0
//next = [4, ]
//curr = [ 5 || 6, 4 ]
//4 + 3 = 7 = 7
//4 - 3 >= 1 >= 0
//next = [4, 1]
//visited = [F, T, F, F, T, F, T]
//queue = [ 1 ]

//queue = [ 1 ]
//curr = [ 5 || 6, 4 || 1, ]
//1 + 2 = 3 < 7
//1 - 2 < 0
//next = [ 3 ]
//visited = [F, T, F, T, T, F, T]
//queue = [ 3 ]

//queue = [ 3 ]
//curr = [ 5 || 6, 4 || 1 || 3 ]
//3 + 0 = 3 < 7
//3 - 0 = 3 >= 0
//next = [ 3 ]
//visited = [F, T, F, T, T, F, T]

//True

jumpGame3(arr = [3,0,2,1,2], start = 2); //false
//There is no way to reach at index 1 with value 0

jumpGame3(arr = [4,2,3,0,3,1,2], start = 0); //true
//One possible way to reach at index 3 with value 0 is: 
//index 0 -> index 4 -> index 1 -> index 3
