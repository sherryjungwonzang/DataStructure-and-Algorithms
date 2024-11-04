//1309. Decrypt String From Alphabet To Integer Mapping
//given a string s formed by digits and '#'
//we want to map s to English lowercase characters as follows:
//Characters ('a' to 'i') are represented by ('1' to '9') respectively
//Characters ('j' to 'z') are represented by ('10#' to '26#') respectively
//return the string formed after mapping

//Approach:
//using stack
var decryptstring = (s) => {
    let stack = [];
    let res = '';
    let map = {
        "1":"a", "2":"b", "3":"c", "4":"d", "5":"e", "6":"f", "7":"g", "8":"h",
        "9":"i", "10":"j", "11":"k", "12":"l", "13":"m", "14":"n", "15":"o",
        "16":"p", "17":"q", "18":"r", "19":"s", "20":"t", "21":"u", "22":"v",
        "23":"w", "24":"x", "25":"y", "26":"z"
    };

    //checking num between #
    for (let char of s) {
        if (char !== '#') {
            stack.push(char);
            
            continue;
        }

        let curr = stack.pop();

        //checking two digits nums
        stack.push(map[(stack.pop() + curr)]);
    }

    //for checking one digit nums
    for (let char of stack) {
        res += char <= '9' ? map[char] : char;
    }

    return res;
}
decryptstring("10#11#12"); //"jkab"
//"1 0 # 1 1 # 1 2"
// ^ ^
//stack = [ 1, 0, ]

//"1 0 # 1 1 # 1 2"
//     ^
//stack = [ 1, 0, ]
//popping 0 first and then 1
//curr = 0 1 -> map("10"): "j"
//stack = [ j ]

//"1 0 # 1 1 # 1 2"
//       ^ ^
//stack = [ j, 1, 1, ]

//"1 0 # 1 1 # 1 2"
//           ^ 
//stack = [ j, 1, 1, ]
//popping 1 first and then 1
//curr = 1 1 -> map("11"): "k"
//stack = [ j, k, ]

//"1 0 # 1 1 # 1 2"
//             ^ ^ 
//stack = [ j, k, 1, 2 ]

//stack = [ j, k, 1, 2 ]    [ j, k, 1, 2 ]      [ j, k, 1, 2 ]      [ j, k, 1, 2 ]
//          ^                    ^                      ^                      ^
//res = j                    jk                  jka                 jkab
//                                               "1" is 'a'          "2" is 'b'

//jkab

decryptstring("1326#"); //"acz"
//"1 3 2 6 #"
// ^ ^ ^ ^
//stack = [ 1, 3, 2, 6 ]

//"1 3 2 6 #"
//         ^ 
//stack = [ 1, 3, 2, 6 ]
//popping 6 first and then 2
//curr = 6 2 -> map("26"): "z"
//stack = [ 1, 3, z ]

//stack = [ 1, 3, z ]       [ 1, 3, z ]     [ 1, 3, z ]
//          ^                    ^                  ^
//res = a                    ac              acz
//"1" is 'a'                "3" is 'c' 

// acz
