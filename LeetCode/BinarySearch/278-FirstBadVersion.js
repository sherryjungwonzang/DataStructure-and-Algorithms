//278. First Bad Version
//you are a PM and currently leading a team to develop a new product
//unfortunately, the latest version of your product fails the quality check
//since each version is developed based on the previous version, all the version after a bad version are also bad

//suppose you have n version [1, 2, ..., n] and you want to find out the first bad one, which causes all the followiung ones to be bad
//given an API bool isBadVersion(version) which returns whether version is bad or not
//implement a function to find the first bad version
//should minimize the number of calls to the API

//Approach:
//using binary search
var firstBadVersion = (isBadVersion) => {
    return function (n) {
        let left = 1;
        let right = n;

        //binary search
        while (left < right) {
            let mid = Math.floor(left + (right - left) / 2);

            if (isBadVersion(mid)) right = mid; //left side of the mid
            else left = mid + 1; //right side of the mid
        }

        return left;
    };
} 
firstBadVersion(n = 5, bad = 4); // 4
//call isBadVersion(3) -> false
//call isBadVersion(5) -> true
//call isBadVersion(4) -> true
//Then 4 is the first bad version

firstBadVersion(n = 1, bad = 1); // 1
