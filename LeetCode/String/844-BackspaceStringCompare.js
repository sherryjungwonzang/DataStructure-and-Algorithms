//844. Backspace String Compare
//given two strings s and t
//return true if they are equal when both are typed into empty text editors
//'#' means a backspace character

//Approach:
//using counter 
var backspaceStringCompare = (s, t) => {
    
    function backspace (char) {
        let res = '';
        let backspace = 0; //counting backspace 

        //traversing from backwards
        for (let i = char.length - 1; i >= 0; i--) {
            if (char[i] === "#") backspace += 1; 
            else if (backspace > 0) backspace -= 1; //no adding char
            else res = char[i] + res;
        }

        return res;
    }

    return backspace(s) === backspace(t);
}
backspaceStringCompare("ab#c", "ad#c"); //true - both s and t become "ac"
// a b # c                    a d # c
//       ^                          ^
//res = 'c'                   res = 'c'
//backspace = 0               backspace = 0

// a b # c                    a d # c
//     ^                          ^
//res = 'c'                   res = 'c'
//backspace = 0 -> 1          backspace = 0 -> 1

// a b # c                    a d # c
//   ^                          ^
//res = 'c'                   res = 'c'
//backspace = 0 -> 1 -> 0     backspace = 0 -> 1 -> 0
//not adding b as 1 #         not adding d as 1 #

// a b # c                    a d # c
// ^                          ^
//res = 'c' -> 'ac'           res = 'c' -> 'ac'
//backspace = 0 -> 1 -> 0     backspace = 0 -> 1 -> 0

//ac = ac

backspaceStringCompare("ab##", "c#d#"); //true - both s and t become ""
// a b # #                       c # d #
//       ^                             ^
//res = ''                       res = ''
//backspace = 0 -> 1             backspace = 0 -> 1

// a b # #                       c # d #
//     ^                             ^
//res = ''                       res = ''
//backspace = 0 -> 1 -> 2        backspace = 0 -> 1 -> 0
//                               not adding d as 1 # 

// a b # #                       c # d #
//   ^                             ^
//res = ''                       res = ''
//backspace = 0 -> 1 -> 2 -> 1   backspace = 0 -> 1 -> 0 -> 1
//not adding b as 2 #         

// a b # #                       c # d #
// ^                             ^
//res = ''                       res = ''
//backspace = 0 -> 1 -> 2 -> 1   backspace = 0 -> 1 -> 0 -> 1
//not adding a as 1 #            not adding c as 1 #    

//'' = ''

backspaceStringCompare("a#c", "b"); //false - s becomes "c" while t becomes "b"
// a # c                      b
//     ^                      ^
//res = 'c'                   res = 'b'
//backspace = 0               backspace = 0

// a # c                      b
//   ^                        
//res = 'c'                   res = 'b'
//backspace = 0 -> 1          backspace = 0

// a # c                      b
// ^                        
//res = 'c'                   res = 'b'
//backspace = 0 -> 1          backspace = 0
//not adding a as 1 #  
//c != b
