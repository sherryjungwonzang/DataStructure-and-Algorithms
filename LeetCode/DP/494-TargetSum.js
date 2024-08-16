//494. Target Sum
//given an integer array 'nums' and an integer 'target'
//you want to build an expression out of nums by adding one of the symbols '+' and '-'
//before each integer in nums and then concatenate all the integers

//for example, if nums=[2,1], you can add a + before 2 and - before 1
//and concatenate them to build the expression "+2-1"

//return the num of different expressions that you can cuild which evaluates to target

//Approach:
//using DP
var targetSum = (nums, target) => {
    let count = new Map([[0, 1]]); //[sum, amount]

    //DP
    for (let num of nums) {
        let next = new Map();

        for (let [sum, amount] of count) {
            let plus = sum + num;
            let minus = sum - num;

            next.set(plus, next.has(plus) ? next.get(plus) + amount : amount);
            next.set(minus, next.has(minus) ? next.get(minus) + amount : amount);
        };

        count = next; //updating
    };

    return count.has(target) ? count.get(target) : 0;
}
targetSum([1,1,1,1,1], 3); //5
//-1 + 1 + 1 + 1 + 1 = 3
//+1 - 1 + 1 + 1 + 1 = 3
//+1 + 1 - 1 + 1 + 1 = 3
//+1 + 1 + 1 - 1 + 1 = 3
//+1 + 1 + 1 + 1 - 1 = 3

//count = { 0: 1 }
//next = { }

//[1, 1, 1, 1, 1]
// ^
//num = 1, sum = 0, amount = 1
//plus = 0 + 1 = 1
//minus = 0 - 1 = -1
//next = { 1: 1, -1: 1 }
//count = { 0: 1 } => { 1: 1, -1: 1 }

//[1, 1, 1, 1, 1]
//    ^
//num = 1, sum = 1, amount = 1
//plus = 1 + 1 = 2
//minus = 1 - 1 = 0
//next = { 2: 1, 0: 1 }

//num = 1, sum = -1, amount = 1
//plus = -1 + 1 = 0
//minus = -1 - 1 = -2
//next = { 2: 1, 0: 1 + 1 = 2, -2: 1 }
//count = { 0: 1 } => { 1: 1, -1: 1 } -> { 2: 1, 0: 2, -2: 1 }

//[1, 1, 1, 1, 1]
//       ^
//num = 1, sum = 2, amount = 1
//plus = 2 + 1 = 3
//minus = 2 - 1 = 1
//next = { 3: 1, 1: 1 }

//num = 1, sum = 0, amount = 2
//plus = 0 + 1 = 1
//minus = 0 - 1 = -1
//next = { 3: 1, 1: 1 + 2 = 3, -1: 2 }

//num = 1, sum = -2, amount = 1
//plus = -2 + 1 = -1 
//minus = -2 - 1 = -3
//next = { 3: 1, 1: 3, -1: 1 + 2 = 3, -3: 1 }
//count = { 0: 1 } => { 1: 1, -1: 1 } -> { 2: 1, 0: 2, -2: 1 } -> { 3: 1, 1: 3, -1: 3, -3: 1 }

//[1, 1, 1, 1, 1]
//          ^
//num = 1, sum = 3, amount = 1
//plus = 3 + 1 = 4 
//minus = 3 - 1 = 2
//next = { 4: 1, 2: 1 }

//num = 1, sum = 1, amount = 3
//plus = 1 + 1 = 2
//minus = 1 - 1 = 0
//next = { 4: 1, 2: 1 + 3 = 4, 0: 3 }

//num = 1, sum = -1, amount = 3
//plus = -1 + 1 = 0
//minus = -1 - 1 = -2
//next = { 4: 1, 2: 4, 0: 3 + 3 = 6, -2: 3 }

//num = 1, sum = -3, amount = 1
//plus = -3 + 1 = -2
//minus = -3 - 1 = -4
//next = { 4: 1, 2: 4, 0: 6, -2: 3 + 1 = 4, -4: 1 }
//count = { 0: 1 } => { 1: 1, -1: 1 } -> { 2: 1, 0: 2, -2: 1 } -> { 3: 1, 1: 3, -1: 3, -3: 1 } ->  { 4: 1, 2: 4, 0: 6, -2: 4, -4: 1 }

//[1, 1, 1, 1, 1]
//             ^
//num = 1, sum = 4, amount = 1
//plus = 4 + 1 = 5 
//minus = 4 - 1 = 3
//next = { 5: 1, 3: 1 }

//num = 1, sum = 2, amount = 4
//plus = 2 + 1 = 3
//minus = 2 - 1 = 1
//next = { 5: 1, 3: 1 + 4 = 5, 1: 4 }

//num = 1, sum = 0, amount = 6
//plus = 0 + 1 = 1
//minus = 0 - 1 = -1
//next = { 5: 1, 3: 5, 1: 4 + 6 = 10, -1: 6 }

//num = 1, sum = -2, amount = 4
//plus = -2 + 1 = -1
//minus = -2 - 1 = -3
//next = { 5: 1, 3: 5, 1: 10, -1: 6 + 4 = 10, -3: 4 }

//num = 1, sum = -4, amount = 1
//plus = -4 + 1 = -3
//minus = -4 - 1 = -5
//next = { 5: 1, 3: 5, 1: 10, -1: 10, -3: 4 + 1 = 5, -5: 1 }

targetSum([1], 1); //1
