//2231. Largest Number After Digit Swaps By Parity
//given a positive integer num
//may swap any two digits of num that have the same parity - both odd digits or both even digits
//return the largest possible value of num after any number of swaps

//Approach:
//using String
var paritySwap = (num) => {
    let res = '';
    let sorted = [...String(num)].sort((a, b) => a - b);
    let odd = sorted.filter((i) => i % 2 === 1);
    let even = sorted.filter((i) => i % 2 === 0);

    //popping the largest even/odd first
    for (let i = 0; i < sorted.length; i++) {
        if (String(num)[i] % 2 === 0) res += even.pop(); //even
        else res += odd.pop(); //odd
    }

    return res;
}
paritySwap(1234); //3412
//sorted = 1 2 3 4
//odd = 1, 3
//even = 2, 4

//String = 1 2 3 4
//         ^
//1 is odd -> pop from odd to res
//odd = 1, 3
//even = 2, 4
//res = '' -> 3

//String = 1 2 3 4
//           ^
//2 is even -> pop from even to res
//odd = 1
//even = 2, 4
//res = '' -> 34

//String = 1 2 3 4
//             ^
//3 is odd -> pop from odd to res
//odd = 1
//even = 2
//res = '' -> 341

//String = 1 2 3 4
//               ^
//4 is even -> pop from even to res
//odd = 
//even = 2
//res = '' -> 3412

paritySwap(65875); //87655
//sorted = 5 5 6 7 8
//odd = 5, 5, 7
//even = 6, 8

//String = 6 5 8 7 5
//         ^
//6 is even -> pop from even to res
//odd = 5, 5, 7
//even = 6, 8
//res = '' -> 8

//String = 6 5 8 7 5
//           ^
//5 is odd -> pop from odd to res
//odd = 5, 5, 7
//even = 6
//res = '' -> 87

//String = 6 5 8 7 5
//             ^
//8 is even -> pop from even to res
//odd = 5, 5
//even = 6
//res = '' -> 876

//String = 6 5 8 7 5
//               ^
//7 is odd -> pop from odd to res
//odd = 5, 5
//even = 
//res = '' -> 8765

//String = 6 5 8 7 5
//                 ^
//5 is odd -> pop from odd to res
//odd = 5
//even = 
//res = '' -> 87655
