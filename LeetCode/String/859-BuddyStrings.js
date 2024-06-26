//859. Buddy Strings
//given two strings 's' and 'goal'
//return true if you can swap two letters in s so the result is equal to goal
//otherwise return false

//swapping letters is defined as taking two indices i and j - 0-indexed
//such that i != j and swapping the characters at s[i] and s[j]
//for example, swapping at indices 0 and 2 in "abcd" results in "cbad"
var buddyStrings = (s, goal) => {
    //base case
    if (s.length !== goal.length) return false;

    //equal - check duplicates in 's'
    //valid swapping
    if (s === goal) {
        let set = new Set(s);
        return set.size < s.length;
    }

    //difference
    let diff = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) diff.push(i); //detecting diff
        if (diff.length > 2) return false; //need to ensure there are exactly two differences
    }

    return diff.length === 2 && s[diff[0]] === goal[diff[1]] && s[diff[1]] === goal[diff[0]];
}
//TC: O(N) - the length of strings
//SC: O(m) - the unique character in string s
buddyStrings("ab", "ba"); //true - You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal
//s !== goal

//diff = []
//s = "ab", goal = "ba"
//     ^            ^
//diff = [0]
//      ^            ^
//diff = [0, 1]

//diff length is 2 && s[0] and goal[1] is same && s[1] and goal[0] is same

buddyStrings("ab", "ab"); //false - The only letters you can swap are s[0] = 'a' and s[1] = 'b', which results in "ba" != goal
//s == goal -> set = [a, b]
//set size = 2 === s length
//return false

buddyStrings("aa", "aa"); //true - You can swap s[0] = 'a' and s[1] = 'a' to get "aa", which is equal to goal
//s === goal -> set = [a]
//set size !== s length -> 1 < 2
//return true

