//1694. Reformat Phone Number
//given a phone number as a string number - number consists of digits, spaces ' ', and/or dashes '-'
//you would like to reformat the phone number in a certain manner
//firstly, remove all spaces and dashes
//then, group the digits from left to right into blocks of length 3 until there are 4 or fewer digits
//the final digits are then grouped as follows:
//2 digits: A single block of length 2
//3 digits: A single block of length 3
//4 digits: Two blocks of length 2 each

//the blocks are then joined by dashes
//notice that the reformatting process should never produce any blocks of length 1 and produce at most two blocks of length 2
//return the phone number after formatting

//Approach:
//using Regex
var reformatPhoneNum = (number) => {
    //removing - and blank
    let removed = number.replace(/-/g, '').replace(/ /g, '').split('');
    let res = '';

    while (removed.length >= 4) {
        removed.length === 4 ? res += removed.splice(0, 2).join('') + '-' + removed.splice(0, 2).join('') : 
                               res += removed.splice(0, 3).join('') + '-'
    }

    res += removed.join('');

    return res;
}
reformatPhoneNum("1-23-45 6"); //"123-456"
//removed = "123456" -> [1, 2, 3, 4, 5, 6] || length = 6

//length >= 4 -> splice from 0,3 and 4, 6
// [1, 2, 3, 4, 5, 6]
//  -------
//res = '' -> '123' + '-'

// [1, 2, 3, 4, 5, 6]
//           -------
//res = '' -> '123' + '-' + '456
//"123-456"

reformatPhoneNum("123 4-567"); //"123-45-67"
//removed = "1234567" -> [1, 2, 3, 4, 5, 6, 7] || length = 7

//length >= 4 -> splice from 0,3 first
//[1, 2, 3, 4, 5, 6, 7]
//  -------
//res = '' -> '123' + '-'

//length = 4 -> splice from 0, 2 and the next 0, 2
//[1, 2, 3, 4, 5, 6, 7]
//          -----
//res = '' -> '123' + '-' + '45' + '-'

//[1, 2, 3, 4, 5, 6, 7]
//                ----
//res = '' -> '123' + '-' + '45' + '-' + '67

//"123-45-67"

reformatPhoneNum("123 4-5678"); //"123-456-78"
