//2124. Check If All A's Appears Before All B's
//given a string s consisting of only the characters 'a' and 'b'
//return true if every 'a' appears before every 'b' in the string - otherwise, return false
var checkABeforeB = (s) => {
    //base case
    if (!s.includes('b')) return true;

    //find the first position of B
    let firstB = s.indexOf('b');  

    //traversing after first B
    for (let i = firstB; i < s.length; i++) {
        if (s[i] === 'a') return false;
    }

    return true;
}
checkABeforeB("aaabbb"); //true
//a a a b b b
//      ^
//   firstB

//no A after firstB -> true

checkABeforeB("abab"); //false
//a b a b
//  ^
// firstB

//there is one a afer firstB -> false

checkABeforeB("bbb"); //true
