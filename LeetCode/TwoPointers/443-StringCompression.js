//443. String Compression
//given an array of characters chars, compress it using the following algorithm:
//begin with an empty string s
//for each group of consecutive repeating characters in chars:
//if the group's length is 1, append the character to s
//otherwise, append the character followed by the group's length
//the compressed string s should not be returned separately, but instead, be stored in the input character array chars
//note that group lengths that are 10 or longer will be split into multiple characters in chars
//after you are done modifying the input array, return the new length of the array
//you must write an algorithm that uses only constant extra space

//Approach:
//using two pointers and additional one pointer
var stringCompression = (chars) => {
    //base case
    if (!chars.length) return 0;

    let i = 0;
    let curr = chars[0]; //base setting
    let count = 0;

    //traversing
    for (let j = 0; j <= chars.length; j++) {
        //counting the num of consecutive occurrences
        if (chars[j] === curr) count++;
        else {
            //storing the char
            chars[i] = curr;

            //storing string to each digit in the arr
            if (count > 1) {
                let s = count.toString();

                for (let k = 0; k < s.length; k++) chars[++i] = s[k];
            }
            
            //resetting
            i++;

            curr = chars[j];

            count = 1;
        }
    }

    return i;
}
//TC: O(n)
//SC: O(1)
stringCompression(chars = ["a","a","b","b","c","c","c"]); //6
//["a", "a", "b", "b", "c", "c", "c"]
//  i
//  j
//i = 0
//curr = a
//chars[0] = curr -> count++
//count = 0 -> 1

//["a", "a", "b", "b", "c", "c", "c"]
//  i
//       j
//i = 0
//curr = a
//chars[1] = curr -> count++
//count = 0 -> 1 -> 2

//["a", "a", "b", "b", "c", "c", "c"]
//  i
//            j
//i = 0
//curr = a
//count = 0 -> 1 -> 2
//chars[2] != curr -> update chars[0] as a  -> ["a", "a", "b", "b", "c", "c", "c"]
//                    count > 1 -> s = "2" -> update chars[1] as "2" -> ["a", "2", "b", "b", "c", "c", "c"]
//resetting: i = 0 -> 2
//           curr = a -> b
//count = 0 -> 1 -> 2 -> 1

//["a", "2", "b", "b", "c", "c", "c"]
//            i
//                 j
//i = 0 -> 2
//curr = a -> b
//chars[3] = curr -> count++
//count = 0 -> 1 -> 2 -> 1 -> 2

//["a", "2", "b", "b", "c", "c", "c"]
//            i
//                      j
//i = 0 -> 2
//curr = a -> b
//count = 0 -> 1 -> 2 -> 1 -> 2
//chars[4] != curr -> update chars[2] as b  -> ["a", "2", "b", "b", "c", "c", "c"]
//                    count > 1 -> s = "2" -> update chars[3] as "2" -> ["a", "2", "b", "2", "c", "c", "c"]
//resetting: i = 0 -> 2 -> 4
//           curr = a -> b -> c
//count = 0 -> 1 -> 2 -> 1 -> 2 -> 1

//["a", "2", "b", "2", "c", "c", "c"]
//                      i
//                            j
//i = 0 -> 2 -> 4
//curr = a -> b -> c
//chars[5] = curr -> count++
//count = 0 -> 1 -> 2 -> 1 -> 2 -> 1 -> 2

//["a", "2", "b", "2", "c", "c", "c"]
//                      i
//                                j
//i = 0 -> 2 -> 4
//curr = a -> b -> c
//chars[6] = curr -> count++
//count = 0 -> 1 -> 2 -> 1 -> 2 -> 1 -> 2 -> 3

//["a", "2", "b", "2", "c", "c", "c"]
//                      i
//                                    j
//i = 0 -> 2 -> 4
//curr = a -> b -> c
//count = 0 -> 1 -> 2 -> 1 -> 2 -> 1 -> 2 -> 3
//chars[7] != curr -> update chars[4] as c  -> ["a", "2", "b", "2", "c", "c", "c"]
//                    count > 1 -> s = "3" -> update chars[5] as "2" -> ["a", "2", "b", "2", "c", "3", "c"]
//resetting: i = 0 -> 2 -> 4 -> 6
//           curr = a -> b -> c -> undefined
//count = 0 -> 1 -> 2 -> 1 -> 2 -> 1 -> 2 -> 3 -> 1

//chars = ["a", "2", "b", "2", "c", "3"]
//6

stringCompression(chars = ["a"]); //1

stringCompression(chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]); //4
//["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]
//  i
//  j
//i = 0
//curr = a
//chars[0] = curr -> count++
//count = 0 -> 1

//["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]
//  i
//       j
//i = 0
//curr = a
//count = 0 -> 1
//chars[1] != curr -> update chars[0] as a  -> ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]
//                    count = 1 -> continue
//resetting: i = 0 -> 1
//           curr = a -> b
//count = 0 -> 1 -> 1

//["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]
//       i
//            j
//i = 0 -> 1
//curr = a -> b
//chars[2] = curr -> count++
//count = 0 -> 1 -> 1 -> 2

//["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]
//       i
//                 j
//i = 0 -> 1
//curr = a -> b
//chars[3] = curr -> count++
//count = 0 -> 1 -> 1 -> 2 -> 3
//...
//["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]
//       i
//                                                                  j
//i = 0 -> 1
//curr = a -> b
//count = 0 -> 1 -> 1 -> 2 -> 3 -> ... -> 12
//chars[13] != curr -> update chars[1] as b  -> ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]
//                    count > 1 -> s = "12" -> update chars[3] as "1" -> ["a", "b", "1", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]
//                                          -> update chars[4] as "2" -> ["a", "b", "1", "2", "b", "b", "b", "b", "b", "b", "b", "b", "b"]
//resetting: i = 0 -> 1 -> 4
//           curr = a -> b -> undefined
//count = 0 -> 1 -> 1 -> 2 -> 3 -> ... -> 12 -> 1

//["a", "b", "1", "2"]
//4
