//1011. Capacity to ship packages within D days
//a conveyor belt has packages that must be shipped from one port to another within 'days' days
//the i_th package on the conveyor belt has a weight of weights[i]
//each day, we load the ship with packages on the conveyor belt - in the order given by weights
//we may not load more weight than the max weight capacity of the ship
//return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within 'days' days

//Approach:
//using binary search - to figure out the capacity for shipping
//min capacity that have to choose is the max value in weights array and max capacity is the sum of weights array
//running binary search on above capactiy bound - minCapacity to maxCapacity

//similar approach and solution with 875
var capacityToShip = (weights, days) => {
    //setting the capacity bound
    let minCapacity = 0;
    let maxCapacity = 0;

    for (let weight of weights) {
        minCapacity = Math.max(minCapacity, weight); //left pointer
        maxCapacity += weight; //right pointer
    }

    //binary search on capacity bound
    //minCapacity as left || maxCapacity as right
    while(minCapacity < maxCapacity) {
        //mid value - capacity of ship
        let capacity = Math.floor((maxCapacity + minCapacity) / 2);
        let currDays = 1;
        let currLoad = 0;

        //checking each weights for shipping
        for (let weight of weights) {
            currLoad += weight;
            
            //if the load weight exceeds
            if (currLoad > capacity) {
                currDays++;
                currLoad = weight;
            }
        }

        if (currDays > days) {
            minCapacity = capacity + 1;
        } else {
            maxCapacity = capacity;
        }
    };

    return minCapacity;
}
capacityToShip(weights = [1,2,3,4,5,6,7,8,9,10], days = 5); //15
//A ship capacity of 15 is the minimum to ship all the packages in 5 days like this:
//1st day: 1, 2, 3, 4, 5
//2nd day: 6, 7
//3rd day: 8
//4th day: 9
//5th day: 10

capacityToShip(weights = [3,2,2,4,1,4], days = 3); //6
//A ship capacity of 6 is the minimum to ship all the packages in 3 days like this:
//1st day: 3, 2
//2nd day: 2, 4
//3rd day: 1, 4

capacityToShip(weights = [1,2,3,1,1], days = 4); //3
//1st day: 1
//2nd day: 2
//3rd day: 3
//4th day: 1, 1
