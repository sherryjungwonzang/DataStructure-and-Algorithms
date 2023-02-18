//Coin Change (322)
//given an integer array 'coins' - representing coins of different denominations
//and an integer 'amount' - representing a total amount of money
//return the fewest num of coins that need to make up that amount
//if that amount of money cannot be made up by any combination of the coins - return -1
var coinChange = (coins, amount) => {
  //create DP array with filling Infinity
  //dp - to store all the results to the values between 0 and 11
  let dp = Array(amount + 1).fill(Infinity); 

  //base case
  dp[0] = 0;
 
  //initialize the dp array with a certain value
  for (let currAmount = 1; currAmount <= amount; currAmount++) {
    for (let coin of coins) {
      if (currAmount - coin >= 0) {
        dp[currAmount] = Math.min(dp[currAmount], 1 + dp[currAmount - coin]); //1 represents the amount of each coin in the coins array - always 1
      } //else you don't need to proceed the compare 
    }
  }
  return dp[amount] > amount ? -1 : dp[amount]; //if it is Infinity - return -1
}
coinChange([1,   2,    5], 11); //3 - 5+5+1
//dp = [0: 0, 1: Infi, 2: Infi, 3: Infi, 4: Infi, 5: Infi, 6: Infi, 7: Infi, 8: Infi, 9: Infi, 10: Infi, 11: Infi]
//        coin
//1 - 1 is within coins array so just take 1 coin from the coin array
//dp = [0: 0, 1: 1, 2: Infi, 3: Infi, 4: Infi, 5: Infi, 6: Infi, 7: Infi, 8: Infi, 9: Infi, 10: Infi, 11: Infi]

//2 -  2 is within coins array so just take 2 1 coin from the coin array
//dp = [0: 0, 1: 1, 2: 1, 3: Infi, 4: Infi, 5: Infi, 6: Infi, 7: Infi, 8: Infi, 9: Infi, 10: Infi, 11: Infi]

//3 - Math.min(Infi, 1 + dp[3-1=2]=1 = 2) -> 2 | Math.min(2, 1 + dp[3-2=1]=2) -> 2 
//dp = [0: 0, 1: 1, 2: 1, 3: 2, 4: Infi, 5: Infi, 6: Infi, 7: Infi, 8: Infi, 9: Infi, 10: Infi, 11: Infi]

//4 - Math.min(Infi, 1 + dp[4-1=3]=2 = 3) -> 3 | Math.min(3, 1 + dp[4-2=1] = 2) -> 2
//dp = [0: 0, 1: 1, 2: 1, 3: 2, 4: 2, 5: Infi, 6: Infi, 7: Infi, 8: Infi, 9: Infi, 10: Infi, 11: Infi]

//5 - Math.min(Infi, 1 + dp[5-1=4]=2 = 3) -> 3 | Math.min(3, 1 + dp[5-2=3]=2 =3) -> 3 | Math.min(3, 1+ dp[5-5=0]=0 = 1) -> 1
//dp = [0: 0, 1: 1, 2: 1, 3: 2, 4: 2, 5: 1, 6: Infi, 7: Infi, 8: Infi, 9: Infi, 10: Infi, 11: Infi]

//6 - Math.min(Infi, 1 + dp[6-1=5]=1 = 2) -> 2 | Math.min(2, 1 + dp[6-2=4]=2 = 3) -> 2 | Math.min(2, 1 + dp[6-5=1]=1 = 2) -> 2
//dp = [0: 0, 1: 1, 2: 1, 3: 2, 4: 2, 5: 1, 6: 2, 7: Infi, 8: Infi, 9: Infi, 10: Infi, 11: Infi]

//7 - Math.min(Infi, 1 + dp[7-1=6]=2 = 3) => 3 | Math.min(3, 1 + dp[7-2=5]=1 = 2) -> 2 | Math.min(2, 1 + dp[7-5=2]=1 = 2) -> 2
//dp = [0: 0, 1: 1, 2: 1, 3: 2, 4: 2, 5: 1, 6: 2, 7: 2, 8: Infi, 9: Infi, 10: Infi, 11: Infi]

//8 - Math.min(Infi, 1 + dp[8-1=7]=2 = 3) -> 3 | Math.min(3, 1 + dp[8-2=6]=2 = 3) -> 3 | Math.min(3, 1 + dp[8-5=3]=2 = 3) -> 3
//dp = [0: 0, 1: 1, 2: 1, 3: 2, 4: 2, 5: 1, 6: 2, 7: 2, 8: 3, 9: Infi, 10: Infi, 11: Infi]

//9 - Math.min(Infi, 1 + dp[9-1=8]=3 = 4) -> 4 | Math.min(4, 1 + dp[9-2=7]=2 = 3) -> 3 | Math.min(3, 1 + dp[9-5=4]=2 = 3) -> 3
//dp = [0: 0, 1: 1, 2: 1, 3: 2, 4: 2, 5: 1, 6: 2, 7: 2, 8: 3, 9: 3, 10: Infi, 11: Infi]

//10 - Math.min(Infi, 1 + dp[10-1=9]=3 = 4) -> 4 | Math.min(4, 1 + dp[10-2=8]=3 = 4) -> 4 | Math.min(4, 1 + dp[10-5=5]=1 = 2) -> 2
//dp = [0: 0, 1: 1, 2: 1, 3: 2, 4: 2, 5: 1, 6: 2, 7: 2, 8: 3, 9: 3, 10: 2, 11: Infi]

//11 - Math.min(Infi, 1 + dp[11-1=10]=2 = 3) -> 3 | Math.min(3, 1 + dp[11-2=9]=3 = 4) -> 3 | Math.min(3, 1 + dp[11-5=6]=2 =3) -> 3
//dp = [0: 0, 1: 1, 2: 1, 3: 2, 4: 2, 5: 1, 6: 2, 7: 2, 8: 3, 9: 3, 10: 2, 11: 3]

//dp[11] = 3 < amount=11 -> dp[11] = 3

coinChange([2], 3); //-1
coinChange([1], 0); //0
