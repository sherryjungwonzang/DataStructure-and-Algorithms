//Climbing Stairs
//takes n steps to reach the top
//each time you can either climb 1 or 2 steps
//in how many distinct ways can you climb to the top?
var climbStairs = (n) => {
    let a = [];
    let sum = 0;

    for (let i = 0; i <= n; i++) {
        let fib = 0;
        if (i === 0 || i === 1) {
            fib = 1;
        } else {
            fib = a[i-1] + a[i-2];
        }
        a.push(fib);
    }
    sum = a[a.length - 1];
    return sum;
};
