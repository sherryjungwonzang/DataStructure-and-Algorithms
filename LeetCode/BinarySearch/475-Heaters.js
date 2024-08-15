//475. Heaters
//winter is coming!
//during the contst, your first job is to design a standard heater with a fixed warm radius to warm all the houses
//every house can be warmed, as long as the house is within the heater's warm radius range
//given the positions of houses and heaters on a horizontal line
//return the min radius standard of heaters so that those heaters could cover all houses
//all the heaters follow your radius standard, and the warm radius will the same

//Approach:
//using binary search
var heaters = (houses, heaters) => {
    //sorting
    houses.sort((a, b) => a - b);
    heaters.sort((a, b) => a - b);

    let maxRadius = 0;

    //traversing
    for (let i = 0; i < houses.length; i++) {
        let house = houses[i];
        let closestHeater = findClosest(heaters, house);
        let radius = Math.abs(house - closestHeater);

        maxRadius = Math.max(maxRadius, radius);
    }


    //to find the closest heaters
    function findClosest(heaters, house) {
        //two pointers
        let left = 0;
        let right = heaters.length - 1;

        //binary search
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (heaters[mid] === house) return heaters[mid];
            else if (heaters[mid] < house) left = mid + 1;
            else right = mid - 1;
        };

        //distance from left and right
        let leftDist = left < heaters.length ? Math.abs(heaters[left] - house) : Infinity;
        let rightDist = right >= 0 ? Math.abs(heaters[right] - house) : Infinity;

        return leftDist < rightDist ? heaters[left] : heaters[right];
    };

    return maxRadius;
}
heaters([1,2,3,4], [1,4]); //1
//closestHeater = 
//radius = 
//maxRadius = 0

//starting from findClosest([1, 4], 1)
//houses = [1, 2, 3, 4], heaters = [1, 4]
//          ^
//left = 0
//right = 1
//mid = 0
//heaters[0] = 1 -> heater[0]
//findClosest([1, 4], 1) = 1

//closestHeater = 1 
//radius = abs(1 - 1) = 0
//maxRadius = 0 -> max(0, 0) = 0

//findClosest([1, 4], 2)
//houses = [1, 2, 3, 4], heaters = [1, 4]
//             ^
//left = 0
//right = 1
//mid = 0
//heaters[0] < 2 -> move left

//left = 0 -> 1
//right = 1 -> 1
//mid = 0 -> 1
//heaters[1] = 4 > 2 -> move right

//left = 0 -> 1 -> 1
//right = 1 -> 1 -> 0
//mid = 0 -> 1 -> 0

//leftDist = 1 < 2 -> abs(4 - 2) = 2
//rightDist = 0 = 0 -> abs(1 - 2) = 1 
//leftDist > rightDist -> heaters[right]
//findClosest([1, 4], 2) = 1

//closestHeater = 1 -> 1
//radius = abs(1 - 1) = 0 -> abs(2 - 1) = 1
//maxRadius = 0 -> max(0, 0) = 0 -> max(0, 1) = 1

//findClosest([1, 4], 3)
//houses = [1, 2, 3, 4], heaters = [1, 4]
//                ^
//left = 0
//right = 1
//mid = 0
//heaters[0] < 3 -> move left

//left = 0 -> 1
//right = 1 -> 1
//mid = 0 -> 1
//heaters[1] = 4 > 3 -> move right

//left = 0 -> 1 -> 1
//right = 1 -> 1 -> 0
//mid = 0 -> 1 -> 0

//leftDist = 1 < 2 -> abs(4 - 3) = 1
//rightDist = 0 = 0 -> abs(1 - 3) = 2 
//leftDist < rightDist -> heaters[left]
//findClosest([1, 4], 3) = 4

//closestHeater = 1 -> 1 -> 4
//radius = abs(1 - 1) = 0 -> abs(2 - 1) = 1 -> abs(3 - 4) = 1
//maxRadius = 0 -> max(0, 0) = 0 -> max(0, 1) = 1 -> abs(1, 1) = 1

//findClosest([1, 4], 4)
//houses = [1, 2, 3, 4], heaters = [1, 4]
//                   ^
//left = 0
//right = 1
//mid = 0
//heaters[0] < 4 -> move left

//left = 0 -> 1
//right = 1 -> 1
//mid = 0 -> 1
//heaters[1] = 4 = 4 -> heater[1]

//closestHeater = 1 -> 1 -> 4 -> 4
//radius = abs(1 - 1) = 0 -> abs(2 - 1) = 1 -> abs(3 - 4) = 1 -> abs(4 - 4) = 0
//maxRadius = 0 -> max(0, 0) = 0 -> max(0, 1) = 1 -> abs(1, 1) = 1 -> abs(1, 0) = 1

heaters([1,2,3], [2]); //1

heaters([1,3], [2]); //3
