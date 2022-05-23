//1.9 String Rotation
//isSubstring(): checks if one word is a substring of another
//given two strings, s1 and s2
//to check if s2 is a rotation of s1 using only one call to isSubstring

//approach:
//1) sorting chars before comparing -> know if it is permutation but not know if it is in the right order
//2) looking for starting character before moving around and rotating -> starting characters if it is in the right order
//3) break string 2 into a front and back, and ensure that front tallies with isSubstring before doing isSubstring
var stringRotation = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }
    return (str2 + str2).includes(str1); //one call of isSubstring
}

console.log(stringRotation('waterbottle', 'erbottlewat')); //true
console.log(stringRotation('waterbottle', 'erbotlewatt')); //false
console.log(stringRotation('aaata', 'aataa')); //true
