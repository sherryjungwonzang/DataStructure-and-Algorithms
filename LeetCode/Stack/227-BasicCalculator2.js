//227. Basic Calculator2
//given a string s which represents an expression, evaluate this expression and return its value
//the integer division should truncate toward zero
//you may assume that the given expression is always valid
//all intermediate results will be in the range of [-231, 231 - 1]
//Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval()

//Approach:
//using stack
var basicCalculator2 = (s) => {
    s.replace(/\s/g, '');

    let num = "";
    let res = [];
    let prevSign = "+";

    for (let i = 0; i < s.length; i++) {
        //until meet sign
        if (!isNaN(s[i])) num += s[i];

        //calculating
        if (isNaN(s[i]) || i === s.length - 1) {
            if (prevSign == "+") res.push(Number(num)); //sum
            else if (prevSign == "-") res.push(Number(-num)); //deduction
            else if (prevSign == "*") res.push(Math.floor(res.pop() * num)); //multiply
            else res.push(Math.trunc(res.pop() / num)); //divide

            //updating
            prevSign = s[i];

            num = "";
        }
    }

    return res.reduce((a, b) => a + b);
}
basicCalculator2(" 3+5 / 2 "); //5
// _ 3 + 5 _ / _ 2 _
// ^
//num = "" -> "_"
//res = [ ]
//prevSign = +

// _ 3 + 5 _ / _ 2 _
//   ^
//num = "" -> "_" -> "_3" 
//res = [  ]
//prevSign = + 

// _ 3 + 5 _ / _ 2 _
//     ^
//num = "" -> "_" -> "_3" -> ""
//prevSign is + -> +3
//res = [ 3,  ]
//prevSign = + -> + 

// _ 3 + 5 _ / _ 2 _
//       ^
//num = "" -> "_" -> "_3" -> "" -> "5"
//res = [ 3,  ]
//prevSign = + -> + 

// _ 3 + 5 _ / _ 2 _
//         ^
//num = "" -> "_" -> "_3" -> "" -> "5" -> "5_"
//res = [ 3,  ]
//prevSign = + -> + 

// _ 3 + 5 _ / _ 2 _
//           ^
//num = "" -> "_" -> "_3" -> "" -> "5" -> "5_" -> ""
//prevSign is + -> +5
//res = [ 3, 5,  ]
//prevSign = + -> + -> /

// _ 3 + 5 _ / _ 2 _
//             ^
//num = "" -> "_" -> "_3" -> "" -> "5" -> "5_" -> "" -> "_"
//res = [ 3, 5,  ]
//prevSign = + -> + -> /

// _ 3 + 5 _ / _ 2 _
//               ^
//num = "" -> "_" -> "_3" -> "" -> "5" -> "5_" -> "" -> "_" -> "_2"
//res = [ 3, 5,  ]
//prevSign = + -> + -> /

// _ 3 + 5 _ / _ 2 _
//                 ^
//num = "" -> "_" -> "_3" -> "" -> "5" -> "5_" -> "" -> "_" -> "_2" -> "_2_"
//prevSign is / -> pop 5 / 2 = 2
//res = [ 3, 5,  ] -> [ 3,   ] -> [ 3, 2 ]
//prevSign = + -> + -> / -> 2

//res = 3 + 2 = 5

basicCalculator2("3+2*2");//7

basicCalculator2(" 3/2 "); //1
