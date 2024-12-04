//2299. Strong Password Checker2
//A password is said to be strong if it satisfies all the following criteria:
//it has at least 8 characters
//it contains at least one lowercase letter
//it contains at least one uppercase letter
//it contains at least one digit
//it contains at least one special character
//the special characters are the characters in the following string: "!@#$%^&*()-+"
//it does not contain 2 of the same character in adjacent positions (i.e., "aab" violates this condition, but "aba" does not)

//given a string password,
//return true if it is a strong password. Otherwise, return false
var strongPasswordChecker2 = (password) => {
    let m = password.length;
    let hasLowerCase = false;
    let hasUpperCase = false;
    let hasDigit = false;
    let hasSpecial = false;
    let adjSame = false;

    //base case
    if (m < 8) return false;

    //checking functions
    let lowerCase = (char) => {
        let i = char.charCodeAt();

        return i >= 97 && i <= 122;
    }

    let upperCase = (char) => {
        let i = char.charCodeAt();

        return i >= 65 && i <= 90;
    }

    //checking whether there is digit or not
    let digit = (char) => '0123456789'.indexOf(char) != -1;

    //checking whether there is special words or not
    let special = (char) => '!@#$%^&*()-+'.indexOf(char) != -1;

    for (let i = 0; i < m; i++) {
        //checking strong password
        if (lowerCase(password[i])) hasLowerCase = true;
        if (upperCase(password[i])) hasUpperCase = true;
        if (digit(password[i])) hasDigit = true;
        if (special(password[i])) hasSpecial = true;
        if (i + 1 < m && password[i] == password[i + 1]) adjSame = true;
    }

    return hasLowerCase && hasUpperCase && hasDigit && hasSpecial && !adjSame;
}
strongPasswordChecker2("IloveLe3tcode!"); //true
//I   l   o   v   e   L   e   3   t   c   o   d   e   !
//73 108 111 118 101 76  101  51 116  99 111 100 101  33
//^
//hasUpperCase = false -> true

//I   l   o   v   e   L   e   3   t   c   o   d   e   !
//73 108 111 118 101 76  101  51 116  99 111 100 101  33
//    ^
//hasUpperCase = false -> true
//hasLowerCase = false -> true

//I   l   o   v   e   L   e   3   t   c   o   d   e   !
//73 108 111 118 101 76  101  51 116  99 111 100 101  33
//                            ^
//hasUpperCase = false -> true
//hasLowerCase = false -> true
//'3' -> digit != -1 => false -> true

//I   l   o   v   e   L   e   3   t   c   o   d   e   !
//73 108 111 118 101 76  101  51 116  99 111 100 101  33
//                                                    ^
//hasUpperCase = false -> true
//hasLowerCase = false -> true
//'3' -> digit != -1 => false -> true
//'!' -> special != -1 => falase -> true

//checking adjacent
//i = 0 + 1 < m && password[0] != password[1]
//...
//i = 12 + 1 < m && password[12] !== password[13]
//false -> false

//hasUpperCase = true && hasLowerCase = true && hasDigit = true && hasSpecial = true && adjSame = false
//true

strongPasswordChecker2("Me+You--IsMyDream"); //false

strongPasswordChecker2("1aB!"); //false


