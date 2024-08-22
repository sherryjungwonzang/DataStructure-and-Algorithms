//1155. Number Of Dice Rolls With Target Sum
//have 'n' dice, and each dice has 'k' faces numbered from 1 to k
//given three integers n, k and target
//return the number of possible ways to roll the dice
//so the sum of the face-up numbers equals target
//since the answer may be too large - return it modulo

//Approach:
//using DP
var numDiceRolls = (n, k, target) => {
    let mod = 1e9 + 7;
    let dp = new Array(target + 1).fill(0);

    //only 1 way to reach dice's face values
    for (let face = 1; face <= Math.min(k, target); face++) dp[face] = 1;

    //dice rolls
    for (let dice = 2; dice <= n; dice++) {
        for (let num = target; num > 0; num--) {
            dp[num] = 0;

            for (let face = 1; face <= Math.min(k, num); face++) {
                //checking diff target - face
                let diff = num - face;

                //DP
                dp[num] = (dp[num] + dp[diff]) % mod;
            }
        }
    }

    return dp[target];
}
numDiceRolls(2, 6, 7); //6 - 1+6, 2+5, 3+4, 4+3, 5+2, 6+1
//dp = [ 0, 0, 0, 0, 0, 0, 0, 0 ]

//filling 1 on dice's face values - from 1 to min (k, target) = 6
//dp = [ 0, 1, 1, 1, 1, 1, 1, 0 ]

//dice = 2, num = 7 -> dp[7] = 0, face = 1
//dp = [ 0, 1, 1, 1, 1, 1, 1, 0 ]
//diff = num - face = 7 - 1 = 6
//dp[7] = (dp[7] + dp[6]) % mod = 1
//dp = [ 0, 1, 1, 1, 1, 1, 1, 1 ]

//dice = 2, num = 7, face = 2
//diff = num - face = 7 - 2 = 5
//dp[7] = (dp[7] + dp[5]) % mod = 2
//dp = [ 0, 1, 1, 1, 1, 1, 1, 2 ]

//dice = 2, num = 7, face = 3
//diff = num - face = 7 - 3 = 4
//dp[7] = (dp[7] + dp[4]) % mod = 3
//dp = [ 0, 1, 1, 1, 1, 1, 1, 3 ]

//dice = 2, num = 7, face = 4
//diff = num - face = 7 - 4 = 3
//dp[7] = (dp[7] + dp[3]) % mod = 4
//dp = [ 0, 1, 1, 1, 1, 1, 1, 4 ]

//dice = 2, num = 7, face = 5
//diff = num - face = 7 - 5 = 2
//dp[7] = (dp[7] + dp[2]) % mod = 5
//dp = [ 0, 1, 1, 1, 1, 1, 1, 5 ]

//dice = 2, num = 7, face = 6
//diff = num - face = 7 - 6 = 1
//dp[7] = (dp[7] + dp[1]) % mod = 6
//dp = [ 0, 1, 1, 1, 1, 1, 1, 6 ]


//dice = 2, num = 6 -> dp[6] = 0, face = 1
//dp = [ 0, 1, 1, 1, 1, 1, 0, 6 ]
//diff = num - face = 6 - 1 = 5
//dp[6] = (dp[6] + dp[5]) % mod = 1
//dp = [ 0, 1, 1, 1, 1, 1, 1, 6 ]

//dice = 2, num = 6, face = 2
//diff = num - face = 6 - 2 = 4
//dp[6] = (dp[6] + dp[4]) % mod = 2
//dp = [ 0, 1, 1, 1, 1, 1, 2, 6 ]

//dice = 2, num = 6, face = 3
//diff = num - face = 6 - 3 = 3
//dp[6] = (dp[6] + dp[3]) % mod = 3
//dp = [ 0, 1, 1, 1, 1, 1, 3, 6 ]

//dice = 2, num = 6, face = 4
//diff = num - face = 6 - 4 = 2
//dp[6] = (dp[6] + dp[2]) % mod = 4
//dp = [ 0, 1, 1, 1, 1, 1, 4, 6 ]

//dice = 2, num = 6, face = 5
//diff = num - face = 6 - 5 = 1
//dp[6] = (dp[6] + dp[2]) % mod = 5
//dp = [ 0, 1, 1, 1, 1, 1, 5, 6 ]

//dice = 2, num = 6 face = 6
//diff = num - face = 6 - 6 = 0
//dp[6] = (dp[6] + dp[0]) % mod = 5
//dp = [ 0, 1, 1, 1, 1, 1, 5, 6 ]


//dice = 2, num = 5 -> dp[5] = 0, face = 1
//dp = [ 0, 1, 1, 1, 1, 0, 5, 6 ]
//diff = num - face = 5 - 1 = 4
//dp[5] = (dp[5] + dp[4]) % mod = 1
//dp = [ 0, 1, 1, 1, 1, 1, 5, 6 ]

//dice = 2, num = 5, face = 2
//diff = num - face = 5 - 2 = 3
//dp[5] = (dp[5] + dp[3]) % mod = 2
//dp = [ 0, 1, 1, 1, 1, 2, 5, 6 ]

//dice = 2, num = 5, face = 3
//diff = num - face = 5 - 3 = 2
//dp[5] = (dp[5] + dp[2]) % mod = 3
//dp = [ 0, 1, 1, 1, 1, 3, 5, 6 ]

//dice = 2, num = 5, face = 4
//diff = num - face = 5 - 4 = 1
//dp[5] = (dp[5] + dp[1]) % mod = 4
//dp = [ 0, 1, 1, 1, 1, 4, 5, 6 ]

//dice = 2, num = 5, face = 5
//diff = num - face = 5 - 5 = 0
//dp[5] = (dp[5] + dp[0]) % mod = 4
//dp = [ 0, 1, 1, 1, 1, 4, 5, 6 ]


//dice = 2, num = 4 -> dp[4] = 0, face = 1
//dp = [ 0, 1, 1, 1, 0, 4, 5, 6 ]
//diff = num - face = 4 - 1 = 3
//dp[4] = (dp[4] + dp[3]) % mod = 1
//dp = [ 0, 1, 1, 1, 1, 4, 5, 6 ]

//dice = 2, num = 4, face = 2
//diff = num - face = 4 - 2 = 2
//dp[4] = (dp[4] + dp[2]) % mod = 2
//dp = [ 0, 1, 1, 1, 2, 4, 5, 6 ]

//dice = 2, num = 4, face = 3
//diff = num - face = 4 - 3 = 1
//dp[4] = (dp[4] + dp[3]) % mod = 3
//dp = [ 0, 1, 1, 1, 3, 4, 5, 6 ]

//dice = 2, num = 4, face = 4
//diff = num - face = 4 - 4 = 0
//dp[4] = (dp[4] + dp[4]) % mod = 3
//dp = [ 0, 1, 1, 1, 3, 4, 5, 6 ]


//dice = 2, num = 3 -> dp[3] = 0, face = 1
//dp = [ 0, 1, 1, 0, 3, 4, 5, 6 ]
//diff = num - face = 3 - 1 = 2
//dp[3] = (dp[3] + dp[2]) % mod = 1
//dp = [ 0, 1, 1, 1, 3, 4, 5, 6 ]

//dice = 2, num = 3, face = 2
//diff = num - face = 3 - 2 = 1
//dp[3] = (dp[3] + dp[1]) % mod = 2
//dp = [ 0, 1, 1, 2, 3, 4, 5, 6 ]

//dice = 2, num = 3, face = 3
//diff = num - face = 3 - 3 = 0
//dp[3] = (dp[3] + dp[0]) % mod = 2
//dp = [ 0, 1, 1, 2, 3, 4, 5, 6 ]


//dice = 2, num = 2 -> dp[2] = 0, face = 1
//dp = [ 0, 1, 0, 2, 3, 4, 5, 6 ]
//diff = num - face = 2 - 1 = 1
//dp[2] = (dp[2] + dp[1]) % mod = 1
//dp = [ 0, 1, 1, 2, 3, 4, 5, 6 ]

//dice = 2, num = 2, face = 2
//diff = num - face = 2 - 2 = 0
//dp[2] = (dp[2] + dp[0]) % mod = 1
//dp = [ 0, 1, 1, 2, 3, 4, 5, 6 ]


//dice = 2, num = 1-> dp[1] = 0, face = 1
//dp = [ 0, 0, 1, 2, 3, 4, 5, 6 ]
//diff = num - face = 1 - 1 = 0
//dp[1] = (dp[1] + dp[0]) % mod = 0
//dp = [ 0, 0, 1, 2, 3, 4, 5, 6 ]

numDiceRolls(1, 6, 3); //1 - 3

numDiceRolls(30, 30, 500); //222616187
