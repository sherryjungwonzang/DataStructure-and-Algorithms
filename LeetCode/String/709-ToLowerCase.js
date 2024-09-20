//709. To Lower Case
//given a string s
//return the string after replacing every uppercase letter with the same lowercase letter

//Approach:
//using charCodeAt
var toLowerCase = (s) => {
    let res = "";

    for (let i = 0; i < s.length; i++) {
        let ascii = s.charCodeAt(i); 
        //65-90: A-Z || 97-122: a-z

        //transferring Upper to Lower
        if (ascii >= 65 && ascii <= 90) res += String.fromCharCode(ascii + 32);
        else res += s.charAt(i); //lowercase
    }

    return res;
}
toLowerCase("Hello"); //"hello"
//H: 72
//e: 101
//l: 108
//l: 108
//o: 111

//res = "" -> h    e    l    l    o
//           104  101  108  108  111

toLowerCase("here"); //"here"
//h: 104
//e: 101
//r: 114
//e: 101

//res = "" -> h    e    r    e   
//           104  101  114  101  

toLowerCase("LOVELY"); //"lovely"
//L: 76
//O: 79
//V: 86
//E: 69
//L: 76
//Y: 89

//res = "" -> l    o    v    e    l    y
//           108  111  118  101  108  121
