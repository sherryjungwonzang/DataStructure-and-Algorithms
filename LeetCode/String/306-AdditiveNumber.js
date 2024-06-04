//306. Additive Number
//an additive number is a string whose digits can forn an additive sequence
//a valid additive sequence shold contain at least three numbers
//except for the first two numbers, each subsequnet number in the sequence must be the sum of the preceding two

//given a string containinig only digits
//return true if it is an additive number or false otherwise
var additiveNumber = (num) => {
    //base case
    if (num.length < 3) return false;

    //first two numbers
    for (let i = 0; i < num.length; i++) {
        for (let j = i + 1; j < num.length; j++) {
            let num1 = num.slice(0, i + 1);
            let num2 = num.slice(i + 1, j + 1);
            let rest = num.slice(j + 1);

            //checking validation
            if (num1.length > 1 && num1[0] === "0") return false;
            if (num2.length > 1 && num2[0] === "0") break;
            if (rest.length < num1.length || rest.length < num2.length) break;
            if (isValid(num1, num2, rest)) return true;
        }
    }

    //checking after second number
    function isValid(num1, num2, rest) {
        //base case
        if (!rest.length) return true;

        let sum = (+num1 + +num2).toString(); //+: convert to a number
        if (!rest.startsWith(sum)) return false;

        return isValid(num2, sum, rest.slice(sum.length));
    };

    return false;
}
additiveNumber("112358"); //true - 1+1=2, 1+2=3, 2+3=5, 3+5=8

additiveNumber("199100199"); //true - 1+99=100, 99+100=190
