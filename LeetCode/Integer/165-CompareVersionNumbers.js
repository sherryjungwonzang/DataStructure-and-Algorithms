//165. Compare Version Numbers
//given two version strings, version1 and version2, compare them
//aversion string consists of revisions separated by dots '.'
//the value of the revision is its integer conversion ignoring leading zeros
//to compare version strings, compare their revision values in left-to-right order
//if one of the version strings has fewer revisions, treat the missing revision values as 0
//return the following:
//if version1 < version2, return -1
//if version1 > version2, return 1
//otherwise, return 0

//Approach:
//using parseInt
var compareVersionNum = (version1, version2) => {
    let v1 = version1.split('.');
    let v2 = version2.split('.');
    let len = Math.max(v1.length, v2.length);

    for (let i = 0; i < len; i++) {
        let num1 = parseInt(v1[i]) || 0;
        let num2 = parseInt(v2[i]) || 0;

        //edge case
        if (num1 === num2) continue;

        return num1 > num2 ? 1 : -1;
    }

    return 0;
}
compareVersionNum(version1 = "1.2", version2 = "1.10"); //-1
//v1 = [1, 2] || v2 = [1, 10] || len = max(2, 2) = 2
//      ^              ^
//num1 = 1 || num2 = 1 -> num1 = num2

//v1 = [1, 2] || v2 = [1, 10]
//         ^              ^
//num1 = 2 || num2 = 10 -> num1 < num2 -> -1

//-1

compareVersionNum(version1 = "1.01", version2 = "1.001"); //0
//v1 = [1, 01] || v2 = [1, 001] || len = max(2, 2) = 2
//      ^              ^
//num1 = 1 || num2 = 1 -> num1 = num2

//v1 = [1, 01] || v2 = [1, 001]
//         ^                ^
//num1 = 1 || num2 = 1 -> num1 = num2

//0

compareVersionNum(version1 = "1.0", version2 = "1.0.0.0"); //0
//v1 = [1, 0] || v2 = [1, 0, 0, 0] || len = max(2, 4) = 4
//      ^              ^
//num1 = 1 || num2 = 1 -> num1 = num2

//v1 = [1, 0] || v2 = [1, 0, 0, 0]
//         ^              ^
//num1 = 0 || num2 = 0 -> num1 = num2

//0
