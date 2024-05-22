//875. Koko eating bananas
//koko loves to eat bananas
//there are n piles of bananas, the i_th pile has piles[i] bananas 
//the guards have gone and will come back in 'h' hours

//koko can decide her bananas-per-hour eating speed of 'k'
//each hour, she chooses some pile of bananas and eats 'k' bananas from that pile
//if the pile has less than 'k' bananans, she eats all of them instead and will not eat any more bananas during this hour

//koko likes to eat slowly but still wants to finish eating all the bananas before the guards return
//return the min integer 'k' such that she can eat all the bananas within h hours

//Approach:
//using binary Search
var kokoBananas = (piles, h) => {
    let low = 1; //min 1 banana should be eaten per hour
    let high = Math.max(...piles); //max bananas are required to be eaten per hour
    let res = high; //initially set the max value and will update later

    //binary search
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2); //the speed of eating
        let hours = 0; //total time required to finish all bananas at speed of mid

        for (let p of piles) {
            hours += Math.ceil(p / mid); //time to finish all bananas with mid as avg speed
        }

        if (hours <= h) {
            res = Math.min(res, mid);
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return res;
}
kokoBananas([3,6,7,11], 8); //4

kokoBananas([30,11,23,4,20], 5); //30

kokoBananas([30,11,23,4,20], 6); //23
