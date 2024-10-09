//2094. Finding 3-Digit Even Numbers
//you are given an integer array digits, where each element is a digit - The array may contain duplicates

//you need to find all the unique integers that follow the given requirements:
//the integer consists of the concatenation of three elements from digits in any arbitrary order
//the integer does not have leading zeros
//the integer is even
//for example, if the given digits were [1, 2, 3], integers 132 and 312 follow the requirements
//return a sorted array of the unique integer

//Approach:
//using backtracking and set
var evenNum3digit = (digits) => {
    let set =  new Set();
    let isUsed = new Array(digits.length).fill(false);

    function backtrack(digits, index, curr, isUsed, set) {
        //already founnd 2 digits
        if (index === 3) {
            let val = parseInt(curr);

            set.add(val);

            return;
        }

        //backtracking
        for (let i = 0; i < digits.length; i++) {
            //validating
            if (isUsed[i] || (index === 0 && digits[i] === 0) || (index === 2 && digits[i] % 2 !== 0)) continue;

            //resetting
            isUsed[i] = true;

            backtrack(digits, index + 1, curr + digits[i], isUsed, set);
            
            isUsed[i] = false; //for another backtracking
        }
    };

    backtrack(digits, 0, '', isUsed, set);

    //sorting
    return Array.from(set).sort((a, b) => a - b);
}
evenNum3digit([2,1,3,0]); //[102,120,130,132,210,230,302,310,312,320]

evenNum3digit([2,2,8,8,2]); // [222,228,282,288,822,828,882]

evenNum3digit([3,7,5]); //[]
