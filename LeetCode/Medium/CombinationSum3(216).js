//216. Combination Sum III 
//find all valid combinations 'k' numbers that sum up to 'n' such that the following conditions are true:
//only numbers 1 through 9 are used
//each number is used at most once
//return a list of all possible valud combinations
//the list must not contain the same combination twice, and the combinations maybe returned in any order
var combinationSum3 = (k, n) => {
  let result = [];

  //DFS 
  function dfs(index, curr, total) {
    //when we cannot find it
    if (total < 0 || curr.length > k) return;

    //when we find it
    if (total === 0 && curr.length === k) {
      result.push([...curr]);
    }

    //looping through the values
    for (let i = index;  i <= 9; i ++) {
      curr.push(i);

      //recursive calls
      dfs(i + 1, curr, total - i); //we want to subtract the current value at i from total
      curr.pop(); //when we haven't found tht right solution
    }
  }
  //for backtracking
  dfs(1, [], n); //1 for the index [1~9], current array - store all the potential solutions, total - to update as we go through each iteration

  return result;
}
combinationSum3(3, 7); //[[1,2,4]] - 1+2+4=7 : there are no other valid combinations
combinationSum3(3, 9); //[[1,2,6], [1,3,5], [2,3,4]]; //1+2+6=9, 1+3+5=9, 2+3+4=9 : there are no other valid combinations
combinationSum3(4, 1); //[] - there are no valid combinations : using 4 different numbers in the range [1,9]- the smallest sum we can get is 1+2+3+4=10 and since 10 > 1, there are no valid combination
