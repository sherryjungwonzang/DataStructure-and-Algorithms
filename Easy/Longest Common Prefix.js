//Write a function to find the longest common prefix string amongst an array of strings.
//If there is no common prefix, return an empty string ""

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs.length) return "";
    
    let prefix = strs[0];
    
    for(let i = 1; i < strs.length; i++){
        while(strs[i].indexOf(prefix) !== 0){
            prefix = prefix.slice(0, prefix.length - 1);
              }
    }
    return prefix;
};
