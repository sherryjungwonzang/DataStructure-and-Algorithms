//1710. Maximum Units On A Truck
//are assigned to put some amount of boxes onto one truck
//given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:
//numberOfBoxesi is the number of boxes of type i.
//numberOfUnitsPerBoxi is the number of units in each box of the type i

//also given an integer truckSize, which is the maximum number of boxes that can be put on the truck
//can choose any boxes to put on the truck as long as the number of boxes does not exceed truckSize
//return the maximum total number of units that can be put on the truck

//Approach:
//using sorting
var maxTruckUnit = (boxTypes, truckSize) => {
    //sorting based on unit - ascending order
    boxTypes.sort((a, b) => b[1] - a[1]);

    let res = 0;

    //traversing
    for (let [boxes, units] of boxTypes) {
        //base case
        if (!truckSize) break; //truckSize = 0 -> done

        //checking possible boxes
        let possibleBoxes = Math.min(boxes, truckSize);

        //multiply by units per box
        res += possibleBoxes * units;

        truckSize -= possibleBoxes;
    }

    return res;
}
//TC: O(n * logN)
maxTruckUnit(boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4); //8
//1 box of the first type that contains 3 units
//2 boxes of the second type that contain 2 units each
//3 boxes of the third type that contain 1 unit each
//You can take all the boxes of the first and second types, and one box of the third type
//The total number of units will be = (1 * 3) + (2 * 2) + (1 * 1) = 8

//res = 0
//truckSize = 4
//sorting: [ [1, 3], [2, 2], [3, 1] ]

//[ [1, 3], [2, 2], [3, 1] ]
//   b  u
//possbileBoxes = min(1, 4) = 1
//res = 0 -> (1 * 3) = 3
//truckSize = 4 -> 3

//[ [1, 3], [2, 2], [3, 1] ]
//           b  u
//possbileBoxes = min(2, 3) = 2
//res = 0 -> (1 * 3) = 3 -> (2 * 2 = 4) = 7
//truckSize = 4 -> 3 -> 1

//[ [1, 3], [2, 2], [3, 1] ]
//                   b  u
//possbileBoxes = min(3, 1) = 1 -> only 1 box is possible
//res = 0 -> (1 * 3) = 3 -> (2 * 2 = 4) = 7 -> (1 * 1 = 1) = 8
//truckSize = 4 -> 3 -> 1 -> 0

maxTruckUnit(boxTypes = [[5,10],[2,5],[4,7],[3,9]], truckSize = 10); //91
//res = 0
//truckSize = 10
//sorting: [ [5, 10], [3, 9], [4, 7], [2, 5] ]

//[ [5, 10], [3, 9], [4, 7], [2, 5] ]
//   b  u
//possbileBoxes = min(5, 10) = 5
//res = 0 -> (5 * 10) = 50
//truckSize = 10 -> 5

//[ [5, 10], [3, 9], [4, 7], [2, 5] ]
//            b  u
//possbileBoxes = min(3, 5) = 3
//res = 0 -> (5 * 10) = 50 -> (3 * 9 = 27) -> 77
//truckSize = 10 -> 5 -> 2

//[ [5, 10], [3, 9], [4, 7], [2, 5] ]
//                    b  u
//possbileBoxes = min(4, 2) = 2 -> only 2 boxes are possible
//res = 0 -> (5 * 10) = 50 -> (3 * 9 = 27) = 77 -> (2 * 7 = 14) = 91
//truckSize = 10 -> 5 -> 2 -> 0


