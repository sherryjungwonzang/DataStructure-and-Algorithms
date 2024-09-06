//392. Is Subsequence
//given two strings s and t
//return true if s is a subsequence of t, false otherwise
//a subsequence of a string is a new string that is formed from the original string by deleting some of the chars
//without disturbing the relative positions of the remaining chars
//ex: "ace" is a subsequence of "abcde" while "aec" is not

//Approach:
//using two pointers
var isSubsequence = (s, t) => {
    let left = 0;
    let right = 0;

    while (right < t.length) {
        if (s[left] === t[left]) left++;
        right++; //not equal
    }

    return left === s.length;
}
isSubsequence("abc", "ahbgdc"); //true
//"a b c", "a h b g d c"
// L        R
//a = a -> left++

//"a b c", "a h b g d c"
//   L      R
//b != a -> right++

//"a b c", "a h b g d c"
//   L        R
//b != h -> right++

//"a b c", "a h b g d c"
//   L          R
//b = b -> left++

//"a b c", "a h b g d c"
//     L        R
//c != b -> right++

//"a b c", "a h b g d c"
//     L          R
//c != g -> right++

//"a b c", "a h b g d c"
//     L            R
//c != d -> right++

//"a b c", "a h b g d c"
//     L              R
//c = c -> left++

//"a b c", "a h b g d c"
//       L            R
//c = c -> left++

//left = 3 === s.length -> true

isSubsequence("axc", "ahbgdc"); //false

