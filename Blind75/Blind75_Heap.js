//Blind 75 - Heap
//1. Merge K Sorted Lists (23)
//given an array of k, linked lists lists
//each linked list is sorted in ascending order
//merge all the linked list into one sorted linked list and return it

//Approach:
//1. Brute force approach - where we create an array from this list + rudimental sorting algorithm + populate a new sorted list
//2. Merge Sort - making two lists and merging two of these lists

//making two lists
var mergeKLists = (lists) => {
  if (lists.length === 0) return null;

  while(lists.length > 1) {
    
    //subtracting the two lists from list
    let list1 = lists.shift(); //we just need to grab the first one
    let list2 = lists.shift(); //we just need to grab the second one

    //need to merge two lists - with separate function
    let merged = mergeLists(list1, list2);

    //need to update merged value into the lists
    lists.push(merged);
  }
  return lists[0]; //because it is in array of array
}

//merging two lists
function mergeLists(list1, list2) {
  //node that can be initialized to any old value
  let dummy = new ListNode(0); //creating a dummy node before the original head - does not matter value it is
  let head = dummy; //using as a reference - at the last, we are returning this head

  while(list1 && list2) {
    if (list1.val <= list2.val) {
      dummy.next = list1;
      list1 = list1.next; //to move the pointer to the next
    } else { //list1.val > list2.val
      dummy.next = list2;
      list2 = list2.next; //moving the pointer to the next
    }
    dummy = dummy.next; //need to add the next value from one of these lists to the tail of dummy
  }
  
  //append to dummy the rest of the list that is not equal to null
  if (list1 === null) {
    dummy.next = list2;
  } else { //list2 === null
    dummy.next = list1;
  }
  return head.next; //reference that we created at the start
}
//TC: O(nlogk)
//             L1        L2
mergeKLists([[1,4,5], [1,3,4], [2,6]]); //[1,1,2,3,4,4,5,6]
//            -        -
//1 vs 1 -> list1
//dummy -> 1  
//              -      -
//4 vs 1 -> list2
//dummy -> 1  -> 1
//              -         -
//4 vs 3 -> list2
//dummy -> 1  -> 1 -> 3
//              -           -
//4 vs 4 -> list1
//dummy -> 1  -> 1 -> 3 -> 4
//                -         -
//5 vs 4 -> list2
//dummy -> 1  -> 1 -> 3 -> 4 -> 4
//                -           - -> list2 === null
//dummy -> 1  -> 1 -> 3 -> 4 -> 4 -> 5

mergeKLists([]); //[]

mergeKLists([[]]); //[]


//           L1  L2
mergeKLists([[],[1]]); //[1]
//            -  -
//0 vs 1 -> list1
//dummy -> 0 -> 
//list1 === null
//dummy -> 0 -> 1


//2. Top K Frequent Elements (347)
//given an integer array nums and an integer k
//return the k - most frequent elements

//Approach: 
//Bucket Sort - we bucket the frequency as the kind of key of the bucket
//and then within each key, we can add into the bucket or an array
var topKFreqElements = (nums, k) => {
  //create an object map
  let map = {};
  let bucket = [];
  let result = [];

  //create the frequency map
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) { //if map doesn't have nums[i]
      map[nums[i]] = 1;
    } else {//if the values is there
      map[nums[i]]++; 
    }
  }

  //populate the bucket
  for (let [num, freq] of Object.entries(map)) {
    if (!bucket[freq]) { //if the bucket of freq cannot be found
      //can set the bucket of freq - store it as Set() 
      //where we add the number to that set
      bucket[freq] = new Set().add(num); //so need to initialize the set before adding number to it
    } else {
      bucket[freq] = bucket[freq].add(num); //add the number to the bucket[freq]
    }
  }

  //loop through the bucket backwards and add into results the nums k-times frequency
  for (let i = bucket.length - 1; i >= 0; i--) {
    //if we find a bucket at position - we push into results a copy of bucket[i]
    //the reason for making a cpoy - we dont want to update the bucket array
    if (bucket[i]) result.push(...bucket[i]);
    
    if (result.length === k) break;
  }
  return result;
}
//TC: O(n)
topKFreqElements([1,1,1,2,2,3], 2); //[1,2]
topKFreqElements([1], 1); //[1]
