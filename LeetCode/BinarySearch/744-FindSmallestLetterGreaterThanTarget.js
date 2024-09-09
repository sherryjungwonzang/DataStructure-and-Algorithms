//744. Find Smallest Letter Greater Than Target
//given an array of characters 'letters' that is sorted in non-decreasing order, and a character 'target
//there are at least two different characters in letters
//return the smallest character in letters that is lexicographically greater than target
//if such a character does not exist, return the first character in letters

//Approach:
//using binary search
var nextGreatestLetter = (letters, target) => {
    let left = 0;
    let right = letters.length;

    //binary search
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (letters[mid] <= target) left = mid + 1;
        else right = mid - 1;
    }

    //constraints
    if (left === letters.length) return letters[0];
    else return letters[left];
}
nextGreatestLetter(letters = ["c","f","j"], target = "a"); //"c" - The smallest character that is lexicographically greater than 'a' in letters is 'c'
//["c", "f", "j"]

//left = 0 -> 0 -> 0
//right = 3 -> 0 -> -1
//mid = 1 -> "f" > target = "a" -> move right || 0 -> "c" > "a" -> move right
//binary search done
//left = [0] = "c"

nextGreatestLetter(letters = ["c","f","j"], target = "c"); //"f" - The smallest character that is lexicographically greater than 'c' in letters is 'f'
//["c", "f", "j"]

//left = 0 -> 0 
//right = 3 -> 0 
//mid = 1 -> "f" > target = "a" -> move right || 0 -> "c" > "a" -> move right
//mid = target
//left = [0] = "c"

nextGreatestLetter(letters = ["x","x","y","y"], target = "z"); //"x" - There are no characters in letters that is lexicographically greater than 'z' so we return letters[0]
//["x", "x", "y", "y"]

//left = 0 -> 3 -> 4 -> 4
//right = 4 -> 4 -> 4 -> 3
//mid = 2 -> "y" < "z" -> move left || 3 -> "y" < "z" || 4 -> undefined < "z" -> move right
//binary search done
//no char greater than target -> [0] = "x"
