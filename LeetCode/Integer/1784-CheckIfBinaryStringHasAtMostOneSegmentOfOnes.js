//1784. Check If Binary String Has At Most One Segment Of Ones
//Given a binary string s ​​​​​without leading zeros
//return true​​​ if s contains at most one contiguous segment of ones - Otherwise, return false
var checkOneSegment = (s) => {
    return s.indexOf("01") < 0;
}
checkOneSegment("1001"); //false
// 1 0 0 1
//     ^ ^
//01.index = 2 > 0 -> false

checkOneSegment("110"); //true
// 1 1 0

//01.index = -1 < 0 -> true
