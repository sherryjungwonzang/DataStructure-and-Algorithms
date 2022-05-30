//sqrt(x)
//given a non-negative integer x 
//compute and return the square root of x
//the decimal digits are truncated
//the only integer part of the result is returned

//binary search algorithm
function mySqrt(x) {
    //create left, right pointer
    //create variable to store mid integer
    let start = 0;
    let end = x;
    let result = 0;

    //while start is before or equal to num
    while(start <= end) {
        //create middle pointer
        let mid = Math.floor((start + end) / 2);

        //if num is greater than mid * mid
        if (x < mid * mid) {
            end = mid - 1;
        } else {
            //result equals middle num which holds overall answer
            //and uses less memory  
            result = mid;

            //else, move start up 1
            start = mid + 1;
        }
    }
    return result; //storing the mid number after loop ends
}
