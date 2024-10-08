//1078. Occurrences After Bigram
//sgiven two strings first and second
//consider occurrences in some text of the form "first second third"
//where second comes immediately after first and third comes immediately after second
//return an array of all the words third for each occurrence of "first second third"
var occurencesBigram = (text, first, second) => {
    let res = [];
    
    //splitting
    words = text.split(' ');

    //traversing
    for (let i = 0; i < words.length - 2; i++) {
        //extracting only third
        if (words[i] === first && words[i + 1] === second) res.push(words[i + 2]);
    }
    
    return res;
}
occurencesBigram(text = "alice is a good girl she is a good student", first = "a", second = "good"); //["girl","student"]
//words = [ alice, is, a, good, girl, she, is, a, good, student ]
//            i
//alice != a || is != good

//words = [ alice, is, a, good, girl, she, is, a, good, student ]
//                  i
//is != a || a != good

//words = [ alice, is, a, good, girl, she, is, a, good, student ]
//                     i
//a = a || good = good
//res = [ "girl", ]

//words = [ alice, is, a, good, girl, she, is, a, good, student ]
//                         i
//good != a || girl != good

//words = [ alice, is, a, good, girl, she, is, a, good, student ]
//                               i
//girl != a || she != good

//words = [ alice, is, a, good, girl, she, is, a, good, student ]
//                                     i
//she != a || is != good

//words = [ alice, is, a, good, girl, she, is, a, good, student ]
//                                          i
//is != a || a != good

//words = [ alice, is, a, good, girl, she, is, a, good, student ]
//                                             i
//a = a || good = good
//res = [ "girl", "good" ]

//words = [ alice, is, a, good, girl, she, is, a, good, student ]
//                                             i
//a = a || good = good
//res = [ "girl", "good" ]

occurencesBigram(text = "we will we will rock you", first = "we", second = "will"); //["we","rock"]

