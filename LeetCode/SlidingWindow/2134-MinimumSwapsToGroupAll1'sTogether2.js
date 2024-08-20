//2134. Minimum Swaps To Group All 1's Together 2
//a swap is defined as taking two distinct positions in an array and swapping the values in them
//a circular array is defined as an array where we consider the first element and the last element to be adjacent
//given a binary circular array 'nums'
//return the min number of swaps required to group all 1's present in the array together at any location

//Approach:
//using sliding windows
var minSwapsToGroupAll1sTogether2 = (nums) => {
    let n = nums.length;
    let totalOnes = nums.reduce((sum, num) => sum + num, 0); //collecting all 1s

    //base case
    if (totalOnes === 0 || totalOnes === n) return 0;

    //sliding windows range
    let currOnes = nums.slice(0, totalOnes).reduce((sum, num) => sum + num, 0); //track 1s in curr window range
    let maxOnes = currOnes;

    //slide the window
    for (let i = 0; i < n; i++) {
        currOnes -= nums[i]; //reducing the start element
        currOnes += nums[(i + totalOnes) % n]; //adding the next element
        maxOnes = Math.max(maxOnes, currOnes);
    }

    return totalOnes - maxOnes;
}
//TC: O(n)
//SC: O(1)
minSwapsToGroupAll1sTogether2([0,1,0,1,1,0,0]); //1
//[0,0,1,1,1,0,0] using 1 swap
//[0,1,1,1,0,0,0] using 1 swap

//[0, 1, 0, 1, 1, 0, 0]
//totalOnes = 3, n = 7
//currOnes = (0, 3) -> 1
//maxOnes = 1

//[0, 1, 0, 1, 1, 0, 0]
// -------
//i = 0
//currOnes -= nums[0] = 1 && += nums[(0 + 3) % 7] = 2
//maxOnes = 1 -> (1, 2) = 2

//[0, 1, 0, 1, 1, 0, 0]
//    -------
//i = 1
//currOnes -= nums[1] = 1 && += nums[(1 + 3) % 7] = 2
//maxOnes = 1 -> (1, 2) = 2 -> (2, 2) = 2

//[0, 1, 0, 1, 1, 0, 0]
//       -------
//i = 2
//currOnes -= nums[2] = 2 && += nums[(2 + 3) % 7] = 2
//maxOnes = 1 -> (1, 2) = 2 -> (2, 2) = 2 -> (2, 2) = 2

//[0, 1, 0, 1, 1, 0, 0]
//          -------
//i = 3
//currOnes -= nums[3] = 1 && += nums[(3 + 3) % 7] = 1
//maxOnes = 1 -> (1, 2) = 2 -> (2, 2) = 2 -> (2, 2) = 2 -> (2, 1) = 2

//[0, 1, 0, 1, 1, 0, 0]
//             -------
//i = 4
//currOnes -= nums[4] = 0 && += nums[(4 + 3) % 7] = 0
//maxOnes = 1 -> (1, 2) = 2 -> (2, 2) = 2 -> (2, 2) = 2 -> (2, 1) = 2 -> (2, 0) = 2

//[0, 1, 0, 1, 1, 0, 0]
//                -------
//i = 5
//currOnes -= nums[5] = 0 && += nums[(5 + 3) % 7] = 1
//maxOnes = 1 -> (1, 2) = 2 -> (2, 2) = 2 -> (2, 2) = 2 -> (2, 1) = 2 -> (2, 0) = 2 -> (2, 1) = 2

//[0, 1, 0, 1, 1, 0, 0]
//                   -------
//i = 6
//currOnes -= nums[6] = 1 && += nums[(6 + 3) % 7] = 1
//maxOnes = 1 -> (1, 2) = 2 -> (2, 2) = 2 -> (2, 2) = 2 -> (2, 1) = 2 -> (2, 0) = 2 -> (2, 1) = 2 -> (2, 1) = 2

//totalOnes - maxOnes = 3 - 2 = 1

minSwapsToGroupAll1sTogether2([0,1,1,1,0,0,1,1,0]); //2
//[1,1,1,0,0,0,0,1,1] using 2 swaps (using the circular property of the array)
//[1,1,1,1,1,0,0,0,0] using 2 swaps

minSwapsToGroupAll1sTogether2([1,1,0,0,1]); //0
