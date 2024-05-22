//38. Count And Say
//count and say sequence is a sequence of digit strings defined by the recursive formula:
//countAndSa(1) = "1"
//countAndSay(n) is the way you would "say" the digit string from countAndSay(n - 1), which is then converted into a different digit string

//to determine how you say a digit string,
//split it into the minimal number of substrings such that each substring contains exactly one unique digit
//then for each substring, say the number of digits then say the digit
//finally, concentrate every said digit
//for example, "3322251"
//two 3's, three 2's, one 5, and one 1 -> 23 + 22 + 15 + 11
//"23321511"

//gven a positive integer 'n'
//return the n_th term of the count and say sequence

//Approach:
//using recursive call from the given n
var countAndSay = (n) => {
    if (n === 1) return '1';

    //recursive call
    let nums = countAndSay(n - 1);
    let count = 0; //counts of occurences
    let res = ''; 

    //looping through the string and store count of similar number 
    for (let i = 0; i <= nums.length; i++) {
        //store count, num
        if (i === nums.length || i > 0 && nums[i] !== nums[i - 1]) {
            res += count + nums[i - 1];
            count = 0; //resetting when it reached end or alternative number which is different
        }
        count++;
    }
    return res;
}
countAndSay(1); //1 - this is the base case

countAndSay(4); //"1211"
//countAndSay(1) = "1"
//countAndSay(2) = say "1" = one 1 = "11"
//countAndSay(3) = say "11" = two 1's = "21"
//countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"
