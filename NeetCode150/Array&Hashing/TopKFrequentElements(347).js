//Top K Frequent Elements (347)
//given an integer array nums and an integer k
//return the k - most frequent elements

//Approach: 
//using map - for frequency
//Bucket Sort ([]) - we bucket the frequency as the kind of key of the bucket
//and then within each key, we can add into the bucket or an array
//using Object.entries() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries`
var topKFreqElements = (nums, k) => {
  //create an object MAP
  let map = {}; //for frequency
  let bucket = []; //adding key: value pairs into bucket
  let result = []; //extract only k-th the most frequent elements' 

  //create the frequency map
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) { //if map doesn't have nums[i]
      map[nums[i]] = 1;
    } else {//if the values is there
      map[nums[i]]++; 
    }
  }

  //populate the BUCKET
  //Object.entries() - returns an array of given object's key-value pairs
  for (let [num, freq] of Object.entries(map)) {
    if (!bucket[freq]) { //if the bucket of freq cannot be found
      //can set the bucket of freq - store it as Set() 
      //where we add the number to that set
      bucket[freq] = new Set().add(num); //so need to initialize the set before adding number to it
    } else { //if the bucket of freq can be found
      bucket[freq] = bucket[freq].add(num); //add the number to the bucket[freq]
    }
  }

  //loop through the bucket backwards and add into results the nums k-times frequency
  for (let i = bucket.length - 1; i >= 0; i--) {
    //if we find a bucket at position - we push into results a copy of bucket[i]
    //the reason for making a cpoy - we dont want to update the bucket array
    if (bucket[i]) result.push(...bucket[i]);
    
    //to check just in case it can have empty array from the backwards
    if (result.length === k) break; 
  }
  return result;
}
//TC: O(n * log(n))
//SC: O(n)
topKFreqElements([1, 1, 1, 2, 2, 3], 2); //[1,2]
//                i
//      num freq
//map = { 1: 3, 2: 2, 3: 1 }
//bucket = [ 1: [3,6], 2: [2], 3: [1] ] - according to frequency
//                                i     - starting from backwards
//result = [ 1, 2 ]

topKFreqElements([1], 1); //[1]
//                i
//      num freq
//map = { 1: 1 }
//bucket = [ 1: [1] ] - according to frequency
//              i
//result = [1]
