//476. Number Complement
//the complenment of an integer is the integer you get when you flip all the 0's to 1's
//and all the 1's to 0's in its binary representation
//for example, the integer 5 is "101" in binary and its complement is "010" which is the integer 2
//given an integer num
//return its complement

//Approach:
//using .toString()
var numberComplement = (num) => {
    //changing to binary and split
    num = num.toString(2).split('');

    //changing the value
    for (let i = 0; i < num.length; i++) {
        //1 -> 0
        if (num[i] === "1") num[i] = "0";
        else num[i] = "1"; //0 -> 1
    }

    return parseInt(num.join(''), 2);
}
numberComplement(5); //2 - The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2
//num = 5 -> "0101"
//-> ['1', '0', '1']
//changing 1 to 0, 0 to 1
// ['0', '1', '0'] -> .join('') with binary is "010" = 2

numberComplement(1); //0 - The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0
