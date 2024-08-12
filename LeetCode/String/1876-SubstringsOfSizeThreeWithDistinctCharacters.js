//1876. Substrings Of Size Three With Distinct Characters
//a string is good if there are no repeated characters
//given a string 's'
//return the number of good substrings of lenth three is s

//Approach:
//using Set() for checking duplicates
var goodSubstrings = (s) => {
    let good = 0;

    for (let i = 0; i < s.length - 2; i++) {
        let subStr = s.slice(i, i + 3); 
        let set = new Set(subStr); //checking duplicates

        set.size === 3 && (good += 1);
    }

    return good;
}
goodSubstrings("xyzzaz"); //1
//substrings:
//"xyz" -> Set: {x, y, z}
//"yzz" -> Set: {y, z}
//"zza" -> Set: {z, a}
//"zaz" -> Set: {z, a}

goodSubstrings("aababcacb"); //4
//substrings:
//"aab" -> Set: {a, b}
//"aba" -> Set: {a, b}
//"bab" -> Set: {a, b}
//"abc" -> Set: {a, b, c}
//"bca" -> Set: {a, b, c}
//"cab" -> Set: {a, b, c}
//"abc" -> Set: {a, b, c}
