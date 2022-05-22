//1.5 One Away
//there are three types of edits
//be performed on strings: insert a character, remove a character or replace a character
//given two strings
//to check if they are one edit or zero edits away

//O(n) time and O(n) space
function isValid (string1, string2) {
    //longer and shorter string
    const s1 = string1.length > string2.length ? string1: string2;
    const s2 = string1.length > string2.length ? string2: string1;

    if ((s1.length - s2.length) > 1) return false;

    let idx1 = 0;
    let idx2 = 0;

    let foundDifference = false;

    while(idx1 < s1.length && idx2 < s2.length) {
        if(s1[idx1] !== s2[idx2]) {
            if(foundDifference) return false;

            foundDifference = true;

            //handles replace
            if(s1.length === s2.length) {
                idx1++;
            } else {
                //handles insert and delete
                idx1++;
            }
        } else {
            idx1++;
        }
        idx2++;
    }
    return true
}

module.exports = isValid
