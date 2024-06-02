//494. Target Sum
//given an integer array 'nums' and an integer 'target'
//you want to build an expression out of nums by adding one of the symbols '+' and '-'
//before each integer in nums and then concatenate all the integers

//for example, if nums=[2,1], you can add a + before 2 and - before 1
//and concatenate them to build the expression "+2-1"

//return the num of different expressions that you can cuild which evaluates to target

//Approach:
//using DP - iterate array and pre-calculate the next sums based on previous sums and amounts
var targetSum = (nums, target) => {
  //initial setting DP
  //initial sum to 0 and amount to 1
  let count = new Map([[0, 1]]);

  //DP
  for (let num of nums) {
    let next = new Map();

    for (let [sum, amount] of count) {
      let plus = sum + num;
      let minus = sum - num;

      next.set(plus, next.has(plus) ? next.get(plus) + amount : amount);
      next.set(minus, next.has(minus) ? next.get(minus) + amount : amount);
    }

    count = next; //updating
  }

  return count.has(target) ? count.get(target) : 0;
}
targetSum([1,1,1,1,1], 3); //5
//-1 + 1 + 1 + 1 + 1 = 3
//+1 - 1 + 1 + 1 + 1 = 3
//+1 + 1 - 1 + 1 + 1 = 3
//+1 + 1 + 1 - 1 + 1 = 3
//+1 + 1 + 1 + 1 - 1 = 3

targetSum([1], 1); //1
