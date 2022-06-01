//Dynamic Programming
//in many repeated subproblems
//storing values already calculated and using those values to avoid any recalculations

//overlapping subproblems
//combines solutions on subproblems
//is used when solutions from subproblems are needed multiple times
//stores in a hash table, array, matrix -> memoization

//optimal substructure
//when the optimal solution of a problem

//ex. ways to cover steps
//given a distance, n, count the total number of ways to cover n number of steps with one, two, and three steps

//naive approach
function waysToCoverSteps(step) {
    if (step < 0) return 0;
    if (step == 0) return 1;

    return waysToCoverSteps(step-1) + waysToCoverSteps(step-2) + waysToCoverSteps(step-3);
}
console.log(waysToCoverSteps(12)); //927
//Time Complexity: O(3^n)

//DP approach
function waysToCoverStepsDP(step) {
    var cache = {};
    if (step < 0) return 0;
    if (step == 0) return 1;

    //check if exists in cache
    if (cache[step]) {
        return cache[step];
    } else {
        cache[step] = waysToCoverStepsDP(step-1) + waysToCoverStepsDP(step-2) + waysToCoverStepsDP(step-3);
        return cache[step];
    }
}
console.log(waysToCoverStepsDP(12)); //927
//Time Complexity: O(n)


//ex. Knapsack Problem
//given n weights and the values of items, put these items in a knapsack of a given capacity w
//to get the maximum total value in the knapsack

//naive approach: optimal substructure recursively
function knapsackNaive(index, weights, values, target) {
    var result = 0;

    if (index <= -1 || target <= 0) {
        result = 0;
    } else if (weights[index] > target) {
        result = knapsackNaive(index-1, weights, values, target);
    } else {
        //case1:
        var current = knapsackNaive(index-1, weights, values, target);

        //case2:
        var currentPlusOther = values[index] + knapsackNaive(index-1, weights, values, target-weights[index]);
        
        result = Math.max(current, currentPlusOther);
    } return result;
}
var weights = [1,2,4,2,5];
var values = [5,3,5,3,2];
var target = 10;
console.log(knapsackNaive(4, weights, values, target)); //16
//Time Complexity: O(2^n)

//DP approach
//using the current array index and target as a key to JavaScript
//this algorithm requires an n times w combination to store the cached results inside matrixDP
function knapsackDP(index, weights, values, target, matrixDP) {
    var result = 0;

    //DP part
    if (matrixDP[index + '-' + target]) {
        return matrixDP[index + '-' + target];
    }

    if (index <= -1 || target <= 0) {
        result = 0;
    } else if (weights[index] > target) {
        result = knapsackDP(index - 1, weights, values, target, matrixDP);
    } else {
        var current = knapsackDP(index - 1, weights, values, target);
        var currentPlusOther = values[index] + knapsackDP(index - 1, weights, values, target - weights[index]);
        result = Math.max(current, currentPlusOther);
    }
    matrixDP[index + '-' + target] = result;
    return result;
}
console.log(knapsackDP(4, weights, values, target)); //16
//Time Complexity: O(n*w)
//Space Complexity: O(n*w)
//n is the num of items
//w is the capacity of the knapsack


//ex. Longest Common Subsequence
//given two sequencesm find the length of the longest subsequence 
//where a subsequence is defined as a sequence that appears in relative order w/o being contiguous
//in real world: DNA sequencing, file comparison to output difference between files

//naive approach
function LCSNaive(str1, str2, str1Length, str2Length) {
    if (str1Length == 0 || str2Length == 0) return 0;

    if (str1[str1Length-1] ==  str2[str2Length-1]) {
        return 1 + LCSNaive(str1, str2, str1Length-1, str2Length-1);
    } else {
        return Math.max(LCSNaive(str1, str2, str1Length, str2Length-1), LCSNaive(str1, str2, str1Length-1, str2Length));
    }
}

function LCSNaiveWrapper(str1, str2) {
    return LCSNaive(str1, str2, str1.length, str2.length);
}
console.log(LCSNaiveWrapper('AGGTAB', 'GXTXAYB')); //4
//Time Complexity: O(2^n)


//DP approach
//recursive structure
//translated into a table/cache where the rows each represent a character in str1 and the columns 
//each represent a character in str2
//each item in a matrix at a row i, and a column j, represents LCS(str1[0:i], str2[0:j])
function longestCommonSequenceLength(str1, str2) {
    var matrix = Array(str1,length+1).fill(Array(str2.length+1).fill(0));

    var rowLength = str1.length+1;
    var colLength = str2.length+1;
    var max = 0;

    for (var row = 1; row < rowLength; row++) {
        for (var col = 1; col < colLength; col++) {
            var str1Char = str1.charAt(row - 1);
            var str2Char = str2.charAt(col - 1);

            if (str1Char == str2Char) {
                matrix[row][col] = matrix[row-1][col-1]+1;
                max = Math.max(matrix[row][col], max);
            }
        }
    }
    return max;
}
console.log(longestCommonSequenceLength('abcd', 'bc'));
//Time Complexity: O(m*n)
//Space Complexity: O(m*n)
//m is the length of str1
//n is the length of str2


