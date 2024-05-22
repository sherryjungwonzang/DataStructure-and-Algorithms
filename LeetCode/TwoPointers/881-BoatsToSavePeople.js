//881. Boats to save people
//given an array 'people' where people[i] is the weight of the i_th person
//and an infinite number of boats where each boat can carry a max weight of limit
//each boat carries at most two people at the same time
//provided the sum of the weight of those people is at most limit
//return the min  num of boats to carry every given person

//Approach:
//using two pointers
var numOfRescueBoats = (people, limit) => {
    //sorting
    people.sort((a, b) => a - b);

    let boats = 0;
    let left = 0;
    let right = people.length - 1;

    //two pointers
    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            left++;
            right--;
        } else { //sum exceeds the limit
            right--;
        }
        boats++; //increment count after each iteration
    }
    return boats;
}
//TC: O(nlog(n))
//SC: O(1)
numOfRescueBoats([1,2], 3); //1 - 1 boat (1, 2)

numOfRescueBoats([3,2,2,1], 3); //3 - (1,2), (2), (3)
//sorting -> [1, 2, 2, 3]
//            L        R
//boats = 0

//1+3 > limit
//boats = 1 -> (3)

//            L     R
//1+2 = limit
//boats = 2 -> (1, 2)

//               L/R
//2+2 > limit
//boats = 3 -> (2)

numOfRescueBoats([3,5,3,4], 5); //4 - (3), (3), (4), (5)
//sorting -> [3, 3, 4, 5]
//            L        R
//boats = 0

//3+5 > limit
//boats = 1 -> (5)

//            L     R
//3+4 > limit
//boats = 2 -> (4)

//            L  R
//3+3 > limit
//boats = 3 -> (3)

//           L/R
//3+3 > limit
//boats = 4 -> (3)
