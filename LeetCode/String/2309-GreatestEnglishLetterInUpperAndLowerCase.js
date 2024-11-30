//2309. Greatest English Letter In Upper And Lower Case
//given a string of English letters s
//return the greatest English letter which occurs as both a lowercase and uppercase letter in s

//the returned letter should be in uppercase
//if no such letter exists, return an empty string
//an English letter b is greater than another letter a if b appears after a in the English alphabet

//Approach:
//using fromCharCode
var greatestEnglishLetter = (s) => {
    for (let i = 0; i < 26; i++) {
        let lowerCase = String.fromCharCode(122 - i);
        let upperCase = String.fromCharCode(90 - i);

        //checking greatest english letter
        if (s.includes(lowerCase) && s.includes(upperCase)) return upperCase;
    }

    return '';
}
greatestEnglishLetter("lEeTcOdE"); //"E"
//i = 0             i = 1               i = 2             ...      i = 20               i = 21
//lowerCase = z     lowerCase = y       lowerCase = x              lowerCase = f        lowerCase = e
//upperCase = Z     upperCase = Y       upperCase = X              upperCase = F        upperCase = E

//l E e T c O d E
//  ^ ^
//s includes e and E
//'E'

greatestEnglishLetter("arRAzFif"); //"R"
//i = 0             i = 1               i = 2             ...      i = 7               i = 8
//lowerCase = z     lowerCase = y       lowerCase = x              lowerCase = s        lowerCase = r
//upperCase = Z     upperCase = Y       upperCase = X              upperCase = S        upperCase = R

//a r R A z F i f
//  ^ ^
//s includes r and R
//'R'

greatestEnglishLetter("AbCdEfGhIjK"); //""
//i = 0             i = 1               i = 2             ...      i = 24               i = 25
//lowerCase = z     lowerCase = y       lowerCase = x              lowerCase = b        lowerCase = a
//upperCase = Z     upperCase = Y       upperCase = X              upperCase = B        upperCase = A

//A b C d E f G h I j K
//s not includes same lower and uppercase chars
//''
