//1763. Longest Nice Substring
//a string s is nice if, for every letter of the alphabet that s contains, it appears both in uppercase and lowercase
//for example, "abABB" is nice because 'A' and 'a' appear, and 'B' and 'b' appear. However, "abA" is not because 'b' appears, but 'B' does not

//given a string s, return the longest substring of s that is nice
//if there are multiple, return the substring of the earliest occurrence
//if there are none, return an empty string

//Approach:
//using set and recursion
var longestNiceSubstring = (s) => {
    //base case
    if (s.length < 2) return "";

    let arr = [...s];
    let set = new Set(arr);

    for (let i = 0; i < arr.length; i++) {
        let char = arr[i];

        //nice
        if (set.has(char.toUpperCase()) && set.has(char.toLowerCase())) continue;

        //recursive calls
        let substr1 = longestNiceSubstring(s.substring(0, i));
        let substr2 = longestNiceSubstring(s.substring(i + 1));

        return substr1.length >= substr2.length ? substr1 : substr2;
    }
    
    return s;
}
longestNiceSubstring("YazaAay"); //"aAa"
//arr = [Y, a, z, a, A, a, y]
//set = { Y, a, z, A, y }

//starting from "YazaAay"
//i = 0                                 i = 1                                   i = 2
//Y a z a A a y                         Y a z a A a y                           Y a z a A a y
//^ -> has Y and y in set: nice           ^ -> has A and a in set: nice             ^ -> only has z   => substr1 = longestNiceSubstring(0, 2) = "Ya"
//                                                                                                       substr2 = longestNiceSubstring(3) = "aAay" 


//substr1 = longestNiceSubstring(0, 2) = "Ya"                                substr2 = longestNiceSubstring(3) = "aAay"   
//set = { Y, a }                                                             set = { a, A, y }
//i = 0                                                                      i = 0                           i = 1                               i = 2                                  i = 3                                           
//Y a                                                                        a A a y                         a A a y                             a A a y                                a A a y           
//^ ->  has only Y                                                           ^ ->  has only a and A: nice      ^ ->  has only a and A: nice          ^ ->  has only a and A: nice             ^ ->  has only y                         
//=> substr1 = longestNiceSubstring(0, 0) = ""                                                                                                                                          => substr1 = longestNiceSubstring(0, 3) = "aAa"                               
//   substr2 = longestNiceSubstring(1) = "a"                                                                                                                                               substr2 = longestNiceSubstring(4) = ""                               

//substr1 = longestNiceSubstring(0, 2) = "aAa"                                
//set = { a, A }                                                            
//i = 0                              i = 1                            i = 2                                              
//a A a                              a A a                            a A a                                                                             
//^ ->  has a and A: nice              ^ ->  has a and A: nice            ^ ->  has a and A: nice  
                          
//substr1 = longestNiceSubstring(0, 0) = "" -> ""           substr1 = longestNiceSubstring(0, 3) = "aAa" -> "aAa"                              
//substr2 = longestNiceSubstring(1) = "a"   -> ""           substr2 = longestNiceSubstring(4) = ""       -> ""
//substr1 = ""                        <                      substr2 = "aAa
//return substr2

longestNiceSubstring("Bb"); //"Bb"

longestNiceSubstring("c"); //""
