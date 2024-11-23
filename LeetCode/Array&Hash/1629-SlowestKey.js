//1629. Slowest Key
//a newly designed keypad was tested, where a tester pressed a sequence of n keys, one at a time
//given a string keysPressed of length n, where keysPressed[i] was the ith key pressed in the testing sequence, and a sorted list releaseTimes, where releaseTimes[i] was the time the ith key was released
//both arrays are 0-indexed. The 0th key was pressed at the time 0, and every subsequent key was pressed at the exact time the previous key was released
//the tester wants to know the key of the keypress that had the longest duration. The ith keypress had a duration of releaseTimes[i] - releaseTimes[i - 1], and the 0th keypress had a duration of releaseTimes[0]
//note that the same key could have been pressed multiple times during the test, and these multiple presses of the same key may not have had the same duration
//return the key of the keypress that had the longest duration. If there are multiple such keypresses, return the lexicographically largest key of the keypresses
var slowestKey = (releaseTimes, keysPressed) => {
    let max = 0;
    let key;

    for (let i = 0; i < releaseTimes.length; i++) {
        let diff = releaseTimes[i] - (releaseTimes[i - 1] || 0);

        if (diff > max || (diff === max && keysPressed[i] > key)) {
            max = diff;

            key = keysPressed[i];
        }
    }

    return key;
}
slowestKey(releaseTimes = [9,29,49,50], keysPressed = "cbcd"); //"c"
//[9, 29, 49, 50]
// ^
//diff = 9 - 0 = 9 > max
//max = 0 -> 9
//key = '' -> "c"

//[9, 29, 49, 50]
//     ^
//diff = 29 - 9 = 20 > max
//max = 0 -> 9 -> 20
//key = '' -> "c" -> "b"

//[9, 29, 49, 50]
//        ^
//diff = 49 - 29 = 20 = max & 'c' > 'b'
//max = 0 -> 9 -> 20 -> 20
//key = '' -> "c" -> "b" -> "c"

//[9, 29, 49, 50]
//             ^
//diff = 50 - 49 = 1 < max

//key = "c"

slowestKey(releaseTimes = [12,23,36,46,62], keysPressed = "spuda"); //"a"
//[12, 23, 36, 46, 62]
// ^
//diff = 12 - 0 = 12 > max
//max = 0 -> 12
//key = '' -> "s"

//[12, 23, 36, 46, 62]
//      ^
//diff = 23 - 12 = 11 < max

//[12, 23, 36, 46, 62]
//          ^
//diff = 36 - 23 = 13 > max
//max = 0 -> 12 -> 13
//key = '' -> "s" -> "u"

//[12, 23, 36, 46, 62]
//              ^
//diff = 46 - 36 = 10 < max

//[12, 23, 36, 46, 62]
//                 ^
//diff = 62 - 46 = 16 > max
//max = 0 -> 12 -> 13 -> 16
//key = '' -> "s" -> "u" -> "a"

//key = "a"
