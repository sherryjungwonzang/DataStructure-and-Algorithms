//1283. Find the smallest divisor given a threshold
//given an array of integers nums and an interger threshold
//we will chooose a positive integer 'divisor'
//divide all the array by it and sum the division's result

//find the smallest divisor such that the result mentioned above is less than or equal to threshold
//each result of the division is rounded to the nearest integer greater than or equal to that element

//Approach:
//using binary seearch
var smallestDivisor = (nums, threshold) => {
    let left = 1;
    let right = Math.max(...nums);

    //calculating the divisions sum
    function sumDivision(div) {
        let sum = 0;

        for (let num of nums) {
            sum += Math.ceil(num / div);
        }
        return sum;
    };

    //binary search
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        //comparing with threshold
        if (sumDivision(mid) <= threshold) right = mid - 1;
        else left = mid + 1;
    }

    return left; //representing minimum threshold
}
smallestDivisor([1,2,5,9], 6); //5
//We can get a sum to 17 (1+2+5+9) if the divisor is 1
//If the divisor is 4 we can get a sum of 7 (1+1+2+3) and if the divisor is 5 the sum will be 5 (1+1+1+2)

smallestDivisor([44,22,33,11,1], 1); //44
