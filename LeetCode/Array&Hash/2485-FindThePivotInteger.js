//2485. Find The Pivot Integer
//given a positive integer n
//find the pivot integer x such that:
//the sum of all elements between 1 and x inclusively equals the sum of all ements between x and n inclusively
//return the pivot integer x
//if no such integer exists, return -1
var pivotInteger = (n) => {
    for (let i = 1; i <= n; i++) {
        if (sum(1, i) === sum(i, n)) return i;
    }

    //collecting all total sum from left and right
    function sum(start, end) {
        let total = 0;

        for (let i = start; i <= end; i++) total += i;

        return total;
    }

    return -1;
}
pivotInteger(8); //6 - 1 + 2 + 3 + 4 + 5 + 6 = 6 + 7 + 8 = 21
//sum(1, 1): total = 0 -> 1
//sum(1, 8): total = 0 -> 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 
//sum(1, 1) != sum(1, 8)

//sum(1, 2): total = 0 -> 1 -> 3
//sum(2, 8): total = 0 -> 2 + 3 + 4 + 5 + 6 + 7 + 8 
//sum(1, 2) != sum(2, 8)

//sum(1, 3): total = 0 -> 1 -> 3 -> 6
//sum(3, 8): total = 0 -> 3 + 4 + 5 + 6 + 7 + 8 
//sum(1, 3) != sum(3, 8)

//sum(1, 4): total = 0 -> 1 -> 3 -> 6 -> 10
//sum(4, 8): total = 0 -> 4 + 5 + 6 + 7 + 8 
//sum(1, 4) != sum(4, 8)

//sum(1, 5): total = 0 -> 1 -> 3 -> 6 -> 10 -> 15
//sum(5, 8): total = 0 -> 5 + 6 + 7 + 8 
//sum(1, 5) != sum(5, 8)

//sum(1, 6): total = 0 -> 1 -> 3 -> 6 -> 10 -> 15 -> 21
//sum(6, 8): total = 0 -> 6 + 7 + 8 = 21
//sum(1, 6) = sum(6, 8)

pivotInteger(1); //1 - 1 = 1

pivotInteger(4); //-1
