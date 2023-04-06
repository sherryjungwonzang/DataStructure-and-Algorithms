//374. Guess Number Higher or Lower
//we are playing the Guess Game
//the game is as follows:
//I pick a number form 1 to n
//you have to guess whch number I picked

//every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess
//you call a pre-defined API int guess(int num) - which returns three possible results:

//-1: your guess is higher than the number I picked - num > pick
//1: your guess is lower than the number I picked - num < pick
//0: your guess is equal to the number I picked - num == pick

//return the number that I picked

//Approach:
//using Binary Search - utilize the mid value
var guessNumber = (n) => {
  //two pointers
  let left = 1;
  let right = n;

  while(left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    //to pass the mid number into guessAPI
    let ans = guess(mid);
    if (ans === 0) return mid;
    if (ans === -1) {
      right = mid - 1;
    }
    if (ans === 1) {
      left = mid + 1;
    }
  }
}
guessNumber(10); //6 - pick is 6
// 1   2   3   4   5   6   7   8   9   10
// l               m                    r
//in guessAPI(5) -> 1 : move left

//                      l      m        r
//in guessAPI(8) -> -1 : move right

//                     l/m r
//in guessAPI(6) -> 0 : return left

guessNumber(1); //1 - pick is 1

guessNumber(2); //1 - pick is 1
