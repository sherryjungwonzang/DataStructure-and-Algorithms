//1304. Find N Unique Integers Sum Up To Zero
//given an integer n
//return any array containing n unique integers such that they add up to 0
var sumZero = (n) => {
    let sum = 0;
    let res = [];

    for (let i = 1; i < n; i++) {
        res.push(i);

        //to check the sum to 0
        sum += i;
    }

    res.push(-sum);

    return res;
}
sumZero(5); //[1,2,3,4,-10]
//i = 1 -> sum = 0 -> 1
//res = [ 1, ]

//i = 2 -> sum = 0 -> 1 -> 3
//res = [ 1, 2, ]

//i = 3 -> sum = 0 -> 1 -> 3 -> 6
//res = [ 1, 2, 3, ]

//i = 4 -> sum = 0 -> 1 -> 3 -> 6 -> 10
//res = [ 1, 2, 3, 4, ]

//sum = 0 -> 1 -> 3 -> 6 -> 10 && adding -sum to make zero
//res = [ 1, 2, 3, 4, -10]

sumZero(3); //[1,2,-3]

sumZero(1); //[0]
