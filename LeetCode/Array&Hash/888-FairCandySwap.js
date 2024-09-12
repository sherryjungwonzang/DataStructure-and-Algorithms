//888. Fair Candy Swap
//alice and bob have a different total number of candies
//given two integer arrays aliceSizes and bobSized where aliceSizes[i] is the num of candies of the i_th box of candy that Alice has
//and bobSizes[j] is the number of candies of the j_th box of candy that Bob has
//since they are friends, they would like to exchange one candy box each so that after the exchange,they both have the same total amount of candy
//the total amount of candy a person has is the sum of the number of candies in each box they have
//return an integer array answer where answer[0] is the num of candies in the box that Alice must exchange
//and answer[1] is the num of candies in the box that Bob must exchange
//if there are multiple answers, you may return any one of them - it is guaranteed that at least one answer exists

//Approach:
//using hash map
var fairCandyShop = (aliceSizes, bobSizes) => {
    //collecting each candy shop size
    let totalAliceSize = aliceSizes.reduce((prev, curr) => prev + curr, 0);
    let totalBobSize = bobSizes.reduce((prev, curr) => prev + curr, 0);

    function exchange (alice, bob, diff) {
        let map = new Map();
        let mid = diff / 2;

        //filling hash map
        for (let i = 0; i < alice.length; i++) map.set(alice[i], i);

        //checking with Bob's
        for (let i = 0; i < bob.length; i++) {
            if (map.has(bob[i] + mid)) return [bob[i] + mid, bob[i]];
        }
    }

    return exchange(aliceSizes, bobSizes, totalAliceSize - totalBobSize);
}
fairCandyShop(aliceSizes = [1,1], bobSizes = [2,2]); //[1, 2]
//totalAliceSize = 0 -> 1 -> 2
//totalBobSize = 0 -> 2 -> 4
//diff = 2 - 4 = -2 -> mid = -2 / 2 = -1

//exchange([1,1], [2,2], -2)
//map = {
//  1: 0,
//  1: 1
//}

//[2, 2]
// ^
//2 + mid = 1 is in the map -> [2 - 1, 2] = [1, 2]

//[2, 2]
//    ^
//2 + mid = 1 is in the map -> [2 - 1, 2] = [1, 2]

//[1, 2]

fairCandyShop(aliceSizes = [1,2], bobSizes = [2,3]); //[1, 2]

fairCandyShop(aliceSizes = [2], bobSizes = [1,3]); //[2, 3]
//totalAliceSize = 0 -> 2
//totalBobSize = 0 -> 1 -> 4
//diff = 2 - 4 = -2 -> mid = -2 / 2 = -1

//exchange([2], [1,2], -2)
//map = {
//  2: 0
//}

//[1, 3]
// ^
//1 + mid = 1 is not in the map 

//[1, 3]
//    ^
//2 + mid = 1 is in the map -> [3 - 1, 3] = [2, 3]

//[2, 3]

