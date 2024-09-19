//1385. Find The Distance Value Between Two Arrays
//given two integer arrays arr1 and arr2 and integer d
//return the ditance value between the two arrays
//the distance value is defined as the number of elements arr1[i] 
//such that there is not any element arr2[i] where |arr1[i] - arr2[j]| <= d

//Approach:
//using brute force
var findDistanceValue = (arr1, arr2, d) => {
    let count = 0;

    for (let i = 0; i < arr1.length; i++) {
        //tracking found the distance or not
        let find = 0;

        for (let j = 0; j < arr2.length; j++) {
            let distance = Math.abs(arr1[i] - arr2[j]);
            
            //found the distance
            if (distance <= d) {
                find = 1;

                break;
            }
        }

        //no distance - increase count
        if (find === 0) count++;
    }

    return count;
}
findDistanceValue([4,5,8], [10,9,1,8], 2); //2
//[4, 5, 8], [10, 9, 1, 8]
// ^          ^
//distance = |4 - 10| = 6 > d  ||  |4 - 9| = 5 > d || |4 - 1| = 3 > d || |4 - 8| = 4 > d 
//find = 0
//count = 0  -> 1

//[4, 5, 8], [10, 9, 1, 8]
//    ^       ^
//distance = |5 - 10| = 5 > d  ||  |5 - 9| = 4 > d || |5 - 1| = 4 > d || |5 - 8| = 3 > d 
//find = 0
//count = 0  -> 1 -> 2

//[4, 5, 8], [10, 9, 1, 8]
//       ^    ^
//distance = |8 - 10| = 2 = d  
//find = 0 -> 1
//count = 0  -> 1 -> 2 -> 2

findDistanceValue([1,4,2,3], [-4,-3,6,10,20,30], 3); //2
//[1, 4, 2, 3], [-4, -3, 6, 10, 20, 30]
// ^             ^
//distance = |1 - -4| = 5 > d  ||  |1 - -3| = 4 > d || |1 - 6| = 5 > d || |1 - 10| = 9 > d  || |1 - 20| = 19 > d  || |1 - 30| = 29 > d 
//find = 0
//count = 0  -> 1

//[1, 4, 2, 3], [-4, -3, 6, 10, 20, 30]
//    ^           ^
//distance = |4 - -4| = 8 > d  ||  |4 - -3| = 7 > d || |4 - 6| = 2 < d 
//find = 0 -> 1
//count = 0  -> 1 -> 1

//[1, 4, 2, 3], [-4, -3, 6, 10, 20, 30]
//       ^        ^
//distance = |2 - -4| = 6 > d  ||  |2 - -3| = 5 > d || |2 - 6| = 4 > d || |2 - 10| = 8 > d  || |2 - 20| = 18 > d  || |2 - 30| = 28 > d 
//find = 0
//count = 0  -> 1 -> 1 -> 2

//[1, 4, 2, 3], [-4, -3, 6, 10, 20, 30]
//          ^    ^
//distance = |3 - -4| = 7 > d  ||  |3 - -3| = 6 > d || |3 - 6| = 3 = d
//find = 0 -> 1
//count = 0  -> 1 -> 1 -> 2 -> 2

findDistanceValue([2,1,100,3], [-5,-2,10,-3,7], 6); //1
