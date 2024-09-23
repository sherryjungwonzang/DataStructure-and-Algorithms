//1544. Make The String Great
//given a string s of lower and upper case Enligh letters
//a good string is a string which does not have two adjacent characters s[i] and s[i + 1] where:
//0 <= i <= s.length - 2
//s[i] is a lower-case letter and s[i + 1] is the same letter but in upper=case or vice-versa

//to make the string good, you can choose two adjacent characters that make the string bad and remove them
//you can keep doing this until the string becomes good
//return the string after making it good
//the answer is guaranteed to be unique under the given constraints

//Approach:
//using stack
var greatString = (s) => {
    let stack = [''];

    for (let char of s) {
        let prev = stack[stack.length - 1];

        //bad string
        if (prev.toLowerCase() === char.toLowerCase() && prev !== char) stack.pop();
        else stack.push(char); //good string
    };

    return stack.join('');
}
greatString("leEeetcode"); //"leetcode"
//stack = ['']
//         prev
//"l e E e e t c o d e"
// ^
//'' !== l -> push
//stack = ['', 'l']

//stack = ['', 'l']
//             prev
//"l e E e e t c o d e"
//   ^
//l !== e -> push
//stack = ['', 'l', 'e']

//stack = ['', 'l', 'e']
//                 prev
//"l e E e e t c o d e"
//     ^
//e == e & e != E -> pop
//stack = ['', 'l', ]

//stack = ['', 'l']
//             prev
//"l e E e e t c o d e"
//       ^
//l != e -> push
//stack = ['', 'l', 'e' ]

//stack = ['', 'l', 'e' ]
//                 prev
//"l e E e e t c o d e"
//         ^ 
//e = e & e = e -> push
//stack = ['', 'l', 'e', 'e' ]

//stack = ['', 'l', 'e', 'e' ]
//                      prev
//"l e E e e t c o d e"
//           ^ 
//t != e -> push
//stack = ['', 'l', 'e', 'e', 't' ]

//stack = ['', 'l', 'e', 'e', 't' ]
//                           prev
//"l e E e e t c o d e"
//             ^ 
//t != c -> push
//stack = ['', 'l', 'e', 'e', 't', 'c' ]

//stack = ['', 'l', 'e', 'e', 't', 'c' ]
//                                prev
//"l e E e e t c o d e"
//               ^ 
//c != o -> push
//stack = ['', 'l', 'e', 'e', 't', 'c', 'o' ]

//stack = ['', 'l', 'e', 'e', 't', 'c', 'o' ]
//                                      prev
//"l e E e e t c o d e"
//                 ^ 
//o != d -> push
//stack = ['', 'l', 'e', 'e', 't', 'c', 'o', 'd' ]

//stack = ['', 'l', 'e', 'e', 't', 'c', 'o', 'd' ]
//                                           prev
//"l e E e e t c o d e"
//                   ^ 
//d != e -> push
//stack = ['', 'l', 'e', 'e', 't', 'c', 'o', 'd', 'e']
//join -> "leetcode"

greatString("abBAcC"); //""
//stack = ['']
//         prev
//"a b B A c C"
// ^
//'' !== a -> push
//stack = ['', 'a']

//stack = ['', 'a']
//            prev
//"a b B A c C"
//   ^
//'a' !== b -> push
//stack = ['', 'a', 'b']

//stack = ['', 'a', 'b']
//            prev
//"a b B A c C"
//     ^
//'b' = b & b != B -> pop
//stack = ['', 'a',]

//stack = ['', 'a',]
//             prev
//"a b B A c C"
//       ^
//a = a & a != A -> pop
//stack = ['', ]

//stack = ['', ]
//         prev
//"a b B A c C"
//         ^
//'' != c -> push
//stack = ['', 'c']

//stack = ['', 'c']
//            prev
//"a b B A c C"
//           ^
//c = c & c != C -> pop
//stack = ['']
//''

greatString("s"); //"s"
