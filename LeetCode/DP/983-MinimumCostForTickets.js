//983. Minimum Cost For Tickets
//have planned some train travelling one year in advance
//the days of the year in which you will travel are given as as integer array 'days'
//each day is an integer from 1 to 365

//train  tickets are sold in three different ways:
//1-day pass is sold for costs[0] dollars
//7-day pass is sold for costs[1] dollars
//30-day pass is sold for costs[2] dollars

//the passes allow that many days of consecutive travel
//for example, if we get a 7-day pass on day 2
//then we can travel for 7 days: 2,3,4,5,6,7,8
//return the min number of dollars you need to travel every day in the given list of days

//Approach:
//using DP
var minCostTickets = (days, costs) => {
    let travelDays = new Set(days);
    let lastTravelDay = days[days.length - 1];
    let dp = new Array(lastTravelDay + 1).fill(0);

    //DP
    for (let i = 1; i <= lastTravelDay; i++) {
        //today is not travel day - noe extra cost
        if (travelDays.has(i) === false) dp[i] = dp[i - 1];
        else { //travel dat - optimal min cost
            dp[i] = Math.min(
                dp[i - 1] + costs[0], //1 day pass - costs[0]: cost of 1 day pass ticket
                dp[Math.max(0, i - 7)] + costs[1], //7 days pass - costs[1]: cost of 7 days ticket
                dp[Math.max(0, i - 30)] + costs[2] //30 days pass - costs[2]: cost of 30 days pass ticket
            )
        }
    }

    return dp[lastTravelDay];
}
minCostTickets(days = [1,4,6,7,8,20], costs = [2,7,15]); //11
//For example, here is one way to buy passes that lets you travel your travel plan:
//On day 1, you bought a 1-day pass for costs[0] = $2, which covered day 1.
//On day 3, you bought a 7-day pass for costs[1] = $7, which covered days 3, 4, ..., 9.
//On day 20, you bought a 1-day pass for costs[0] = $2, which covered day 20.
//In total, you spent $11 and covered all the days of your travel

//travelDays = {1, 4, 6, 7, 8, 20}
//DP
//  0 0 0 0 0 0 0
//  0 0 0 0 0 0 0
//  0 0 0 0 0 0 0

//i = 1
//dp[1] = min(dp[0] + 2, dp(max(0, 1 - 7) + 7), dp(max(0, 1 - 30) + 15)) = (2, 7, 15) = 2
//  0 2 0 0 0 0 0
//  0 0 0 0 0 0 0
//  0 0 0 0 0 0 0

//i = 2, 3
//travelDays does not have 2, 3 -> dp[2] & dp[3] = dp[1] = 2
//  0 2 2 2 0 0 0
//  0 0 0 0 0 0 0
//  0 0 0 0 0 0 0

//i = 4
//dp[4] = min(dp[3] + 2, dp(max(0, 4 - 7) + 7), dp(max(0, 4 - 30) + 15)) = (4, 7, 15) = 4
//  0 2 2 2 4 0 0
//  0 0 0 0 0 0 0
//  0 0 0 0 0 0 0

//i = 5
//travelDays does not have 5 -> dp[5] = dp[4] = 4
//  0 2 2 2 4 4 0
//  0 0 0 0 0 0 0
//  0 0 0 0 0 0 0

//i = 6
//dp[6] = min(dp[5] + 2, dp(max(0, 6 - 7) + 7), dp(max(0, 6 - 30) + 15)) = (4, 7, 15) = 6
//  0 2 2 2 4 4 6
//  0 0 0 0 0 0 0
//  0 0 0 0 0 0 0

//i = 7
//dp[7] = min(dp[6] + 2, dp(max(0, 7 - 7) + 7), dp(max(0, 7 - 30) + 15)) = (8, 7, 15) = 7
//  0 2 2 2 4 4 6
//  7 0 0 0 0 0 0
//  0 0 0 0 0 0 0

//i = 8
//dp[8] = min(dp[7] + 2, dp(max(0, 8 - 7) + 7), dp(max(0, 8 - 30) + 15)) = (9, 9, 15) = 9
//  0 2 2 2 4 4 6
//  7 9 0 0 0 0 0
//  0 0 0 0 0 0 0

//i = 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19
//travelDays does not have 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 -> all dp[] is 9
//  0 2 2 2 4 4 6
//  7 9 9 9 9 9 9
//  9 9 9 9 9 9 0

//i = 20
//dp[20] = min(dp[19] + 2, dp(max(0, 20 - 7) + 7), dp(max(0, 20 - 30) + 15)) = (11, 16, 15) =11
//  0 2 2 2 4 4 6
//  7 9 9 9 9 9 9
//  9 9 9 9 9 9 11

minCostTickets(days = [1,2,3,4,5,6,7,8,9,10,30,31], costs = [2,7,15]); //17
//For example, here is one way to buy passes that lets you travel your travel plan:
//On day 1, you bought a 30-day pass for costs[2] = $15 which covered days 1, 2, ..., 30.
//On day 31, you bought a 1-day pass for costs[0] = $2 which covered day 31.
//In total, you spent $17 and covered all the days of your travel
