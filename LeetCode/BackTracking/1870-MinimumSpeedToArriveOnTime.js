//1870. Minimum speed to arrive on time
//given a floating point number 'hour - representing the amount of time you have to reach the office
//to commute to the office, you must take 'n' trains in sequential order
//given an integer array 'dist' of length 'n' - where dist[i] describes the distance of the i_th train ride

//each train can only depart at an integer hour, so you may need to wait in between each train ride
//for example, if the 1st train ride takes 1.5 hours,
//must wait for an additional 0.5 hours before you can depart on the 2nd train at the 2 hour mark

//return the minimum positive integer speed that all the trains must travel  at for you to reach the office on time
//or -1 if it is impossible to be on time

//tests are generated such that the answer will not exceed 10^7 and hour will have at most two digits after the decimal point

//Approach:
//using binary Search
var minSpeedArriveOnTime = (dist, hour) => {
    let n = dist.length;
    let left = 1;  //min possible speed
    let right = 10 ** 7 + 1; //max possible speed

    //calculate the total time to reach the office at given speed
    function timeReached (speed, n) {
        let total = 0;

        for (let i = 0; i < n - 1; i++) {
            total += Math.ceil(dist[i] / speed); //the num hours taking to the complete ride - each ride expect the last one
        }
        total += dist[n - 1] / speed; //for the last ride

        return total;
    }

    //binary search
    while(left < right) {
        let mid = left + Math.floor((right - left) / 2);
        let totalTime = timeReached(mid, n);

        if (totalTime <= hour) { //meaning we can be at office on time
            right = mid; //with a smaller speed 
        } else { //meaning we cannot reach on time with the current speed
            left = mid + 1; //with a higher speed
        }
    }
    return left <= 10 ** 7 ? left: -1; //if left is greater  or equal to right - left will need min speed to reach on time
}
//TC: O(lon(n))
//SC: O(1)
minSpeedArriveOnTime([1,3,2], 6); //1
//At speed 1:
//The first train ride takes 1/1 = 1 hour.
//Since we are already at an integer hour, we depart immediately at the 1 hour mark. The second train takes 3/1 = 3 hours.
//Since we are already at an integer hour, we depart immediately at the 4 hour mark. The third train takes 2/1 = 2 hours.
//You will arrive at exactly the 6 hour mark.

minSpeedArriveOnTime([1,3,2], 2.7); //3
//At speed 3:
//The first train ride takes 1/3 = 0.33333 hours.
//Since we are not at an integer hour, we wait until the 1 hour mark to depart. The second train ride takes 3/3 = 1 hour.
//Since we are already at an integer hour, we depart immediately at the 2 hour mark. The third train takes 2/3 = 0.66667 hours.
//You will arrive at the 2.66667 hour mark 

minSpeedArriveOnTime([1,3,2], 1.9); //-1
//it is impossible because the earliest the third train can depart is at the 2 hour mark
