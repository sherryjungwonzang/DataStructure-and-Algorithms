//Group Anagrams (49)
//given an array of strings 'strs' 
//group the anagrams together
//can return the answer is any order

//Approach:
//1) order alphabetically of each words in 'strs' array
//2) after creating sorted array, using map - with the values within the strings array to the sorted array
var groupAnagrams = (strs) => {
  //create Alphabetically sorted array
  //map over strings | pass in string | and then split the string so turn it into an array | sort the string and join the string | turn back into the string
  let sorted = strs.map((str) => str.split("").sort().join(""));

  //create the map data structure
  let map = {};

  //loop through the sorted array and check if the map contains tha value
  //if it is not - can add it to the map and map it to the string values
  for (let i = 0; i < sorted.length; i++) {
    if(!map[sorted[i]]) {
      map[sorted[i]] = [strs[i]]; //need to return the values organized within arrays
    } else { //if sorted is already in map
      map[sorted[i]].push(strs[i])
    }
  }
  //to get the values of the object
  return Object.values(map);
}
//TC: O (n * nlog(k)) - n is looping over array, k is max length of string within array | klog(k) is looping over each individual word to sort it
//SC: O (n * k)
groupAnagrams(["eat","tea","tan","ate","nat","bat"]); //[["bat"],["nat","tan"],["ate","eat","tea"]]
//sorted = [ "aet", "aet", "ant", "aet", "ant:, "abt" ]
//             i
//map = [ aet: [eat] ]

//                    i
//map = [ aet: [eat, tea] ]

//                           i
//map = [ aet: [eat, tea] | ant: [tan] ]

//                                 i
//map = [ aet: [eat, tea, ate] | ant: [tan] ]

//                                        i
//map = [ aet: [eat, tea, ate] | ant: [tan, nat] ]

//                                              i
//map = [ aet: [eat, tea, ate] | ant: [tan, nat] | abt: [bat] ]

//return vObject.values -> [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]


groupAnagrams([""]); //[[""]]

groupAnagrams("a"); //[["a"]]
