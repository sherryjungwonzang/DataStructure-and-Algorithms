/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = (strs) => {
    let obj = {};
    
    for (let str of strs) {
        let letters = str.split("").sort().join("");
        obj[letters] ? obj[letters].push(str) : obj[letters] = [str];
    }
    return Object.values(obj);
};
// Time Complexity: O(n*klog(k)) 
//where n is the length of input array and k is the maximum length of a string in input array
// Space Complexity: O(n)
