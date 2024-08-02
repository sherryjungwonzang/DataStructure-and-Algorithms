//43. Multiply Strings
//given two non-negative integers num1 and num2 - represented as strings
//return the product of num1 and num2, also represented as a string
var multiplyStrings = (num1, num2) => {
    //base case
    if (num1 === '0' || num2 === '0') return '0';

    let m = num1.length;
    let n = num2.length;
    let res = new Array(m + n).fill(0);

    //looping from the backwards
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            //for positions
            let p1 = i + j; 
            let p2 = i + j + 1;
            let sum = res[p2] + Number(num1[i]) * Number(num2[j]);

            res[p2] = sum % 10; //the rest num except carry
            res[p1] += Math.floor(sum / 10); //carry
        }
    }

    if (res[0] === 0) res.shift();

    return res.join('');
}
multiplyStrings("123", "45"); //5535
//       1  2  3
//          4  5
//-----------------
//[0, 0, 0, 0, 0]: res

//i = 2, j = 1
//p1 = 2 + 1 = 3
//p2 = 2 + 1 + 1 = 4
//sum = 0 + (3 * 5) = 15
//[0, 0, 0, 1, 5]: res

//i = 2, j = 0
//p1 = 2 + 0 = 2
//p2 = 2 + 0 + 1 = 3
//sum = 1 + (3 * 4) = 13
//[0, 0, 1, 3, 5]: res

//i = 1, j = 1
//p1 = 1 + 1 = 2
//p2 = 1 + 1 + 1 = 3
//sum = 3 + (2 * 5) = 13
//[0, 0, 2, 3, 5]: res

//i = 1, j = 0
//p1 = 1 + 0 = 1
//p2 = 1 + 0 + 1 = 2
//sum = 2 + (2 * 4) = 10
//[0, 1, 0, 3, 5]: res

//i = 0, j = 1
//p1 = 0 + 1 = 1
//p2 = 0 + 1 + 1 = 2
//sum = 0 + (1 * 5) = 5
//[0, 1, 5, 3, 5]: res

//i = 0, j = 0
//p1 = 0 + 0 = 0
//p2 = 0 + 0 + 1 = 1
//sum = 1 + (1 * 4) = 5
//[0, 5, 5, 3, 5]: res

multiplyStrings("2", "3"); //"6"

multiplyStrings("123", "456"); //"56088"
