//917. Reverse Only Letters
//given a string s
//reverse the string according to the following rules:
//all the characters that are not English letters remain in the same position
//all the English letters should be reversed - lowercase, uppercase
//return s after reversing it

//Approach:
//using two pointers
var reverseOnlyLetters = (s) => {
    //two pointers
    let left = 0;
    let right = s.length - 1;
    let res = s.split('');

    while (left < right) {
        //non-alphabets
        if ((res[left] < 'A' || res[left] > 'Z') && (res[left] < 'a' || res[left] > 'z')) {
            left++;
            continue;
        }

        if ((res[right] < 'A' || res[right] > 'Z') && (res[right] < 'a' || res[right] > 'z')) {
            right--;
            continue;
        }

        //swapping on alphabets
        let temp = res[left];
        res[left] = res[right];
        res[right] = temp;

        left++;
        right--;
    }
    
    return res.join('');
}
//TC: O(n)
//SC: O(n)
reverseOnlyLetters("ab-cd"); //dc-ba

reverseOnlyLetters("a-bC-dEf-ghIj"); //"j-Ih-gfE-dCba"

reverseOnlyLetters("Test1ng-Leet=code-Q!"); //"Qedo1ct-eeLg=ntse-T!"
