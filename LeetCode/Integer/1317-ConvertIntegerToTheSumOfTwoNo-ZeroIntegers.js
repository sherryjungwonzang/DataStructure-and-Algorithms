//1317. Convert Integer To The Sum Of Two No-Zero Integers
//no-Zero integer is a positive integer that does not contain any 0 in its decimal representation
//given an integer n
//return a list of two integers [a, b] where:
//a and b are No-Zero integers
//a + b = n
var twoNozeroIntegers = (n) => {
    //checking zero
    for (let i = 0; i < n; i++) {
        let a = i;
        let b = n - i;

        //non-zero integers
        if (!a.toString().includes(0) && !b.toString().includes(0)) return [a, b];
    }
}
twoNozeroIntegers(2); //[1, 1]
//a = 0     n = 2 - 0 = 2   -> a has 0
//a = 1     n = 2 - i = 1
//[1, 1]

twoNozeroIntegers(11); //[2, 9]
//a = 0     n = 11 - 0 = 11   -> a has 0
//a = 1     n = 11 - 1 = 10   -> b has 0
//a = 2     n = 11 - 2 = 9 
//[2, 9]
