//Recursion & Recursive algorithm
//recursion: calling itself through "divide-and-conquer" method

//Base case
//there are no recursive function calls

//ex: count down to zero
//when n is smaller or equal to 0
//if a negative number is given as the input, it will not print that number
function countDownToZero(n) {
    //base case
    //stop at 0
    if (n < 0) {
        return; //stop the function
    } else {
        console.log(n);
        countDownToZero(n - 1); //count down 1
    }
}
countDownToZero(12);


//Divide-and-Conquer method
//when a problem is solved by solving all of its smaller components
//to make the problem smaller to reach the base case

//ex: Fibonacci sequence
//1,1,2,3,5,8,13,21...

//1. Iterative Solution
//using a for loop
function getNthFibo(n) {
    if (n <= 1) return n;

    var sum = 0;
    var last = 1;
    var lastlast = 0;

    //for loop is used to keep track of the last two elements of fibo sequence
    //its sum yields fibo number
    for (var i = 1; i < n; i++) { 
        sum = lastlast + last;
        lastlast = last;
        last = sum;
    }
    return sum;
}

//2. Recursive Solution
function getNthFibo(n) {
    if (n <= 1) {
        return n;
    } else {
        return getNthFibo(n - 1) + getNthFibo(n - 2);
    }
}

//3. Divide and conquer Solution
//Tail recursion
//the last executred thing in the function

//from the iterative solution, (lastlast, last) = (last, lastlast+last) happens
function getNthFiboBetter(n, lastlast, last) {
    if (n == 0) {
        return lastlast;
    }

    if(n == 1) {
        return last;
    }
    return getNthFiboBetter(n-1, last, lastlast, + last);
}
//Time Complexity: O(n)
//executes n times because it is decremented by n-1 each time with only single recursive calls
//Space Complexity: O(n)
//because of the stack call used for this function

//Base case Solution
//the top element: row=1, col=1 is 1
//everything is derived from this fact
//when the column is 1, return 1
//when the row is 0, return 0


//Divide and Conquer Solution
//defined as the sum of its upper terms
//pascalTriangle(row - 1, col) + pascalTriangle(row - 1, col - 1)
function pascalTriangle(row, col) {
    if (col == 0) {
        return 1;
    } else if (row ==0) {
        return 0;
    } else {
        return pascalTriangle(row-1, col) + pascalTriangle(row-1 + col-1);
    }
}
pascalTriangle(5,2); //10
