//1534. Count Good Triplets
//given an array of integers arr, and three integers a, b and c
//you need to find the number of good triplets

//a triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:
//0 <= i < j < k < arr.length
//|arr[i] - arr[j]| <= a
//|arr[j] - arr[k]| <= b
//|arr[i] - arr[k]| <= c
//where |x| denotes the absolute value of x

//return the number of good triplets
var goodTriplets = (arr, a, b, c) => {
    let count = 0;
    let m = arr.length;

    for (let i = 0; i < m; i++) {
        for (let j = i + 1; j < m; j++) {
            //checking i & j
            if (Math.abs(arr[i] - arr[j]) > a) continue;

            for (let k = j + 1; k < m; k++) {
                //checking valid with k
                if (Math.abs(arr[j] - arr[k]) > b) continue;
                if (Math.abs(arr[i] - arr[k]) <= c) count++;
            }
        }
    }

    return count;
}
goodTriplets(arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3); //4 - [(3,0,1), (3,0,1), (3,1,1), (0,1,1)]
//[3, 0, 1, 1, 9, 7]                    [3, 0, 1, 1, 9, 7]                   [3, 0, 1, 1, 9, 7]                         [3, 0, 1, 1, 9, 7]
// i  j  k                               i  j     k                           i  j        k                              i  j           k
//|3 - 0| = 3 < 7 -> continue           |3 - 0| = 3 < 7 -> continue          |3 - 0| = 3 < 7 -> continue                |3 - 0| = 3 < 7 -> continue
//|0 - 1| = 1 < 2 -> continue           |0 - 1| = 1 < 2 -> continue          |0 - 9| = 9 > 2 -> not good triplet                    |0 - 7| = 7 > 2 -> not good triplet
//|3 - 1| = 2 < 3 -> good triplet       |3 - 1| = 2 < 3 -> good triplet      |3 - 9| = 6 > 3 -> not good triplet        |3 - 7| = 5 > 3 -> not good triplet
//count = 0 -> 1                        count = 0 -> 1 -> 2                  count = 0 -> 1 -> 2 -> 2                   count = 0 -> 1 -> 2 -> 2 -> 2

//[3, 0, 1, 1, 9, 7]                    [3, 0, 1, 1, 9, 7]                          [3, 0, 1, 1, 9, 7]
// i     j  k                            i     j     k                               i     j        k
//|3 - 1| = 2 < 7 -> continue           |3 - 1| = 2 < 7 -> continue                 |3 - 1| = 2 < 7 -> continue
//|1 - 1| = 0 < 2 -> continue           |1 - 9| = 8 > 2 -> not good triplet         |1 - 7| = 6 > 2 -> not good triplet
//|3 - 1| = 2 < 3 -> good triplet       |3 - 9| = 6 > 3 -> not good triplet         |3 - 7| = 4 > 3 -> not good triplet
//count = 0 -> 1 -> 2 -> 2 -> 3         count = 0 -> 1 -> 2 -> 2 -> 3 -> 3          count = 0 -> 1 -> 2 -> 2 -> 3 -> 3 -> 3

//[3, 0, 1, 1, 9, 7]                                [3, 0, 1, 1, 9, 7]
// i        j  k                                     i        j      k
//|3 - 1| = 2 < 7 -> continue                       |3 - 1| = 2 < 7 -> continue
//|1 - 1| = 0 < 2 -> continue                       |1 - 7| = 6 > 2 -> not good triplet 
//|3 - 9| = 6 > 3 -> not good triplet               |3 - 7| = 4 > 3 -> not good triplet
//count = 0 -> 1 -> 2 -> 2 -> 3 -> 3 -> 3 -> 3      count = 0 -> 1 -> 2 -> 2 -> 3 -> 3 -> 3 -> 3 -> 3

//[3, 0, 1, 1, 9, 7]
// i           j  k
//|3 - 9| = 6 < 7 -> continue
//|9 - 7| = 2 = 2 -> continue
//|3 - 7| = 4 > 3 -> not good triplet
//count = 0 -> 1 -> 2 -> 2 -> 3 -> 3 -> 3 -> 3 -> 3 -> 3
//...
//[3, 0, 1, 1, 9, 7]
//    i  j  k
//|0 - 1| = 1 < 7 -> continue
//|1 - 1| = 0 < 2 -> continue
//|0 - 1| = 1 < 3 -> good triplet
//count = 0 -> 1 -> 2 -> 2 -> 3 -> 3 -> 3 -> 3 -> 3 -> 3 -> 4
//...

//4

goodTriplets(arr = [1,1,2,2,3], a = 0, b = 0, c = 1); //0

