//Blind 75 - Array
//1. Two Sum (1)
//given an array of integers 'nums' and integer 'target'
//returns indices of the two numbers such that they add up to target

//Approach:
//using map
//iterate over every single items in the array and find the difference between target and current number
//keep the processed items and their index in a map (nums[i], i)
//so that every time we calculate the new difference, we can check whether that map has item or not
function twoSum(nums, target) {
  //using HashTable
  var map = new Map;
 
  for (var i = 0; i < nums.length; i++) {
    let current = target - nums[i];

    if (map.has(current)) {
      return [i, map.get(current)];
    } else{
      map.set(nums[i], i);
    }
  }
}
//Time Complexity: O(n)
//soace complexity: O(n)
twoSum([2, 7, 11, 15], 9); //[0,1]
//      i
//target = 9, current = 9 - nums[0] = 9-2=7
//check 7 is in the map -> NO
//map.set(nums[0], 0) = (2, 0)
//map = [[2,0], ]

//         i
//target=9, current=9-nums[1] = 9-7=2
//check 2 is in the map -> YES
//return [ map.get(2), 1 ] = [0, 1]

twoSum([3, 2, 4], 6); //[1,2]
//      i
//target=6, current=6-nums[0] = 6-3=3
//check 3 is in the map -> NO
//map.set(nums[0], 0) = (3,0)
//map = [[3,0], ]

//         i
//target=6, current=6-nums[1] = 6-2=4
//check 4 is in the map -> NO
//map.set(nums[1], 1) = (2, 1)
//map = [[3,0], [2,1], ]

//             i
//target=6, current=6-nums[2] = 6-4=2
//check 2 is in the map -> YES
//return [ map.get(2), 2] = [1,2]

twoSum([3,3], 6); //[0,1]


//2. Best Time to Buy and Sell Stock (121)
//given an array 'prices' - where prices[i] is the price of a given stock on the i-th day
//want to maximize profit by choosing a single day to buy one stock
//and choosing a different day in the future to sell that stock
//return the max profit you can achieve from transaction
//if you cannot achieve any profit - return 0
var maxProfit = (prices) => {
  let currMin = prices[0]; //currMin should start from index 0
  let currMax = 0; //if there is no profit, we should return 0 - so starting with 0

  //looping through thr prices with comparing the difference
  //between the prices[i] and currMin for Minimum value
  //between the currMax and prices[i] - currMin for Maximum value
  for (let i = 0; i < prices.length; i++) {
    currMin = Math.min(prices[i], currMin);
    currMax = Math.max(currMax, prices[i] - currMin);
  }

  return currMax;
}
//TC: O(n)
//SC:O(1)
maxProfit([7, 1, 5, 3, 6, 4]); //5 - buy on Day 2(price=1) and sell on Day5(price=6) -> profit = 6 - 1 = 5
//        min
//currMin = 7
//currMax = 0
//            min
//currMin = 7 -> 1
//currMax = 0 -> 0
//               min
//currMin = 7 -> 1 -> 1
//currMax = 0 -> 0 -> 5-1=4
//                 min
//currMin = 7 -> 1 -> 1 -> 1
//currMax = 0 -> 0 -> 5-1=4 -> 3-1=2 
//                     min
//currMin = 7 -> 1 -> 1 -> 1 -> 1
//currMax = 0 -> 0 -> 5-1=4 -> 3-1=2 -> 6-1=5 
//                         min
//currMin = 7 -> 1 -> 1 -> 1 -> 1 -> 1
//currMax = 0 -> 0 -> 5-1=4 -> 3-1=2 -> 6-1=5 -> 4-1=3
//currMin = 1 | currMax = 5 


maxProfit([7,6,4,3,1]); //0 - no transactions are done and the max profit is 6









