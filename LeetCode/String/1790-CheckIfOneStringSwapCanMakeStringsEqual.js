//1790. Check If One String Swap Can Make Strings Equal
//given two strings s1 and s2 of equal length
//a string swap is an operation where you choose two indices in a string - not necessarily different
//and swap the characters at these indices
//return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings
//otherwise, return false
var swapMakeEqual = (s1, s2) => {
    //base case
    if (s1 === s2) return true;

    //sorting
    let sorted1 = s1.split('').sort().join();
    let sorted2 = s2.split('').sort().join();

    //base case for sorted
    if (sorted1 !== sorted2) return false;

    let count = 0;

    for (let i = 0; i < s1.length; i++) {
        //find the difference
        if (s1[i] !== s2[i]) count++;

        if (count > 2) return false;
    } 

    return true;
}
swapMakeEqual("bank", "kanb"); //true
//sorted1 = a, b, k, n
//sorted2 = a, b, k, n
//sorted1 = sorted2

swapMakeEqual("attack", "defend"); //false
//sorted1 = a, a, c, k, t, t
//sorted2 = d, d, e, e, f, n
//          ^
//count = 0 -> 1

//             ^
//count = 0 -> 1 -> 2

//                ^
//count = 0 -> 1 -> 2 -> 3 ...

swapMakeEqual("kelb", "kelb"); //true
