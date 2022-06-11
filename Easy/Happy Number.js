//Happy Number
//to determine if a number n is happy
//return true if n is a happy num and false if not

//happy number is a num defined by:
/*
-starting with any positive integer, replace the num by the sum of the squares of its digits
-repeat the process until the num equals 1 or it loops endlessly in a cycle which doesnt include 1
-those numbers for which this process ends in 1 are happy
*/

//Approach: using Set()
const isHappy = (n) => {
    let cur = n;
    let curSet = new Set();

    while(cur !== 1 && !curSet.has(cur)) {
        curSet.add(cur);
        cur = (cur + '').split('').map(num => (num - 0) ** 2).reduce((sum, num) => sum += num);
    }
    return cur === 1;
}


//Approach:  Floyd's Cycle Finding
//Tortoise and Hare algorithm
const isHappy = (n) => {
    if (n === 1) return true;

    let tortoise = n;
    let hare = getNext(n);
    while(hare !== 1 && tortoise !== hare) {
        tortoise = getNext(tortoise);
        hare = getNext(getNext(hare));
    }
    return tortoise !== hare;
}

function getNext(n) {
    return (n + '').split('').map(num => (num - 0) ** 2).reduce((sum, num) => sum += num);
}


//another solution
var isHappy = (n) => {
    if (n <= 0) return false;

    let nextNum = n;
    let Nums = []; //array

    while(!Nums.includes(nextNum)) {
        Nums.push(nextNum);

        let numArr = nextNum.toString().split("");
        nextNum = 0;

        for (let num of numArr) {
            nextNum += Number(num) * Number(num);
        }

        if (nextNum === 1) return true;
    }
    return false;
}

//another solution: Using Map
var isHappy = (n) => {
    var map = {};
    var num;

    while(!map[n]) {
        map[n] = true;

        num = 0;
        while(n > 0) {
            num += (n % 10) * (n % 10);
            n = Math.floor(n / 10);
        }

        if (num === 1) {
            return true;
        }
        n = num;
    }
    return false;
};
