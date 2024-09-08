//495. Teemo Attacking
//our hero Teemo is attacking an enemy Ashe with poison attacks!
//when Teemo attacks Ashe, Ashe dets poisoned for a exactly duration seconds
//more formally, an attack at second t will mean Ashe is poisoned during the inclusive time interval [t, t + duration - 1]
//If Teemo attacks again before the poison effect ends, the timer for it is reset, and the poison effect will end duration seconds after the new attack

//given a non-decreasing integer array timeSeries, where timeSeries[i] denotes that Teemo attacks Ashe 
//at second timeSeries[i], and an integer duration
//return the total number of seconds that Ashe is poisoned
var teemoAttacking = (timeSeries, duration) => {
    //base case 
    if (timeSeries.length === 0) return 0;

    let res = duration;

    for (let i = 1; i < timeSeries.length; i++) {
        res += Math.min(timeSeries[i] - timeSeries[i - 1], duration);
        //timeSeries[i] - timeSeries[i - 1] > duration: previous poison ends
        //timeSeries[i] - timeSeries[i - 1] < duration: still poisoned
    }

    return res;
}
teemoAttacking([1, 4], 2); //4
//At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2
//At second 4, Teemo attacks, and Ashe is poisoned for seconds 4 and 5
//Ashe is poisoned for seconds 1, 2, 4, and 5, which is 4 seconds in total

//res = 2
//[1, 4]
//    ^ -> timeSeries[i] - timeSeries[i - 1] = 4 - 1
//min(4, 2) = 2 -> res = 2 + 2 = 4

teemoAttacking([1, 2], 2); //3
//At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2
//At second 2 however, Teemo attacks again and resets the poison timer. Ashe is poisoned for seconds 2 and 3
//Ashe is poisoned for seconds 1, 2, and 3, which is 3 seconds in total

//res = 2
//[1, 2]
//    ^ -> timeSeries[i] - timeSeries[i - 1] = 2 - 1
//min(1, 2) = 2 -> res = 1 + 2 = 3
