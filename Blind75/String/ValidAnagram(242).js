//Valid Anagram(242)
//given two strins 's' and 't'
//return true if an anagram of s and false otherwise
//anagram is a word or phrase formed by rearranging the letters of a different word or phrase
var validAnagram = (s, t) => {
  //edge case
  if (s.length !== t.length) return false;

  //initialize Hash table - map
  let map = {};

  //loop through string s and populate that map
  for (let i = 0; i < s.length; i++) {
    let letter = s[i];

    if(!map[letter]) {
      map[letter] = 1;
    }  else {
      map[letter]++;
    }
  }

  //loop through string t
  for (let i = 0; i < t.length; i++) {
    let letter = t[i];

    if (map[letter] === undefined) {
      return false;
    }

    if (map[letter] < 1) {
      return false;
    }

    map[letter]--;
  }
  return true;
} 
validAnagram("anagram", "nagaram"); //true
//map = { a: 3, n: 1, g: 1, r: 1, m: 1 }
//comparing
//map = { a: 0, n: 0, g: 0, r: 0, m: 0 }
//true

validAnagram("rat", "car"); //false
//map = { r: 1, a: 1, t: 1 }
//comparing
//map = { r: 0, a: 0, t: 1 } | c is undefined
//false
