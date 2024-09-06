//383. Ransom Note
//given two strings 'ransomNote' and 'magazine'
//return true if ransomNote can be constructed by using the letters from magazine and false otherwise
//each letter in magazine can only be used once in ransomNote

//Approach:
//using .replace()
var ransomNote = (ransomeNote, magazine) => {
    for (let char of magazine) ransomNote = ransomNote.replace(char, "");

    if (!ransonNote) return true;
    else return false;
}
ransomNote("a", "b"); //false
//char = "b" from magazine != "a" from ransomNote
//ransomNote is not null -> false

ransomNote("aa", "ab"); //false
//char = "a" from magazine = "a" from ransomNote
//ransomNote = "a"

//char = "b" from magazine != "a" from ransomNote
//ransomNote is not null -> false

ransomNote("aa", "aab"); //true
//char = "a" from magazine = "a" from ransomNote
//ransomNote = "a"

//char = "a" from magazine = "a" from ransomNote
//ransomNote = ""
//true
