//String to Integer(atoi)
//converts a string to a 32-but signed integer

//algorithm:
//initialize two variable: sign as 1 and result as 0
//skip all leading whitespaces in the input string
//check char is + or -
//+: sign=1, -: sign=-1
//iterate over the chars in the string
//result = result * 10 + digit


var myAtoi = (str) => {
    str = str.trim();

    if (!str) return 0;
    var sign = 1;
    var i = 0;
    var answer = 0;

    if (str[i] == '+') {
      sign = 1;
      i++;
    } else if (str[i] == '-') {
      sign = -1;
      i++;
    }
  
    for (; i < str.length; i++) {
      var digit = str.charCodeAt(i) - 48;

      if (digit > 9 || digit < 0) break;

      if (answer > 2147483647 / 10 || answer > (2147483647 - digit) / 10) {
        return sign == 1 ? 2147483647 : -2147483648;
      } else {
        answer = answer * 10 + digit;
      }
    }
    return answer * sign;
};
