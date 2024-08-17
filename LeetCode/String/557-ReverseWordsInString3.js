//557. Reverse Words In String3
//given a string 's'
//reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order
var reverseWords3 = (s) => {
    let words = s.split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].split('').reverse().join('');
    }

    return words.join(' ');
}
reverseWords3("Let's take LeetCode contest"); //"s'teL ekat edoCteeL tsetnoc"
//words = [ Let's, take, LeetCode, contest ]
//            ^

//Let's -> s'teL
//take -> ekat
//LeetCode -> edoCteeL
//contest -> tsetnoc

//"s'teL ekat edoCteeL tsetnoc"

reverseWords3("Mr Ding"); //"rM gniD"
