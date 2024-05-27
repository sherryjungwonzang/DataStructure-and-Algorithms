//1482. Minimum Number of Days to make m Bouquets
//given an integer array 'bloomDay', an integer m and an integer k
//you want to make m bouquets
//to make a bouquet, you need to use k adjacent flowers from the garden
//the garden consists of n flowers, the i_th flower will bloom in the bloomDay[i] and then can be used in exactly one bouquet
//return the min number of days you need to wait to be able to make m bouquets from the garden
//if it is impossible to make m bouquets return -1

//Approach:
//using binary search
var minDaysMakeBouquets = (bloomDay, m, k) => {
    //basic checking
    let n = bloomDay.length;
    let totalFlowers = m * k;

    if (n < totalFlowers) return -1;

    //Binary Search
    let left = Math.min(...bloomDay);
    let right = Math.max(...bloomDay);
    let res = -1;

    while (left <= right) {
        let mid = Math.floor((right + left) / 2);
        let bouquets = countBouquets(mid, k);

        if (bouquets >= m) {
            right = mid - 1;
            res = mid;
        } else {
            left = mid + 1;
        }
    }
    return res;


    //count bouquet function
    function countBouquets(mid, k) {
        let bouquets = 0;
        let flowers = 0;

        for (let day of bloomDay) {
            if (day <= mid) {
                flowers++; //bloomed
            } else { //can make bouquets
                bouquets += Math.floor(flowers / k);
                flowers = 0; //after making bouquet, reset 
            }
        }
        bouquets += Math.floor(flowers / k);

        return bouquets;
    };
}
//TC: O(n * log(n))
//SC: O(1)
minDaysMakeBouquets([1,10,3,10,2], 3, 1); //3
//Let us see what happened in the first three days. x means flower bloomed and _ means flower did not bloom in the garden.
//We need 3 bouquets each should contain 1 flower.
//After day 1: [x, _, _, _, _]   // we can only make one bouquet.
//After day 2: [x, _, _, _, x]   // we can only make two bouquets.
//After day 3: [x, _, x, _, x]   // we can make 3 bouquets. The answer is 3

minDaysMakeBouquets([1,10,3,10,2], 3, 2); //-1 
// We need 3 bouquets each has 2 flowers, that means we need 6 flowers
//We only have 5 flowers so it is impossible to get the needed bouquets and we return -1

minDaysMakeBouquets([7,7,7,7,12,7,7], 2, 3); //12
//We need 2 bouquets each should have 3 flowers.
//Here is the garden after the 7 and 12 days:
//After day 7: [x, x, x, x, _, x, x]
//We can make one bouquet of the first three flowers that bloomed. We cannot make another bouquet from the last three flowers that bloomed because they are not adjacent.
//After day 12: [x, x, x, x, x, x, x]
//It is obvious that we can make two bouquets in different ways
