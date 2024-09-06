//412. Fizz Buzz
//given an integer n
//return a string array answer where:
//answer[i] = "FizzBuzz" - if i is divisible by 3 and 5
//answer[i] = "Fizz" if i is divisible by 3
//answer[i] = "Buzz" if i is divisible by 5
//answer[]i = i as a string if none of the above conditions are true
var fizzBuzz = (n) => {
    let res = [];

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) res.push("FizzBuzz");
        else if (i % 3 === 0) res.push("Fizz");
        else if (i % 5 === 0) res.push("Buzz");
        else res.push(i.toString());
    }

    return res;
}
fizzBuzz(15); //["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
//res = ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]
//i = 1 -> 1 % 3 = 0 or 1 % 5 = 0 => "1"
//i = 2 -> 2 % 3 = 0 or 2 % 5 = 0 => "2"
//i = 3 -> 3 % 3 = 0 => "Fizz"
//i = 4 -> 4 % 3 = 0 or 4 % 5 = 0 => "4"
//i = 5 -> 5 % 5 = 0 => "Buzz"
//i = 6 -> 6 % 3 = 0 => "Fizz"
//i = 7 -> 7 % 3 = 0 or 7 % 5 = 0 => "7"
//i = 8 -> 8 % 3 = 0 or 8 % 5 = 0 => "8"
//i = 9 -> 9 % 3 = 0 => "Fizz"
//i = 10 -> 10 % 5 = 0 => "Buzz"
//i = 11 -> 11 % 3 = 0 or 11 % 5 = 0 => "11"
//i = 12 -> 12 % 3 = 0 => "Fizz"
//i = 13 -> 13 % 3 = 0 or 13 % 5 = 0 => "13"
//i = 14 -> 14 % 3 = 0 or 14 % 5 = 0 => "14"
//i = 15 -> 15 % 3 =  and 15 % 5 = 0 => "FizzBuzz"

fizzBuzz(3); //["1","2","Fizz"]

fizzBuzz(5); //["1","2","Fizz","4","Buzz"]
