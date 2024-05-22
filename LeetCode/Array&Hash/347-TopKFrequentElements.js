//347. Top K Frequent Elements
//given an integer array nums and an integer k
//return the k - most frequent elements

//Approach: 
//using map - for frequency
//Bucket Sort ([]) - we bucket the frequency as the kind of key of the bucket
//and then within each key, we can add into the bucket or an array
//using Object.entries() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries`
var topKFreqElements = (nums, k) => {
    //create map
    let map = {}; //for frequemcy
    let bucket = []; //adding key: value pairs into bycket
    let res = []; //extract onlt k-th the most frequent elements


    //create frequency map
    for (let i = 0; i < nums.length; i++) {
        //setting the map if there is no nums[i]
        if (!map[nums[i]]) {
            map[nums[i]] = 1;
        } else {
            map[nums[i]]++;
        }
    }

    //populate BUCKET
    for (let [num, freq] of Object.entries(map)) {
        //if the bucket of freq cannot be found
        if (!bucket[freq]) {
            //setting the freq into bucket
            //need to initialize the set before adding number to it
            bucket[freq] = new Set().add(num);
        } else {
            //adding num to the bucket[freq]
            bucket[freq] = bucket[freq].add(num);
        }
    }

    //looping through from backwards to find the top frequence
    for (let i = bucket.length - 1; i >= 0; i--) {
        //if we find a bucket at position - push into res a copy of bucket[i]
        //making a copy since we do not want to update the bucket array
        if (bucket[i]) res.push(...bucket[i]);

        //checking just in case it has empty array from the backwards
        if (res.length === k) break;
    }
    return res;
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
